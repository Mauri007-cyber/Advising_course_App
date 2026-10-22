import { useSyncExternalStore } from "react";

export type Theme = "auto" | "light" | "dark";
export type FontSize = "m" | "l" | "xl";

export interface State {
  v: 1;
  done: Record<string, number>;
  theme: Theme;
  size: FontSize;
}

const KEY = "asesoria:v1";
const THEMES: Theme[] = ["auto", "light", "dark"];
const SIZES: FontSize[] = ["m", "l", "xl"];
const initial: State = { v: 1, done: {}, theme: "auto", size: "l" };

function sanitize(raw: unknown): State | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Partial<State>;
  if (r.v !== 1) return null;
  const done: Record<string, number> = {};
  if (r.done && typeof r.done === "object") {
    for (const [k, t] of Object.entries(r.done)) if (typeof t === "number") done[k] = t;
  }
  return {
    v: 1,
    done,
    theme: THEMES.includes(r.theme as Theme) ? (r.theme as Theme) : initial.theme,
    size: SIZES.includes(r.size as FontSize) ? (r.size as FontSize) : initial.size,
  };
}

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    return (raw && sanitize(JSON.parse(raw))) || initial;
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
  state = { ...state, ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* almacenamiento no disponible */
  }
  subs.forEach((fn) => fn());
}

export const useStore = () => useSyncExternalStore(subscribe, getState);

export function toggleLesson(id: string) {
  const done = { ...state.done };
  if (done[id]) delete done[id];
  else done[id] = Date.now();
  setState({ done });
}

export const exportJson = () => JSON.stringify(state, null, 2);

export function importJson(text: string): boolean {
  try {
    const next = sanitize(JSON.parse(text));
    if (!next) return false;
    setState(next);
    return true;
  } catch {
    return false;
  }
}

export const resetAll = () => setState({ ...initial });
