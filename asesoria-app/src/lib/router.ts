import { useSyncExternalStore } from "react";

const sub = (cb: () => void) => {
  addEventListener("hashchange", cb);
  return () => removeEventListener("hashchange", cb);
};

export const useRoute = () => useSyncExternalStore(sub, () => location.hash.slice(1) || "/");
export const href = (path: string) => `#${path}`;
