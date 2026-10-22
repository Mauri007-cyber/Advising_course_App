import { modules, allLessons } from "../data/modules";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { Progress } from "../components/Progress";

export function Dashboard() {
  const { done } = useStore();
  const total = allLessons.length;
  const count = allLessons.filter((l) => done[l.id]).length;

  return (
    <>
      <h1>Tu progreso</h1>
      <p className="lead">
        {count} de {total} lecciones completadas.
      </p>
      <Progress done={count} total={total} label="Progreso total" />
      <ul className="ledger">
        {modules.map((m) => {
          const n = m.lessons.filter((l) => done[l.id]).length;
          return (
            <li key={m.id}>
              <a href={href(`/m/${m.id}`)}>
                <span className="row-title">{m.title}</span>
                <span className="row-meta">{m.summary}</span>
                <span className="row-count">
                  {n}/{m.lessons.length}
                </span>
              </a>
              <Progress done={n} total={m.lessons.length} label={`Progreso de ${m.title}`} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
