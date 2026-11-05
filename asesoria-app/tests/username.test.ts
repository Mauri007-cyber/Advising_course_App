import { describe, expect, it } from "vitest";
import { checkCredentials, emailToUsername, normalizeUsername, PASSWORD_MAX, usernameToEmail } from "../src/lib/username";

describe("usuario y contraseña", () => {
  it("normaliza y convierte a correo interno y viceversa", () => {
    expect(normalizeUsername("  Marta.G  ")).toBe("marta.g");
    expect(usernameToEmail("Marta.G")).toMatch(/^marta\.g@[a-z0-9.-]+$/);
    expect(emailToUsername(usernameToEmail("marta_g"))).toBe("marta_g");
  });

  it("acepta credenciales validas", () => {
    expect(checkCredentials("marta", "contraseña-segura")).toBeNull();
    expect(checkCredentials("m.r-t_a1", "12345678")).toBeNull();
  });

  it("rechaza usuarios invalidos", () => {
    for (const u of ["", "ab", "marta@correo.com", "con espacios", "_inicio", "a".repeat(25), "ñandú"]) {
      expect(checkCredentials(u, "contraseña-segura"), u).not.toBeNull();
    }
  });

  it("rechaza contraseñas demasiado cortas o largas", () => {
    expect(checkCredentials("marta", "1234567")).not.toBeNull();
    expect(checkCredentials("marta", "a".repeat(PASSWORD_MAX + 1))).not.toBeNull();
    expect(checkCredentials("marta", "a".repeat(PASSWORD_MAX))).toBeNull();
  });
});
