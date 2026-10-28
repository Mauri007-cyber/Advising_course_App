import { bankOf } from "../data/content";
import { findModule } from "../data/modules";
import { isCorrect, type Answer, type Question } from "../data/questions";

export const PASS = 70;
export const examSize = (moduleId: string) => {
  const n = findModule(moduleId)?.lessons.length ?? 5;
  return Math.min(15, Math.max(8, n + 3));
};

export interface GradeResult {
  score: number;
  correct: number;
  total: number;
  wrong: Question[];
}

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function shuffleOptions(q: Question): Question {
  if (q.kind !== "choice") return q;
  const perm = shuffle(q.options.map((_, i) => i));
  return { ...q, options: perm.map((i) => q.options[i]), answer: perm.indexOf(q.answer) };
}

export function buildExam(moduleId: string, failed: Record<string, number>): Question[] {
  const bank = bankOf(moduleId);
  const n = Math.min(examSize(moduleId), bank.length);
  const again = shuffle(bank.filter((q) => failed[q.id]));
  const fresh = shuffle(bank.filter((q) => !failed[q.id]));
  return shuffle([...again, ...fresh].slice(0, n)).map(shuffleOptions);
}

export function grade(questions: Question[], answers: Record<string, Answer>): GradeResult {
  const wrong = questions.filter((q) => !isCorrect(q, answers[q.id]));
  const total = questions.length;
  const correct = total - wrong.length;
  return { score: total ? Math.round((correct / total) * 100) : 0, correct, total, wrong };
}
