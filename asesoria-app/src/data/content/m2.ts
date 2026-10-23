import type { Question } from "../questions";
import type { LessonContent } from "./types";

const D = "2026-10-23";

export const m2Lessons: Record<string, LessonContent> = {
  "2.1": {
    intro:
      "Marta necesita ayuda en el taller y piensa en contratar a Carlos. Antes de firmar nada, tiene que decidir qué tipo de contrato corresponde. Desde la reforma laboral de finales de 2021, esa decisión tiene menos opciones y más requisitos que antes.",
    steps: [
      {
        title: "La regla general: contrato indefinido",
        body: [
          "El Real Decreto-ley 32/2021, de 28 de diciembre, modificó el Estatuto de los Trabajadores. Desde entonces el contrato de trabajo se presume concertado por tiempo indefinido.",
          "La contratación temporal es la excepción y debe justificarse.",
        ],
      },
      {
        title: "Contrato de duración determinada: solo dos causas",
        body: [
          "Solo puede celebrarse por circunstancias de la producción o por sustitución de la persona trabajadora.",
          "Las modalidades de obra o servicio determinado, eventual e interinidad se suprimieron y se simplificaron en esas dos.",
          "Para que la causa de temporalidad sea válida hay que especificar con precisión en el contrato la causa habilitante, las circunstancias concretas que la justifican y su conexión con la duración prevista.",
        ],
      },
      {
        title: "Circunstancias de la producción",
        body: [
          "Se entienden como el aumento ocasional e imprevisible de la actividad o las oscilaciones que generan un desajuste temporal de empleo en la empresa.",
          "También cubre situaciones ocasionales, previsibles y de duración reducida y delimitada.",
        ],
      },
      {
        title: "Sustitución de la persona trabajadora",
        body: ["Permite sustituir a una persona con derecho a reserva de su puesto. El contrato debe indicar el nombre de la persona sustituida y la causa de la sustitución."],
      },
      {
        title: "Contrato formativo",
        body: [
          "La reforma lo organizó en dos modalidades: el contrato de formación en alternancia y el contrato para la obtención de la práctica profesional adecuada al nivel de estudios.",
          "La nueva regulación del contrato formativo entró en vigor el 31 de marzo de 2022.",
        ],
      },
      {
        title: "Encadenar contratos temporales",
        body: ["La reforma endureció los efectos de encadenar contratos de duración determinada. Según los análisis consultados, quien acumule más de 18 meses en un periodo de 24 con la misma empresa mediante varios contratos temporales pasa a ser fijo. Confirma el supuesto exacto en el texto vigente del Estatuto antes de aplicarlo."],
      },
    ],
    example: {
      title: "Marta contrata a Carlos",
      body: [
        "Marta quiere un empleado estable para el día a día: el contrato será indefinido, que es la regla general.",
        "Si recibe un encargo puntual que exige refuerzo temporal, podría acudir a un contrato por circunstancias de la producción, explicando en el contrato la causa, las circunstancias concretas y su conexión con la duración.",
        "Si Carlos va a cubrir la baja de otra persona que conserva su puesto, el contrato será de sustitución y deberá nombrar a la persona sustituida y la causa.",
        "Ya no puede usar los antiguos contratos de obra o servicio ni de interinidad: esas modalidades dejaron de existir como tales.",
      ],
    },
    tips: [
      { kind: "consejo", text: "Ante un contrato temporal, comprueba antes de firmar que el texto detalla la causa, las circunstancias concretas y su relación con la duración." },
      { kind: "error", text: "Usar modelos de contrato anteriores a 2022. Mencionan obra o servicio, eventual o interinidad, modalidades que ya no existen." },
      { kind: "clave", text: "Presunción de contrato indefinido; temporal solo por circunstancias de la producción o sustitución." },
    ],
    law: [
      "Estatuto de los Trabajadores (RDL 2/2015), modificado por el Real Decreto-ley 32/2021, de 28 de diciembre",
    ],
    sources: [
      { title: "Gobierno Vasco: resumen del RDL 32/2021 para empresas", url: "https://www.euskadi.eus/contenidos/informacion/contratos_reforma_laboral/es_def/adjuntos/REFORMA-LABORAL-RDL-32-2021-RESUMEN-PARA-EMPRESAS.pdf", accessed: D, official: true },
      { title: "Colegio de la Abogacía de Barcelona: resumen del RDL 32/2021", url: "https://www.icab.es/es/actualidad/noticias/noticia/Real-Decreto-ley-32-2021-de-28-de-diciembre-de-medidas-urgentes-para-la-reforma-laboral-la-garantia-de-la-estabilidad-en-el-empleo-y-la-transformacion-del-mercado-de-trabajo/", accessed: D, official: false },
      { title: "Consejo General de Colegios de Gestores: la reforma laboral del RDL 32/2021", url: "https://www.consejogestores.org/?p=7979", accessed: D, official: false },
      { title: "Andersen: las 12 novedades de la reforma laboral", url: "https://es.andersen.com/blog/2021/12/30/las-12-novedades-de-la-reforma-laboral/", accessed: D, official: false },
      { title: "Wolters Kluwer: tipos de contrato de trabajo tras la reforma laboral", url: "https://www.wolterskluwer.com/es-es/expert-insights/tipos-de-contrato-de-trabajo-reforma", accessed: D, official: false },
    ],
    check: [
      {
        id: "c2.1-1", lessonId: "2.1", kind: "choice",
        prompt: "Tras el Real Decreto-ley 32/2021, ¿cómo se presume concertado el contrato de trabajo?",
        options: ["Por tiempo indefinido", "Por seis meses", "Por obra o servicio", "Según elija la empresa"],
        answer: 0,
        explain: "La reforma estableció la presunción de contrato por tiempo indefinido.",
        law: "ET, modificado por el RDL 32/2021",
      },
      {
        id: "c2.1-2", lessonId: "2.1", kind: "tf",
        prompt: "El contrato de obra o servicio determinado sigue siendo una modalidad independiente tras la reforma de 2021.",
        answer: false,
        explain: "Se suprimió, junto con el eventual y la interinidad, y se simplificó en dos causas: circunstancias de la producción y sustitución.",
        law: "RDL 32/2021",
      },
      {
        id: "c2.1-3", lessonId: "2.1", kind: "choice",
        prompt: "En un contrato de sustitución de una persona con reserva de puesto, ¿qué debe indicar el contrato?",
        options: ["El nombre de la persona sustituida y la causa de la sustitución", "Solo la fecha de fin", "El salario de la persona sustituida", "Nada especial"],
        answer: 0,
        explain: "Hay que especificar el nombre de la persona sustituida y la causa de la sustitución.",
        law: "RDL 32/2021",
      },
      {
        id: "c2.1-4", lessonId: "2.1", kind: "choice",
        prompt: "El contrato de duración determinada solo puede celebrarse por:",
        options: ["Circunstancias de la producción o sustitución", "Cualquier causa que acuerden las partes", "Obra o servicio, eventual o interinidad", "Voluntad del trabajador"],
        answer: 0,
        explain: "Tras la reforma solo existen esas dos causas.",
        law: "RDL 32/2021",
      },
    ],
  },
  "2.2": {
    intro:
      "Carlos cobra a final de mes y recibe un papel con muchas columnas: la nómina. Entender cada bloque te permite explicárselo a un cliente y detectar errores. En esta lección ves la estructura legal del recibo de salarios y sus reglas; las cifras concretas de cotización y retención se calculan en lecciones posteriores.",
    steps: [
      {
        title: "Qué es el recibo de salarios",
        body: [
          "Es el justificante del pago del salario. El art. 29.1 del Estatuto de los Trabajadores dispone que se ajuste al modelo aprobado por el ministerio competente, salvo que un convenio colectivo o un acuerdo entre la empresa y los representantes de los trabajadores establezca otro con la debida claridad y separación de percepciones y deducciones.",
          "El modelo vigente procede de la Orden de 27 de diciembre de 1994, cuyo anexo modificó la Orden ESS/2098/2014, de 6 de noviembre.",
        ],
      },
      {
        title: "Estructura del recibo",
        body: [
          "Devengos: lo que el trabajador percibe.",
          "Deducciones: lo que se le descuenta.",
          "Líquido total a percibir: devengos menos deducciones.",
          "Un bloque aparte con la determinación de las bases de cotización a la Seguridad Social y los conceptos de recaudación.",
        ],
      },
      {
        title: "Reglas del recibo",
        body: [
          "Se refiere a meses naturales. Si se paga por periodos inferiores, esos abonos se documentan como anticipos a cuenta de la liquidación definitiva, que se extiende en el recibo mensual.",
          "El trabajador firma al recibir el duplicado y el pago. La firma da fe de que ha percibido las cantidades, sin suponer su conformidad con ellas.",
          "Si el pago es por transferencia bancaria, se entrega el duplicado sin pedir firma: el comprobante del banco la sustituye.",
          "La empresa debe archivar y conservar los recibos, junto con los boletines de cotización, un mínimo de cinco años.",
        ],
      },
      {
        title: "Información sobre la cotización",
        body: ["Desde la Orden ESS/2098/2014, el recibo debe informar del total de la cotización a la Seguridad Social, indicando qué parte corresponde a la empresa y no solo la aportación del trabajador."],
      },
      {
        title: "Base y tipo",
        body: ["La cuota se obtiene aplicando a la base de cotización el tipo vigente. Tanto los tipos como los límites de las bases se actualizan con la normativa de cada año, así que nunca se usan de memoria."],
      },
    ],
    example: {
      title: "Lectura de una nómina (cifras ilustrativas)",
      body: [
        "Cifras inventadas solo para practicar la lectura; no representan tipos reales.",
        "Devengos: 1.800 €. Deducciones: 270 €.",
        "Líquido total a percibir: 1.800 − 270 = 1.530 €.",
        "Carlos cobra por transferencia: recibe el duplicado sin firmar y el comprobante bancario justifica el pago.",
      ],
    },
    tips: [
      { kind: "error", text: "Entender la firma del trabajador como aceptación de las cantidades. La ley dice que solo da fe de que las ha recibido." },
      { kind: "consejo", text: "Guarda cada recibo junto con los boletines de cotización correspondientes durante al menos cinco años." },
      { kind: "clave", text: "Líquido total a percibir = devengos − deducciones. Los tipos y límites de cotización cambian cada año." },
    ],
    law: [
      "Estatuto de los Trabajadores, art. 29.1",
      "Orden de 27 de diciembre de 1994 (modelo de recibo individual de salarios)",
      "Orden ESS/2098/2014, de 6 de noviembre",
      "Ley General de la Seguridad Social, art. 104.2",
    ],
    sources: [
      { title: "BOE: Orden de 27 de diciembre de 1994, modelo de recibo individual de salarios (texto consolidado)", url: "https://www.boe.es/eli/es/o/1994/12/27/(1)/con", accessed: D, official: true },
      { title: "INEAF: nuevo modelo de recibo individual justificativo de salarios (Orden ESS/2098/2014)", url: "https://www.ineaf.es/tribuna/nuevo-modelo-de-recibo-individual-justificativo-de-salarios/", accessed: D, official: false },
      { title: "Economist & Jurist: se aprueba el modelo de recibo individual de salarios", url: "https://www.economistjurist.es/?p=35672", accessed: D, official: false },
    ],
    check: [
      {
        id: "c2.2-1", lessonId: "2.2", kind: "tf",
        prompt: "El recibo de salarios se refiere a meses naturales.",
        answer: true,
        explain: "Si se pagan periodos inferiores, se documentan como anticipos a cuenta de la liquidación definitiva.",
        law: "Orden de 27 de diciembre de 1994, art. 1",
      },
      {
        id: "c2.2-2", lessonId: "2.2", kind: "number",
        prompt: "Un recibo tiene devengos de 1.500 € y deducciones de 250 €. ¿Cuál es el líquido total a percibir?",
        answer: 1250, unit: "€",
        explain: "Líquido total a percibir = devengos − deducciones = 1.500 − 250.",
      },
      {
        id: "c2.2-3", lessonId: "2.2", kind: "tf",
        prompt: "Si el trabajador firma el recibo de salarios, está aceptando que las cantidades son correctas.",
        answer: false,
        explain: "La firma da fe de la percepción de las cantidades, sin suponer conformidad con ellas.",
        law: "Orden de 27 de diciembre de 1994, art. 2",
      },
      {
        id: "c2.2-4", lessonId: "2.2", kind: "number",
        prompt: "¿Cuántos años, como mínimo, debe la empresa conservar los recibos de salarios junto con los boletines de cotización?",
        answer: 5, unit: "años",
        explain: "Se conservan un período mínimo de cinco años para permitir comprobaciones.",
        law: "Orden de 27 de diciembre de 1994, art. 3",
      },
    ],
  },
  "2.3": {
    intro:
      "Cada mes, la empresa de Marta debe liquidar las cuotas de la Seguridad Social de sus trabajadores. Ya no se rellenan los antiguos boletines en papel: la Tesorería General de la Seguridad Social (TGSS) calcula la liquidación y la empresa obtiene dos documentos clave, el RLC y el RNT.",
    steps: [
      {
        title: "Sistema de Liquidación Directa",
        body: [
          "En este sistema la TGSS calcula la liquidación de cuotas a partir de los datos que comunica la empresa y le devuelve el recibo para ingresarlo por medios electrónicos.",
          "Las gestiones de afiliación y cotización se hacen a través del Sistema RED.",
        ],
      },
      {
        title: "Los dos documentos",
        body: [
          "RLC, Recibo de Liquidación de Cotizaciones (el antiguo TC1): es el documento de pago, calculado por la TGSS.",
          "RNT, Relación Nominal de Trabajadores (el antiguo TC2): detalla los trabajadores declarados en cotización y sus bases para esa liquidación, normalmente de un mes.",
          "Estos documentos sustituyen a los antiguos boletines de cotización.",
        ],
      },
      {
        title: "Dos plazos distintos",
        body: [
          "Presentación de la liquidación: desde el día uno hasta el penúltimo día natural del mes siguiente al de las cotizaciones.",
          "Ingreso: el plazo reglamentario termina a las 23:59 del último día natural del mes.",
          "Por eso el último día natural del mes ya no permite presentar la liquidación, pero sí ingresar las cuotas.",
          "Si el último día de un plazo señalado por días naturales o por meses es inhábil, se entiende que termina el anterior día hábil.",
        ],
      },
      {
        title: "Información a los trabajadores",
        body: ["La empresa debe informar a los trabajadores de la cotización mensual poniendo a su disposición los recibos de liquidación junto con las relaciones nominales de trabajadores y otros justificantes del ingreso."],
      },
      {
        title: "Si se paga tarde",
        body: ["Los análisis profesionales consultados describen recargos del 10 % si se paga dentro del primer mes natural tras el vencimiento, del 20 % a partir del segundo mes y del 35 % en vía de reclamación de deuda. Confirma los porcentajes en el texto vigente de la Ley General de la Seguridad Social antes de aplicarlos."],
      },
    ],
    example: {
      title: "Las cuotas de octubre de la empresa de Marta",
      body: [
        "Las cuotas de octubre se liquidan en noviembre.",
        "Marta (o su asesoría) presenta la liquidación entre el 1 y el 29 de noviembre, penúltimo día natural del mes.",
        "El 30 de noviembre ya no puede presentarla, pero sí puede ingresar el recibo hasta las 23:59.",
        "Al terminar, pone a disposición de Carlos el recibo de liquidación y la relación nominal.",
      ],
    },
    tips: [
      { kind: "error", text: "Pensar que presentar y pagar tienen la misma fecha límite. Terminan en días distintos." },
      { kind: "consejo", text: "No esperes al último día: si el sistema rechaza la liquidación por un error de validación, puedes quedarte fuera de plazo." },
      { kind: "clave", text: "RLC = recibo de pago (antiguo TC1). RNT = relación de trabajadores y bases (antiguo TC2)." },
    ],
    law: [],
    sources: [
      { title: "Seguridad Social: Sistema de Liquidación Directa, guía de cotización a través del Sistema RED", url: "https://www.seg-social.es/descarga/es/196167", accessed: D, official: true },
      { title: "Seguridad Social: Sistema de Liquidación Directa, incorporación y plazos", url: "https://www.seg-social.es/descarga/es/199912", accessed: D, official: true },
      { title: "Seguridad Social: gestión de cotización a través del Sistema RED", url: "https://www.seg-social.es/descarga/es/142110", accessed: D, official: true },
      { title: "Wolters Kluwer: modelos TC1 y TC2 (RLC y RNT)", url: "https://www.wolterskluwer.com/es-es/expert-insights/modelos-tc1-y-tc2", accessed: D, official: false },
      { title: "Laboral-Social: el pago de los seguros sociales", url: "https://www.laboral-social.com/pago-seguros-sociales-plazos-forma-pago-otras-cosas-te-interesa-conocer.html", accessed: D, official: false },
      { title: "Legalitas: modelo RNT (antiguo TC2)", url: "https://www.legalitas.com/actualidad/modelos-tc2", accessed: D, official: false },
    ],
    check: [
      {
        id: "c2.3-1", lessonId: "2.3", kind: "choice",
        prompt: "¿Qué es el RLC?",
        options: ["El recibo de pago de la liquidación de cotizaciones calculado por la TGSS", "La relación de trabajadores con sus bases", "El contrato de trabajo", "El recibo de salarios del trabajador"],
        answer: 0,
        explain: "El Recibo de Liquidación de Cotizaciones es el documento de pago, el antiguo TC1.",
      },
      {
        id: "c2.3-2", lessonId: "2.3", kind: "tf",
        prompt: "La Relación Nominal de Trabajadores (RNT) es el antiguo TC2 y detalla los trabajadores declarados y sus bases de cotización.",
        answer: true,
        explain: "Es el documento de detalle de la liquidación.",
      },
      {
        id: "c2.3-3", lessonId: "2.3", kind: "tf",
        prompt: "El último día natural del mes se permite todavía presentar la liquidación de cuotas.",
        answer: false,
        explain: "La presentación termina el penúltimo día natural; ese último día solo permite ingresar las cuotas.",
      },
      {
        id: "c2.3-4", lessonId: "2.3", kind: "choice",
        prompt: "El plazo para presentar la liquidación termina:",
        options: ["El penúltimo día natural del mes", "El día 15 del mes", "El último día natural del mes", "El primer día del mes siguiente"],
        answer: 0,
        explain: "Presentación e ingreso son plazos distintos: el primero acaba el penúltimo día natural; el ingreso, el último día natural a las 23:59.",
      },
    ],
  },
  "2.4": {
    intro:
      "Carlos avisa de que no puede ir a trabajar: tiene gripe y su médico le da la baja. A partir de ahí hay que saber quién paga qué, cuánto cobra Carlos y hasta cuándo puede durar la situación. Esta lección cubre la incapacidad temporal (IT); los permisos y el nacimiento de un hijo tienen sus propias lecciones.",
    steps: [
      {
        title: "Qué es la incapacidad temporal",
        body: [
          "Es la situación del trabajador que no puede trabajar por una enfermedad o un accidente. La prestación económica de la Seguridad Social sustituye a las rentas que deja de percibir.",
          "Se distingue entre contingencias comunes (enfermedad común y accidente no laboral) y contingencias profesionales (accidente de trabajo y enfermedad profesional).",
        ],
      },
      {
        title: "Cuánto se cobra",
        body: [
          "La prestación es un porcentaje de la base reguladora, que parte de la base de cotización del mes anterior y se calcula por días.",
          "Contingencias comunes: los tres primeros días no se cobra prestación; del día 4 al 20 se cobra el 60 % de la base reguladora; desde el día 21, el 75 %.",
          "Contingencias profesionales: el 75 % de la base reguladora desde el día siguiente al de la baja.",
        ],
      },
      {
        title: "Quién paga",
        body: [
          "En enfermedad común, la empresa paga por delegación del día 4 al 15; desde el día 16 asume el pago la entidad gestora o la mutua colaboradora.",
          "En contingencias profesionales, el pago corresponde al INSS o a la mutua desde el día siguiente a la baja.",
          "Durante toda la IT la empresa debe mantener al trabajador de alta y seguir cotizando por él.",
        ],
      },
      {
        title: "Cuánto dura",
        body: ["La duración máxima ordinaria es de 365 días desde el parte inicial de baja (art. 169.1.a de la LGSS), prorrogables otros 180 si se prevé la curación."],
      },
    ],
    example: {
      title: "La baja de Carlos por gripe (cifras ilustrativas)",
      body: [
        "Base de cotización del mes anterior: 1.500 €, en un mes de 30 días: base reguladora diaria = 1.500 ÷ 30 = 50 €.",
        "Días 1 a 3: no hay prestación.",
        "Días 4 a 20 (17 días) al 60 %: 30 € al día, 17 × 30 = 510 €.",
        "Si la baja dura 25 días, los días 21 a 25 (5 días) al 75 %: 37,50 € al día, 5 × 37,50 = 187,50 €.",
        "Total de prestación: 510 + 187,50 = 697,50 €.",
      ],
    },
    tips: [
      { kind: "error", text: "Aplicar siempre el mismo porcentaje. En enfermedad común el porcentaje cambia el día 4 y el día 21, y en accidente de trabajo es el 75 % desde el principio." },
      { kind: "consejo", text: "Calcula siempre por días: primero la base reguladora diaria y después el porcentaje de cada tramo." },
      { kind: "clave", text: "Enfermedad común: 0 % los 3 primeros días, 60 % del 4 al 20, 75 % desde el 21." },
    ],
    law: [
      "Ley General de la Seguridad Social (RDL 8/2015), art. 169.1.a",
    ],
    sources: [
      { title: "Guía Fiscal: baja laboral (IT) 2026", url: "https://guiafiscal.es/laboral/baja-laboral-it-2026/", accessed: D, official: false },
      { title: "BBVA Mi Jubilación: cálculo de la base reguladora de la IT", url: "https://www.bbvamijubilacion.es/blog/el-calculo-de-la-base-reguladora-de-la-incapacidad-temporal", accessed: D, official: false },
      { title: "INEAF: incapacidad temporal, qué es y cómo se calcula", url: "https://www.ineaf.es/tribuna/incapacidad-temporal/", accessed: D, official: false },
      { title: "Servicio de Salud de Castilla-La Mancha: duración máxima de la IT", url: "https://sanidad.castillalamancha.es/printpdf/taxonomy/term/4686", accessed: D, official: true },
    ],
    check: [
      {
        id: "c2.4-1", lessonId: "2.4", kind: "choice",
        prompt: "En una baja por enfermedad común, ¿qué ocurre con la prestación los tres primeros días?",
        options: ["No se cobra prestación", "Se cobra el 60 %", "Se cobra el 75 %", "Se cobra el 100 %"],
        answer: 0,
        explain: "La prestación empieza a pagarse el cuarto día.",
      },
      {
        id: "c2.4-2", lessonId: "2.4", kind: "number",
        prompt: "La base de cotización del mes anterior es 1.200 € y el mes tiene 30 días. ¿Cuál es la base reguladora diaria?",
        answer: 40, unit: "€",
        explain: "1.200 ÷ 30 = 40 € al día.",
      },
      {
        id: "c2.4-3", lessonId: "2.4", kind: "tf",
        prompt: "En un accidente de trabajo la prestación es del 75 % de la base reguladora desde el día siguiente al de la baja.",
        answer: true,
        explain: "En contingencias profesionales no hay tramos ni días sin cobro.",
      },
      {
        id: "c2.4-4", lessonId: "2.4", kind: "number",
        prompt: "¿Cuántos días dura como máximo ordinario la incapacidad temporal, antes de la posible prórroga?",
        answer: 365, unit: "días",
        explain: "Son 365 días desde el parte inicial, prorrogables 180 más si se espera la curación.",
        law: "LGSS, art. 169.1.a",
      },
    ],
  },
};

export const m2Bank: Question[] = [
  {
    id: "e2-01", lessonId: "2.1", kind: "choice",
    prompt: "Desde el Real Decreto-ley 32/2021, el contrato de trabajo se presume concertado:",
    options: ["Por tiempo indefinido", "Por un año", "Por obra o servicio", "Por el tiempo que acuerden verbalmente"],
    answer: 0,
    explain: "La regla general es la contratación indefinida.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-02", lessonId: "2.1", kind: "tf",
    prompt: "Tras la reforma de 2021 sigue existiendo el contrato de interinidad como modalidad independiente.",
    answer: false,
    explain: "Se simplificó en el contrato de sustitución de persona trabajadora.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-03", lessonId: "2.1", kind: "choice",
    prompt: "¿Cuáles son las dos causas que permiten hoy un contrato de duración determinada?",
    options: ["Circunstancias de la producción y sustitución", "Obra o servicio y eventual", "Interinidad y obra", "Formación y prácticas"],
    answer: 0,
    explain: "Son las dos únicas causas de temporalidad que mantiene la reforma.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-04", lessonId: "2.1", kind: "choice",
    scenario: "Marta contrata a Carlos para cubrir la baja de una empleada que conserva su puesto.",
    prompt: "¿Qué debe constar en el contrato?",
    options: ["El nombre de la persona sustituida y la causa de la sustitución", "Solo el nombre de Carlos", "El convenio colectivo aplicable únicamente", "Nada: basta un acuerdo verbal"],
    answer: 0,
    explain: "El contrato de sustitución debe identificar a la persona sustituida y la causa.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-05", lessonId: "2.1", kind: "tf",
    prompt: "En un contrato temporal hay que especificar con precisión la causa habilitante, las circunstancias concretas que la justifican y su conexión con la duración prevista.",
    answer: true,
    explain: "Es el requisito formal para que se entienda que concurre causa justificada de temporalidad.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-06", lessonId: "2.1", kind: "choice",
    prompt: "¿Cuáles son las dos modalidades del contrato formativo tras la reforma?",
    options: ["Formación en alternancia y obtención de la práctica profesional", "Aprendizaje y becario", "Prácticas y eventual", "Alternancia y sustitución"],
    answer: 0,
    explain: "La reforma lo organizó en contrato de formación en alternancia y contrato para la obtención de la práctica profesional adecuada al nivel de estudios.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-07", lessonId: "2.1", kind: "tf",
    prompt: "Las oscilaciones que generan un desajuste temporal de empleo en la empresa pueden justificar un contrato por circunstancias de la producción.",
    answer: true,
    explain: "Junto con el aumento ocasional e imprevisible de actividad, forman el concepto de circunstancias de la producción.",
    law: "RDL 32/2021",
  },
  {
    id: "e2-08", lessonId: "2.2", kind: "tf",
    prompt: "El recibo de salarios se extiende por meses naturales.",
    answer: true,
    explain: "La Orden de 27 de diciembre de 1994 establece que el recibo se refiere a meses naturales.",
    law: "Orden de 27 de diciembre de 1994, art. 1",
  },
  {
    id: "e2-09", lessonId: "2.2", kind: "choice",
    prompt: "Si una empresa abona el salario por periodos inferiores al mes, esos pagos se documentan como:",
    options: ["Anticipos a cuenta de la liquidación definitiva", "Salarios definitivos independientes", "Pagas extraordinarias", "Indemnizaciones"],
    answer: 0,
    explain: "La liquidación definitiva se extiende en el recibo mensual.",
    law: "Orden de 27 de diciembre de 1994, art. 1",
  },
  {
    id: "e2-10", lessonId: "2.2", kind: "tf",
    prompt: "La firma del trabajador en el recibo de salarios implica su conformidad con las cantidades liquidadas.",
    answer: false,
    explain: "La firma solo da fe de que ha percibido las cantidades.",
    law: "Orden de 27 de diciembre de 1994, art. 2",
  },
  {
    id: "e2-11", lessonId: "2.2", kind: "choice",
    prompt: "Cuando el salario se paga por transferencia bancaria, la empresa:",
    options: ["Entrega el duplicado sin recabar firma; el comprobante bancario la sustituye", "No tiene que entregar recibo", "Exige siempre la firma en papel", "Entrega el recibo solo si se solicita"],
    answer: 0,
    explain: "El comprobante del abono expedido por la entidad bancaria sustituye a la firma.",
    law: "Orden de 27 de diciembre de 1994, art. 2",
  },
  {
    id: "e2-12", lessonId: "2.2", kind: "number",
    prompt: "¿Durante cuántos años, como mínimo, deben conservarse los recibos de salarios junto con los boletines de cotización?",
    answer: 5, unit: "años",
    explain: "Se conservan durante un período mínimo de cinco años.",
    law: "Orden de 27 de diciembre de 1994, art. 3",
  },
  {
    id: "e2-13", lessonId: "2.2", kind: "number",
    prompt: "Una nómina tiene devengos de 2.000 € y deducciones de 350 €. ¿Cuál es el líquido total a percibir?",
    answer: 1650, unit: "€",
    explain: "2.000 − 350 = 1.650 €.",
  },
  {
    id: "e2-14", lessonId: "2.2", kind: "choice",
    prompt: "Según el art. 29.1 del Estatuto de los Trabajadores, el recibo de salarios debe ajustarse:",
    options: ["Al modelo aprobado por el ministerio, salvo otro establecido por convenio o acuerdo", "Al modelo que elija cada empresa", "Solo al modelo del convenio colectivo", "No tiene modelo"],
    answer: 0,
    explain: "El modelo oficial rige salvo que convenio colectivo o acuerdo con los representantes fije otro con claridad y separación de conceptos.",
    law: "Estatuto de los Trabajadores, art. 29.1",
  },
  {
    id: "e2-15", lessonId: "2.3", kind: "choice",
    prompt: "El Recibo de Liquidación de Cotizaciones (RLC) es:",
    options: ["El documento de pago calculado por la TGSS", "La nómina del trabajador", "El contrato de trabajo", "El modelo de retenciones de Hacienda"],
    answer: 0,
    explain: "Sustituye al antiguo boletín TC1.",
  },
  {
    id: "e2-16", lessonId: "2.3", kind: "tf",
    prompt: "La Relación Nominal de Trabajadores (RNT) detalla los trabajadores declarados en cotización y sus bases.",
    answer: true,
    explain: "Es el antiguo TC2.",
  },
  {
    id: "e2-17", lessonId: "2.3", kind: "tf",
    prompt: "El plazo de presentación de la liquidación y el plazo de ingreso de las cuotas terminan el mismo día.",
    answer: false,
    explain: "No coinciden: la presentación acaba el penúltimo día natural y el ingreso, el último día natural a las 23:59.",
  },
  {
    id: "e2-18", lessonId: "2.3", kind: "choice",
    prompt: "El plazo reglamentario de ingreso de las cuotas finaliza:",
    options: ["A las 23:59 del último día natural del mes", "El día 10 del mes", "El penúltimo día natural", "A los 30 días de presentar la liquidación"],
    answer: 0,
    explain: "Por eso el último día natural no permite presentar pero sí ingresar.",
  },
  {
    id: "e2-19", lessonId: "2.3", kind: "tf",
    prompt: "Los recibos de liquidación y las relaciones nominales sustituyen a los antiguos boletines de cotización TC1 y TC2.",
    answer: true,
    explain: "Con el Sistema de Liquidación Directa los documentos los genera la TGSS.",
  },
  {
    id: "e2-20", lessonId: "2.3", kind: "choice",
    prompt: "Para informar a los trabajadores de la cotización mensual, la empresa debe:",
    options: ["Poner a su disposición los recibos de liquidación junto con las relaciones nominales", "No informar: es un trámite interno", "Enviar solo el contrato", "Publicar las bases en el tablón del convenio"],
    answer: 0,
    explain: "Así se garantiza la obligación de información sobre la cotización.",
  },
  {
    id: "e2-21", lessonId: "2.4", kind: "choice",
    prompt: "En una IT por enfermedad común, ¿qué porcentaje de la base reguladora se cobra del día 4 al 20?",
    options: ["60 %", "75 %", "100 %", "50 %"],
    answer: 0,
    explain: "Los tres primeros días no se cobra, del 4 al 20 el 60 % y desde el 21 el 75 %.",
  },
  {
    id: "e2-22", lessonId: "2.4", kind: "number",
    prompt: "En una IT por enfermedad común, ¿qué porcentaje de la base reguladora se cobra desde el día 21?",
    answer: 75, unit: "%",
    explain: "A partir del día 21 el porcentaje sube al 75 %.",
  },
  {
    id: "e2-23", lessonId: "2.4", kind: "tf",
    prompt: "En una baja por accidente de trabajo la prestación es del 75 % de la base reguladora desde el día siguiente al de la baja.",
    answer: true,
    explain: "En contingencias profesionales se aplica el 75 % desde el principio.",
  },
  {
    id: "e2-24", lessonId: "2.4", kind: "number",
    prompt: "¿Cuántos días dura como máximo ordinario la IT, antes de la prórroga?",
    answer: 365, unit: "días",
    explain: "La duración máxima ordinaria es de 365 días, prorrogables 180.",
    law: "LGSS, art. 169.1.a",
  },
  {
    id: "e2-25", lessonId: "2.4", kind: "number",
    scenario: "La base reguladora diaria de Carlos es de 40 €. Está de baja 10 días por enfermedad común.",
    prompt: "¿Qué prestación total corresponde por esos 10 días?",
    answer: 168, unit: "€",
    explain: "Los días 1 a 3 no se cobran. Los días 4 a 10 son 7 días al 60 %: 7 × 24 = 168 €.",
  },
  {
    id: "e2-26", lessonId: "2.4", kind: "tf",
    prompt: "Durante la IT la empresa debe mantener al trabajador de alta y seguir cotizando por él.",
    answer: true,
    explain: "Aunque la prestación la abone la entidad gestora o la mutua, el alta y la cotización continúan.",
  },
  {
    id: "e2-27", lessonId: "2.4", kind: "choice",
    prompt: "En enfermedad común, ¿quién asume el pago de la prestación desde el día 16?",
    options: ["La entidad gestora o la mutua colaboradora", "La empresa en todo caso", "El propio trabajador", "La Agencia Tributaria"],
    answer: 0,
    explain: "Del día 4 al 15 paga la empresa por delegación; desde el día 16 asume el pago la entidad gestora o la mutua.",
  },
];
