import { findModule } from "../data/modules";
import { useStore } from "../lib/store";
import { badges, ranks, rankInfo } from "../lib/game";
import { Icon } from "../components/Icon";

const fmt = (ts: number) => new Date(ts).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });

export function Achievements() {
  const s = useStore();
  const info = rankInfo(s.xp);

  return (
    <>
      <h1>Tus logros</h1>
      <p className="lead">Cada paso cuenta. Llevas {s.xp} XP y eres {info.cur.name}.</p>

      <h2>Rangos</h2>
      <ol className="ranks">
        {ranks.map((r, i) => (
          <li key={r.name} className={i <= info.index ? "reached" : ""}>
            <strong>{r.name}</strong> <span>{r.min} XP</span>
          </li>
        ))}
      </ol>

      <h2>Insignias</h2>
      <ul className="badges">
        {badges.map((b) => {
          const got = s.badges[b.id];
          return (
            <li key={b.id} className={`badge${got ? "" : " locked"}`}>
              <Icon name={got ? "trophy" : "lock"} />
              <strong>{b.title}</strong>
              <span>{got ? `Conseguida el ${fmt(got)}` : b.desc}</span>
            </li>
          );
        })}
      </ul>

      <h2>Historial de exámenes</h2>
      {s.attempts.length === 0 ? (
        <p>Aún no has hecho ningún examen. Cuando completes un módulo, te estará esperando.</p>
      ) : (
        <ul className="ledger">
          {[...s.attempts].reverse().map((a) => (
            <li key={a.ts}>
              <div className="row">
                <span className="row-title">{findModule(a.moduleId)?.title}</span>
                <span className="row-count">{a.score} % · {a.passed ? "Aprobado" : "No aprobado"}</span>
                <span className="row-meta">{fmt(a.ts)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
