import { describe, expect, it, vi } from "vitest";
import type { Question } from "../src/data/questions";

const fake: Question[] = Array.from({ length: 12 }, (_, i) => ({
  id: `f${i}`, lessonId: "1.1", kind: "tf", prompt: "p", answer: true, explain: "e",
}));
vi.mock("../src/data/content", () => ({ bankOf: () => fake }));

import { buildExam, examSize } from "../src/lib/exam";

describe("buildExam con banco amplio", () => {
  it("tamano fijo, sin repetidos y con las falladas siempre dentro", () => {
    const failed = { f0: 1, f3: 2, f7: 1, f11: 1 };
    for (let n = 0; n < 50; n++) {
      const ids = buildExam("m1", failed).map((q) => q.id);
      expect(ids).toHaveLength(examSize("m1"));
      expect(new Set(ids).size).toBe(examSize("m1"));
      for (const id of Object.keys(failed)) expect(ids).toContain(id);
    }
  });

  it("varia entre intentos", () => {
    const seen = new Set(Array.from({ length: 30 }, () => buildExam("m1", {}).map((q) => q.id).join()));
    expect(seen.size).toBeGreaterThan(1);
  });
});
