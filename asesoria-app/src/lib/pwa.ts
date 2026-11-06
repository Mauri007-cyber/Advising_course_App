const UPDATE_EVENT = "sw-update";

export function registerSw() {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
  addEventListener("load", () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((reg) => {
        reg.addEventListener("updatefound", () => {
          const w = reg.installing;
          w?.addEventListener("statechange", () => {
            if (w.state === "installed" && navigator.serviceWorker.controller) {
              dispatchEvent(new Event(UPDATE_EVENT));
            }
          });
        });
      })
      .catch(() => undefined);
  });
}

export function onSwUpdate(fn: () => void) {
  addEventListener(UPDATE_EVENT, fn);
  return () => removeEventListener(UPDATE_EVENT, fn);
}

export async function forceRefresh() {
  try {
    const regs = (await navigator.serviceWorker?.getRegistrations()) ?? [];
    await Promise.all(regs.map((r) => r.unregister()));
  } catch {
    /* sin service worker */
  }
  try {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
  } catch {
    /* sin cache */
  }
  location.reload();
}
