import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { getState, subscribe } from "./lib/store";
import { registerSw } from "./lib/pwa";
import "./styles.css";

const applyPrefs = () => {
  const { theme, size } = getState();
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.size = size;
};
applyPrefs();
subscribe(applyPrefs);
registerSw();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
