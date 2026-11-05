import { useState, type FormEvent } from "react";
import { cloudEnabled, signIn, signOut, signUp, syncNow, useCloud } from "../lib/cloud";
import { PASSWORD_MIN } from "../lib/username";

const labels = { off: "", idle: "", syncing: "Sincronizando…", ok: "Sincronizado", error: "Error de sincronización" } as const;

export function AccountPage() {
  const c = useCloud();
  const [username, setUsername] = useState("");
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
        <p className="lead">Has entrado como <strong>{c.user}</strong>. Tu progreso se guarda también en la nube.</p>
        <p role="status">{c.message || labels[c.status]}</p>
        <div className="actions">
          <button onClick={() => void syncNow()}>Sincronizar ahora</button>
          <button onClick={() => void signOut()}>Cerrar sesión</button>
        </div>
      </>
    );
  }

  const run = (fn: (u: string, p: string) => Promise<string | null>) => async (e?: FormEvent) => {
    e?.preventDefault();
    setBusy(true);
    setMsg((await fn(username, password)) ?? "");
    setBusy(false);
  };

  return (
    <>
      <h1>Cuenta</h1>
      <p className="lead">
        Crea un usuario y una contraseña para guardar tu progreso en la nube y retomarlo desde cualquier dispositivo. No hace falta correo. Sin cuenta, todo sigue funcionando en este dispositivo.
      </p>
      <form className="auth" onSubmit={run(signIn)}>
        <label>
          Nombre de usuario
          <input type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required minLength={3} maxLength={24} value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Contraseña
          <input type="password" autoComplete="current-password" required minLength={PASSWORD_MIN} value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div className="actions">
          <button className="primary" type="submit" disabled={busy}>Entrar</button>
          <button type="button" disabled={busy || !username || password.length < PASSWORD_MIN} onClick={() => void run(signUp)()}>Crear cuenta</button>
        </div>
        <p role="status">{msg}</p>
        <p className="note">
          Sin correo no hay recuperación de contraseña: si la olvidas, no se puede restablecer. Guárdala en un gestor de contraseñas y exporta copias de tu progreso desde Ajustes.
        </p>
      </form>
    </>
  );
}
