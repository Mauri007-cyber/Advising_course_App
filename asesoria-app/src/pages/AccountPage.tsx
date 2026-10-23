import { useState, type FormEvent } from "react";
import { cloudEnabled, signIn, signOut, signUp, syncNow, useCloud } from "../lib/cloud";

const labels = { off: "", idle: "", syncing: "Sincronizando…", ok: "Sincronizado", error: "Error de sincronización" } as const;

export function AccountPage() {
  const c = useCloud();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  if (!cloudEnabled) {
    return (
      <>
        <h1>Cuenta</h1>
        <p className="lead">La sincronización en la nube no está configurada. Tu progreso se guarda solo en este dispositivo; usa Ajustes para exportar una copia.</p>
      </>
    );
  }

  if (c.user) {
    return (
      <>
        <h1>Cuenta</h1>
        <p className="lead">Sesión iniciada como {c.user}.</p>
        <p role="status">{c.message || labels[c.status]}</p>
        <div className="actions">
          <button onClick={() => void syncNow()}>Sincronizar ahora</button>
          <button onClick={() => void signOut()}>Cerrar sesión</button>
        </div>
      </>
    );
  }

  const run = (fn: (e: string, p: string) => Promise<string | null>) => async (e?: FormEvent) => {
    e?.preventDefault();
    setBusy(true);
    setMsg((await fn(email.trim(), password)) ?? "");
    setBusy(false);
  };

  return (
    <>
      <h1>Cuenta</h1>
      <p className="lead">Entra para guardar tu progreso en la nube y continuar desde cualquier dispositivo. Sin cuenta, todo sigue funcionando en este dispositivo.</p>
      <form className="auth" onSubmit={run(signIn)}>
        <label>Correo electrónico<input type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Contraseña<input type="password" autoComplete="current-password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        <div className="actions">
          <button className="primary" type="submit" disabled={busy}>Entrar</button>
          <button type="button" disabled={busy || !email || password.length < 6} onClick={() => void run(signUp)()}>Crear cuenta</button>
        </div>
        <p role="status">{msg}</p>
      </form>
    </>
  );
}
