import { useEffect, useState, type ReactNode } from "react";
import { href } from "../lib/router";
import { onSwUpdate } from "../lib/pwa";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/herramientas", label: "Herramientas" },
  { to: "/ajustes", label: "Ajustes" },
];

export function Shell({ route, children }: { route: string; children: ReactNode }) {
  const [update, setUpdate] = useState(false);
  useEffect(() => onSwUpdate(() => setUpdate(true)), []);

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
      </header>
      {update && (
        <div className="notice" role="status">
          Hay una versión nueva.
          <button onClick={() => location.reload()}>Recargar</button>
        </div>
      )}
      {children}
    </>
  );
}
