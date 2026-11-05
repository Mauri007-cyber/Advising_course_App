import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { isReleased, lessonLabel, modules } from "../src/data/modules";
import { Dashboard } from "../src/pages/Dashboard";
import { ModulePage } from "../src/pages/ModulePage";
import { LessonPage } from "../src/pages/LessonPage";
import { ExamPage } from "../src/pages/ExamPage";
import { Achievements } from "../src/pages/Achievements";
import { ReviewPage } from "../src/pages/ReviewPage";
import { Settings } from "../src/pages/Settings";
import { Tools } from "../src/pages/Tools";
import { AccountPage } from "../src/pages/AccountPage";

const decode = (html: string) => html.replace(/<!-- -->/g, "").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");

describe("renderizado de pantallas", () => {
  it("las pantallas generales se renderizan", () => {
    for (const el of [<Dashboard />, <Achievements />, <ReviewPage />, <Settings />, <Tools />, <AccountPage />]) {
      expect(renderToString(el).length).toBeGreaterThan(100);
    }
  });

  it("el inicio muestra los modulos publicados y el plan completo", () => {
    const html = decode(renderToString(<Dashboard />));
    for (const m of modules.filter(isReleased)) expect(html).toContain(m.title);
    expect(html).toContain("Plan del curso");
  });

  it("cada modulo, publicado o no, se renderiza", () => {
    for (const m of modules) expect(decode(renderToString(<ModulePage id={m.id} />))).toContain(m.title);
  });

  it("cada leccion publicada se renderiza con su titulo, fuentes y mini-test", () => {
    for (const m of modules.filter(isReleased)) {
      for (const l of m.lessons) {
        const html = decode(renderToString(<LessonPage id={l.id} />));
        expect(html, l.id).toContain(l.title);
        expect(html, l.id).toContain("Fuentes");
        expect(html, l.id).toContain("Mini-test");
        expect(html, l.id).not.toContain("[[");
        expect(html, l.id).toContain(lessonLabel(l.id));
      }
    }
  });

  it("las lecciones no publicadas muestran el aviso de fase", () => {
    const m = modules.find((x) => !isReleased(x))!;
    expect(decode(renderToString(<LessonPage id={m.lessons[0].id} />))).toContain(`fase ${m.release}`);
  });

  it("el examen de cada modulo publicado muestra su pantalla de entrada", () => {
    for (const m of modules.filter(isReleased)) {
      expect(renderToString(<ExamPage id={m.id} />).length, m.id).toBeGreaterThan(100);
    }
  });
});
