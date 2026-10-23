import { useSyncExternalStore } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getState, sanitizeState, setState, subscribe } from "./store";
import { mergeStates } from "./merge";

const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const cloudEnabled = Boolean(URL && KEY);

export interface CloudState {
  user: string | null;
  status: "off" | "idle" | "syncing" | "ok" | "error";
  message: string;
}

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

export async function initCloud() {
  if (!cloudEnabled) return;
  const db = await getClient();
  const apply = (id: string | null, email: string | null) => {
    const changed = id !== userId;
    userId = id;
    set({ user: email });
    if (id && changed) void syncNow();
  };
  const { data } = await db.auth.getSession();
  apply(data.session?.user.id ?? null, data.session?.user.email ?? null);
  db.auth.onAuthStateChange((_e, session) => apply(session?.user.id ?? null, session?.user.email ?? null));
  subscribe(schedulePush);
  addEventListener("online", () => void syncNow());
}

const friendly = (m: string): string =>
  /invalid login/i.test(m) ? "Correo o contraseña incorrectos." : /already registered/i.test(m) ? "Ese correo ya tiene cuenta." : /password/i.test(m) ? "La contraseña no cumple los requisitos (mínimo 6 caracteres)." : "No se pudo completar la operación.";

export async function signIn(email: string, password: string): Promise<string | null> {
  const { error } = await (await getClient()).auth.signInWithPassword({ email, password });
  return error ? friendly(error.message) : null;
}

export async function signUp(email: string, password: string): Promise<string | null> {
  const { data, error } = await (await getClient()).auth.signUp({ email, password });
  if (error) return friendly(error.message);
  return data.session ? null : "Cuenta creada. Revisa tu correo para confirmarla y después entra.";
}

export async function signOut() {
  await (await getClient()).auth.signOut();
  userId = null;
  set({ user: null, status: "idle", message: "" });
}
