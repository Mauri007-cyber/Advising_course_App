interface Base {
  id: string;
  lessonId: string;
  prompt: string;
  scenario?: string;
  explain: string;
  law?: string;
}

export type Question = Base &
  (
    | { kind: "choice"; options: string[]; answer: number }
    | { kind: "tf"; answer: boolean }
    | { kind: "number"; answer: number; tolerance?: number; unit?: string }
  );

export type Answer = number | boolean | string | undefined;

export const hasAnswer = (a: Answer) => a !== undefined && a !== "";
export const parseNum = (v: string) => Number(v.trim().replace(",", "."));

export function isCorrect(q: Question, a: Answer): boolean {
  if (!hasAnswer(a)) return false;
  if (q.kind === "number") {
    const n = parseNum(String(a));
    return Number.isFinite(n) && Math.abs(n - q.answer) <= (q.tolerance ?? 0.005);
  }
  return a === q.answer;
}

export function answerText(q: Question): string {
  if (q.kind === "choice") return q.options[q.answer];
  if (q.kind === "tf") return q.answer ? "Verdadero" : "Falso";
  return `${q.answer}${q.unit ? ` ${q.unit}` : ""}`;
}
