import { isCorrect, type Answer, type Question } from "../data/questions";
import type { State } from "./store";

export const INTERVALS = [1, 2, 4, 8, 16];
type Srs = State["srs"];
type Card = Srs[string];

export function addDays(day: string, n: number) {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export function review(card: Card | undefined, ok: boolean, today: string): Card {
  const box = ok ? Math.min((card?.box ?? 0) + 1, INTERVALS.length) : 1;
  return { box, due: addDays(today, INTERVALS[box - 1]) };
}

export const dueIds = (srs: Srs, today: string) =>
  Object.entries(srs)
    .filter(([, c]) => c.due <= today)
    .map(([id]) => id)
    .sort();

export function applyAnswers(srs: Srs, questions: Question[], answers: Record<string, Answer>, today: string): Srs {
  const out = { ...srs };
  for (const q of questions) out[q.id] = review(out[q.id], isCorrect(q, answers[q.id]), today);
  return out;
}
