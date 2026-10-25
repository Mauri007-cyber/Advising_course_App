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
    summary: "Formas jurídicas, alta censal, Seguridad Social y cierre de una actividad.",
    lessons: [
      { id: "1.1", title: "Formas jurídicas: autónomo o sociedad limitada" },
      { id: "1.2", title: "Alta censal: el modelo 036 y la actividad" },
      { id: "1.3", title: "Encuadramiento: RETA o Régimen General" },
      { id: "1.4", title: "Alta y baja del autónomo en el RETA" },
      { id: "1.5", title: "Cierre de una empresa: bajas y disolución" },
    ],
  },
  {
    id: "m2",
    title: "Laboral, personal y empleabilidad",
    summary: "Empresa y trabajadores ante la Seguridad Social, contratos, nómina, incidencias, extinción y salida profesional.",
    lessons: [
      { id: "2.1", title: "Modalidades de contrato tras la reforma laboral de 2021" },
      { id: "2.2", title: "La nómina: estructura del recibo de salarios" },
      { id: "2.3", title: "Seguros sociales: RLC, RNT y Sistema RED" },
      { id: "2.4", title: "Incapacidad temporal: baja, prestación y duración" },
      { id: "2.5", title: "Despido objetivo: requisitos e indemnización" },
      { id: "2.6", title: "Empleabilidad: currículum, carta y búsqueda de empleo" },
      { id: "2.7", title: "Inscripción de la empresa y cuenta de cotización" },
      { id: "2.8", title: "Afiliación y alta de trabajadores en la Seguridad Social" },
      { id: "2.9", title: "Bajas y variaciones de datos de los trabajadores" },
      { id: "2.10", title: "Comunicación de contratos al servicio de empleo" },
      { id: "2.11", title: "Nómina completa: bases, tipos y retención de IRPF" },
      { id: "2.12", title: "Permisos y licencias retribuidas" },
      { id: "2.13", title: "Nacimiento y cuidado del menor" },
      { id: "2.14", title: "Despido disciplinario y finiquito" },
      { id: "2.15", title: "Accidente de trabajo y enfermedad profesional" },
      { id: "2.16", title: "Jornada, vacaciones y convenios colectivos" },
      { id: "2.17", title: "LinkedIn y presencia profesional" },
    ],
  },
  {
    id: "m3",
    title: "Fiscal, tributación y digitalización",
    summary: "Acceso digital, IVA, IRPF, retenciones, sociedades, procedimiento y facturación electrónica.",
    lessons: [
      { id: "3.1", title: "Acceso digital a la AEAT: certificado, Cl@ve y apoderamientos" },
      { id: "3.2", title: "IVA: soportado, repercutido y modelo 303" },
      { id: "3.3", title: "IVA avanzado: recargo de equivalencia, criterio de caja y prorrata" },
      { id: "3.4", title: "Autónomo en IRPF: módulos o estimación directa" },
      { id: "3.5", title: "Retenciones: modelos 111 y 115, resúmenes 190 y 180" },
      { id: "3.6", title: "Impuesto sobre Sociedades: modelos 200 y 202" },
      { id: "3.7", title: "Declaración de la renta (modelo 100)" },
      { id: "3.8", title: "Modelos informativos: 347 y 349" },
      { id: "3.9", title: "Procedimiento tributario: notificaciones, plazos y recursos" },
      { id: "3.10", title: "Digitalización: factura electrónica, Veri*factu y consultas de la DGT" },
    ],
  },
  {
    id: "m4",
    title: "Contabilidad práctica",
    summary: "Plan General Contable, diario, mayor, cierre, cuentas anuales y análisis.",
    lessons: [
      { id: "4.1", title: "PGC y partida doble" },
      { id: "4.2", title: "Libro diario y mayor" },
      { id: "4.3", title: "Amortizaciones, leasing, factoring y subvenciones" },
      { id: "4.4", title: "Operaciones intracomunitarias e importaciones" },
      { id: "4.5", title: "Cierre, ajuste fiscal y depósito de cuentas" },
      { id: "4.6", title: "Cuentas anuales: balance, pérdidas y ganancias, patrimonio neto, flujos y memoria" },
      { id: "4.7", title: "Análisis económico-financiero" },
      { id: "4.8", title: "Auditoría de cuentas: nociones básicas" },
    ],
  },
  {
    id: "m5",
    title: "Mercantil, IA y operativa del despacho",
    summary: "Constitución de S.L., contratos, RGPD, antiblanqueo, gestión del despacho, IA y plantillas.",
    lessons: [
      { id: "5.1", title: "Constitución de una S.L." },
      { id: "5.2", title: "Contratos mercantiles, pactos de socios y RGPD" },
      { id: "5.3", title: "IA generativa en la asesoría" },
      { id: "5.4", title: "Generador de plantillas documentales" },
      { id: "5.5", title: "Hoja de encargo y honorarios" },
      { id: "5.6", title: "Deontología y secreto profesional" },
      { id: "5.7", title: "Prevención del blanqueo de capitales (Ley 10/2010)" },
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
