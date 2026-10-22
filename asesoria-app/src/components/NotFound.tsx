import { href } from "../lib/router";

export function NotFound() {
  return (
    <>
      <h1>No encontrado</h1>
      <p className="lead">Esa página no existe.</p>
      <a className="back" href={href("/")}>Volver al inicio</a>
    </>
  );
}
