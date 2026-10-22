import type { Question } from "../questions";
import type { LessonContent } from "./types";
import { m1Lessons, m1Bank } from "./m1";

export type { LessonContent, Tip } from "./types";

export const lessonContent: Record<string, LessonContent> = { ...m1Lessons };

const banks: Record<string, Question[]> = { m1: m1Bank };
export const bankOf = (moduleId: string) => banks[moduleId] ?? [];
