import { useSyncExternalStore } from "react";

export type Theme = "auto" | "light" | "dark";
export type FontSize = "m" | "l" | "xl";

export interface Streak {
  count: number;
  last: string;
  grace: string;
}

export interface Attempt {
  moduleId: string;
  ts: number;
  score: number;
  passed: boolean;
  total: number;
  wrong: string[];
}

export interface State {
  v: 2;
  done: Record<string, number>;
  checks: Record<string, number>;
  badges: Record<string, number>;
  failed: Record<string, number>;
  review: Record<string, string[]>;
  attempts: Attempt[];
  srs: Record<string, { box: number; due: string }>;
  modified: number;
  xp: number;
  streak: Streak;
  theme: Theme;
  size: FontSize;
}

const KEY = "asesoria:v1";
const THEMES: Theme[] = ["auto", "light", "dark"];
const SIZES: FontSize[] = ["m", "l", "xl"];

const initial: State = {
  v: 2,
  done: {},
  checks: {},
  badges: {},
  failed: {},
  review: {},
  attempts: [],
  srs: {},
  modified: 0,
  xp: 0,
  streak: { count: 0, last: "", grace: "" },
  theme: "auto",
  size: "l",
};

const isObj = (x: unknown): x is Record<string, unknown> => !!x && typeof x === "object" && !Array.isArray(x);
const safe = (k: string) => k !== "__proto__" && k !== "constructor" && k !== "prototype";
const nat = (x: unknown) => (typeof x === "number" && Number.isFinite(x) && x >= 0 ? Math.floor(x) : 0);
const dateStr = (x: unknown) => (typeof x === "string" && /^\d{4}-\d{2}-\d{2}$/.test(x) ? x : "");
const strList = (x: unknown) => (Array.isArray(x) ? x.filter((i): i is string => typeof i === "string") : []);

function numMap(x: unknown) {
  const out: Record<string, number> = {};
  if (isObj(x)) for (const [k, v] of Object.entries(x)) if (safe(k) && typeof v === "number" && Number.isFinite(v)) out[k] = v;
  return out;
}

export function sanitizeState(raw: unknown): State | null {
  if (!isObj(raw) || (raw.v !== 1 && raw.v !== 2)) return null;

  const review: Record<string, string[]> = {};
  if (isObj(raw.review)) {
    for (const [k, v] of Object.entries(raw.review)) {
      const list = strList(v);
      if (safe(k) && list.length) review[k] = list;
    }
  }

  const attempts: Attempt[] = [];
  if (Array.isArray(raw.attempts)) {
    for (const a of raw.attempts.slice(-100)) {
      if (isObj(a) && typeof a.moduleId === "string" && typeof a.ts === "number" && typeof a.score === "number" && typeof a.passed === "boolean" && typeof a.total === "number") {
        attempts.push({ moduleId: a.moduleId, ts: a.ts, score: a.score, passed: a.passed, total: a.total, wrong: strList(a.wrong) });
      }
    }
  }

  const srs: State["srs"] = {};
  if (isObj(raw.srs)) {
    for (const [k, v] of Object.entries(raw.srs)) {
      if (safe(k) && isObj(v) && typeof v.box === "number" && v.box >= 1 && v.box <= 5 && dateStr(v.due)) {
        srs[k] = { box: Math.floor(v.box), due: dateStr(v.due) };
      }
    }
  }

  const st = isObj(raw.streak) ? raw.streak : {};
  return {
    v: 2,
    done: numMap(raw.done),
    checks: numMap(raw.checks),
    badges: numMap(raw.badges),
    failed: numMap(raw.failed),
    review,
    attempts,
    srs,
    modified: nat(raw.modified),
    xp: nat(raw.xp),
    streak: { count: nat(st.count), last: dateStr(st.last), grace: dateStr(st.grace) },
    theme: THEMES.includes(raw.theme as Theme) ? (raw.theme as Theme) : initial.theme,
    size: SIZES.includes(raw.size as FontSize) ? (raw.size as FontSize) : initial.size,
  };
}

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    return (raw && sanitizeState(JSON.parse(raw))) || initial;
  } catch {
    return initial;
  }
}

let state = load();
const subs = new Set<() => void>();

export const getState = () => state;

export const subscribe = (fn: () => void) => {
  subs.add(fn);
  return () => subs.delete(fn);
};

export function setState(patch: Partial<State>) {
  state = { ...state, modified: Date.now(), ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* almacenamiento no disponible */
  }
  subs.forEach((fn) => fn());
}

export const useStore = () => useSyncExternalStore(subscribe, getState);

export const exportJson = () => JSON.stringify(state, null, 2);

export function importJson(text: string): boolean {
  try {
    const next = sanitizeState(JSON.parse(text));
    if (!next) return false;
    setState({ ...next, modified: Date.now() });
    return true;
  } catch {
    return false;
  }
}

export const resetAll = () => setState({ ...initial });
