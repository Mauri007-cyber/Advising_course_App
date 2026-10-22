export function Progress({ done, total, label }: { done: number; total: number; label: string }) {
  return <progress value={done} max={total || 1} aria-label={label} />;
}
