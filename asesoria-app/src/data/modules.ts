export type Level = 1 | 2 | 3;

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
}

export interface Module {
  id: string;
  n: number;
  level: Level;
  release: number;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export const CURRENT_RELEASE = 1;
export const EXAM_MINUTES = 15;

export const levelNames: Record<Level, string> = {
  1: "Nivel 1 · Fundamentos",
  2: "Nivel 2 · Profesional",
  3: "Nivel 3 · Experto",
};

export const modules: Module[] = [
  {
    id: "m0",
    n: 0,
    level: 1,
    release: 2,
    title: "Fundamentos jurídicos, económicos y método",
    summary: "Normas, BOE, plazos, matemáticas y método para resolver consultas.",
    lessons: [
      { id: "x0-1", title: "Normas y fuentes del Derecho: la jerarquía normativa", minutes: 45 },
      { id: "x0-2", title: "Cómo leer el BOE y comprobar si una norma está vigente", minutes: 60 },
      { id: "x0-4", title: "Hechos, opiniones y datos: cómo plantear una consulta", minutes: 45 },
      { id: "x0-5", title: "Porcentajes, proporciones y tipos: las matemáticas del asesor", minutes: 60 },
      { id: "x0-6", title: "Vocabulario económico: ingresos, gastos, patrimonio, caja y beneficio", minutes: 60 },
      { id: "x0-7", title: "Plazos: días naturales, días hábiles y meses", minutes: 45 },
      { id: "x0-8", title: "El método de resolución de consultas", minutes: 60 },
    ],
  },
  {
    id: "m1",
    n: 1,
    level: 1,
    release: 1,
    title: "Inicio de actividad",
    summary: "Formas jurídicas, alta censal, Seguridad Social del autónomo y cierre.",
    lessons: [
      { id: "1.1", title: "Formas jurídicas: autónomo o sociedad limitada", minutes: 60 },
      { id: "1.2", title: "Alta censal: el modelo 036 y la actividad", minutes: 60 },
      { id: "1.3", title: "Encuadramiento: RETA o Régimen General", minutes: 60 },
      { id: "1.4", title: "Alta y baja del autónomo en el RETA", minutes: 60 },
      { id: "1.5", title: "Cierre de una empresa: bajas y disolución", minutes: 75 },
    ],
  },
  {
    id: "m2",
    n: 2,
    level: 1,
    release: 1,
    title: "Laboral I: empresa, contratos, Seguridad Social y nómina",
    summary: "De inscribir la empresa a calcular la nómina completa.",
    lessons: [
      { id: "2.1", title: "Modalidades de contrato tras la reforma laboral de 2021", minutes: 60 },
      { id: "2.7", title: "Inscripción de la empresa y cuenta de cotización", minutes: 60 },
      { id: "2.8", title: "Afiliación y alta de trabajadores en la Seguridad Social", minutes: 60 },
      { id: "2.9", title: "Bajas y variaciones de datos de los trabajadores", minutes: 60 },
      { id: "2.10", title: "Comunicación de contratos al servicio de empleo", minutes: 45 },
      { id: "2.2", title: "La nómina: estructura del recibo de salarios", minutes: 60 },
      { id: "2.3", title: "Seguros sociales: RLC, RNT y Sistema RED", minutes: 75 },
      { id: "2.11", title: "Nómina completa: bases, tipos y retención de IRPF", minutes: 90 },
    ],
  },
  {
    id: "m3",
    n: 3,
    level: 1,
    release: 2,
    title: "Contabilidad I: fundamentos y ciclo contable",
    summary: "Patrimonio, PGC, partida doble, diario, mayor y operaciones corrientes.",
    lessons: [
      { id: "x3-1", title: "Qué es la contabilidad: activo, pasivo y patrimonio neto", minutes: 60 },
      { id: "x3-2", title: "El Plan General de Contabilidad: marco conceptual y cuadro de cuentas", minutes: 75 },
      { id: "x3-3", title: "Partida doble: cargo y abono", minutes: 75 },
      { id: "x3-4", title: "Libro diario y libro mayor", minutes: 75 },
      { id: "x3-5", title: "Compras, ventas y existencias", minutes: 90 },
      { id: "x3-6", title: "IVA en la contabilidad, cobros y pagos", minutes: 75 },
      { id: "x3-7", title: "Balance de sumas y saldos", minutes: 60 },
    ],
  },
  {
    id: "m4",
    n: 4,
    level: 1,
    release: 2,
    title: "Fiscal I: sistema tributario, acceso digital, facturación e IVA",
    summary: "El impuesto que más se usa en el día a día de una gestoría.",
    lessons: [
      { id: "x4-1", title: "Acceso digital a la AEAT: certificado, Cl@ve y apoderamientos", minutes: 60 },
      { id: "x4-2", title: "El sistema tributario: tributo, hecho imponible, devengo, base, tipo y cuota", minutes: 75 },
      { id: "x4-3", title: "Obligados tributarios, domicilio fiscal y residencia", minutes: 60 },
      { id: "x4-4", title: "IVA I: hecho imponible, sujetos y devengo", minutes: 75 },
      { id: "x4-5", title: "IVA II: base imponible, tipos y exenciones", minutes: 75 },
      { id: "x4-6", title: "IVA III: deducciones y modelo 303", minutes: 90 },
      { id: "x4-7", title: "IVA IV: recargo de equivalencia, criterio de caja y régimen simplificado", minutes: 75 },
      { id: "x4-8", title: "Facturación: tipos de factura, contenido y rectificativas", minutes: 75 },
      { id: "x4-9", title: "Factura electrónica y Veri*factu: calendario y requisitos", minutes: 60 },
    ],
  },
  {
    id: "m5",
    n: 5,
    level: 2,
    release: 3,
    title: "Fiscal II: IRPF y retenciones",
    summary: "Rendimientos, cálculo de la cuota, pagos fraccionados y retenciones.",
    lessons: [
      { id: "x5-1", title: "IRPF I: sujetos, residencia y periodo impositivo", minutes: 60 },
      { id: "x5-2", title: "IRPF II: rendimientos del trabajo", minutes: 75 },
      { id: "x5-3", title: "IRPF III: capital inmobiliario y capital mobiliario", minutes: 75 },
      { id: "x5-4", title: "IRPF IV: actividades económicas, estimación directa y objetiva", minutes: 90 },
      { id: "x5-5", title: "IRPF V: ganancias y pérdidas patrimoniales", minutes: 75 },
      { id: "x5-6", title: "IRPF VI: base, cuota, deducciones y modelo 100", minutes: 90 },
      { id: "x5-7", title: "Retenciones: modelos 111, 115, 190 y 180", minutes: 75 },
    ],
  },
  {
    id: "m6",
    n: 6,
    level: 2,
    release: 3,
    title: "Fiscal III: Impuesto sobre Sociedades y modelos informativos",
    summary: "De resultado contable a base imponible, y las declaraciones informativas.",
    lessons: [
      { id: "x6-1", title: "Impuesto sobre Sociedades I: sujetos y periodo impositivo", minutes: 60 },
      { id: "x6-2", title: "Impuesto sobre Sociedades II: del resultado contable a la base imponible", minutes: 90 },
      { id: "x6-3", title: "Impuesto sobre Sociedades III: cuota, deducciones y bonificaciones", minutes: 75 },
      { id: "x6-4", title: "Impuesto sobre Sociedades IV: modelos 200 y 202", minutes: 75 },
      { id: "x6-6", title: "Modelos informativos: 347 y 349", minutes: 60 },
    ],
  },
  {
    id: "m7",
    n: 7,
    level: 2,
    release: 4,
    title: "Laboral II: incidencias, permisos y extinción",
    summary: "Bajas, permisos, jornada, convenios y extinción del contrato.",
    lessons: [
      { id: "2.4", title: "Incapacidad temporal: baja, prestación y duración", minutes: 60 },
      { id: "x7-1", title: "Accidente de trabajo y enfermedad profesional", minutes: 60 },
      { id: "2.12", title: "Permisos y licencias retribuidas", minutes: 60 },
      { id: "2.13", title: "Nacimiento y cuidado del menor", minutes: 60 },
      { id: "x7-2", title: "Jornada, descansos y horas extraordinarias", minutes: 60 },
      { id: "x7-3", title: "Vacaciones y calendario laboral", minutes: 60 },
      { id: "x7-4", title: "Convenios colectivos: ámbito, jerarquía y cómo consultarlos", minutes: 60 },
      { id: "x7-5", title: "Suspensión del contrato y modificaciones sustanciales", minutes: 60 },
      { id: "2.5", title: "Despido objetivo: requisitos e indemnización", minutes: 60 },
      { id: "2.14", title: "Despido disciplinario y finiquito", minutes: 75 },
      { id: "x7-6", title: "ERTE y Mecanismo RED", minutes: 60 },
    ],
  },
  {
    id: "m8",
    n: 8,
    level: 2,
    release: 4,
    title: "Laboral III: prestaciones y cumplimiento laboral",
    summary: "Desempleo, pensiones, contratos específicos y obligaciones de la empresa.",
    lessons: [
      { id: "x8-1", title: "Prestación por desempleo", minutes: 60 },
      { id: "x8-2", title: "Pensiones: jubilación, incapacidad permanente y viudedad", minutes: 75 },
      { id: "x8-3", title: "Contratos a tiempo parcial, fijo-discontinuo y formativos", minutes: 75 },
      { id: "x8-5", title: "Registro de jornada, igualdad, canal de denuncias y prevención de riesgos", minutes: 75 },
      { id: "x8-6", title: "Inspección de Trabajo y régimen sancionador", minutes: 60 },
      { id: "x8-7", title: "Nóminas especiales: atrasos, retribución en especie y situaciones particulares", minutes: 90 },
    ],
  },
  {
    id: "m9",
    n: 9,
    level: 2,
    release: 5,
    title: "Contabilidad II: operaciones, cierre y cuentas anuales",
    summary: "Inmovilizado, financiación, cierre, impuesto y cuentas anuales.",
    lessons: [
      { id: "x9-1", title: "Inmovilizado y amortizaciones", minutes: 90 },
      { id: "x9-2", title: "Personal y Administraciones Públicas", minutes: 75 },
      { id: "x9-3", title: "Financiación: préstamos, leasing y factoring", minutes: 90 },
      { id: "x9-4", title: "Subvenciones, provisiones, periodificaciones y fondos propios", minutes: 90 },
      { id: "x9-6", title: "Operaciones intracomunitarias, importaciones y moneda extranjera", minutes: 75 },
      { id: "x9-7", title: "Cierre del ejercicio: regularización", minutes: 75 },
      { id: "x9-8", title: "Impuesto sobre beneficios: contabilidad y ajuste fiscal", minutes: 75 },
      { id: "x9-9", title: "Cuentas anuales: balance, pérdidas y ganancias, patrimonio neto, flujos y memoria", minutes: 90 },
      { id: "x9-10", title: "Libros contables, legalización y depósito de cuentas", minutes: 60 },
    ],
  },
  {
    id: "m10",
    n: 10,
    level: 2,
    release: 5,
    title: "Procedimiento tributario y defensa del contribuyente",
    summary: "Notificaciones, plazos, inspección, recaudación, sanciones y recursos.",
    lessons: [
      { id: "x10-1", title: "Notificaciones, plazos y derechos del contribuyente", minutes: 75 },
      { id: "x10-2", title: "Gestión: verificación de datos y comprobación limitada", minutes: 60 },
      { id: "x10-3", title: "Inspección: inicio, actas y derechos", minutes: 75 },
      { id: "x10-4", title: "Recaudación: apremio, aplazamientos y fraccionamientos", minutes: 75 },
      { id: "x10-5", title: "Sanciones tributarias y delito fiscal", minutes: 60 },
      { id: "x10-6", title: "Recursos: reposición y reclamación económico-administrativa", minutes: 75 },
      { id: "x10-7", title: "Redactar alegaciones y recursos", minutes: 75 },
    ],
  },
  {
    id: "m11",
    n: 11,
    level: 2,
    release: 6,
    title: "Mercantil y societario",
    summary: "Constitución, órganos, contratos, libros y cuentas de la sociedad.",
    lessons: [
      { id: "x11-1", title: "Constitución de una S.L.", minutes: 75 },
      { id: "x11-2", title: "Estatutos y órganos de la sociedad", minutes: 60 },
      { id: "x11-3", title: "Contratos mercantiles y pactos de socios", minutes: 60 },
      { id: "x11-4", title: "Libros societarios y acuerdos sociales", minutes: 60 },
      { id: "x11-5", title: "Formulación, aprobación y depósito de las cuentas anuales", minutes: 60 },
      { id: "x11-6", title: "Remuneración de administradores y socios", minutes: 60 },
    ],
  },
  {
    id: "m12",
    n: 12,
    level: 2,
    release: 6,
    title: "Gestión del despacho, ética y salida profesional",
    summary: "Cómo organizar un despacho, cumplir con la ley y buscar trabajo.",
    lessons: [
      { id: "x12-1", title: "Hoja de encargo y honorarios", minutes: 60 },
      { id: "x12-2", title: "Deontología y secreto profesional", minutes: 45 },
      { id: "x12-3", title: "Prevención del blanqueo de capitales (Ley 10/2010)", minutes: 75 },
      { id: "x12-4", title: "Protección de datos en el despacho", minutes: 60 },
      { id: "x12-5", title: "Organización de la cartera: calendario fiscal y laboral", minutes: 60 },
      { id: "x12-6", title: "IA generativa y plantillas documentales en la asesoría", minutes: 60 },
      { id: "2.6", title: "Empleabilidad: currículum, carta y búsqueda de empleo", minutes: 60 },
      { id: "x12-7", title: "LinkedIn y presencia profesional", minutes: 45 },
    ],
  },
  {
    id: "m13",
    n: 13,
    level: 3,
    release: 7,
    title: "Fiscalidad patrimonial y territorial",
    summary: "Sucesiones, transmisiones, patrimonio, tributos locales y regímenes forales.",
    lessons: [
      { id: "x13-1", title: "Impuesto sobre Sucesiones y Donaciones I: hecho imponible y base", minutes: 75 },
      { id: "x13-2", title: "Impuesto sobre Sucesiones y Donaciones II: reducciones y comunidades", minutes: 75 },
      { id: "x13-3", title: "Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados", minutes: 75 },
      { id: "x13-4", title: "Impuesto sobre el Patrimonio", minutes: 60 },
      { id: "x13-5", title: "Tributos locales: IBI, IAE, IVTM, ICIO y plusvalía municipal", minutes: 75 },
      { id: "x13-6", title: "Regímenes forales y Canarias", minutes: 75 },
    ],
  },
  {
    id: "m14",
    n: 14,
    level: 3,
    release: 7,
    title: "Fiscalidad internacional y Unión Europea",
    summary: "Residencia, convenios, no residentes, IVA internacional y aduanas.",
    lessons: [
      { id: "x14-1", title: "Residencia fiscal y convenios para evitar la doble imposición", minutes: 90 },
      { id: "x14-2", title: "Impuesto sobre la Renta de no Residentes", minutes: 75 },
      { id: "x14-3", title: "IVA internacional: operaciones intracomunitarias, importaciones y ventanilla única", minutes: 90 },
      { id: "x14-4", title: "Operaciones vinculadas y precios de transferencia", minutes: 75 },
      { id: "x14-5", title: "Movilidad internacional de trabajadores", minutes: 75 },
      { id: "x14-6", title: "Aduanas e impuestos especiales", minutes: 75 },
    ],
  },
  {
    id: "m15",
    n: 15,
    level: 3,
    release: 8,
    title: "Análisis financiero, auditoría y planificación",
    summary: "Lectura de cuentas, auditoría y decisiones fiscales y empresariales.",
    lessons: [
      { id: "x15-1", title: "Análisis económico-financiero", minutes: 90 },
      { id: "x15-2", title: "Auditoría de cuentas: nociones básicas", minutes: 60 },
      { id: "x15-3", title: "Planificación fiscal lícita: método y límites", minutes: 75 },
      { id: "x15-4", title: "Autónomo o sociedad: comparación con cifras reales", minutes: 90 },
      { id: "x15-5", title: "Reestructuraciones: fusiones y escisiones", minutes: 75 },
      { id: "x15-6", title: "Empresa familiar y sucesión", minutes: 75 },
      { id: "x15-7", title: "Fiscalidad de inversiones y criptoactivos", minutes: 75 },
    ],
  },
  {
    id: "m16",
    n: 16,
    level: 3,
    release: 8,
    title: "Compliance y herramientas digitales",
    summary: "Control interno, responsabilidad profesional y automatización con control.",
    lessons: [
      { id: "x16-1", title: "Compliance tributario y control interno", minutes: 60 },
      { id: "x16-2", title: "Ética, límites y responsabilidad profesional", minutes: 60 },
      { id: "x16-3", title: "Hojas de cálculo para el asesor", minutes: 90 },
      { id: "x16-5", title: "Verificar con fuentes el trabajo hecho con IA", minutes: 60 },
    ],
  },
  {
    id: "m17",
    n: 17,
    level: 3,
    release: 8,
    title: "Casos integrados y proyecto final",
    summary: "Casos de cliente de principio a fin y despacho simulado de un año.",
    lessons: [
      { id: "6.1", title: "Caso 1: contratar a un familiar del autónomo", minutes: 75 },
      { id: "6.2", title: "Caso 2: requerimiento de IVA de la AEAT", minutes: 75 },
      { id: "6.3", title: "Caso 3: despido objetivo y cálculo de indemnización", minutes: 75 },
      { id: "6.4", title: "Caso 4: cierre contable con ajustes fiscales", minutes: 75 },
      { id: "x17-1", title: "Caso 5: herencia con bienes en varias comunidades", minutes: 75 },
      { id: "x17-2", title: "Caso 6: cliente no residente", minutes: 75 },
      { id: "x17-3", title: "Proyecto final: despacho fiscal simulado", minutes: 150 },
    ],
  },
];

export const isReleased = (m: Module) => m.release <= CURRENT_RELEASE;

export const allLessons = modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })));
export const releasedLessons = modules.filter(isReleased).flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })));
export const findLesson = (id: string) => allLessons.find((l) => l.id === id);
export const findModule = (id: string) => modules.find((m) => m.id === id);

export function lessonLabel(id: string) {
  const m = modules.find((x) => x.lessons.some((l) => l.id === id));
  return m ? `${m.n}.${m.lessons.findIndex((l) => l.id === id) + 1}` : id;
}

export const resolveRefs = (text: string) => text.replace(/\[\[([^\]]+)\]\]/g, (_, id: string) => lessonLabel(id));

export const moduleMinutes = (m: Module) => m.lessons.reduce((a, l) => a + l.minutes, 0) + EXAM_MINUTES;
export const totalMinutes = modules.reduce((a, m) => a + moduleMinutes(m), 0);
export const releasedMinutes = modules.filter(isReleased).reduce((a, m) => a + moduleMinutes(m), 0);

export function formatHours(minutes: number) {
  const h = minutes / 60;
  return `${h >= 10 ? Math.round(h) : Math.round(h * 10) / 10} h`.replace(".", ",");
}
