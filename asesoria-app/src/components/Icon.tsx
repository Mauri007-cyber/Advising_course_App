const paths: Record<string, string> = {
  m1: "M3 8h18v11H3zM8 8V5h8v3M3 13h18",
  m2: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 19c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 100-5M18 14c2 .5 3 2 3 4",
  m3: "M19 5L5 19M7 9a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z",
  m4: "M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2zM9 9h6M9 13h6",
  m5: "M12 4v16M6 20h12M5 8h14M5 8l-3 7a3 3 0 006 0zM19 8l-3 7a3 3 0 006 0z",
  m6: "M4 5h16v11H9l-5 4z",
  trophy: "M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a3 3 0 003 3M16 6h4v1a3 3 0 01-3 3M12 13v4M8 20h8M10 17h4",
  lock: "M6 11h12v9H6zM8 11V8a4 4 0 018 0v3",
  check: "M5 12l5 5 9-10",
};

export function Icon({ name }: { name: string }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] ?? paths.m4} />
    </svg>
  );
}
