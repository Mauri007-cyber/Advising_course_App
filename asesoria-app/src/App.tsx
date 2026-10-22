import { useEffect, useRef } from "react";
import { useRoute } from "./lib/router";
import { Shell } from "./components/Shell";
import { Dashboard } from "./pages/Dashboard";
import { ModulePage } from "./pages/ModulePage";
import { LessonPage } from "./pages/LessonPage";
import { Tools } from "./pages/Tools";
import { Settings } from "./pages/Settings";

export function App() {
  const route = useRoute();
  const main = useRef<HTMLElement>(null);
  const [, kind = "", id = ""] = route.split("/");

  useEffect(() => {
    window.scrollTo(0, 0);
    main.current?.focus();
  }, [route]);

  let page = <Dashboard />;
  if (kind === "m") page = <ModulePage id={id} />;
  else if (kind === "l") page = <LessonPage id={id} />;
  else if (kind === "herramientas") page = <Tools />;
  else if (kind === "ajustes") page = <Settings />;

  return (
    <Shell route={route}>
      <main ref={main} tabIndex={-1}>
        {page}
      </main>
    </Shell>
  );
}
