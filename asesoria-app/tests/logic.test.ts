import { beforeEach, describe, expect, it, vi } from "vitest";
import { buildExam, grade, PASS } from "../src/lib/exam";
import { bankOf } from "../src/data/content";
import { isCorrect, type Question } from "../src/data/questions";
import { addDays, dueIds, review } from "../src/lib/srs";
import { bumpStreak, rankInfo, ranks } from "../src/lib/game";
import { mergeStates } from "../src/lib/merge";
import { exportJson, getState, importJson, resetAll, sanitizeState, setState } from "../src/lib/store";

const choice: Question = { id: "t1", lessonId: "1.1", kind: "choice", prompt: "p", options: ["a", "b", "c"], answer: 1, explain: "e" };
const tf: Question = { id: "t2", lessonId: "1.1", kind: "tf", prompt: "p", answer: false, explain: "e" };
const num: Question = { id: "t3", lessonId: "1.1", kind: "number", prompt: "p", answer: 1200, tolerance: 0.5, explain: "e" };

describe("isCorrect", () => {
  it("evalua cada tipo", () => {
    expect(isCorrect(choice, 1)).toBe(true);
    expect(isCorrect(choice, 0)).toBe(false);
    expect(isCorrect(tf, false)).toBe(true);
    expect(isCorrect(tf, undefined)).toBe(false);
    expect(isCorrect(num, "1200")).toBe(true);
    expect(isCorrect(num, "1.200,5")).toBe(false);
    expect(isCorrect(num, "1200,4")).toBe(true);
    expect(isCorrect(num, "abc")).toBe(false);
    expect(isCorrect(num, "")).toBe(false);
  });
});

describe("grade", () => {
  it("calcula nota y umbral", () => {
    const g = grade([choice, tf, num], { t1: 1, t2: true, t3: "1200" });
    expect(g.correct).toBe(2);
    expect(g.score).toBe(67);
    expect(g.score >= PASS).toBe(false);
    expect(grade([choice, tf], { t1: 1, t2: false }).score).toBe(100);
    expect(grade([], {}).score).toBe(0);
  });
});

describe("buildExam", () => {
  it("conserva la respuesta correcta tras barajar", () => {
    for (let n = 0; n < 30; n++) {
      for (const q of buildExam("m1", {})) {
        const orig = bankOf("m1").find((x) => x.id === q.id)!;
        if (q.kind === "choice" && orig.kind === "choice") expect(q.options[q.answer]).toBe(orig.options[orig.answer]);
      }
    }
  });
});

describe("srs", () => {
  it("avanza y reinicia cajas", () => {
    const a = review(undefined, true, "2026-01-01");
    expect(a).toEqual({ box: 1, due: "2026-01-02" });
    expect(review(a, true, "2026-01-02")).toEqual({ box: 2, due: "2026-01-04" });
    expect(review({ box: 5, due: "x" }, true, "2026-01-01").box).toBe(5);
    expect(review({ box: 4, due: "x" }, false, "2026-01-01")).toEqual({ box: 1, due: "2026-01-02" });
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
    expect(dueIds({ a: { box: 1, due: "2026-01-01" }, b: { box: 1, due: "2026-02-01" } }, "2026-01-15")).toEqual(["a"]);
  });
});

describe("streak y rangos", () => {
  const s = (count: number, last: string, grace = "") => ({ count, last, grace });
  it("racha", () => {
    expect(bumpStreak(s(0, ""), "2026-10-05").count).toBe(1);
    expect(bumpStreak(s(3, "2026-10-05"), "2026-10-05").count).toBe(3);
    expect(bumpStreak(s(3, "2026-10-05"), "2026-10-06").count).toBe(4);
    expect(bumpStreak(s(3, "2026-10-05"), "2026-10-07")).toEqual({ count: 4, last: "2026-10-07", grace: "2026-10-05" });
    expect(bumpStreak(s(3, "2026-10-05", "2026-10-05"), "2026-10-07").count).toBe(1);
    expect(bumpStreak(s(3, "2026-10-05"), "2026-10-09").count).toBe(1);
  });
  it("rangos", () => {
    expect(rankInfo(0).cur.name).toBe("Aprendiz");
    expect(rankInfo(150).cur.name).toBe("Técnico");
    expect(rankInfo(99999).next).toBeUndefined();
    expect(rankInfo(75).pct).toBeCloseTo(0.5);
    expect(ranks.map((r) => r.min)).toEqual([...ranks.map((r) => r.min)].sort((a, b) => a - b));
  });
});

describe("store e importacion", () => {
  beforeEach(() => resetAll());

  it("rechaza datos invalidos y limpia claves peligrosas", () => {
    expect(importJson("no es json")).toBe(false);
    expect(importJson(JSON.stringify({ v: 9 }))).toBe(false);
    expect(sanitizeState(JSON.parse('{"v":2,"done":{"__proto__":1,"a":5,"b":"x"}}'))?.done).toEqual({ a: 5 });
    expect(sanitizeState({ v: 2, theme: "rojo", size: "gigante", xp: -5 })).toMatchObject({ theme: "auto", size: "l", xp: 0 });
  });

  it("migra v1 y hace ida y vuelta", () => {
    expect(sanitizeState({ v: 1, done: { "1.1": 1 } })?.v).toBe(2);
    setState({ xp: 42, done: { "1.1": 1 } });
    const json = exportJson();
    resetAll();
    expect(getState().xp).toBe(0);
    expect(importJson(json)).toBe(true);
    expect(getState().xp).toBe(42);
  });
});

describe("mergeStates", () => {
  const base = sanitizeState({ v: 2 })!;
  it("une progreso y respeta lo mas reciente", () => {
    const a = { ...base, done: { "1.1": 5 }, xp: 100, modified: 10, theme: "dark" as const, failed: { x: 1 } };
    const b = { ...base, done: { "1.1": 3, "1.2": 7 }, xp: 80, modified: 20, theme: "light" as const, failed: {} };
    const m = mergeStates(a, b);
    expect(m.done).toEqual({ "1.1": 3, "1.2": 7 });
    expect(m.xp).toBe(100);
    expect(m.theme).toBe("light");
    expect(m.failed).toEqual({});
    expect(m.modified).toBe(20);
  });
  it("no duplica intentos", () => {
    const at = { moduleId: "m1", ts: 1, score: 80, passed: true, total: 8, wrong: [] };
    expect(mergeStates({ ...base, attempts: [at] }, { ...base, attempts: [at] }).attempts).toHaveLength(1);
  });
});

vi.useRealTimers();
