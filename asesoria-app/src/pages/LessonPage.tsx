import { useState } from "react";
import { allLessons, findLesson, findModule } from "../data/modules";
import { lessonContent, type LessonContent } from "../data/content";
import { hasAnswer, isCorrect, type Answer, type Question } from "../data/questions";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { completeLesson, finishReview, submitCheck } from "../lib/game";
import { PASS, type GradeResult } from "../lib/exam";
import { QuestionView } from "../components/QuestionView";
import { NotFound } from "../components/NotFound";

const tipLabel = { consejo: "Consejo profesional", error: "Error frecuente", clave: "Dato clave" } as const;

function Content({ c }: { c: LessonContent }) {
  return (
    <div className="prose">
      <section>
        <h2>Punto de partida</h2>
        <p>{c.intro}</p>
      </section>
      <section>
        <h2>Paso a paso</h2>
        {c.steps.map((st) => (
          <div key={st.title}>
            <h3>{st.title}</h3>
            <ul>{st.body.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        ))}
      </section>
      <section className="card example">
        <h2>Ejemplo resuelto: {c.example.title}</h2>
        {c.example.body.map((b) => <p key={b}>{b}</p>)}
      </section>
      <section>
        <h2>Consejos</h2>
        <div className="tips">
          {c.tips.map((t) => (
            <div key={t.text} className={`tip tip-${t.kind}`}>
              <strong>{tipLabel[t.kind]}</strong>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
      {c.law.length > 0 && (
        <section>
          <h2>Base legal</h2>
          <ul>{c.law.map((l) => <li key={l}>{l}</li>)}</ul>
        </section>
      )}
      <section>
        <h2>Fuentes</h2>
        <ul>
          {c.sources.map((x) => (
            <li key={x.url}>
              <a href={x.url} target="_blank" rel="noopener noreferrer">{x.title}</a> ({x.official ? "fuente oficial" : "análisis profesional"}, consultada el {x.accessed})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function MiniTest({ lessonId, questions }: { lessonId: string; questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [res, setRes] = useState<GradeResult | null>(null);
  const ready = questions.every((q) => hasAnswer(answers[q.id]));
  const passed = res !== null && res.score >= PASS;

  return (
    <section className="prose">
      <h2>Mini-test</h2>
      <p className="lead">Comprueba lo aprendido. Necesitas un {PASS} % para superarlo.</p>
      {questions.map((q) => (
        <QuestionView
          key={q.id}
          q={q}
          value={answers[q.id]}
          onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          result={res ? isCorrect(q, answers[q.id]) : undefined}
        />
      ))}
      {!res && (
        <button className="primary" disabled={!ready} onClick={() => setRes(submitCheck(lessonId, answers))}>
          Comprobar respuestas
        </button>
      )}
      {res && (
        <>
          <p role="status">
            {passed ? `¡Superado! ${res.correct} de ${res.total} correctas.` : `${res.correct} de ${res.total} correctas. Te falta poco: revisa las explicaciones.`}
          </p>
          {!passed && (
            <button onClick={() => { setAnswers({}); setRes(null); }}>Intentarlo de nuevo</button>
          )}
        </>
      )}
    </section>
  );
}

function LessonView({ id }: { id: string }) {
  const s = useStore();
  const lesson = findLesson(id)!;
  const mod = findModule(lesson.moduleId)!;
  const c = lessonContent[id];
  const done = Boolean(s.done[id]);
  const reviewing = (s.review[mod.id] ?? []).includes(id);
  const idx = allLessons.findIndex((l) => l.id === id);
  const next = allLessons[idx + 1];

  return (
    <div className={`mod-${mod.id}`}>
      <a className="back" href={href(`/m/${mod.id}`)}>Volver al módulo</a>
      <h1>{lesson.title}</h1>
      <p className="lead">Revisión legal: {c?.reviewed ?? "pendiente"}.</p>

      {reviewing && (
        <div className="alert">
          <strong>Repaso pendiente.</strong> Este tema te dio problemas en el examen.{" "}
          {c?.check.length ? "Supera su mini-test para poder repetirlo." : <button onClick={() => finishReview(id)}>Ya lo he repasado</button>}
        </div>
      )}

      {c ? (
        <Content c={c} />
      ) : (
        <p className="card">El contenido de esta lección se está preparando. Mientras tanto, puedes seguir avanzando.</p>
      )}

      {c && c.check.length > 0 && <MiniTest key={id} lessonId={id} questions={c.check} />}

      <div className="finish">
        {done ? (
          <>
            <p role="status">Lección completada. ¡Bien hecho!</p>
            {next && <a className="btn primary" href={href(`/l/${next.id}`)}>Siguiente: {next.title}</a>}
          </>
        ) : (
          <button className="primary" onClick={() => completeLesson(id)}>Marcar como completada (+20 XP)</button>
        )}
      </div>
    </div>
  );
}

export function LessonPage({ id }: { id: string }) {
  if (!findLesson(id)) return <NotFound />;
  return <LessonView key={id} id={id} />;
}
