import { useSyncExternalStore } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getState, sanitizeState, setState, subscribe } from "./store";
import { mergeStates } from "./merge";
import { explainAuthError } from "./authErrors";
import { checkSignIn, checkSignUp, checkUsername, isEmail, normalizeEmail, normalizeUsername } from "./username";

const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const cloudEnabled = Boolean(URL && KEY);

export interface CloudUser {
  name: string;
  email: string;
  username: string | null;
}

export interface CloudState {
  user: CloudUser | null;
  status: "off" | "idle" | "syncing" | "ok" | "error";
  message: string;
}

const SETUP =
  "No se pudo comprobar el nombre de usuario. Ejecuta supabase/schema.sql en el proyecto de Supabase y vuelve a intentarlo.";

let cloud: CloudState = { user: null, status: cloudEnabled ? "idle" : "off", message: "" };
const subs = new Set<() => void>();
const set = (patch: Partial<CloudState>) => {
  cloud = { ...cloud, ...patch };
  subs.forEach((f) => f());
};

export const useCloud = () =>
  useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    () => cloud,
    () => cloud
  );

let client: Promise<SupabaseClient> | null = null;
const getClient = () => (client ??= import("@supabase/supabase-js").then((m) => m.createClient(URL!, KEY!)));

let userId: string | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;

async function push() {
  if (!userId) return;
  const db = await getClient();
  const { error } = await db.from("progress").upsert({ user_id: userId, data: getState(), updated_at: new Date().toISOString() });
  set(error ? { status: "error", message: "No se pudo guardar en la nube." } : { status: "ok", message: "" });
}

export async function syncNow() {
  if (!userId) return;
  set({ status: "syncing", message: "" });
  try {
    const db = await getClient();
    const { data, error } = await db.from("progress").select("data").eq("user_id", userId).maybeSingle();
    if (error) throw error;
    const remote = data ? sanitizeState(data.data) : null;
    if (remote) {
      const merged = mergeStates(getState(), remote);
      setState({ ...merged });
    }
    await push();
  } catch {
    set({ status: "error", message: "No se pudo sincronizar. Se reintentará al volver la conexión." });
  }
}

function schedulePush() {
  if (!userId) return;
  clearTimeout(timer);
  timer = setTimeout(() => {
    set({ status: "syncing" });
    push().catch(() => set({ status: "error", message: "No se pudo guardar en la nube." }));
  }, 2000);
}

async function usernameTaken(db: SupabaseClient, username: string): Promise<boolean> {
  const { data, error } = await db.rpc("username_taken", { uname: username });
  if (error) throw error;
  return data === true;
}

async function readUsername(db: SupabaseClient, id: string): Promise<string | null> {
  const { data, error } = await db.from("profiles").select("username").eq("id", id).maybeSingle();
  if (error) return null;
  return typeof data?.username === "string" ? data.username : null;
}

async function applySession(db: SupabaseClient, id: string | null, email: string | null) {
  const changed = id !== userId;
  userId = id;
  if (!id) {
    set({ user: null });
    return;
  }
  const username = await readUsername(db, id);
  const fallback = email ? email.split("@")[0] : "tu cuenta";
  set({ user: { name: username ?? fallback, email: email ?? "", username } });
  if (changed) void syncNow();
}

export async function initCloud() {
  if (!cloudEnabled) return;
  try {
    const db = await getClient();
    const { data, error } = await db.auth.getSession();
    if (error) throw error;
    await applySession(db, data.session?.user.id ?? null, data.session?.user.email ?? null);
    db.auth.onAuthStateChange((_e, session) => {
      void applySession(db, session?.user.id ?? null, session?.user.email ?? null);
    });
    subscribe(schedulePush);
    addEventListener("online", () => void syncNow());
  } catch {
    set({ status: "error", message: "No se pudo conectar con la nube. Revisa VITE_SUPABASE_URL y tu conexión." });
  }
}

export async function signIn(identifier: string, password: string): Promise<string | null> {
  const bad = checkSignIn(identifier, password);
  if (bad) return bad;
  const db = await getClient();
  let email: string | null;
  if (isEmail(identifier)) {
    email = normalizeEmail(identifier);
  } else {
    try {
      const { data, error } = await db.rpc("email_for_username", { uname: normalizeUsername(identifier) });
      if (error) return SETUP;
      email = typeof data === "string" ? data : null;
    } catch {
      return SETUP;
    }
  }
  if (!email) return "Correo, usuario o contraseña incorrectos.";
  const { error } = await db.auth.signInWithPassword({ email, password });
  return error ? explainAuthError(error) : null;
}

export async function signUp(emailInput: string, usernameInput: string, password: string): Promise<string | null> {
  const bad = checkSignUp(emailInput, usernameInput, password);
  if (bad) return bad;
  const email = normalizeEmail(emailInput);
  const username = normalizeUsername(usernameInput);
  const db = await getClient();

  try {
    if (await usernameTaken(db, username)) return "Ese nombre de usuario ya existe. Elige otro.";
  } catch {
    return SETUP;
  }

  const { data, error } = await db.auth.signUp({ email, password, options: { data: { username } } });
  if (error) return explainAuthError(error);
  if (!data.session) {
    return "El proyecto exige confirmar el correo. Desactiva «Confirm email» en Supabase (Authentication, Providers, Email) para entrar directamente al crear la cuenta.";
  }
  const id = data.user?.id;
  if (!id) return "No se pudo crear la cuenta. Revisa la configuración de Supabase.";

  const { error: profileError } = await db.from("profiles").insert({ id, username });
  if (profileError) {
    return profileError.code === "23505"
      ? "La cuenta se ha creado con tu correo, pero ese nombre de usuario se acaba de ocupar. Entra y elige otro desde Cuenta."
      : `${SETUP} La cuenta se ha creado con tu correo.`;
  }
  set({ user: { name: username, email, username } });
  return null;
}

export async function setUsername(usernameInput: string): Promise<string | null> {
  if (!userId) return "Inicia sesión para elegir un nombre de usuario.";
  const bad = checkUsername(usernameInput);
  if (bad) return bad;
  const username = normalizeUsername(usernameInput);
  const db = await getClient();

  try {
    if (await usernameTaken(db, username)) return "Ese nombre de usuario ya existe. Elige otro.";
  } catch {
    return SETUP;
  }

  const { error } = await db.from("profiles").upsert({ id: userId, username });
  if (error) return error.code === "23505" ? "Ese nombre de usuario ya existe. Elige otro." : "No se pudo guardar el nombre de usuario.";
  try {
    await db.auth.updateUser({ data: { username } });
  } catch {
    /* el perfil ya está guardado */
  }
  if (cloud.user) set({ user: { ...cloud.user, name: username, username } });
  return null;
}

export async function signOut() {
  try {
    await (await getClient()).auth.signOut();
  } catch {
    /* sin conexión: la sesión local se cierra igualmente */
  }
  userId = null;
  set({ user: null, status: "idle", message: "" });
}

export async function clearCloud(): Promise<boolean> {
  if (!userId) return true;
  try {
    const db = await getClient();
    const { error } = await db.from("progress").delete().eq("user_id", userId);
    return !error;
  } catch {
    return false;
  }
}
