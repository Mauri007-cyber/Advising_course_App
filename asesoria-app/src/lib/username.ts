const DOMAIN = (import.meta.env.VITE_AUTH_EMAIL_DOMAIN as string | undefined) || "example.com";

export const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,23}$/;
export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 72;

export const normalizeUsername = (s: string) => s.trim().toLowerCase();
export const usernameToEmail = (u: string) => `${normalizeUsername(u)}@${DOMAIN}`;
export const emailToUsername = (email: string) => email.split("@")[0];

export function checkCredentials(username: string, password: string): string | null {
  if (!USERNAME_RE.test(normalizeUsername(username))) {
    return "El usuario debe tener entre 3 y 24 caracteres: letras minúsculas, números, punto, guion o guion bajo.";
  }
  if (password.length < PASSWORD_MIN) return `La contraseña debe tener al menos ${PASSWORD_MIN} caracteres.`;
  if (password.length > PASSWORD_MAX) return `La contraseña no puede superar los ${PASSWORD_MAX} caracteres.`;
  return null;
}
