import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const m1Lessons: Record<string, LessonContent> = {
  "1.1": {
    intro:
      "Marta quiere abrir un taller de reformas. Antes de comprar herramientas debe decidir quién será el dueño del negocio: ella misma o una sociedad creada para eso. Esa decisión afecta a sus impuestos, a sus cuotas y, sobre todo, a su riesgo personal.",
    steps: [
      {
        title: "Autónomo (persona física)",
        body: [
          "Eres tú quien ejerce la actividad: no hay separación entre tú y el negocio.",
          "Respondes de las deudas con todo tu patrimonio, presente y futuro.",
          "Tributas por IRPF con tarifa progresiva y cotizas en el RETA.",
        ],
      },
      {
        title: "Sociedad Limitada (SL)",
        body: [
          "Es una persona jurídica distinta de sus socios, con patrimonio propio.",
          "Como regla general, los socios responden solo hasta lo que aportan.",
          "El capital mínimo es de 1 €. Por debajo de 3.000 € rigen cautelas extra: reserva legal reforzada y responsabilidad de los socios en una liquidación insuficiente.",
          "La sociedad tributa por Impuesto sobre Sociedades, no por IRPF.",
        ],
      },
      {
        title: "Cómo decidir",
        body: [
          "Riesgo: cuanto mayor es, más protege la SL.",
          "Beneficios: la carga fiscal cambia con el volumen. Calcúlala con números reales.",
          "Gestión: la SL exige escritura, registro, contabilidad formal y cuentas anuales.",
          "Avales: bancos y proveedores suelen pedir garantías personales, que reducen la protección.",
        ],
      },
    ],
    example: {
      title: "Marta y su taller",
      body: [
        "Marta prevé facturar 60.000 € al año y comprar materiales caros a crédito.",
        "Como autónoma, si no paga a un proveedor, este puede reclamarle con sus bienes personales.",
        "Con una SL, responde por lo aportado a la sociedad, salvo los avales que firme.",
        "Si su facturación fuese pequeña y con poco riesgo, empezar como autónoma sería más simple y barato.",
      ],
    },
    tips: [
      { kind: "consejo", text: "Compara siempre con las cifras del cliente. No existe una forma jurídica mejor en abstracto." },
      { kind: "error", text: "Creer que la SL elimina todo el riesgo personal. Los avales y ciertas responsabilidades de administrador siguen existiendo." },
      { kind: "clave", text: "Capital mínimo de una SL: 1 €. Con menos de 3.000 € hay reglas adicionales." },
    ],
    law: [
      "Código Civil, art. 1911",
      "Ley de Sociedades de Capital (RDL 1/2010), art. 4",
      "Ley 35/2006 (IRPF) y Ley 27/2014 (Impuesto sobre Sociedades)",
    ],
    check: [
      {
        id: "c1.1-1", lessonId: "1.1", kind: "choice",
        prompt: "¿Cuál es la principal ventaja de una SL frente a un autónomo?",
        options: ["Paga siempre menos impuestos", "Limita la responsabilidad de los socios", "No necesita contabilidad", "No tiene trámites de constitución"],
        answer: 1,
        explain: "La SL es una persona jurídica con patrimonio propio, por eso los socios responden, en general, solo con lo aportado.",
        law: "Ley de Sociedades de Capital",
      },
      {
        id: "c1.1-2", lessonId: "1.1", kind: "tf",
        prompt: "Una SL puede constituirse con un capital de 1 €.",
        answer: true,
        explain: "Desde la Ley 18/2022 el mínimo es 1 €, con cautelas adicionales mientras el capital sea inferior a 3.000 €.",
        law: "Ley de Sociedades de Capital, art. 4",
      },
      {
        id: "c1.1-3", lessonId: "1.1", kind: "choice",
        prompt: "Un autónomo persona física cotiza, por su actividad, en:",
        options: ["Régimen General", "RETA", "Ninguno", "Solo en el IAE"],
        answer: 1,
        explain: "El trabajador por cuenta propia se encuadra en el Régimen Especial de Trabajadores Autónomos (RETA).",
      },
      {
        id: "c1.1-4", lessonId: "1.1", kind: "number",
        prompt: "Una SL tiene 3.000 € de capital y un socio posee el 25 %. ¿Cuánto aportó?",
        answer: 750, unit: "€",
        explain: "3.000 × 0,25 = 750 €.",
      },
    ],
  },
};

export const m1Bank: Question[] = [
  {
    id: "e1-01", lessonId: "1.1", kind: "choice",
    prompt: "¿Con qué patrimonio responde de las deudas del negocio un autónomo persona física?",
    options: ["Solo con el material del negocio", "Con todo su patrimonio, presente y futuro", "Solo con el capital social", "Con ninguno"],
    answer: 1,
    explain: "No existe separación entre el autónomo y su negocio: responde con todos sus bienes.",
    law: "Código Civil, art. 1911",
  },
  {
    id: "e1-02", lessonId: "1.1", kind: "tf",
    prompt: "El capital social mínimo para constituir una SL es de 3.000 €.",
    answer: false,
    explain: "Era la cifra anterior. Hoy el mínimo es 1 €, aunque por debajo de 3.000 € se aplican cautelas adicionales.",
    law: "Ley 18/2022 y Ley de Sociedades de Capital, art. 4",
  },
  {
    id: "e1-03", lessonId: "1.1", kind: "number",
    prompt: "Una SL tiene un capital de 3.000 € y un socio posee el 40 % de las participaciones. ¿Cuántos euros aportó?",
    answer: 1200, unit: "€",
    explain: "3.000 × 0,40 = 1.200 €.",
  },
  {
    id: "e1-04", lessonId: "1.1", kind: "choice",
    scenario: "Marcos ofrece reformas y quiere que un impago grave no afecte a su patrimonio personal.",
    prompt: "¿Qué forma jurídica encaja mejor con ese objetivo?",
    options: ["Autónomo persona física", "Sociedad Limitada", "Ninguna: siempre responde igual", "Trabajar sin darse de alta"],
    answer: 1,
    explain: "La SL separa el patrimonio de la sociedad del de los socios. Ojo con los avales personales que puedan exigirle.",
  },
  {
    id: "e1-05", lessonId: "1.1", kind: "tf",
    prompt: "Los socios de una SL responden, como regla general, con su patrimonio personal de las deudas de la sociedad.",
    answer: false,
    explain: "Como regla general responde la sociedad con su propio patrimonio. Las excepciones son los avales y supuestos concretos de responsabilidad.",
    law: "Ley de Sociedades de Capital",
  },
  {
    id: "e1-06", lessonId: "1.2", kind: "choice",
    prompt: "¿Para qué sirve el modelo 036?",
    options: ["Declarar el IVA trimestral", "Comunicar altas, modificaciones y bajas en el censo de empresarios, profesionales y retenedores", "Pagar retenciones del trabajo", "Presentar las cuentas anuales"],
    answer: 1,
    explain: "Es la declaración censal: sirve para dar de alta la actividad y comunicar cualquier variación posterior.",
    law: "Normativa censal de la AEAT",
  },
  {
    id: "e1-07", lessonId: "1.2", kind: "tf",
    prompt: "Las personas físicas están exentas del Impuesto sobre Actividades Económicas (IAE).",
    answer: true,
    explain: "Las personas físicas están exentas. También lo están las sociedades con cifra de negocios inferior a 1.000.000 €.",
    law: "Texto refundido de la Ley de Haciendas Locales, art. 82",
  },
  {
    id: "e1-08", lessonId: "1.2", kind: "choice",
    prompt: "¿Qué indica el epígrafe del IAE?",
    options: ["El importe de la cuota de autónomos", "La actividad económica concreta que se ejerce", "El tipo de IVA aplicable", "El régimen de Seguridad Social"],
    answer: 1,
    explain: "El epígrafe clasifica la actividad. Se indica al darse de alta en el censo.",
  },
  {
    id: "e1-09", lessonId: "1.2", kind: "choice",
    scenario: "Lucía, autónoma, cambia su domicilio fiscal a otra ciudad.",
    prompt: "¿Qué debe hacer ante la Agencia Tributaria?",
    options: ["Nada: se actualiza solo", "Comunicar la modificación mediante la declaración censal", "Darse de baja y volver a darse de alta en el IAE", "Presentar el modelo 303"],
    answer: 1,
    explain: "Cualquier variación de los datos censales se comunica con la declaración censal de modificación.",
  },
  {
    id: "e1-10", lessonId: "1.3", kind: "choice",
    scenario: "Carlos trabaja como empleado en una SL. No es socio ni administrador.",
    prompt: "¿En qué régimen de la Seguridad Social cotiza?",
    options: ["Régimen General", "RETA", "No cotiza", "Régimen Especial del Mar"],
    answer: 0,
    explain: "Los trabajadores por cuenta ajena se encuadran en el Régimen General.",
    law: "Ley General de la Seguridad Social (RDL 8/2015)",
  },
  {
    id: "e1-11", lessonId: "1.3", kind: "tf",
    prompt: "Un autónomo persona física que trabaja de forma habitual y por cuenta propia debe estar dado de alta en el RETA.",
    answer: true,
    explain: "La habitualidad y el trabajo por cuenta propia son los criterios que obligan al encuadramiento en el RETA.",
    law: "Ley General de la Seguridad Social, art. 305",
  },
  {
    id: "e1-12", lessonId: "1.3", kind: "choice",
    prompt: "Desde 2023, la cuota mensual de los autónomos depende de:",
    options: ["Una cantidad fija igual para todos", "Sus rendimientos netos reales, por tramos", "El número de clientes", "La forma jurídica elegida"],
    answer: 1,
    explain: "El sistema de cotización por ingresos reales fija la base según el rendimiento neto, dentro de una tabla de tramos.",
    law: "Real Decreto-ley 13/2022",
  },
];
