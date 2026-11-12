import { describe, expect, it } from "vitest";
import { explainAuthError } from "../src/lib/authErrors";
import { AUTH_DOMAIN } from "../src/lib/username";

describe("errores de autenticacion", () => {
  it("el dominio por defecto no es uno de los rechazados por Supabase", () => {
    expect(AUTH_DOMAIN).not.toMatch(/^(example\.(com|net|org)|test(\.com)?|invalid|local|localhost)$/);
  });

  it("explica el dominio rechazado y muestra el detalle", () => {
    const t = explainAuthError({ code: "email_address_invalid", status: 400, message: 'Email address "a@example.com" is invalid' }, "example.com");
    expect(t).toContain("VITE_AUTH_EMAIL_DOMAIN");
    expect(t).toContain("Detalle técnico");
  });

  it("explica proveedor desactivado, registros cerrados y clave invalida", () => {
    expect(explainAuthError({ code: "email_provider_disabled", status: 422 }, "x.com")).toContain("Providers, Email");
    expect(explainAuthError({ code: "signup_disabled", status: 422 }, "x.com")).toContain("desactivado");
    expect(explainAuthError({ status: 401, message: "Invalid API key" }, "x.com")).toContain("VITE_SUPABASE_ANON_KEY");
  });

  it("no muestra detalle tecnico en errores normales de usuario", () => {
    const t = explainAuthError({ code: "invalid_credentials", status: 400, message: "Invalid login credentials" }, "x.com");
    expect(t).toBe("Usuario o contraseña incorrectos.");
    expect(explainAuthError({ code: "user_already_exists", status: 422 }, "x.com")).toBe("Ese nombre de usuario ya existe.");
  });

  it("detecta fallos de red y errores desconocidos", () => {
    expect(explainAuthError({ name: "AuthRetryableFetchError", message: "Failed to fetch", status: 0 }, "x.com")).toContain("VITE_SUPABASE_URL");
    expect(explainAuthError({ message: "algo raro", status: 500 }, "x.com")).toContain("No se pudo completar la operación.");
  });
});
