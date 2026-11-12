import { describe, expect, it } from "vitest";
import { checkEmail, checkPassword, checkSignIn, checkSignUp, checkUsername, normalizeEmail, normalizeUsername, PASSWORD_MAX } from "../src/lib/username";

describe("correo, usuario y contraseña", () => {
  it("normaliza los datos", () => {
    expect(normalizeUsername("  Marta.G  ")).toBe("marta.g");
    expect(normalizeEmail("  Marta@Correo.ES ")).toBe("marta@correo.es");
  });

  it("acepta usuarios válidos y rechaza los que no lo son", () => {
    for (const u of ["marta", "m.r-t_a1"]) expect(checkUsername(u), u).toBeNull();
    for (const u of ["", "ab", "marta@correo.com", "con espacios", "_inicio", "a".repeat(25), "ñandú"]) {
      expect(checkUsername(u), u).not.toBeNull();
    }
  });

  it("valida el correo", () => {
    expect(checkEmail("marta@correo.es")).toBeNull();
    for (const e of ["", "marta", "marta@", "@correo.es", "marta@correo", "con espacio@correo.es"]) {
      expect(checkEmail(e), e).not.toBeNull();
    }
  });

  it("valida la contraseña", () => {
    expect(checkPassword("1234567")).not.toBeNull();
    expect(checkPassword("a".repeat(PASSWORD_MAX + 1))).not.toBeNull();
    expect(checkPassword("a".repeat(PASSWORD_MAX))).toBeNull();
    expect(checkPassword("contraseña-segura")).toBeNull();
  });

  it("el alta comprueba correo, usuario y contraseña en ese orden", () => {
    expect(checkSignUp("mal", "ab", "123")).toMatch(/correo/i);
    expect(checkSignUp("marta@correo.es", "ab", "123")).toMatch(/usuario/i);
    expect(checkSignUp("marta@correo.es", "marta", "123")).toMatch(/contraseña/i);
    expect(checkSignUp("marta@correo.es", "marta", "contraseña-segura")).toBeNull();
  });

  it("la entrada acepta correo o nombre de usuario", () => {
    expect(checkSignIn("marta", "contraseña-segura")).toBeNull();
    expect(checkSignIn("marta@correo.es", "contraseña-segura")).toBeNull();
    expect(checkSignIn("", "contraseña-segura")).not.toBeNull();
    expect(checkSignIn("marta@correo", "contraseña-segura")).not.toBeNull();
    expect(checkSignIn("marta", "1234567")).not.toBeNull();
  });
});
