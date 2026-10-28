import { describe, expect, it } from "vitest";
import { allLessons, CURRENT_RELEASE, isReleased, lessonLabel, modules, releasedMinutes, totalMinutes } from "../src/data/modules";
import { bankOf, examReady, lessonContent, questionById } from "../src/data/content";
import { isCorrect, type Question } from "../src/data/questions";

const emoji = /\p{Extended_Pictographic}/u;
const bankQs = modules.flatMap((m) => bankOf(m.id));
const checks = Object.values(lessonContent).flatMap((c) => c.check);
const all: Question[] = [...bankQs, ...checks];

describe("plan del curso", () => {
  it("ids y numeros unicos", () => {
    expect(new Set(allLessons.map((l) => l.id)).size).toBe(allLessons.length);
    expect(new Set(modules.map((m) => m.id)).size).toBe(modules.length);
    expect(new Set(modules.map((m) => m.n)).size).toBe(modules.length);
  });

  it("el plan completo ronda las 150 horas", () => {
    expect(totalMinutes / 60).toBeGreaterThan(145);
    expect(totalMinutes / 60).toBeLessThan(156);
  });

  it("la primera publicacion ronda las 15 horas", () => {
    expect(CURRENT_RELEASE).toBe(1);
    expect(releasedMinutes / 60).toBeGreaterThan(13.5);
    expect(releasedMinutes / 60).toBeLessThan(16);
  });

  it("los niveles avanzan con las fases", () => {
    for (const m of modules) expect([1, 2, 3]).toContain(m.level);
    const rel = modules.map((m) => m.release);
    expect(Math.min(...rel)).toBe(1);
  });

  it("todo lo publicado tiene contenido y examen", () => {
    const released = modules.filter(isReleased);
    expect(released.length).toBeGreaterThan(0);
    for (const m of released) {
      expect(m.lessons.every((l) => lessonContent[l.id]), m.id).toBe(true);
      expect(examReady(m.id), m.id).toBe(true);
      expect(bankOf(m.id).length, m.id).toBeGreaterThanOrEqual(12);
    }
  });
});

describe("preparacion de fases futuras", () => {
  it("los modulos de la fase 2 ya tienen contenido y banco suficientes", () => {
    for (const m of modules.filter((x) => x.release <= 2)) {
      expect(m.lessons.every((l) => lessonContent[l.id]), m.id).toBe(true);
      expect(bankOf(m.id).length, m.id).toBeGreaterThanOrEqual(12);
    }
  });
});

describe("integridad del contenido", () => {
  it("ids de preguntas unicos", () => {
    const ids = all.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(Object.keys(questionById).length).toBe(ids.length);
  });

  it("cada pregunta apunta a una leccion existente", () => {
    for (const q of all) expect(allLessons.find((l) => l.id === q.lessonId), q.id).toBeDefined();
    for (const [id, c] of Object.entries(lessonContent)) for (const q of c.check) expect(q.lessonId, q.id).toBe(id);
  });

  it("todo el contenido pertenece a una leccion del plan", () => {
    for (const id of Object.keys(lessonContent)) expect(allLessons.find((l) => l.id === id), id).toBeDefined();
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

  it("las referencias entre lecciones apuntan a lecciones reales", () => {
    const refs = [...JSON.stringify(lessonContent).matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
    expect(refs.length).toBeGreaterThan(0);
    for (const id of refs) {
      expect(allLessons.find((l) => l.id === id), id).toBeDefined();
      expect(lessonLabel(id)).toMatch(/^\d+\.\d+$/);
    }
  });

  it("sin emojis en el contenido ni en el plan", () => {
    expect(emoji.test(JSON.stringify([lessonContent, bankQs, modules]))).toBe(false);
  });
});
