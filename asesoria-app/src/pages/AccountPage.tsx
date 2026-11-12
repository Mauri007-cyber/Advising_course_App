import { useState, type FormEvent } from "react";
import { cloudEnabled, setUsername as saveUsername, signIn, signOut, signUp, syncNow, useCloud } from "../lib/cloud";
import { PASSWORD_MAX, PASSWORD_MIN } from "../lib/username";

const labels = { off: "", idle: "", syncing: "Sincronizando…", ok: "Sincronizado", error: "Error de sincronización" } as const;

export function AccountPage() {
  const c = useCloud();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  if (!cloudEnabled) {
    return (
      <>
        <h1>Cuenta</h1>
        <p className="lead">Esta compilación no tiene la sincronización en la nube configurada, por eso no hay formulario de acceso. Tu progreso se guarda solo en este dispositivo; usa Ajustes para exportar una copia.</p>
        <p>Para activarla, crea un archivo <code>.env</code> a partir de <code>.env.example</code>, rellena <code>VITE_SUPABASE_URL</code> y <code>VITE_SUPABASE_ANON_KEY</code> y vuelve a compilar la aplicación. Los pasos completos están en el README.</p>
      </>
    );
  }

  const run = (fn: () => Promise<string | null>) => async (e?: FormEvent) => {
    e?.preventDefault();
    setBusy(true);
    setMsg((await fn()) ?? "");
    setBusy(false);
  };

  if (c.user) {
    return (
      <>
        <h1>Cuenta</h1>
        <p className="lead">
          Has entrado como <strong>{c.user.name}</strong>
          {c.user.email ? ` (${c.user.email})` : ""}. Tu progreso se guarda también en la nube.
        </p>
        {!c.user.username && (
          <form className="auth" onSubmit={run(() => saveUsername(username))}>
            <p className="note">Tu cuenta todavía no tiene nombre de usuario. Elige uno para poder entrar también con él.</p>
            <label>
              Nombre de usuario
              <input type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required minLength={3} maxLength={24} value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <div className="actions">
              <button className="primary" type="submit" disabled={busy}>Guardar nombre de usuario</button>
            </div>
          </form>
        )}
        <p role="status">{msg || c.message || labels[c.status]}</p>
        <div className="actions">
          <button onClick={() => void syncNow()}>Sincronizar ahora</button>
          <button onClick={() => void signOut()}>Cerrar sesión</button>
        </div>
      </>
    );
  }

  const switchMode = (next: "login" | "signup") => {
    setMode(next);
    setMsg("");
  };

  return (
    <>
      <h1>Cuenta</h1>
      <p className="lead">
        Crea una cuenta con tu correo, un nombre de usuario y una contraseña para guardar el progreso en la nube y retomarlo desde cualquier dispositivo. Sin cuenta, todo sigue funcionando en este dispositivo.
      </p>

      <div className="actions">
        <button type="button" className={mode === "login" ? "primary" : ""} onClick={() => switchMode("login")}>Entrar</button>
        <button type="button" className={mode === "signup" ? "primary" : ""} onClick={() => switchMode("signup")}>Crear cuenta</button>
      </div>

      {mode === "login" ? (
        <form className="auth" onSubmit={run(() => signIn(identifier, password))}>
          <label>
            Correo o nombre de usuario
            <input type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
          </label>
          <label>
            Contraseña
            <input type="password" autoComplete="current-password" required minLength={PASSWORD_MIN} maxLength={PASSWORD_MAX} value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div className="actions">
            <button className="primary" type="submit" disabled={busy}>Entrar</button>
          </div>
          <p role="status">{msg}</p>
          <p className="note">Puedes entrar con tu correo o con tu nombre de usuario. La recuperación de contraseña depende del correo de Supabase: configúralo en Authentication si la necesitas, y exporta copias de tu progreso desde Ajustes.</p>
        </form>
      ) : (
        <form className="auth" onSubmit={run(() => signUp(email, username, password))}>
          <label>
            Correo electrónico
            <input type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Nombre de usuario
            <input type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required minLength={3} maxLength={24} value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña
            <input type="password" autoComplete="new-password" required minLength={PASSWORD_MIN} maxLength={PASSWORD_MAX} value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div className="actions">
            <button className="primary" type="submit" disabled={busy || !email || !username || password.length < PASSWORD_MIN}>Crear cuenta</button>
          </div>
          <p role="status">{msg}</p>
          <p className="note">Se entra con el correo o con el nombre de usuario. Si olvidas la contraseña, necesitarás el correo de recuperación de Supabase.</p>
        </form>
      )}
    </>
  );
}
