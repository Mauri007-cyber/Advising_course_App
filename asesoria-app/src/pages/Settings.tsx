import { useState, type ChangeEvent } from "react";
import { exportJson, importJson, resetAll, setState, useStore, type FontSize, type Theme } from "../lib/store";

const themes: [Theme, string][] = [["auto", "Automático"], ["light", "Claro"], ["dark", "Oscuro"]];
const sizes: [FontSize, string][] = [["m", "Normal"], ["l", "Grande"], ["xl", "Muy grande"]];

export function Settings() {
  const s = useStore();
  const [msg, setMsg] = useState("");

  const exportFile = () => {
    const url = URL.createObjectURL(new Blob([exportJson()], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `progreso-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMsg(importJson(await file.text()) ? "Progreso importado." : "Archivo no válido.");
    e.target.value = "";
  };

  const reset = () => {
    if (confirm("Se borrará todo el progreso. ¿Continuar?")) {
      resetAll();
      setMsg("Progreso borrado.");
    }
  };

  return (
    <>
      <h1>Ajustes</h1>

      <fieldset>
        <legend>Tema</legend>
        {themes.map(([v, l]) => (
          <label key={v}>
            <input type="radio" name="theme" checked={s.theme === v} onChange={() => setState({ theme: v })} />
            {l}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Tamaño de letra</legend>
        {sizes.map(([v, l]) => (
          <label key={v}>
            <input type="radio" name="size" checked={s.size === v} onChange={() => setState({ size: v })} />
            {l}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Copia de seguridad</legend>
        <p>El progreso solo vive en este dispositivo. Exporta una copia de vez en cuando.</p>
        <div className="actions">
          <button onClick={exportFile}>Exportar progreso</button>
          <label className="file">
            Importar progreso
            <input type="file" accept="application/json" onChange={importFile} />
          </label>
          <button className="danger" onClick={reset}>Borrar progreso</button>
        </div>
        <p role="status">{msg}</p>
      </fieldset>
    </>
  );
}
