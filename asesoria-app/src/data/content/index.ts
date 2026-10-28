import { findModule, isReleased } from "../modules";
import type { Question } from "../questions";
import type { LessonContent } from "./types";
import { m1Lessons, m1Bank } from "./m1";
import { m2Lessons, m2Bank } from "./m2";
import { m0Lessons, m0Bank } from "./m0";
import { m3Lessons, m3Bank } from "./m3";
import { m4Lessons, m4Bank } from "./m4";

export type { LessonContent, Tip, Source } from "./types";

export const lessonContent: Record<string, LessonContent> = { ...m1Lessons, ...m2Lessons, ...m0Lessons, ...m3Lessons, ...m4Lessons };

const banks: Record<string, Question[]> = { m1: m1Bank, m2: m2Bank, m0: m0Bank, m3: m3Bank, m4: m4Bank };
export const MIN_BANK = 12;
const allBank: Question[] = Object.values(banks).flat();
export const bankOf = (moduleId: string) => {
  const ids = new Set(findModule(moduleId)?.lessons.map((l) => l.id));
  return allBank.filter((q) => ids.has(q.lessonId));
};


export const examReady = (moduleId: string) => {
  const m = findModule(moduleId);
  return Boolean(m && isReleased(m) && bankOf(moduleId).length >= MIN_BANK && m.lessons.every((l) => lessonContent[l.id]));
};

export const questionById: Record<string, Question> = Object.fromEntries(
  [...Object.values(lessonContent).flatMap((c) => c.check), ...allBank].map((q) => [q.id, q])
);
