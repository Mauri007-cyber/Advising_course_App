export interface Params {
  year: number;
  validFrom: string;
  verified: boolean;
  values: Record<string, number>;
}

const files = import.meta.glob<Params>("../data/params/*.json", { eager: true, import: "default" });

export const paramYears = Object.values(files).map((p) => p.year).sort((a, b) => b - a);
export const getParams = (year: number) => Object.values(files).find((p) => p.year === year);
