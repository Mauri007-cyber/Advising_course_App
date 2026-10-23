import { allLessons, findLesson, modules } from "../data/modules";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { badges, currentStreak, dayKey, moduleStatus, nextLesson, rankInfo } from "../lib/game";
import { Progress } from "../components/Progress";
import { Icon } from "../components/Icon";
import { dueIds } from "../lib/srs";

export function Dashboard() {
  const s = useStore();
  const info = rankInfo(s.xp);
  const streak = currentStreak(s);
  const count = allLessons.filter((l) => s.done[l.id]).length;
  const next = nextLesson(s);
  const pending = Object.values(s.review).flat();
  const due = dueIds(s.srs, dayKey()).length;

  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Tu rango</p>
        <h1>{info.cur.name}</h1>
        <Progress done={Math.round(info.pct * 100)} total={100} label="Progreso hacia el siguiente rango" />
        <p>
          {s.xp} XP · {info.next ? `te faltan ${info.left} para ser ${info.next.name}` : "has alcanzado el máximo rango"}
        </p>
        <ul className="hero-stats">
          <li><strong>{count}/{allLessons.length}</strong> lecciones</li>
          <li><strong>{streak}</strong> {streak === 1 ? "día de racha" : "días de racha"}</li>
          <li><strong>{Object.keys(s.badges).length}/{badges.length}</strong> insignias</li>
        </ul>
        {next && (
          <a className="btn accent" href={href(`/l/${next.id}`)}>
            {count === 0 ? "Empieza: " : "Continúa: "}{next.title}
          </a>
        )}
      </section>

      {pending.length > 0 && (
        <div className="alert">
          <strong>Tienes repasos pendientes.</strong> Son los temas que más te costaron en el examen:
          <ul>
            {pending.map((id) => (
              <li key={id}><a href={href(`/l/${id}`)}>{id} {findLesson(id)?.title}</a></li>
            ))}
          </ul>
        </div>
      )}

      {due > 0 && (
        <div className="alert">
          <strong>Tienes {due} tarjeta(s) de repaso para hoy.</strong> Diez minutos ahora fijan lo aprendido. <a href={href("/repaso")}>Empezar repaso</a>
        </div>
      )}

      <h2>Módulos</h2>
      <ul className="grid">
        {modules.map((m) => {
          const st = moduleStatus(s, m.id);
          const state = st.passed ? `Examen aprobado (${st.best} %)` : st.hasExam ? (st.unlocked ? "Examen disponible" : "Examen bloqueado") : "Examen próximamente";
          return (
            <li key={m.id} className={`card mcard mod-${m.id}`}>
              <a href={href(`/m/${m.id}`)}>
                <span className="band"><Icon name={m.id} /> Módulo {m.id.slice(1)}</span>
                <span className="mbody">
                  <span className="row-title">{m.title}</span>
                  <span className="row-meta">{m.summary}</span>
                  <Progress done={st.lessonsDone} total={st.total} label={`Progreso de ${m.title}`} />
                  <span className="row-meta">{st.lessonsDone}/{st.total} lecciones · {state}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
