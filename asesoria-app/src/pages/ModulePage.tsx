import { findModule } from "../data/modules";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { NotFound } from "../components/NotFound";

export function ModulePage({ id }: { id: string }) {
  const { done } = useStore();
  const mod = findModule(id);
  if (!mod) return <NotFound />;

  return (
    <>
      <a className="back" href={href("/")}>Volver al inicio</a>
      <h1>{mod.title}</h1>
      <p className="lead">{mod.summary}</p>
      <ul className="ledger">
        {mod.lessons.map((l) => (
          <li key={l.id}>
            <a href={href(`/l/${l.id}`)}>
              <span className="row-title">{l.id} {l.title}</span>
              <span className="row-count">{done[l.id] ? "Hecha" : "Pendiente"}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
