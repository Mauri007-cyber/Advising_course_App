import { findLesson, findModule, formatHours, isReleased, lessonLabel, levelNames, moduleMinutes } from "../data/modules";
import { href } from "../lib/router";
import { useStore } from "../lib/store";
import { moduleStatus } from "../lib/game";
import { Icon } from "../components/Icon";
import { Progress } from "../components/Progress";
import { NotFound } from "../components/NotFound";

export function ModulePage({ id }: { id: string }) {
  const s = useStore();
  const mod = findModule(id);
  if (!mod) return <NotFound />;
  const st = moduleStatus(s, id);
  const open = isReleased(mod);

  return (
    <div className={`mod-${id}`}>
      <a className="back" href={href("/")}>Volver al inicio</a>
      <header className="mhead">
        <Icon name={id} />
        <div>
          <h1>Módulo {mod.n}. {mod.title}</h1>
          <p>{mod.summary}</p>
          <p>{levelNames[mod.level]} · {mod.lessons.length} lecciones · {formatHours(moduleMinutes(mod))}</p>
        </div>
      </header>
      {open ? (
        <Progress done={st.lessonsDone} total={st.total} label="Progreso del módulo" />
      ) : (
        <p className="alert">Este módulo se publicará en la fase {mod.release}. Aquí puedes ver qué incluirá.</p>
      )}

      <ul className="ledger">
        {mod.lessons.map((l) => (
          <li key={l.id}>
            {open ? (
              <a href={href(`/l/${l.id}`)}>
                <span className="row-title">{lessonLabel(l.id)} {l.title}</span>
                <span className="row-count">{s.done[l.id] ? "Hecha" : `${l.minutes} min`}</span>
              </a>
            ) : (
              <div className="row soon">
                <span className="row-title">{lessonLabel(l.id)} {l.title}</span>
                <span className="row-count">{l.minutes} min</span>
              </div>
            )}
          </li>
        ))}
      </ul>

      <section className="card exam-card">
        <h2>Examen del módulo</h2>
        {!st.hasExam && <p>{open ? "El examen se publicará junto con el contenido de este módulo." : `Disponible en la fase ${mod.release}.`}</p>}
        {st.hasExam && !st.unlocked && st.pending.length === 0 && (
          <p>Completa las lecciones ({st.lessonsDone}/{st.total}) para desbloquearlo. Necesitarás un 70 % para aprobar.</p>
        )}
        {st.pending.length > 0 && (
          <>
            <p>Antes de repetirlo, repasa estos temas. Te ayudarán a corregir lo que falló:</p>
            <ul>
              {st.pending.map((p) => (
                <li key={p}><a href={href(`/l/${p}`)}>{lessonLabel(p)} {findLesson(p)?.title}</a></li>
              ))}
            </ul>
          </>
        )}
        {st.unlocked && st.hasExam && (
          <>
            <p>{st.passed ? `Ya lo has aprobado (mejor nota: ${st.best} %). Puedes repetirlo para mejorar.` : "Estás lista para el examen. Necesitas un 70 % para aprobar."}</p>
            <a className="btn primary" href={href(`/e/${id}`)}>{st.passed ? "Repetir examen" : "Hacer el examen"}</a>
          </>
        )}
      </section>
    </div>
  );
}
