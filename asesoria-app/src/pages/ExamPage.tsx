import { useState } from "react";
import { findLesson, findModule } from "../data/modules";
import { bankOf } from "../data/content";
import { hasAnswer, isCorrect, type Answer, type Question } from "../data/questions";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { moduleStatus, submitExam } from "../lib/game";
import { buildExam, PASS, type GradeResult } from "../lib/exam";
import { QuestionView } from "../components/QuestionView";
import { Progress } from "../components/Progress";
import { NotFound } from "../components/NotFound";

export function ExamPage({ id }: { id: string }) {
  const s = useStore();
  const [phase, setPhase] = useState<"intro" | "run" | "result">("intro");
  const [qs, setQs] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [i, setI] = useState(0);
  const [g, setG] = useState<GradeResult | null>(null);

  const mod = findModule(id);
  if (!mod) return <NotFound />;
  const st = moduleStatus(s, id);

  const start = () => {
    setQs(buildExam(id, s.failed));
    setAnswers({});
    setI(0);
    setPhase("run");
  };
  const finish = () => {
    setG(submitExam(id, qs, answers).g);
    setPhase("result");
  };

  const back = <a className="back" href={href(`/m/${id}`)}>Volver al módulo</a>;

  if (phase === "intro") {
    const repeats = bankOf(id).filter((q) => s.failed[q.id]).length;
    const missing = mod.lessons.filter((l) => !s.done[l.id]);
    return (
      <div className={`mod-${id}`}>
        {back}
        <h1>Examen: {mod.title}</h1>
        {!st.hasExam && <p className="lead">Este examen se publicará con el contenido del módulo.</p>}
        {st.hasExam && !st.unlocked && (
          <div className="alert">
            {st.pending.length > 0 ? (
              <>
                <strong>Primero, repasa los temas que fallaste:</strong>
                <ul>{st.pending.map((p) => <li key={p}><a href={href(`/l/${p}`)}>{p} {findLesson(p)?.title}</a></li>)}</ul>
              </>
            ) : (
              <>
                <strong>Aún te faltan lecciones por completar:</strong>
                <ul>{missing.map((l) => <li key={l.id}><a href={href(`/l/${l.id}`)}>{l.id} {l.title}</a></li>)}</ul>
              </>
            )}
          </div>
        )}
        {st.unlocked && st.hasExam && (
          <>
            <p className="lead">
              {Math.min(8, bankOf(id).length)} preguntas · aprobado con un {PASS} % · sin límite de intentos.
            </p>
            {repeats > 0 && <p>Incluye {repeats} pregunta(s) que fallaste antes: es la mejor forma de afianzarlas.</p>}
            <p>No verás las respuestas hasta el final. Tómate tu tiempo.</p>
            <button className="primary" onClick={start}>Empezar examen</button>
          </>
        )}
      </div>
    );
  }

  if (phase === "run") {
    const q = qs[i];
    const last = i === qs.length - 1;
    return (
      <div className={`mod-${id}`}>
        <h1>Pregunta {i + 1} de {qs.length}</h1>
        <Progress done={i} total={qs.length} label="Avance del examen" />
        <QuestionView key={q.id} q={q} value={answers[q.id]} onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} />
        <button className="primary" disabled={!hasAnswer(answers[q.id])} onClick={last ? finish : () => setI(i + 1)}>
          {last ? "Finalizar y corregir" : "Siguiente"}
        </button>
      </div>
    );
  }

  const score = g?.score ?? 0;
  const passed = score >= PASS;
  const weak = [...new Set((g?.wrong ?? []).map((q) => q.lessonId))];
  return (
    <div className={`mod-${id}`}>
      {back}
      <p className={`score ${passed ? "pass" : "fail"}`}>{score} %</p>
      <h1>{passed ? "¡Examen aprobado!" : "Todavía no, pero vas bien"}</h1>
      <p className="lead">
        {g?.correct} de {g?.total} correctas.{" "}
        {passed ? (score === 100 ? "Resultado perfecto." : "Muy buen trabajo.") : `Hace falta un ${PASS} %.`}
      </p>
      {weak.length > 0 && (
        <div className="alert">
          <strong>{passed ? "Para afinar, repasa:" : "Para repetirlo, repasa estos temas:"}</strong>
          <ul>{weak.map((w) => <li key={w}><a href={href(`/l/${w}`)}>{w} {findLesson(w)?.title}</a></li>)}</ul>
        </div>
      )}
      <h2>Revisión</h2>
      {qs.map((q) => (
        <QuestionView key={q.id} q={q} value={answers[q.id]} onChange={() => undefined} result={isCorrect(q, answers[q.id])} />
      ))}
      <a className="btn primary" href={href(`/m/${id}`)}>Volver al módulo</a>
    </div>
  );
}
