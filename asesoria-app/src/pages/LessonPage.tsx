import { findLesson } from "../data/modules";
import { href } from "../lib/router";
import { toggleLesson, useStore } from "../lib/store";
import { NotFound } from "../components/NotFound";

const steps = [
  "Punto de partida",
  "Explicación paso a paso",
  "Ejemplo resuelto",
  "Práctica en la app",
  "Test de comprobación",
];

export function LessonPage({ id }: { id: string }) {
  const { done } = useStore();
  const lesson = findLesson(id);
  if (!lesson) return <NotFound />;
  const isDone = Boolean(done[id]);

  return (
    <>
      <a className="back" href={href(`/m/${lesson.moduleId}`)}>Volver al módulo</a>
      <h1>{lesson.title}</h1>
      <p className="lead">Revisión legal: {lesson.reviewed ?? "pendiente"}.</p>
      <ol className="steps">
        {steps.map((s) => (
          <li key={s}>
            <strong>{s}</strong>
            <span>Sin contenido todavía.</span>
          </li>
        ))}
      </ol>
      <button className="primary" aria-pressed={isDone} onClick={() => toggleLesson(id)}>
        {isDone ? "Marcar como pendiente" : "Marcar como hecha"}
      </button>
    </>
  );
}
