export interface AuthLikeError {
  message?: string;
  code?: string;
  status?: number;
  name?: string;
}

export function explainAuthError(err: AuthLikeError): string {
  const code = err.code ?? "";
  const msg = err.message ?? "";
  let text: string;
  let detail = true;

  if (code === "email_address_invalid" || /email address .* is invalid/i.test(msg)) {
    text = "Supabase rechaza ese correo electrónico. Usa un correo real y revisa que esté bien escrito.";
  } else if (code === "email_provider_disabled" || /email (logins|signups) are disabled|email provider.*disabled/i.test(msg)) {
    text = "El acceso con correo está desactivado en Supabase. Actívalo en Authentication, Providers, Email.";
  } else if (code === "signup_disabled" || /signups? (not allowed|disabled)/i.test(msg)) {
    text = "El registro de usuarios nuevos está desactivado en este proyecto.";
  } else if (code === "invalid_credentials" || /invalid login/i.test(msg)) {
    text = "Correo, usuario o contraseña incorrectos.";
    detail = false;
  } else if (code === "user_already_exists" || /already registered|already been registered/i.test(msg)) {
    text = "Ese correo ya tiene una cuenta. Entra con tu correo o tu nombre de usuario.";
    detail = false;
  } else if (code === "weak_password" || /password/i.test(msg)) {
    text = "La contraseña no cumple los requisitos del proyecto.";
  } else if (err.status === 429 || /rate.?limit|too many/i.test(`${code} ${msg}`)) {
    text = "Demasiados intentos. Espera unos minutos.";
  } else if (err.status === 401 || /invalid api key|apikey/i.test(msg) || code === "no_authorization") {
    text = "La clave anónima de Supabase no es válida. Revisa VITE_SUPABASE_ANON_KEY en Vercel y vuelve a desplegar.";
  } else if (/failed to fetch|network|load failed/i.test(msg) || err.status === 0 || err.name === "AuthRetryableFetchError") {
    text = "No se pudo conectar con Supabase. Revisa VITE_SUPABASE_URL en Vercel y tu conexión.";
  } else {
    text = "No se pudo completar la operación.";
  }

  const info = [err.status, code, msg].filter(Boolean).join(" · ");
  return detail && info ? `${text} Detalle técnico: ${info}` : text;
}
