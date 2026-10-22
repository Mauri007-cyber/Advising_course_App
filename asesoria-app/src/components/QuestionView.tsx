import { answerText, type Answer, type Question } from "../data/questions";

interface Props {
  q: Question;
  value: Answer;
  onChange: (v: Answer) => void;
  result?: boolean;
}

export function QuestionView({ q, value, onChange, result }: Props) {
  const locked = result !== undefined;
  const name = `q-${q.id}`;
  return (
    <fieldset className={`question${locked ? (result ? " ok" : " ko") : ""}`} disabled={locked}>
      <legend>{q.prompt}</legend>
      {q.scenario && <p className="scenario">{q.scenario}</p>}
      {q.kind === "choice" &&
        q.options.map((o, i) => (
          <label key={o}>
            <input type="radio" name={name} checked={value === i} onChange={() => onChange(i)} />
            {o}
          </label>
        ))}
      {q.kind === "tf" &&
        [true, false].map((v) => (
          <label key={String(v)}>
            <input type="radio" name={name} checked={value === v} onChange={() => onChange(v)} />
            {v ? "Verdadero" : "Falso"}
          </label>
        ))}
      {q.kind === "number" && (
        <label>
          Tu respuesta{q.unit ? ` (${q.unit})` : ""}
          <input type="text" inputMode="decimal" value={typeof value === "string" ? value : ""} onChange={(e) => onChange(e.target.value)} />
        </label>
      )}
      {locked && (
        <div className="explain">
          <strong>{result ? "¡Correcto!" : `Respuesta correcta: ${answerText(q)}`}</strong>
          <p>{q.explain}</p>
          {q.law && <small>Base legal: {q.law}</small>}
        </div>
      )}
    </fieldset>
  );
}
