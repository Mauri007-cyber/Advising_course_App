import { tools } from "../data/tools";

export function Tools() {
  return (
    <>
      <h1>Herramientas</h1>
      <p className="lead">Simuladores y generadores. Son prácticas, no documentos presentables ante la AEAT.</p>
      <ul className="ledger">
        {tools.map((t) => (
          <li key={t.id}>
            <div className="row">
              <span className="row-title">{t.title}</span>
              <span className="row-meta">{t.desc}</span>
              <span className="row-count">Pendiente</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
