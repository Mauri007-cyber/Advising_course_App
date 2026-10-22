export interface Lesson {
  id: string;
  title: string;
  reviewed?: string;
}

export interface Module {
  id: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: "m1",
    title: "Fundamentos e inicio de actividad",
    summary: "Formas jurídicas, alta censal y Seguridad Social.",
    lessons: [
      { id: "1.1", title: "Formas jurídicas: autónomo o sociedad limitada" },
      { id: "1.2", title: "Alta censal e IAE: modelos 036 y 037" },
      { id: "1.3", title: "Encuadramiento: RETA o Régimen General" },
    ],
  },
  {
    id: "m2",
    title: "Laboral, personal y empleabilidad",
    summary: "Contratos, nóminas, seguros sociales, extinción y salida profesional.",
    lessons: [
      { id: "2.1", title: "Contratación laboral y alta en TGSS" },
      { id: "2.2", title: "La nómina explicada fácil" },
      { id: "2.3", title: "Seguros sociales: RLC, RNC y SILTRA" },
      { id: "2.4", title: "Bajas, IT, permisos y nacimiento" },
      { id: "2.5", title: "Despidos, finiquitos e indemnizaciones" },
      { id: "2.6", title: "Empleabilidad: CV, LinkedIn y búsqueda de empleo" },
    ],
  },
  {
    id: "m3",
    title: "Fiscal, tributación y digitalización",
    summary: "IVA, IRPF, retenciones, sociedades y facturación electrónica.",
    lessons: [
      { id: "3.1", title: "IVA: soportado, repercutido y modelo 303" },
      { id: "3.2", title: "Autónomo en IRPF: módulos o estimación directa" },
      { id: "3.3", title: "Retenciones: modelos 111 y 115, resúmenes 190 y 180" },
      { id: "3.4", title: "Impuesto sobre Sociedades: modelos 200 y 202" },
      { id: "3.5", title: "Renta (modelo 100) y notificaciones de la AEAT" },
      { id: "3.6", title: "Digitalización: factura electrónica, Veri*factu y DGT" },
    ],
  },
  {
    id: "m4",
    title: "Contabilidad práctica",
    summary: "Plan General Contable, diario, mayor y cierre.",
    lessons: [
      { id: "4.1", title: "PGC y partida doble" },
      { id: "4.2", title: "Libro diario y mayor" },
      { id: "4.3", title: "Amortizaciones, leasing, factoring y subvenciones" },
      { id: "4.4", title: "Operaciones intracomunitarias e importaciones" },
      { id: "4.5", title: "Cierre, ajuste fiscal y depósito de cuentas" },
    ],
  },
  {
    id: "m5",
    title: "Mercantil, IA y operativa del despacho",
    summary: "Constitución de S.L., contratos, RGPD, IA y plantillas.",
    lessons: [
      { id: "5.1", title: "Constitución de una S.L." },
      { id: "5.2", title: "Contratos mercantiles, pactos de socios y RGPD" },
      { id: "5.3", title: "IA generativa en la asesoría" },
      { id: "5.4", title: "Generador de plantillas documentales" },
    ],
  },
  {
    id: "m6",
    title: "Simulador de clientes",
    summary: "Casos prácticos con clientes ficticios.",
    lessons: [
      { id: "6.1", title: "Caso 1: contratar a un familiar del autónomo" },
      { id: "6.2", title: "Caso 2: requerimiento de IVA de la AEAT" },
      { id: "6.3", title: "Caso 3: despido objetivo y cálculo de indemnización" },
      { id: "6.4", title: "Caso 4: cierre contable con ajustes fiscales" },
    ],
  },
];

export const allLessons = modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })));
export const findLesson = (id: string) => allLessons.find((l) => l.id === id);
export const findModule = (id: string) => modules.find((m) => m.id === id);
