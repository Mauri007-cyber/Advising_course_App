import { findModule } from "../modules";
import type { Question } from "../questions";
import type { LessonContent } from "./types";
import { m1Lessons, m1Bank } from "./m1";
import { m2Lessons, m2Bank } from "./m2";

export type { LessonContent, Tip, Source } from "./types";

export const lessonContent: Record<string, LessonContent> = { ...m1Lessons, ...m2Lessons };

const banks: Record<string, Question[]> = { m1: m1Bank, m2: m2Bank };
export const MIN_BANK = 12;
export const bankOf = (moduleId: string) => banks[moduleId] ?? [];

export const questionById: Record<string, Question> = Object.fromEntries(
  [...Object.values(lessonContent).flatMap((c) => c.check), ...Object.values(banks).flat()].map((q) => [q.id, q])
);

export const examReady = (moduleId: string) =>
  bankOf(moduleId).length >= MIN_BANK && (findModule(moduleId)?.lessons.every((l) => lessonContent[l.id]) ?? false);
