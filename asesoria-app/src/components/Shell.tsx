import { useEffect, useState, type ReactNode } from "react";
import { href } from "../lib/router";
import { onSwUpdate } from "../lib/pwa";
import { useStore } from "../lib/store";
import { currentStreak, rankInfo } from "../lib/game";
import { Toasts } from "./Toasts";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/repaso", label: "Repaso" },
  { to: "/logros", label: "Logros" },
  { to: "/herramientas", label: "Herramientas" },
  { to: "/cuenta", label: "Cuenta" },
  { to: "/ajustes", label: "Ajustes" },
];

export function Shell({ route, children }: { route: string; children: ReactNode }) {
  const s = useStore();
  const [update, setUpdate] = useState(false);
  useEffect(() => onSwUpdate(() => setUpdate(true)), []);
  const streak = currentStreak(s);

  return (
    <>
      <header className="top">
        <a className="brand" href={href("/")}>Asesoría</a>
        <nav aria-label="Principal">
          {links.map((l) => (
            <a key={l.to} href={href(l.to)} aria-current={route === l.to ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="chip" href={href("/logros")}>
          {rankInfo(s.xp).cur.name} · {s.xp} XP{streak > 0 ? ` · Racha ${streak}` : ""}
        </a>
      </header>
      {update && (
        <div className="notice" role="status">
          Hay una versión nueva.
          <button onClick={() => location.reload()}>Recargar</button>
        </div>
      )}
      {children}
      <Toasts />
    </>
  );
}
