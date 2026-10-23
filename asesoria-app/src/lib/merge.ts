import type { State } from "./store";

function union(a: Record<string, number>, b: Record<string, number>) {
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = Object.hasOwn(out, k) ? Math.min(out[k], v) : v;
  return out;
}

export function mergeStates(a: State, b: State): State {
  const newer = a.modified >= b.modified ? a : b;
  const seen = new Set<string>();
  const attempts = [...a.attempts, ...b.attempts]
    .filter((t) => {
      const key = `${t.moduleId}:${t.ts}`;
      return seen.has(key) ? false : (seen.add(key), true);
    })
    .sort((x, y) => x.ts - y.ts)
    .slice(-100);
  const streak =
    a.streak.last === b.streak.last ? (a.streak.count >= b.streak.count ? a.streak : b.streak) : a.streak.last > b.streak.last ? a.streak : b.streak;

  return {
    v: 2,
    done: union(a.done, b.done),
    checks: union(a.checks, b.checks),
    badges: union(a.badges, b.badges),
    failed: newer.failed,
    review: newer.review,
    srs: newer.srs,
    attempts,
    xp: Math.max(a.xp, b.xp),
    streak,
    theme: newer.theme,
    size: newer.size,
    modified: Math.max(a.modified, b.modified),
  };
}
