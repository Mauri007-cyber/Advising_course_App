import { useState } from "react";
import { questionById } from "../data/content";
import { hasAnswer, isCorrect, type Answer } from "../data/questions";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { dayKey, recordReview } from "../lib/game";
import { dueIds } from "../lib/srs";
import { QuestionView } from "../components/QuestionView";
import { Progress } from "../components/Progress";

const SESSION = 10;

export function ReviewPage() {
  const s = useStore();
  const [ids] = useState(() => dueIds(s.srs, dayKey()).filter((id) => questionById[id]).slice(0, SESSION));
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<Answer>();
  const [checked, setChecked] = useState(false);
  const [right, setRight] = useState(0);

  if (ids.length === 0) {
    return (
      <>
        <h1>Repaso</h1>
        <p className="lead">Hoy no tienes tarjetas pendientes. Las preguntas que respondas en mini-tests y exámenes volverán aquí cuando toque repasarlas.</p>
        <a className="btn primary" href={href("/")}>Volver al inicio</a>
      </>
    );
  }

  if (i >= ids.length) {
    return (
      <>
        <h1>Repaso terminado</h1>
        <p className="lead">{right} de {ids.length} correctas. Lo que falles volverá mañana; lo que aciertes tardará cada vez más en volver.</p>
        <a className="btn primary" href={href("/")}>Volver al inicio</a>
      </>
    );
  }

  const q = questionById[ids[i]];
  const check = () => {
    const ok = isCorrect(q, answer);
    if (ok) setRight((n) => n + 1);
    recordReview(q.id, ok);
    setChecked(true);
  };
  const next = () => {
    setI(i + 1);
    setAnswer(undefined);
    setChecked(false);
  };

  return (
    <>
      <h1>Repaso: {i + 1} de {ids.length}</h1>
      <Progress done={i} total={ids.length} label="Avance del repaso" />
      <QuestionView key={q.id} q={q} value={answer} onChange={setAnswer} result={checked ? isCorrect(q, answer) : undefined} />
      {checked ? (
        <button className="primary" onClick={next}>{i + 1 === ids.length ? "Terminar" : "Siguiente"}</button>
      ) : (
        <button className="primary" disabled={!hasAnswer(answer)} onClick={check}>Comprobar</button>
      )}
    </>
  );
}
