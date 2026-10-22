import { allLessons, findLesson, findModule, modules } from "../data/modules";
import { bankOf, lessonContent } from "../data/content";
import { isCorrect, type Answer, type Question } from "../data/questions";
import { grade, PASS, type GradeResult } from "./exam";
import { getState, setState, type Attempt, type State, type Streak } from "./store";
import { push, type ToastInput } from "./toast";

const DAILY_XP = 5;

export const ranks = [
  { name: "Aprendiz", min: 0 },
  { name: "Técnico", min: 150 },
  { name: "Asesor júnior", min: 500 },
  { name: "Asesor", min: 1200 },
];

export function rankInfo(xp: number) {
  let index = ranks.length - 1;
  while (index > 0 && xp < ranks[index].min) index--;
  const cur = ranks[index];
  const next = ranks[index + 1];
  return { index, cur, next, left: next ? next.min - xp : 0, pct: next ? (xp - cur.min) / (next.min - cur.min) : 1 };
}

const pad = (n: number) => String(n).padStart(2, "0");
export const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const diffDays = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);

function weekKey(day: string) {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

function bumpStreak(s: Streak, today: string): Streak {
  if (!s.last) return { ...s, count: 1, last: today };
  const d = diffDays(s.last, today);
  if (d <= 0) return s;
  if (d === 1) return { ...s, count: s.count + 1, last: today };
  if (d === 2 && s.grace !== weekKey(today)) return { count: s.count + 1, last: today, grace: weekKey(today) };
  return { ...s, count: 1, last: today };
}

export function currentStreak(s: State) {
  if (!s.streak.last) return 0;
  return diffDays(s.streak.last, dayKey()) <= 2 ? s.streak.count : 0;
}

export interface Badge {
  id: string;
  title: string;
  desc: string;
  test: (s: State) => boolean;
}

const passedModule = (s: State, id: string) => s.attempts.some((a) => a.moduleId === id && a.passed);

export const badges: Badge[] = [
  { id: "first-lesson", title: "Primer paso", desc: "Completa tu primera lección.", test: (s) => Object.keys(s.done).length >= 1 },
  { id: "ten-lessons", title: "Constancia", desc: "Completa 10 lecciones.", test: (s) => Object.keys(s.done).length >= 10 },
  ...modules.flatMap<Badge>((m) => [
    { id: `mod-${m.id}`, title: `Módulo ${m.id.slice(1)} completo`, desc: `Completa todas las lecciones de «${m.title}».`, test: (s) => m.lessons.every((l) => s.done[l.id]) },
    { id: `exam-${m.id}`, title: `Examen ${m.id.slice(1)} aprobado`, desc: `Aprueba el examen de «${m.title}».`, test: (s) => passedModule(s, m.id) },
  ]),
  { id: "perfect", title: "Matrícula de honor", desc: "Saca un 100 % en un examen.", test: (s) => s.attempts.some((a) => a.score === 100) },
  {
    id: "second-chance",
    title: "Segunda oportunidad",
    desc: "Aprueba un examen después de repasar.",
    test: (s) => s.attempts.some((a, i) => a.passed && s.attempts.slice(0, i).some((b) => b.moduleId === a.moduleId && !b.passed)),
  },
  { id: "streak-3", title: "Tres días seguidos", desc: "Estudia 3 días seguidos.", test: (s) => s.streak.count >= 3 },
  { id: "streak-7", title: "Una semana", desc: "Estudia 7 días seguidos.", test: (s) => s.streak.count >= 7 },
  { id: "streak-30", title: "Un mes", desc: "Estudia 30 días seguidos.", test: (s) => s.streak.count >= 30 },
];

function commit(next: State, xp: number, main: ToastInput) {
  const before = getState();
  const today = dayKey();
  const newDay = next.streak.last !== today;
  const streak = bumpStreak(next.streak, today);
  const gain = xp + (newDay ? DAILY_XP : 0);

  let s: State = { ...next, streak, xp: next.xp + gain };
  const earned = badges.filter((b) => !s.badges[b.id] && b.test(s));
  s = { ...s, badges: { ...s.badges, ...Object.fromEntries(earned.map((b) => [b.id, Date.now()])) } };
  setState(s);

  push({ ...main, body: [main.body, gain ? `+${gain} XP` : ""].filter(Boolean).join(" · ") });
  if (newDay && streak.count >= 2) push({ kind: "win", title: `Racha de ${streak.count} días`, body: "Volver cada día es lo que más rinde." });
  earned.forEach((b) => push({ kind: "badge", title: `Insignia: ${b.title}`, body: b.desc }));
  const r0 = rankInfo(before.xp).index;
  const r1 = rankInfo(s.xp).index;
  if (r1 > r0) push({ kind: "rank", title: `¡Subes a ${ranks[r1].name}!`, body: "Tu esfuerzo se nota. Sigue así." });
}

export function moduleStatus(s: State, moduleId: string) {
  const mod = findModule(moduleId)!;
  const total = mod.lessons.length;
  const lessonsDone = mod.lessons.filter((l) => s.done[l.id]).length;
  const pending = s.review[moduleId] ?? [];
  const mine = s.attempts.filter((a) => a.moduleId === moduleId);
  return {
    total,
    lessonsDone,
    pending,
    hasExam: bankOf(moduleId).length > 0,
    unlocked: lessonsDone === total && pending.length === 0,
    passed: mine.some((a) => a.passed),
    best: mine.length ? Math.max(...mine.map((a) => a.score)) : null,
  };
}

export const nextLesson = (s: State) => allLessons.find((l) => !s.done[l.id]);

function withoutReview(review: State["review"], lessonId: string) {
  const out: State["review"] = {};
  for (const [k, list] of Object.entries(review)) {
    const rest = list.filter((id) => id !== lessonId);
    if (rest.length) out[k] = rest;
  }
  return out;
}

export function completeLesson(id: string) {
  const s = getState();
  const lesson = findLesson(id);
  if (!lesson || s.done[id]) return;
  const next = { ...s, done: { ...s.done, [id]: Date.now() } };
  const mod = findModule(lesson.moduleId)!;
  const moduleDone = mod.lessons.every((l) => next.done[l.id]);

  if (moduleDone) {
    commit(next, 50, {
      kind: "win",
      title: "¡Módulo completado!",
      body: bankOf(mod.id).length ? "Ya puedes presentarte al examen." : "Gran trabajo.",
    });
  } else {
    commit(next, 20, { kind: "info", title: "¡Lección completada!", body: "Un paso más hacia el aprobado." });
  }
}

export function submitCheck(lessonId: string, answers: Record<string, Answer>): GradeResult {
  const g = grade(lessonContent[lessonId]?.check ?? [], answers);
  if (g.score < PASS) {
    push({ kind: "warn", title: "Casi lo tienes", body: "Lee las explicaciones y vuelve a intentarlo." });
    return g;
  }
  const s = getState();
  const moduleId = findLesson(lessonId)!.moduleId;
  const reviewing = (s.review[moduleId] ?? []).includes(lessonId);
  const review = withoutReview(s.review, lessonId);
  const left = (review[moduleId] ?? []).length;
  const first = !s.checks[lessonId];
  commit({ ...s, checks: { ...s.checks, [lessonId]: Date.now() }, review }, (first ? 15 : 0) + (reviewing ? 10 : 0), {
    kind: "win",
    title: reviewing ? "Repaso completado" : "¡Mini-test superado!",
    body: reviewing ? (left ? `Te quedan ${left} lección(es) por repasar.` : "Ya puedes repetir el examen.") : `${g.correct} de ${g.total} correctas.`,
  });
  return g;
}

export function finishReview(lessonId: string) {
  const s = getState();
  const moduleId = findLesson(lessonId)?.moduleId;
  if (!moduleId || !(s.review[moduleId] ?? []).includes(lessonId)) return;
  const review = withoutReview(s.review, lessonId);
  const left = (review[moduleId] ?? []).length;
  commit({ ...s, review }, 10, {
    kind: "win",
    title: "Repaso completado",
    body: left ? `Te quedan ${left} lección(es) por repasar.` : "Ya puedes repetir el examen.",
  });
}

export function submitExam(moduleId: string, questions: Question[], answers: Record<string, Answer>) {
  const s = getState();
  const g = grade(questions, answers);
  const passed = g.score >= PASS;

  const failed = { ...s.failed };
  for (const q of questions) {
    if (isCorrect(q, answers[q.id])) delete failed[q.id];
    else failed[q.id] = (failed[q.id] ?? 0) + 1;
  }

  const review = { ...s.review };
  if (passed) delete review[moduleId];
  else review[moduleId] = [...new Set(g.wrong.map((q) => q.lessonId))];

  const attempt: Attempt = { moduleId, ts: Date.now(), score: g.score, passed, total: g.total, wrong: g.wrong.map((q) => q.id) };
  const next = { ...s, failed, review, attempts: [...s.attempts, attempt].slice(-100) };

  if (passed) {
    commit(next, 100 + (g.score === 100 ? 50 : 0), {
      kind: "win",
      title: `¡Examen aprobado con un ${g.score} %!`,
      body: g.score === 100 ? "Resultado perfecto." : "Buen trabajo.",
    });
  } else {
    commit(next, 10, {
      kind: "warn",
      title: `Has sacado un ${g.score} %`,
      body: `Hace falta un ${PASS} %. Repasa los temas indicados y vuelve a intentarlo.`,
    });
  }
  return { g, attempt };
}
