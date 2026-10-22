import { useSyncExternalStore } from "react";

export interface Toast {
  id: number;
  kind: "info" | "win" | "badge" | "rank" | "warn";
  title: string;
  body?: string;
}
export type ToastInput = Omit<Toast, "id">;

let list: Toast[] = [];
let seq = 0;
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());

export function dismiss(id: number) {
  list = list.filter((t) => t.id !== id);
  emit();
}

export function push(t: ToastInput) {
  const id = ++seq;
  list = [...list, { ...t, id }].slice(-4);
  emit();
  setTimeout(() => dismiss(id), t.kind === "rank" ? 9000 : 6500);
}

export const useToasts = () =>
  useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    () => list
  );
