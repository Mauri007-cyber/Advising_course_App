import { dismiss, useToasts } from "../lib/toast";

export function Toasts() {
  const list = useToasts();
  return (
    <div className="toasts" role="status" aria-live="polite">
      {list.map((t) => (
        <div key={t.id} className={`toast toast-${t.kind}`}>
          <div>
            <strong>{t.title}</strong>
            {t.body && <p>{t.body}</p>}
          </div>
          <button aria-label="Cerrar aviso" onClick={() => dismiss(t.id)}>×</button>
        </div>
      ))}
    </div>
  );
}
