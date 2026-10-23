import type { Question } from "../questions";

export interface Tip {
  kind: "consejo" | "error" | "clave";
  text: string;
}

export interface Source {
  title: string;
  url: string;
  accessed: string;
  official: boolean;
}

export interface LessonContent {
  intro: string;
  steps: { title: string; body: string[] }[];
  example: { title: string; body: string[] };
  tips: Tip[];
  law: string[];
  sources: Source[];
  reviewed?: string;
  check: Question[];
}
