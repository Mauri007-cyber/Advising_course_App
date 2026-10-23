import { describe, expect, it } from "vitest";
import { modules, allLessons } from "../src/data/modules";
import { bankOf, lessonContent } from "../src/data/content";
import { isCorrect, type Question } from "../src/data/questions";

const emoji = /\p{Extended_Pictographic}/u;
const banks = modules.flatMap((m) => bankOf(m.id).map((q) => ({ m: m.id, q })));
const checks = Object.values(lessonContent).flatMap((c) => c.check);
const all: Question[] = [...banks.map((b) => b.q), ...checks];

describe("integridad del contenido", () => {
  it("ids de lecciones unicos", () => {
    expect(new Set(allLessons.map((l) => l.id)).size).toBe(allLessons.length);
  });

  it("ids de preguntas unicos", () => {
    const ids = all.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada pregunta apunta a una leccion de su modulo", () => {
    for (const { m, q } of banks) expect(allLessons.find((l) => l.id === q.lessonId)?.moduleId, q.id).toBe(m);
    for (const [id, c] of Object.entries(lessonContent)) for (const q of c.check) expect(q.lessonId, q.id).toBe(id);
  });

  it("respuestas validas y autocorrectas", () => {
    for (const q of all) {
      expect(q.explain.length, q.id).toBeGreaterThan(5);
      if (q.kind === "choice") {
        expect(q.options.length, q.id).toBeGreaterThanOrEqual(2);
        expect(q.answer, q.id).toBeLessThan(q.options.length);
        expect(new Set(q.options).size, q.id).toBe(q.options.length);
      }
      expect(isCorrect(q, q.kind === "number" ? String(q.answer) : q.answer), q.id).toBe(true);
    }
  });

  it("cada leccion con contenido cita fuentes verificables", () => {
    for (const [id, c] of Object.entries(lessonContent)) {
      expect(c.sources.length, id).toBeGreaterThan(0);
      for (const s of c.sources) {
        expect(s.url, id).toMatch(/^https:\/\//);
        expect(s.accessed, id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
      expect(c.tips.length, id).toBeGreaterThanOrEqual(2);
      expect(c.check.length, id).toBeGreaterThanOrEqual(4);
    }
  });

  it("sin emojis en el contenido", () => {
    expect(emoji.test(JSON.stringify([lessonContent, banks]))).toBe(false);
  });
});
