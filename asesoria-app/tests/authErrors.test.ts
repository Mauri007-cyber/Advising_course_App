import { describe, expect, it } from "vitest";
import { explainAuthError } from "../src/lib/authErrors";

describe("errores de autenticación", () => {
  it("explica un correo rechazado y muestra el detalle", () => {
    const t = explainAuthError({ code: "email_address_invalid", status: 400, message: 'Email address "a@x" is invalid' });
    expect(t).toContain("correo electrónico");
    expect(t).toContain("Detalle técnico");
  });

  it("explica proveedor desactivado, registros cerrados y clave inválida", () => {
    expect(explainAuthError({ code: "email_provider_disabled", status: 422 })).toContain("Providers, Email");
    expect(explainAuthError({ code: "signup_disabled", status: 422 })).toContain("desactivado");
    expect(explainAuthError({ status: 401, message: "Invalid API key" })).toContain("VITE_SUPABASE_ANON_KEY");
  });

  it("no muestra detalle técnico en errores normales de usuario", () => {
    const t = explainAuthError({ code: "invalid_credentials", status: 400, message: "Invalid login credentials" });
    expect(t).toBe("Correo, usuario o contraseña incorrectos.");
    expect(explainAuthError({ code: "user_already_exists", status: 422 })).toContain("Ya tiene una cuenta".replace("Ya", "ya"));
  });

  it("detecta fallos de red y errores desconocidos", () => {
    expect(explainAuthError({ name: "AuthRetryableFetchError", message: "Failed to fetch", status: 0 })).toContain("VITE_SUPABASE_URL");
    expect(explainAuthError({ message: "algo raro", status: 500 })).toContain("No se pudo completar la operación.");
  });
});
