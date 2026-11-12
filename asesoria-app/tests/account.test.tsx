import { describe, expect, it, vi } from "vitest";
import { renderToString } from "react-dom/server";

describe("pantalla de cuenta con la nube configurada", () => {
  it("muestra la entrada por correo o usuario y el alta con correo, usuario y contraseña", async () => {
    vi.stubEnv("VITE_SUPABASE_URL", "https://demo.supabase.co");
    vi.stubEnv("VITE_SUPABASE_ANON_KEY", "clave-demo");
    vi.resetModules();
    const { AccountPage } = await import("../src/pages/AccountPage");
    const html = renderToString(<AccountPage />);
    expect(html).toContain("Correo o nombre de usuario");
    expect(html).toContain("Crear cuenta");
    expect(html).not.toContain("no tiene la sincronización en la nube configurada");
  });
});
