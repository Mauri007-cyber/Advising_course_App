export const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,23}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 72;

export const normalizeUsername = (s: string) => s.trim().toLowerCase();
export const normalizeEmail = (s: string) => s.trim().toLowerCase();
export const isEmail = (s: string) => EMAIL_RE.test(normalizeEmail(s));

export function checkUsername(username: string): string | null {
  if (!USERNAME_RE.test(normalizeUsername(username))) {
    return "El usuario debe tener entre 3 y 24 caracteres: letras minúsculas, números, punto, guion o guion bajo.";
  }
  return null;
}

export function checkEmail(email: string): string | null {
  if (!EMAIL_RE.test(normalizeEmail(email))) return "Escribe un correo electrónico válido.";
  return null;
}

export function checkPassword(password: string): string | null {
  if (password.length < PASSWORD_MIN) return `La contraseña debe tener al menos ${PASSWORD_MIN} caracteres.`;
  if (password.length > PASSWORD_MAX) return `La contraseña no puede superar los ${PASSWORD_MAX} caracteres.`;
  return null;
}

export function checkSignUp(email: string, username: string, password: string): string | null {
  return checkEmail(email) ?? checkUsername(username) ?? checkPassword(password);
}

export function checkSignIn(identifier: string, password: string): string | null {
  const id = identifier.trim();
  if (!id) return "Escribe tu correo o tu nombre de usuario.";
  return (id.includes("@") ? checkEmail(id) : checkUsername(id)) ?? checkPassword(password);
}
