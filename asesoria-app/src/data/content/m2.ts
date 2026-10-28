import type { Question } from "../questions";
import type { LessonContent } from "./types";

const D = "2026-10-25";

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
  "2.5": {
    intro:
      "La actividad del taller de Marta cae y no puede mantener un puesto. Existe una vía legal para extinguir el contrato por causas objetivas, pero exige un procedimiento exacto: si falla la forma, el despido puede acabar siendo improcedente. En esta lección ves ese procedimiento y cómo se calcula la indemnización. El despido disciplinario y el finiquito tienen su propia lección.",
    steps: [
      {
        title: "Qué es la extinción por causas objetivas",
        body: [
          "Está regulada en los artículos 52 y 53 del Estatuto de los Trabajadores. El art. 52 enumera las causas, entre ellas la necesidad objetivamente acreditada de amortizar un puesto de trabajo por causas económicas, técnicas, organizativas o de producción.",
          "No es necesario que la situación económica de la empresa sea mala para que concurra una causa objetiva.",
        ],
      },
      {
        title: "Requisitos de forma (art. 53 ET)",
        body: [
          "Comunicación escrita al trabajador que exprese la causa y la fecha de efectos, con una descripción de los hechos que justifican la extinción.",
          "Poner a disposición del trabajador, simultáneamente a la entrega de la comunicación, la indemnización de 20 días de salario por año de servicio, prorrateando por meses los periodos inferiores a un año, con un máximo de 12 mensualidades.",
          "Preaviso de 15 días, contados desde la entrega de la comunicación hasta la extinción del contrato.",
        ],
      },
      {
        title: "Qué pasa si falla algo",
        body: [
          "No conceder el preaviso o cometer un error excusable en el cálculo de la indemnización no determina por sí solo la improcedencia: la empresa debe abonar los salarios de ese periodo o la indemnización en su cuantía correcta.",
          "Cuando no se cumplen los demás requisitos del art. 53.1, la decisión extintiva se califica de improcedente. La calificación judicial puede ser nulidad, procedencia o improcedencia.",
        ],
      },
      {
        title: "Cómo se calcula la indemnización",
        body: [
          "Se parte del salario diario en el momento de la extinción, con pagas extraordinarias prorrateadas. Una forma de obtenerlo es dividir el salario anual entre 365.",
          "Despido objetivo procedente: 20 días de salario por año de servicio, con un máximo de 12 mensualidades.",
          "Despido improcedente: 33 días de salario por año, con un máximo de 24 mensualidades, para el tiempo de servicio posterior al 12 de febrero de 2012. Para el tiempo anterior se aplican 45 días por año y un máximo de 42 mensualidades; si se mezclan ambos periodos, el total no puede superar 720 días de salario.",
        ],
      },
      {
        title: "Plazo para reclamar",
        body: ["Según las fuentes consultadas, el plazo para impugnar el despido es de 20 días hábiles desde la fecha de efectos. Confírmalo en el texto vigente del Estatuto antes de aplicarlo."],
      },
    ],
    example: {
      title: "Despido de un empleado con 5 años y medio (cifras ilustrativas)",
      body: [
        "Salario diario: 60 €. Antigüedad: 5 años y 6 meses, es decir, 5,5 años, todos posteriores al 12 de febrero de 2012.",
        "Despido objetivo procedente: 20 días × 5,5 años = 110 días. 110 × 60 = 6.600 €.",
        "Si el despido se declarase improcedente: 33 días × 5,5 años = 181,5 días. 181,5 × 60 = 10.890 €.",
        "El importe de 6.600 € debe ponerse a disposición del trabajador al entregar la carta, junto con el preaviso de 15 días.",
      ],
    },
    tips: [
      { kind: "error", text: "Entregar la carta y pagar la indemnización días después. La ley exige que se ponga a disposición simultáneamente a la comunicación." },
      { kind: "consejo", text: "Redacta la carta con hechos concretos y la fecha de efectos. Las causas vagas suelen terminar en improcedencia." },
      { kind: "clave", text: "Objetivo: 20 días por año con tope de 12 mensualidades. Improcedente: 33 días por año con tope de 24 mensualidades (tiempo posterior al 12-2-2012)." },
    ],
    law: [
      "Estatuto de los Trabajadores, arts. 52 y 53",
      "Ley Reguladora de la Jurisdicción Social, art. 122",
    ],
    sources: [
      { title: "Iberley: texto del art. 53 del Estatuto de los Trabajadores", url: "https://iberley.es/legislacion/articulo-53-estatuto-trabajadores", accessed: D, official: false },
      { title: "Cuestiones Laborales: art. 122 de la Ley Reguladora de la Jurisdicción Social", url: "https://www.cuestioneslaborales.es/ley-jurisdiccion-social/articulo-122/", accessed: D, official: false },
      { title: "INEAF: glosario jurídico, despido objetivo", url: "https://www.ineaf.es/glosario-juridico/despido-objetivo", accessed: D, official: false },
      { title: "Legalitas: qué es el despido objetivo", url: "https://www.legalitas.com/actualidad/despido-objetivo", accessed: D, official: false },
      { title: "PayFit: indemnización por despido objetivo", url: "https://payfit.com/es/contenido-practico/indemnizacion-despido-objetivo/", accessed: D, official: false },
      { title: "Iberley: sentencia del Juzgado de lo Social de Oviedo que reproduce el art. 53 ET", url: "https://www.iberley.es/jurisprudencia/sentencia-social-n-504-2022-jso-oviedo-sec-5-rec-569-2022-02-11-2022-48456443", accessed: D, official: false },
    ],
    check: [
      {
        id: "c2.5-1", lessonId: "2.5", kind: "number",
        prompt: "En un despido objetivo procedente, ¿cuántos días de salario por año de servicio corresponden de indemnización?",
        answer: 20, unit: "días",
        explain: "Con un máximo de 12 mensualidades.",
        law: "ET, art. 53.1.b",
      },
      {
        id: "c2.5-2", lessonId: "2.5", kind: "number",
        prompt: "¿Cuántos días de preaviso exige el art. 53 ET desde la entrega de la comunicación hasta la extinción?",
        answer: 15, unit: "días",
        explain: "El preaviso es de quince días.",
        law: "ET, art. 53.1.c",
      },
      {
        id: "c2.5-3", lessonId: "2.5", kind: "tf",
        prompt: "La indemnización del despido objetivo debe ponerse a disposición del trabajador simultáneamente a la entrega de la carta.",
        answer: true,
        explain: "Es un requisito de forma del art. 53.1.b.",
        law: "ET, art. 53.1.b",
      },
      {
        id: "c2.5-4", lessonId: "2.5", kind: "number",
        prompt: "Un trabajador con 4 años de antigüedad y salario diario de 50 € es despedido por causas objetivas. ¿Qué indemnización corresponde?",
        answer: 4000, unit: "€",
        explain: "20 días × 4 años = 80 días. 80 × 50 = 4.000 €.",
      },
    ],
  },
  "2.6": {
    intro:
      "Lucía acaba de terminar su formación y quiere trabajar en una gestoría. Su currículum y su carta son lo primero que verá la empresa. En esta lección ves qué recomiendan las fuentes públicas de empleo para presentarse bien y dónde buscar ofertas. LinkedIn y las herramientas de selección automática se tratan en otra lección.",
    steps: [
      {
        title: "Para qué sirve el currículum",
        body: [
          "Su objetivo es conseguir una entrevista personal.",
          "Conviene seleccionar los aspectos del currículum que más puedan interesar a la empresa concreta y adaptarlo a cada oferta.",
        ],
      },
      {
        title: "Contenido y forma",
        body: [
          "No existe una única plantilla obligatoria. Europass es una alternativa reconocida, especialmente útil para buscar trabajo en otro país europeo.",
          "Incluir fotografía es opcional.",
          "Debe estar bien estructurado y presentado: un currículum difícil de leer suele descartarse.",
          "La experiencia profesional que indiques deberá poder documentarse con certificados de trabajo.",
        ],
      },
      {
        title: "La carta de presentación",
        body: [
          "Acompaña al currículum y debe hacerse a medida de la empresa y de la oferta.",
          "Estructura típica: primer párrafo, el motivo de la carta; segundo, tu experiencia y formación; tercero, otras informaciones relevantes para el puesto y tu disponibilidad para una entrevista.",
        ],
      },
      {
        title: "Enviar la candidatura por correo electrónico",
        body: [
          "Redacta el correo como si fuera la carta de presentación.",
          "Evita los envíos en masa y cuida la dirección de correo que utilizas.",
          "Agrupa los documentos en uno solo y usa formatos que no ocupen mucho espacio.",
        ],
      },
      {
        title: "Dónde buscar",
        body: [
          "Servicios públicos de empleo: el SEPE y los de las comunidades autónomas. Empléate es un espacio virtual de intermediación al que se accede desde la web del SEPE.",
          "La red europea EURES, si buscas trabajo en otro país.",
          "Autocandidatura: enviar tu candidatura a empresas de tu sector aunque no hayan publicado una oferta. Muchas empresas anuncian vacantes en sus webs, en secciones como «Trabaja con nosotros».",
          "Agencias de colocación autorizadas y empresas de trabajo temporal.",
          "Los contactos y las relaciones personales son muy útiles en la búsqueda de empleo.",
        ],
      },
    ],
    example: {
      title: "La candidatura de Lucía a una gestoría",
      body: [
        "Lucía prepara un currículum base y elige los aspectos que más encajan con una gestoría: formación en contabilidad y fiscalidad, prácticas y herramientas que domina.",
        "Escribe una carta distinta para cada despacho. En el primer párrafo explica por qué le escribe; en el segundo resume su experiencia y formación; en el tercero indica su disponibilidad para una entrevista.",
        "Envía un único archivo adjunto y un correo redactado como carta. Guarda sus certificados de trabajo para acreditar la experiencia que menciona.",
      ],
    },
    tips: [
      { kind: "error", text: "Mandar el mismo currículum y la misma carta a todas las empresas, o hacer envíos en masa." },
      { kind: "consejo", text: "Antes de enviar, relee la oferta y revisa que tu currículum destaca justo lo que la empresa pide." },
      { kind: "clave", text: "El currículum no busca contarlo todo: busca conseguir una entrevista." },
    ],
    law: [],
    sources: [
      { title: "EURES (Comisión Europea): vivir y trabajar en España, cómo encontrar empleo", url: "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-spain_es", accessed: D, official: true },
      { title: "Ministerio de Trabajo (MITES): currículum y carta de presentación", url: "https://www.mites.gob.es/mundo/consejerias/dinamarca/es/trabajar/cv/index.html", accessed: D, official: true },
    ],
    check: [
      {
        id: "c2.6-1", lessonId: "2.6", kind: "choice",
        prompt: "¿Cuál es el objetivo principal del currículum?",
        options: ["Conseguir una entrevista personal", "Contar toda la vida profesional", "Sustituir a la carta de presentación", "Acreditar el salario deseado"],
        answer: 0,
        explain: "El currículum busca abrir la puerta a una entrevista, por eso se adapta a cada oferta.",
      },
      {
        id: "c2.6-2", lessonId: "2.6", kind: "tf",
        prompt: "Existe una única plantilla de currículum obligatoria en España.",
        answer: false,
        explain: "No hay un modelo único. Europass es una alternativa reconocida, pero no obligatoria.",
      },
      {
        id: "c2.6-3", lessonId: "2.6", kind: "tf",
        prompt: "Lo recomendable es enviar la misma carta de presentación a todas las empresas.",
        answer: false,
        explain: "La carta debe hacerse a medida de cada empresa y de cada oferta.",
      },
      {
        id: "c2.6-4", lessonId: "2.6", kind: "choice",
        prompt: "¿Qué es Empléate?",
        options: ["Un espacio virtual de intermediación al que se accede desde la web del SEPE", "Una empresa de trabajo temporal", "Un modelo de currículum", "Una red social privada"],
        answer: 0,
        explain: "Empléate conecta a personas que buscan empleo con ofertas, desde el portal del SEPE.",
      },
    ],
  },
  "2.7": {
    "intro": "Antes de contratar a Carlos, Marta debe darse de alta como empleadora en la Seguridad Social, además de estar dada de alta como autónoma. Esa inscripción le proporciona un número que identifica a su empresa ante la Tesorería General: el Código de Cuenta de Cotización.",
    "steps": [
      {
        "title": "Qué es la inscripción y el CCC",
        "body": [
          "La inscripción de la empresa se hace en la Tesorería General de la Seguridad Social (TGSS). Con ella se obtiene el Código de Cuenta de Cotización (CCC).",
          "El CCC es el número que la TGSS proporciona al empleador para poder dar de alta a sus trabajadores.",
          "En una sociedad limitada, el CCC se obtiene al mismo tiempo que se da de alta al primer trabajador, según la infografía del Punto de Atención al Emprendedor."
        ]
      },
      {
        "title": "Cuándo y cómo",
        "body": [
          "Antes del inicio de la actividad.",
          "Se hace por vía electrónica en el Sistema RED. Para empresarios individuales existe el servicio «Inscripción CCC de empresario individual» dentro de Inscripción y Afiliación.",
          "Según una guía universitaria de 2025, los autónomos y las pymes deben usar obligatoriamente RED Directo.",
          "Se necesita el documento identificativo del titular de la empresa (DNI, NIE o pasaporte)."
        ]
      },
      {
        "title": "Variaciones y cese",
        "body": [
          "La empresa debe comunicar cualquier variación de sus datos identificativos o de su actividad, por ejemplo un cambio de domicilio, a través del Sistema RED.",
          "La guía universitaria indica un plazo de seis días naturales desde el suceso. Confírmalo en la normativa vigente antes de aplicarlo.",
          "El Sistema RED también permite gestionar la baja y la reanudación del CCC."
        ]
      },
      {
        "title": "Otros trámites al abrir un centro de trabajo",
        "body": [
          "Comunicar la apertura del centro de trabajo a la autoridad laboral de la comunidad autónoma.",
          "Obtener el calendario laboral."
        ]
      }
    ],
    "example": {
      "title": "Marta se convierte en empleadora",
      "body": [
        "Marta ya está dada de alta como autónoma en el RETA y quiere contratar a Carlos.",
        "Antes de que Carlos empiece, Marta inscribe su empresa en la TGSS y obtiene su CCC.",
        "Con ese CCC, el número de Seguridad Social de Carlos y el resto de datos, podrá dar de alta a Carlos (lección siguiente)."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Confundir el alta de Marta como autónoma con la inscripción como empleadora. Son trámites distintos y el segundo es imprescindible para contratar."
      },
      {
        "kind": "consejo",
        "text": "Guarda el CCC y la resolución de inscripción en el expediente del cliente: se pedirá en todas las altas, bajas y liquidaciones."
      },
      {
        "kind": "clave",
        "text": "CCC: número que identifica a la empresa ante la TGSS y que se necesita para dar de alta a cualquier trabajador."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "Seguridad Social: Sistema RED, inscripción y afiliación (manual)",
        "url": "https://www.seg-social.es/descarga/es/145797",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Seguridad Social: Sistema RED, actividad de empresa y CCC (manual)",
        "url": "https://www.seg-social.es/descarga/es/191271",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Punto de Atención al Emprendedor: trámites de contratación de una SL",
        "url": "https://paeelectronico.es/Documents/Formacion/SociedadResponsabilidadLimitada/1.3%20INFOGRAFIA_sociedad%20limitada_tramites%20contratacion_DEF.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Universidad Carlos III: guía básica para contratar empleados (2025)",
        "url": "https://www.uc3m.es/uc3m/media/uc3m/doc/archivo/doc_guia-basica-para-contratar-empleados-25/guia-basica-para-contratar-empleados-rev.2025.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.7-1",
        "lessonId": "2.7",
        "kind": "choice",
        "prompt": "¿Qué es el Código de Cuenta de Cotización (CCC)?",
        "answer": 0,
        "explain": "Identifica a la empresa ante la TGSS.",
        "options": [
          "El número que la TGSS proporciona al empleador para poder dar de alta a sus trabajadores",
          "El número de la Seguridad Social del trabajador",
          "El código de la actividad en el IAE",
          "El número del contrato de trabajo"
        ]
      },
      {
        "id": "c2.7-2",
        "lessonId": "2.7",
        "kind": "tf",
        "prompt": "La inscripción de la empresa en la TGSS debe hacerse antes del inicio de la actividad.",
        "answer": true,
        "explain": "Es un trámite previo a contratar."
      },
      {
        "id": "c2.7-3",
        "lessonId": "2.7",
        "kind": "tf",
        "prompt": "Estar dado de alta como autónomo en el RETA hace innecesario inscribir la empresa como empleadora para contratar.",
        "answer": false,
        "explain": "Son trámites distintos: sin CCC no se puede dar de alta a trabajadores."
      },
      {
        "id": "c2.7-4",
        "lessonId": "2.7",
        "kind": "choice",
        "prompt": "¿Por qué vía se tramita la inscripción de un empresario individual?",
        "answer": 0,
        "explain": "El servicio está dentro del menú de Inscripción y Afiliación del Sistema RED.",
        "options": [
          "Sistema RED, servicio de inscripción del CCC de empresario individual",
          "Solo por correo postal",
          "Solo con el modelo 036",
          "No se tramita"
        ]
      }
    ]
  },
  "2.8": {
    "intro": "Marta ya tiene su CCC. Ahora puede dar de alta a Carlos en la Seguridad Social. Para ello debe distinguir dos conceptos que se confunden a menudo: la afiliación y el alta.",
    "steps": [
      {
        "title": "Afiliación y alta",
        "body": [
          "La afiliación es el acto por el que la Seguridad Social reconoce a una persona como afiliada y le asigna un número. Es única para todos los regímenes y vitalicia.",
          "El alta es la entrada en un régimen concreto, como el Régimen General, cuando empieza a trabajar. La solicitud de afiliación implica la de alta inicial.",
          "Si el trabajador ya estaba afiliado, solo hay que solicitar el alta."
        ]
      },
      {
        "title": "Quién y cuándo",
        "body": [
          "Para los trabajadores por cuenta ajena, la solicitud corresponde al empresario, antes de que empiece la prestación de servicios.",
          "Se puede pedir con una antelación máxima de 60 días naturales al inicio de la relación laboral. No puede hacerse antes."
        ]
      },
      {
        "title": "Qué datos se necesitan",
        "body": [
          "Código de Cuenta de Cotización de la empresa.",
          "Régimen de la Seguridad Social.",
          "Número de Seguridad Social del trabajador.",
          "Fecha de inicio de la actividad.",
          "Grupo de cotización."
        ]
      },
      {
        "title": "Cómo se tramita",
        "body": [
          "Por el Sistema RED, en el servicio de Inscripción y Afiliación de RED Directo, que permite además consultar los trabajadores en alta en un CCC.",
          "Después del alta hay que dar de alta o comunicar el contrato de trabajo (lección [[2.10]])."
        ]
      }
    ],
    "example": {
      "title": "Marta da de alta a Carlos",
      "body": [
        "Carlos empezará el día 1 del mes que viene.",
        "Marta pide su alta como mucho 60 días naturales antes y antes de que empiece a trabajar.",
        "Introduce en el Sistema RED su CCC, el régimen, el número de Seguridad Social de Carlos, la fecha de inicio y el grupo de cotización."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Dejar el alta para después del primer día de trabajo. Debe ser previa a la prestación de servicios."
      },
      {
        "kind": "consejo",
        "text": "Pide el número de Seguridad Social del trabajador desde la entrevista; sin él no se puede tramitar el alta."
      },
      {
        "kind": "clave",
        "text": "Afiliación: única y vitalicia. Alta: por cada régimen y empresa, antes de empezar, hasta 60 días antes."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "Seguridad Social: RED Directo, inscripción y afiliación (manual)",
        "url": "https://www.seg-social.es/descarga/es/145797",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Punto de Atención al Emprendedor: trámites de contratación de una SL",
        "url": "https://paeelectronico.es/Documents/Formacion/SociedadResponsabilidadLimitada/1.3%20INFOGRAFIA_sociedad%20limitada_tramites%20contratacion_DEF.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Universidad Carlos III: guía básica para contratar empleados (2025)",
        "url": "https://www.uc3m.es/uc3m/media/uc3m/doc/archivo/doc_guia-basica-para-contratar-empleados-25/guia-basica-para-contratar-empleados-rev.2025.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de Granada: actos de encuadramiento (apuntes)",
        "url": "https://digibug.ugr.es/bitstream/handle/10481/49774/GarciaValverde_ActosEncuadramiento.pdf?sequence=1",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.8-1",
        "lessonId": "2.8",
        "kind": "number",
        "prompt": "¿Con cuántos días naturales de antelación máxima puede solicitarse el alta de un trabajador por cuenta ajena?",
        "answer": 60,
        "explain": "No puede pedirse antes de los 60 días naturales previos al inicio de la prestación.",
        "unit": "días"
      },
      {
        "id": "c2.8-2",
        "lessonId": "2.8",
        "kind": "tf",
        "prompt": "La afiliación a la Seguridad Social es única para todos los regímenes y vitalicia.",
        "answer": true,
        "explain": "El número se asigna una sola vez."
      },
      {
        "id": "c2.8-3",
        "lessonId": "2.8",
        "kind": "tf",
        "prompt": "Si el trabajador ya está afiliado, hay que volver a solicitar su afiliación.",
        "answer": false,
        "explain": "Solo hay que solicitar el alta."
      },
      {
        "id": "c2.8-4",
        "lessonId": "2.8",
        "kind": "choice",
        "prompt": "¿Cuál de estos datos se necesita para tramitar el alta de un trabajador?",
        "answer": 0,
        "explain": "Junto con el CCC, el régimen, la fecha de inicio y el grupo de cotización.",
        "options": [
          "Número de Seguridad Social del trabajador",
          "Número de cuenta bancaria de la empresa",
          "El IBAN del trabajador",
          "El importe de la nómina"
        ]
      }
    ]
  },
  "2.9": {
    "intro": "Carlos deja la empresa de Marta. Ahora hay que darlo de baja en la Seguridad Social y, mientras trabaja, comunicar cualquier cambio de sus datos. El plazo para hacerlo cambió en agosto de 2026, así que cualquier material anterior puede estar desfasado.",
    "steps": [
      {
        "title": "Quién tiene la obligación",
        "body": [
          "En el Régimen General, el empresario está obligado a presentar el alta, la baja y las variaciones de datos de sus trabajadores.",
          "En el RETA es el propio autónomo quien se da de alta y de baja y comunica sus variaciones (lección [[1.4]])."
        ]
      },
      {
        "title": "El plazo desde el 1 de agosto de 2026",
        "body": [
          "El Real Decreto 643/2026, de 29 de julio, publicado en el BOE el 30 de julio de 2026, modificó el art. 32.3 del Reglamento general sobre inscripción de empresas y afiliación (Real Decreto 84/1996).",
          "Desde el 1 de agosto de 2026, las solicitudes de baja y de variaciones de datos de los trabajadores deben presentarse dentro de los seis días naturales siguientes al cese en el trabajo o a aquel en que se produzca la variación. Antes eran tres.",
          "El cambio afecta a los trabajadores por cuenta ajena. El plazo de baja de un autónomo en el RETA sigue siendo el de la lección [[1.4]]."
        ]
      },
      {
        "title": "Cómo se tramita",
        "body": [
          "La baja de un trabajador solo puede tramitarse de forma electrónica a través del Sistema RED, que regula la Orden ESS/484/2013."
        ]
      },
      {
        "title": "Si se presenta fuera de plazo",
        "body": [
          "Si la baja se solicita fuera de plazo, la empresa debe cotizar por el trabajador hasta el mismo día en que comunica la baja.",
          "Si se solicita en plazo, la obligación de cotizar se extingue el día del cese en el trabajo."
        ]
      },
      {
        "title": "Nueva obligación: código de ocupación",
        "body": [
          "El mismo real decreto obliga a todos los empresarios a comunicar a la TGSS, en el plazo de seis meses desde su entrada en vigor, el código de ocupación laboral, único o principal, de todos los trabajadores por cuenta ajena que estén en alta en cualquiera de sus códigos de cuenta de cotización, conforme a la Clasificación Nacional de Ocupaciones.",
          "Solo hay que comunicarlo si no se había comunicado antes. El dato sirve para elaborar los informes necesarios para reconocer, en su caso, coeficientes reductores de la edad de jubilación."
        ]
      }
    ],
    "example": {
      "title": "La salida de Carlos (fechas ilustrativas)",
      "body": [
        "Carlos cesa el 10 de noviembre de 2026.",
        "Marta tiene seis días naturales siguientes: hasta el 16 de noviembre para presentar la baja por el Sistema RED.",
        "Si la presenta el 16, la obligación de cotizar se extingue el día del cese. Si la presentara el 20, tendría que cotizar por Carlos hasta el día 20."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar el plazo antiguo de tres días a un trabajador por cuenta ajena. Desde el 1 de agosto de 2026 son seis, aunque muchos materiales aún dicen tres."
      },
      {
        "kind": "consejo",
        "text": "Anota la fecha de cese el mismo día en que se conoce, aunque dispongas de seis días: evita olvidos y errores."
      },
      {
        "kind": "clave",
        "text": "Por cuenta ajena: 6 días naturales para bajas y variaciones. Autónomos en el RETA: 3 días para la baja."
      }
    ],
    "law": [
      "Real Decreto 84/1996, art. 32.3, modificado por el Real Decreto 643/2026",
      "Orden ESS/484/2013, de 26 de marzo (Sistema RED)"
    ],
    "sources": [
      {
        "title": "BOE: Real Decreto 643/2026, de 29 de julio",
        "url": "https://www.boe.es/eli/es/rd/2026/07/29/643",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Administración.gob.es: rescisión del contrato, baja de empleados en la Seguridad Social",
        "url": "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/empresas/empleados/seguridad-social/rescision.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Laboral-Social: la Seguridad Social amplía el plazo de bajas y variaciones",
        "url": "https://www.laboral-social.com/seguridad-social-amplia-plazo-bajas-variaciones-datos-aplazamientos-deudas",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.9-1",
        "lessonId": "2.9",
        "kind": "number",
        "prompt": "Desde el 1 de agosto de 2026, ¿cuántos días naturales hay para presentar la baja de un trabajador por cuenta ajena desde el cese?",
        "answer": 6,
        "explain": "El Real Decreto 643/2026 amplió el plazo de tres a seis días.",
        "unit": "días"
      },
      {
        "id": "c2.9-2",
        "lessonId": "2.9",
        "kind": "tf",
        "prompt": "La baja de un trabajador por cuenta ajena puede tramitarse en papel en la oficina de la Seguridad Social.",
        "answer": false,
        "explain": "Solo puede tramitarse de forma electrónica por el Sistema RED."
      },
      {
        "id": "c2.9-3",
        "lessonId": "2.9",
        "kind": "tf",
        "prompt": "Si la baja se presenta fuera de plazo, la empresa cotiza por el trabajador hasta el día en que comunica la baja.",
        "answer": true,
        "explain": "En plazo, la obligación se extingue el día del cese."
      },
      {
        "id": "c2.9-4",
        "lessonId": "2.9",
        "kind": "choice",
        "prompt": "¿Quién está obligado a presentar el alta, la baja y las variaciones de datos de un trabajador en el Régimen General?",
        "answer": 0,
        "explain": "Es una obligación del empleador.",
        "options": [
          "El empresario",
          "El trabajador",
          "El SEPE",
          "La Agencia Tributaria"
        ]
      }
    ]
  },
  "2.10": {
    "intro": "Marta ha dado de alta a Carlos en la Seguridad Social, pero todavía le queda otra obligación: comunicar el contrato al servicio público de empleo. Es un trámite distinto del alta, con su propio plazo y su propia plataforma.",
    "steps": [
      {
        "title": "La obligación",
        "body": [
          "Los empresarios deben comunicar a los Servicios Públicos de Empleo el contenido de los contratos de trabajo que celebren, y de sus prórrogas, deban o no formalizarse por escrito.",
          "La regula el Real Decreto 1424/2002, de 27 de diciembre."
        ]
      },
      {
        "title": "El plazo",
        "body": [
          "Diez días hábiles siguientes a la concertación del contrato."
        ]
      },
      {
        "title": "Cómo se comunica",
        "body": [
          "Por vía telemática con la aplicación del Servicio Público de Empleo Estatal «Comunicación de la Contratación Laboral a través de Internet», conocida como Contrat@. La regulan la Orden TAS/770/2003 y la Orden ESS/1727/2013.",
          "También puede hacerse presentando copia del contrato en el Servicio Público de Empleo, salvo en las comunidades que hayan impuesto la vía telemática como obligatoria.",
          "En algunas comunidades la comunicación electrónica es obligatoria. Las normas autonómicas consultadas de Madrid y del País Vasco así lo establecen; comprueba siempre la de la comunidad donde esté el centro de trabajo.",
          "Pueden comunicar los contratos las empresas y los profesionales que actúan en su representación, siempre con la autorización correspondiente."
        ]
      },
      {
        "title": "Qué diferencia hay con el alta en la Seguridad Social",
        "body": [
          "El alta se comunica a la Tesorería General de la Seguridad Social y es previa al inicio de la prestación de servicios.",
          "La comunicación del contrato se dirige al servicio público de empleo y tiene diez días hábiles desde que se concierta el contrato."
        ]
      }
    ],
    "example": {
      "title": "El contrato de Carlos (fechas ilustrativas)",
      "body": [
        "Marta firma el contrato con Carlos un lunes.",
        "Antes de que empiece a trabajar, ha tramitado su alta en la Seguridad Social.",
        "Dispone de diez días hábiles desde la firma para comunicar el contrato a través de Contrat@. La fecha exacta depende del calendario laboral: los sábados, domingos y festivos no cuentan como hábiles."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Creer que el alta en la Seguridad Social sustituye a la comunicación del contrato. Son dos obligaciones ante organismos distintos."
      },
      {
        "kind": "consejo",
        "text": "Prepara el contrato y su comunicación a la vez: así los datos coinciden y se evitan correcciones posteriores."
      },
      {
        "kind": "clave",
        "text": "Diez días hábiles desde la concertación; Contrat@; y también para las prórrogas."
      }
    ],
    "law": [
      "Real Decreto 1424/2002, de 27 de diciembre",
      "Orden TAS/770/2003, modificada por la Orden ESS/1727/2013"
    ],
    "sources": [
      {
        "title": "BOE: Real Decreto 1424/2002 (texto consolidado)",
        "url": "https://www.boe.es/eli/es/rd/2002/12/27/1424/con",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Gobierno Vasco: Orden sobre la comunicación telemática de contratos (Contrat@)",
        "url": "https://www.euskadi.eus/web01-bopv/es/bopv2/datos/2015/11/1505044a.shtml",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Comunidad de Madrid: Orden sobre comunicación de contratos mediante Contrat@",
        "url": "https://www.bocm.es/boletin/CM_Orden_BOCM/2020/07/06/BOCM-20200706-24.PDF",
        "accessed": "2026-10-25",
        "official": true
      }
    ],
    "check": [
      {
        "id": "c2.10-1",
        "lessonId": "2.10",
        "kind": "number",
        "prompt": "¿En cuántos días hábiles siguientes a la concertación debe comunicarse el contrato al servicio público de empleo?",
        "answer": 10,
        "explain": "Es el plazo del Real Decreto 1424/2002.",
        "unit": "días"
      },
      {
        "id": "c2.10-2",
        "lessonId": "2.10",
        "kind": "tf",
        "prompt": "La obligación de comunicar el contrato existe aunque no tenga que formalizarse por escrito.",
        "answer": true,
        "explain": "Deban o no formalizarse por escrito."
      },
      {
        "id": "c2.10-3",
        "lessonId": "2.10",
        "kind": "tf",
        "prompt": "El alta en la Seguridad Social sustituye a la comunicación del contrato al servicio público de empleo.",
        "answer": false,
        "explain": "Son obligaciones distintas, ante organismos distintos."
      },
      {
        "id": "c2.10-4",
        "lessonId": "2.10",
        "kind": "choice",
        "prompt": "¿Cómo se llama la aplicación del SEPE para comunicar contratos por internet?",
        "answer": 0,
        "explain": "Es «Comunicación de la Contratación Laboral a través de Internet».",
        "options": [
          "Contrat@",
          "Import@ss",
          "Sistema RED",
          "Cl@ve"
        ]
      }
    ]
  },
  "2.11": {
    "intro": "Llega fin de mes y Marta tiene que preparar la nómina completa de Carlos: la cotización a la Seguridad Social del trabajador, la de la empresa y la retención del IRPF. En esta lección ves cómo se calculan con los tipos y límites de 2026. Estos datos cambian cada año, así que lo importante es aprender dónde mirarlos.",
    "steps": [
      {
        "title": "De bruto a líquido",
        "body": [
          "Ya conoces la estructura del recibo de salarios (lección [[2.2]]). Las dos grandes deducciones son la aportación del trabajador a la Seguridad Social y la retención del IRPF.",
          "La empresa, además, paga su propia cotización, que no aparece como deducción al trabajador pero sí informa el recibo."
        ]
      },
      {
        "title": "Base de cotización y límites en 2026",
        "body": [
          "La Orden PJC/297/2026, publicada en el BOE el 31 de marzo de 2026 y con efectos desde el 1 de enero, desarrolla la cotización de 2026.",
          "La base máxima de cotización en el Régimen General es de 5.101,20 euros mensuales.",
          "La base mínima depende del grupo de cotización. Para el grupo 1 es de 1.424,40 euros mensuales.",
          "Los salarios que superan la base máxima tienen una cotización adicional de solidaridad sobre el exceso, en tres tramos con tipo progresivo."
        ]
      },
      {
        "title": "Tipos de cotización en 2026",
        "body": [
          "Contingencias comunes: 28,30 %, de los que 23,60 % corresponde a la empresa y 4,70 % al trabajador.",
          "Mecanismo de equidad intergeneracional (MEI): 0,90 % sobre la base de contingencias comunes, de los que 0,75 % es de la empresa y 0,15 % del trabajador.",
          "Formación profesional: 0,70 %, de los que 0,60 % es de la empresa y 0,10 % del trabajador.",
          "FOGASA: 0,20 %, solo a cargo de la empresa.",
          "Desempleo en contratos de duración determinada a tiempo completo: 8,30 %, de los que 6,70 % es de la empresa y 1,60 % del trabajador. Los contratos indefinidos tienen otro tipo: consúltalo en la Orden.",
          "Contingencias profesionales (accidente de trabajo y enfermedad profesional): según la tarifa de primas de la Ley General de la Seguridad Social, íntegramente a cargo de la empresa."
        ]
      },
      {
        "title": "La retención de IRPF",
        "body": [
          "El trabajador comunica sus datos personales y familiares a la empresa con el modelo 145 (art. 88 del Reglamento del IRPF). Con ellos se determina el tipo de retención.",
          "Si los datos son falsos, incompletos o inexactos, o no se comunican las variaciones que habrían supuesto una retención mayor, la infracción se sanciona con multa del 35 % al 150 % de lo que se dejó de retener (art. 205 de la Ley General Tributaria).",
          "La AEAT publica cada año el algoritmo de cálculo de las retenciones. Sus pasos principales son: rendimiento neto del trabajo, reducción por obtención de rendimientos del trabajo, base para calcular el tipo, mínimo personal y familiar, cuota de retención y tipo de retención.",
          "El importe se calcula con el programa de ayuda o el algoritmo vigente, no de memoria."
        ]
      }
    ],
    "example": {
      "title": "Nómina de Carlos con contrato temporal a tiempo completo (retención ilustrativa)",
      "body": [
        "Base de cotización: 1.800 €. Supuesto simplificado: coincide con el salario bruto mensual.",
        "Trabajador: contingencias comunes 4,70 % = 84,60 €. MEI 0,15 % = 2,70 €. Formación 0,10 % = 1,80 €. Desempleo 1,60 % = 28,80 €. Total: 117,90 €, un 6,55 % de la base.",
        "Empresa: contingencias comunes 23,60 % = 424,80 €. MEI 0,75 % = 13,50 €. Formación 0,60 % = 10,80 €. Desempleo 6,70 % = 120,60 €. FOGASA 0,20 % = 3,60 €. Total: 573,30 €, sin contar las contingencias profesionales.",
        "Retención de IRPF: 10 % = 180 €. El porcentaje es inventado para practicar; el real sale del algoritmo de la AEAT con los datos del modelo 145.",
        "Líquido a percibir: 1.800 − 117,90 − 180 = 1.502,10 €."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar los tipos de un año anterior. Cada ejercicio trae su orden de cotización y los porcentajes y topes pueden cambiar."
      },
      {
        "kind": "consejo",
        "text": "Pide el modelo 145 actualizado al empezar y cuando cambie la situación familiar del trabajador. Evita retenciones erróneas y sanciones."
      },
      {
        "kind": "clave",
        "text": "En 2026, contingencias comunes: 4,70 % trabajador y 23,60 % empresa. Base máxima: 5.101,20 € al mes."
      }
    ],
    "law": [
      "Orden PJC/297/2026, de 30 de marzo",
      "Reglamento del IRPF (RD 439/2007), arts. 75 a 88",
      "Ley General Tributaria, art. 205"
    ],
    "sources": [
      {
        "title": "BOE: Orden PJC/297/2026, de 30 de marzo (leída a través de resúmenes; texto original pendiente de contrastar)",
        "url": "https://www.boe.es/eli/es/o/2026/03/30/pjc297",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Unión de Mutuas: resumen de la Orden PJC/297/2026",
        "url": "https://www.uniondemutuas.es/wp-content/uploads/2026/04/RESUMEN-Orden-PJC2972026-de-30-de-marzo.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cuatrecasas: claves de la Orden de Cotización 2026",
        "url": "https://www.cuatrecasas.com/es/spain/laboral/art/claves-orden-cotizacion-2026",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Ibermutua: bases y tipos de cotización 2026",
        "url": "https://www.ibermutua.es/wp-content/uploads/2026/04/BASES-Y-TIPOS-DE-COTIZACION-A-LA-SEGURIDAD-SOCIAL-PARA-2026.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "AEAT: algoritmo de retenciones 2026",
        "url": "https://www3.agenciatributaria.gob.es/static_files/Sede/Programas_ayuda/Retenciones/2026/ALGORITMO_2026.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: modelo 145, comunicación de datos al pagador",
        "url": "https://www.seg-social.es/descarga/en/41040",
        "accessed": "2026-10-25",
        "official": true
      }
    ],
    "check": [
      {
        "id": "c2.11-1",
        "lessonId": "2.11",
        "kind": "number",
        "prompt": "En 2026, ¿qué porcentaje de contingencias comunes corresponde al trabajador?",
        "answer": 4.7,
        "explain": "El tipo total es 28,30 %: 23,60 % empresa y 4,70 % trabajador.",
        "unit": "%",
        "tolerance": 0.01
      },
      {
        "id": "c2.11-2",
        "lessonId": "2.11",
        "kind": "number",
        "prompt": "¿Cuál es la base máxima mensual de cotización en el Régimen General en 2026?",
        "answer": 5101.2,
        "explain": "Lo fija la Orden PJC/297/2026.",
        "unit": "€",
        "tolerance": 0.01
      },
      {
        "id": "c2.11-3",
        "lessonId": "2.11",
        "kind": "tf",
        "prompt": "El FOGASA se paga a cargo exclusivo de la empresa.",
        "answer": true,
        "explain": "El tipo es del 0,20 % y lo asume la empresa."
      },
      {
        "id": "c2.11-4",
        "lessonId": "2.11",
        "kind": "choice",
        "prompt": "¿Qué documento usa el trabajador para comunicar a la empresa sus datos personales y familiares para calcular la retención?",
        "answer": 0,
        "explain": "Se basa en el art. 88 del Reglamento del IRPF.",
        "options": [
          "Modelo 145",
          "Modelo 036",
          "Modelo 303",
          "Modelo 111"
        ]
      }
    ]
  },
  "2.12": {
    "intro": "Carlos pide ausentarse del trabajo porque se casa. Otro día, su abuelo ingresa en el hospital. No son vacaciones ni bajas: son permisos retribuidos, que la ley reconoce para ciertas situaciones y que la empresa no puede descontar de la nómina. Esta lección recoge los más habituales del art. 37.3 del Estatuto de los Trabajadores, tal como los dejó el Real Decreto-ley 5/2023.",
    "steps": [
      {
        "title": "Qué son los permisos retribuidos",
        "body": [
          "Son ausencias del trabajo, con derecho a retribución, por motivos que la ley enumera. Son una excepción a la regla de que sin trabajo no hay salario.",
          "Los convenios colectivos pueden mejorarlos, pero no recortar lo que fija la ley."
        ]
      },
      {
        "title": "Matrimonio o pareja de hecho",
        "body": [
          "Quince días naturales por matrimonio o por registro de pareja de hecho. El Real Decreto-ley 5/2023 equiparó la pareja de hecho al matrimonio en este permiso."
        ]
      },
      {
        "title": "Accidente o enfermedad grave de un familiar",
        "body": [
          "Cinco días por accidente o enfermedad graves, hospitalización o intervención quirúrgica sin hospitalización que precise reposo domiciliario del cónyuge, la pareja de hecho o parientes hasta el segundo grado de consanguinidad o afinidad.",
          "Antes de la reforma eran dos días, ampliables a cuatro si había desplazamiento.",
          "No hace falta disfrutar los cinco días seguidos ni empezarlos el primer día del ingreso."
        ]
      },
      {
        "title": "Fallecimiento de un familiar",
        "body": [
          "Dos días por el fallecimiento del cónyuge, la pareja de hecho o parientes hasta el segundo grado de consanguinidad o afinidad.",
          "El texto prevé ampliar el permiso en dos días cuando se necesite un desplazamiento. La ampliación se vincula al permiso por fallecimiento; para el de accidente o enfermedad grave existe discusión interpretativa."
        ]
      },
      {
        "title": "Fuerza mayor por motivos familiares urgentes",
        "body": [
          "El art. 37.9 reconoce hasta cuatro días al año de permiso retribuido por causa de fuerza mayor, cuando sea necesario atender motivos familiares urgentes de enfermedad o accidente que hagan indispensable la presencia inmediata de la persona trabajadora.",
          "Se puede disfrutar por horas hasta completar los cuatro días."
        ]
      },
      {
        "title": "Cómo se cuentan los días",
        "body": [
          "El matrimonio habla expresamente de días naturales. En los demás permisos la ley solo dice «días», y las interpretaciones y los convenios varían entre días naturales y laborables.",
          "El cómputo es objeto de doctrina del Tribunal Supremo. Antes de aplicarlo, consulta el convenio y la jurisprudencia vigente."
        ]
      }
    ],
    "example": {
      "title": "Los permisos de Carlos (supuesto ilustrativo)",
      "body": [
        "Carlos se casa: dispone de 15 días naturales de permiso retribuido.",
        "Meses después ingresa su abuelo, pariente de segundo grado, en el hospital: tiene derecho a 5 días de permiso.",
        "Más tarde fallece su hermano, también pariente de segundo grado: tiene 2 días, ampliables en 2 más si debe desplazarse.",
        "Un día su hija enferma de repente y debe atenderla con urgencia: puede usar horas del permiso por fuerza mayor, con un máximo de cuatro días al año."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar la regla anterior a 2023: dos días por hospitalización de un familiar. Hoy son cinco."
      },
      {
        "kind": "consejo",
        "text": "Revisa siempre el convenio: puede mejorar los permisos y concretar si los días son naturales o laborables."
      },
      {
        "kind": "clave",
        "text": "Matrimonio: 15 días naturales. Hospitalización o enfermedad grave: 5 días. Fallecimiento: 2 días. Fuerza mayor familiar: hasta 4 días al año."
      }
    ],
    "law": [
      "Estatuto de los Trabajadores, art. 37.3 y 37.9",
      "Real Decreto-ley 5/2023, de 28 de junio"
    ],
    "sources": [
      {
        "title": "Comisiones Obreras: nuevos permisos y derechos de corresponsabilidad (RDL 5/2023)",
        "url": "https://cantabria.fe.ccoo.es/6a8d01733e6c296ca65e20b4f2fdaa4c000063.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Comisiones Obreras Castilla-La Mancha: resumen de la reforma de permisos",
        "url": "https://castillalamancha.ccoo.es/38f028e596402bb313d5e8e7f4dfb81b000052.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Pérez-Llorca: newsletter laboral de octubre de 2023 sobre el RDL 5/2023",
        "url": "https://www.perezllorca.com/wp-content/uploads/2023/10/Newsletter-Laboral-Octubre-2023_vf.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "USO: petición de aclaración sobre el art. 37.3 ET",
        "url": "https://www.uso.es/wp-content/uploads/2023/07/sindicato-uso-peticion-articulo-37.3-ET-ministerio-trabajo.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad Pablo de Olavide: cómputo de los permisos retribuidos del art. 37.3 ET",
        "url": "https://www.upo.es/revistas/index.php/lex_social/article/download/10544/9331/42308",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.12-1",
        "lessonId": "2.12",
        "kind": "number",
        "prompt": "¿Cuántos días naturales de permiso retribuido corresponden por matrimonio o registro de pareja de hecho?",
        "answer": 15,
        "explain": "Es el permiso del art. 37.3.a del Estatuto.",
        "unit": "días"
      },
      {
        "id": "c2.12-2",
        "lessonId": "2.12",
        "kind": "number",
        "prompt": "¿Cuántos días de permiso corresponden por hospitalización de un pariente hasta el segundo grado?",
        "answer": 5,
        "explain": "Tras el RDL 5/2023 son cinco días; antes eran dos.",
        "unit": "días"
      },
      {
        "id": "c2.12-3",
        "lessonId": "2.12",
        "kind": "number",
        "prompt": "¿Cuántos días de permiso corresponden por el fallecimiento de un pariente hasta el segundo grado, sin desplazamiento?",
        "answer": 2,
        "explain": "Se amplía en dos días si hace falta desplazarse.",
        "unit": "días"
      },
      {
        "id": "c2.12-4",
        "lessonId": "2.12",
        "kind": "tf",
        "prompt": "Un convenio colectivo puede recortar los permisos retribuidos que fija el Estatuto de los Trabajadores.",
        "answer": false,
        "explain": "Los convenios solo pueden mejorarlos."
      }
    ]
  },
  "2.13": {
    "intro": "Lucía, empleada de la gestoría de Marta, va a tener un hijo. Su empresa debe saber cuánto dura su ausencia, qué cobra durante ella y cómo se reparte entre los dos progenitores. El permiso por nacimiento y cuidado de menor ha cambiado recientemente: el Real Decreto-ley 9/2025, de 29 de julio, lo amplió.",
    "steps": [
      {
        "title": "Cuánto dura el permiso",
        "body": [
          "Cada progenitor tiene derecho a 19 semanas, frente a las 16 anteriores. El permiso es individual e intransferible.",
          "En las familias monoparentales la única persona progenitora dispone de 32 semanas."
        ]
      },
      {
        "title": "Cómo se reparten las semanas",
        "body": [
          "Seis semanas son obligatorias e ininterrumpidas, inmediatamente después del parto o de la resolución judicial o administrativa en adopción, guarda o acogimiento.",
          "Once semanas son de disfrute voluntario y flexible, por semanas, hasta que el menor cumpla 12 meses. Son veintidós en las familias monoparentales.",
          "Dos semanas adicionales, cuatro en las familias monoparentales, se destinan al cuidado del menor y pueden disfrutarse hasta que cumpla 8 años."
        ]
      },
      {
        "title": "Casos con semanas añadidas",
        "body": [
          "En los partos múltiples se amplía una semana para cada progenitor por cada hijo a partir del segundo. También se amplía una semana si el menor tiene una discapacidad.",
          "En nacimientos prematuros u hospitalizaciones tras el parto existen ampliaciones adicionales, de hasta trece semanas según las fuentes consultadas."
        ]
      },
      {
        "title": "Qué se cobra y quién paga",
        "body": [
          "La prestación equivale al 100 % de la base reguladora, que parte de la base de cotización por contingencias comunes del mes anterior al hecho causante. No es el 100 % del salario bruto.",
          "La paga directamente el Instituto Nacional de la Seguridad Social (INSS). Se puede solicitar por internet en «Tu Seguridad Social», también los periodos sucesivos si el disfrute se divide."
        ]
      },
      {
        "title": "Al volver al trabajo",
        "body": [
          "Quien se reincorpora tiene derecho al mismo puesto de trabajo y con la misma jornada, si no solicita una reducción de jornada."
        ]
      },
      {
        "title": "Aplicación en el tiempo",
        "body": [
          "Las dos semanas adicionales pueden solicitarse con efectos retroactivos si el nacimiento, la adopción, la guarda o el acogimiento se produjeron a partir del 2 de agosto de 2024."
        ]
      }
    ],
    "example": {
      "title": "El permiso de Lucía (supuesto ilustrativo)",
      "body": [
        "Lucía tiene un hijo en una familia con dos progenitores. Le corresponden 19 semanas.",
        "Las primeras 6 semanas son obligatorias y seguidas, tras el parto. Después puede repartir otras 11 semanas, por semanas, hasta que el niño cumpla 12 meses.",
        "Le quedan 2 semanas de cuidado del menor, que puede disfrutar hasta los 8 años del niño.",
        "Durante todo el permiso cobra el 100 % de su base reguladora, abonada por el INSS. Marta debe tramitar su situación ante la Seguridad Social y volver a asignarle su puesto cuando se reincorpore."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Seguir hablando de 16 semanas. Desde el Real Decreto-ley 9/2025 son 19 por progenitor y 32 en familias monoparentales."
      },
      {
        "kind": "consejo",
        "text": "Confirma con el cliente la fecha del hecho causante: de ella dependen la base reguladora y la aplicación retroactiva de las semanas adicionales."
      },
      {
        "kind": "clave",
        "text": "19 semanas: 6 obligatorias, 11 flexibles hasta los 12 meses y 2 de cuidado hasta los 8 años."
      }
    ],
    "law": [
      "Estatuto de los Trabajadores, art. 48",
      "Ley General de la Seguridad Social, prestación por nacimiento y cuidado de menor",
      "Real Decreto-ley 9/2025, de 29 de julio"
    ],
    "sources": [
      {
        "title": "Cuatrecasas: ampliación del permiso de nacimiento y cuidado en España",
        "url": "https://www.cuatrecasas.com/es/latam/laboral/art/ampliacion-permiso-nacimiento-cuidado",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cuatrecasas: ampliación de la suspensión por nacimiento y cuidado de menor (Legal Flash)",
        "url": "https://www.cuatrecasas.com/resources/mpliacion-del-permiso-de-nacimiento-y-cuidado-en-espana-688a0ef02f618043059228.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Forvis Mazars: novedades en la regulación del permiso por nacimiento",
        "url": "https://www.forvismazars.com/es/en/insights/alerts/alertas-laborales/novedades-regulacion-permiso-por-nacimiento",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Deia: nuevos permisos de nacimiento y cuidados",
        "url": "https://www.deia.eus/actualidad/sociedad/2025/07/29/nuevos-permisos-nacimiento-cuidados-duracion-9932202.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "El Español: ampliación del permiso por nacimiento hasta 32 semanas",
        "url": "https://www.elespanol.com/valencia/20260926/oficial-trabajadores-pueden-ampliar-permiso-nacimiento-hijo-semanas-trt/1003744394401_0.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "CCOO Servicios: 16 semanas de permiso por nacimiento (régimen anterior, partos múltiples)",
        "url": "https://www.ccoo-servicios.es/archivos/santander/20201222%2016%20semanas%20de%20permiso%20por%20nacimiento.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.13-1",
        "lessonId": "2.13",
        "kind": "number",
        "prompt": "¿Cuántas semanas de permiso por nacimiento y cuidado de menor corresponden a cada progenitor en una familia biparental?",
        "answer": 19,
        "explain": "El Real Decreto-ley 9/2025 las amplió de 16 a 19.",
        "unit": "semanas"
      },
      {
        "id": "c2.13-2",
        "lessonId": "2.13",
        "kind": "number",
        "prompt": "¿Cuántas de esas semanas son obligatorias e ininterrumpidas inmediatamente tras el parto?",
        "answer": 6,
        "explain": "Las demás pueden disfrutarse con flexibilidad.",
        "unit": "semanas"
      },
      {
        "id": "c2.13-3",
        "lessonId": "2.13",
        "kind": "number",
        "prompt": "¿Hasta qué edad del menor, en años, pueden disfrutarse las dos semanas adicionales de cuidado?",
        "answer": 8,
        "explain": "Las otras semanas voluntarias se disfrutan hasta los 12 meses.",
        "unit": "años"
      },
      {
        "id": "c2.13-4",
        "lessonId": "2.13",
        "kind": "choice",
        "prompt": "¿Cuántas semanas de permiso tiene la única persona progenitora en una familia monoparental?",
        "answer": 0,
        "explain": "Tras el RDL 9/2025: 6 obligatorias, 22 voluntarias y 4 de cuidado.",
        "options": [
          "32",
          "16",
          "19",
          "24"
        ]
      }
    ]
  },
  "2.14": {
    "intro": "Marta descubre que un empleado ha incumplido gravemente sus obligaciones y se plantea despedirlo sin indemnización. El despido disciplinario existe, pero la ley lo rodea de requisitos de forma que, si se incumplen, pueden convertirlo en improcedente. En esta lección ves cuándo procede, cómo se comunica y qué se paga siempre: el finiquito.",
    "steps": [
      {
        "title": "Qué es el despido disciplinario",
        "body": [
          "El art. 54 del Estatuto de los Trabajadores permite a la empresa despedir por incumplimientos del trabajador que sean graves y culpables. El apartado 54.2 enumera cuáles.",
          "El convenio colectivo puede regular faltas y sanciones, pero no contradecir los tipos legales del art. 54."
        ]
      },
      {
        "title": "Plazo de la empresa para sancionar",
        "body": [
          "Según las fuentes consultadas, la empresa puede sancionar una falta muy grave en 60 días desde que tiene conocimiento de ella y, en cualquier caso, a los seis meses de haberse cometido."
        ]
      },
      {
        "title": "La carta de despido (art. 55.1 ET)",
        "body": [
          "Debe comunicarse por escrito y en ella han de figurar los hechos que lo motivan y la fecha de efectos. El convenio puede añadir otras exigencias formales.",
          "La empresa solo puede justificar el despido en los hechos imputados en la carta.",
          "Si la carta falta o es defectuosa, el despido se califica como improcedente (art. 55.4 ET)."
        ]
      },
      {
        "title": "Calificación y consecuencias",
        "body": [
          "Un juez puede calificarlo como procedente, improcedente o nulo.",
          "Si es procedente, no hay indemnización: solo se paga el finiquito.",
          "Si es improcedente, la empresa elige, en los cinco días siguientes a la notificación de la sentencia, entre readmitir o indemnizar. La indemnización es de 33 días de salario por año de servicio, con un máximo de 24 mensualidades, para el tiempo posterior al 12 de febrero de 2012. Para el anterior son 45 días por año, con el límite de 720 días de salario en conjunto (art. 56 ET)."
        ]
      },
      {
        "title": "Plazo del trabajador",
        "body": [
          "Tiene 20 días hábiles desde la fecha de efectos para impugnar el despido. Son inhábiles sábados, domingos, festivos y los días 24 y 31 de diciembre (art. 59.3 ET)."
        ]
      },
      {
        "title": "El finiquito",
        "body": [
          "Es la liquidación de lo que se debe al trabajador al terminar la relación, y se paga en cualquier despido, también en el procedente.",
          "Incluye los salarios pendientes hasta la fecha de efectos, las vacaciones devengadas y no disfrutadas, la parte proporcional de las pagas extraordinarias y otros conceptos vencidos.",
          "No es la indemnización ni la carta de despido: es un documento distinto con efectos propios."
        ]
      }
    ],
    "example": {
      "title": "Despido de un empleado con 4 años y 3 meses (cifras ilustrativas)",
      "body": [
        "Salario diario: 60 €. Antigüedad: 4,25 años, todos posteriores al 12 de febrero de 2012.",
        "Finiquito, que se paga siempre: salarios pendientes 600 €, vacaciones no disfrutadas 300 € y parte proporcional de pagas extra 400 €. Total: 1.300 €.",
        "Si el despido fuese procedente, solo se paga ese finiquito.",
        "Si fuese declarado improcedente y la empresa eligiera indemnizar: 33 días × 4,25 años = 140,25 días. 140,25 × 60 = 8.415 € de indemnización, además del finiquito."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Creer que en un despido procedente no se debe nada. El finiquito se paga siempre."
      },
      {
        "kind": "consejo",
        "text": "Redacta la carta con hechos, fechas y la fecha de efectos. Después no se pueden añadir motivos que no estén en ella."
      },
      {
        "kind": "clave",
        "text": "Carta escrita con hechos y fecha de efectos; improcedente: 33 días por año con tope de 24 mensualidades; impugnación en 20 días hábiles."
      }
    ],
    "law": [
      "Estatuto de los Trabajadores, arts. 54, 55, 56 y 59.3"
    ],
    "sources": [
      {
        "title": "Legalitas: manual del despido individual",
        "url": "https://www.legalitas.com/sites/default/files/Manual%20Despido%20individual.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "INEAF: el despido disciplinario, requisitos, efectos y obligaciones",
        "url": "https://www.ineaf.es/tribuna/despido-disciplinario/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Loentiendo: el despido disciplinario y el finiquito",
        "url": "https://loentiendo.com/?p=24718",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Captain Legal: indemnización por despido improcedente y carta de despido",
        "url": "https://www.captain.legal/es/blog/indemnizacion-despido-improcedente-carta/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Gestoría 247: coste de despedir a un trabajador en 2026",
        "url": "https://gestoria247.com/blog/despedir-a-un-trabajador-coste-empresa-2026",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c2.14-1",
        "lessonId": "2.14",
        "kind": "tf",
        "prompt": "En un despido disciplinario procedente la empresa no debe pagar nada al trabajador.",
        "answer": false,
        "explain": "El finiquito se paga siempre."
      },
      {
        "id": "c2.14-2",
        "lessonId": "2.14",
        "kind": "choice",
        "prompt": "La carta de despido disciplinario debe incluir:",
        "answer": 0,
        "explain": "Así lo exige el art. 55.1 del Estatuto.",
        "options": [
          "Los hechos que lo motivan y la fecha de efectos",
          "Solo la fecha de efectos",
          "Únicamente el importe del finiquito",
          "Nada: puede ser verbal"
        ]
      },
      {
        "id": "c2.14-3",
        "lessonId": "2.14",
        "kind": "number",
        "prompt": "¿Cuántos días hábiles tiene el trabajador para impugnar el despido desde la fecha de efectos?",
        "answer": 20,
        "explain": "Son inhábiles sábados, domingos, festivos y los días 24 y 31 de diciembre.",
        "unit": "días"
      },
      {
        "id": "c2.14-4",
        "lessonId": "2.14",
        "kind": "number",
        "prompt": "Despido improcedente, tiempo posterior al 12-2-2012: ¿cuántos días de salario por año de servicio?",
        "answer": 33,
        "explain": "Con un máximo de 24 mensualidades.",
        "unit": "días"
      }
    ]
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
  {
    id: "e2-28", lessonId: "2.5", kind: "number",
    prompt: "En el despido objetivo, ¿cuál es el máximo de mensualidades de la indemnización?",
    answer: 12, unit: "mensualidades",
    explain: "20 días por año de servicio con un máximo de 12 mensualidades.",
    law: "ET, art. 53.1.b",
  },
  {
    id: "e2-29", lessonId: "2.5", kind: "tf",
    prompt: "No conceder el preaviso de 15 días determina automáticamente la improcedencia del despido objetivo.",
    answer: false,
    explain: "No determina la improcedencia por sí solo: la empresa debe abonar los salarios correspondientes a ese periodo.",
    law: "ET, art. 53.4",
  },
  {
    id: "e2-30", lessonId: "2.5", kind: "number",
    prompt: "En un despido improcedente, ¿cuántos días de salario por año de servicio se indemnizan por el tiempo posterior al 12 de febrero de 2012?",
    answer: 33, unit: "días",
    explain: "33 días por año con un máximo de 24 mensualidades.",
  },
  {
    id: "e2-31", lessonId: "2.5", kind: "number",
    prompt: "En un despido improcedente, ¿cuál es el máximo de mensualidades para el tiempo posterior al 12 de febrero de 2012?",
    answer: 24, unit: "mensualidades",
    explain: "33 días por año con un máximo de 24 mensualidades.",
  },
  {
    id: "e2-32", lessonId: "2.5", kind: "choice",
    prompt: "La comunicación escrita de un despido objetivo debe expresar:",
    options: ["La causa y la fecha de efectos", "Solo la fecha de efectos", "Solo el importe de la indemnización", "Nada: puede ser verbal"],
    answer: 0,
    explain: "La carta expresa la causa y la fecha de efectos, con una descripción de los hechos.",
    law: "ET, art. 53.1.a",
  },
  {
    id: "e2-33", lessonId: "2.5", kind: "number",
    scenario: "Un empleado tiene 5,5 años de antigüedad, todos posteriores al 12 de febrero de 2012, y un salario diario de 60 €. Se le despide por causas objetivas procedentes.",
    prompt: "¿Qué indemnización corresponde?",
    answer: 6600, unit: "€",
    explain: "20 días × 5,5 años = 110 días. 110 × 60 = 6.600 €.",
  },
  {
    id: "e2-34", lessonId: "2.5", kind: "choice",
    prompt: "¿Cómo puede calificar un juez la decisión extintiva en un despido objetivo?",
    options: ["Nula, procedente o improcedente", "Solo procedente o nula", "Siempre procedente", "Solo improcedente"],
    answer: 0,
    explain: "La calificación judicial puede ser de nulidad, procedencia o improcedencia.",
    law: "Ley Reguladora de la Jurisdicción Social, art. 122",
  },
  {
    id: "e2-35", lessonId: "2.6", kind: "choice",
    prompt: "En la estructura típica de una carta de presentación, ¿qué se explica en el primer párrafo?",
    options: ["El motivo de la carta", "La experiencia profesional completa", "El salario esperado", "Las aficiones"],
    answer: 0,
    explain: "El primer párrafo explica el motivo; el segundo, la experiencia y la formación; el tercero, información relevante y disponibilidad.",
  },
  {
    id: "e2-36", lessonId: "2.6", kind: "tf",
    prompt: "Incluir una fotografía en el currículum es obligatorio.",
    answer: false,
    explain: "Es opcional: puedes incluirla o no.",
  },
  {
    id: "e2-37", lessonId: "2.6", kind: "tf",
    prompt: "Para presentar candidaturas por correo electrónico se recomienda hacer envíos en masa.",
    answer: false,
    explain: "Se recomienda evitar los envíos en masa y personalizar cada correo.",
  },
  {
    id: "e2-38", lessonId: "2.6", kind: "choice",
    prompt: "Al enviar una candidatura por correo electrónico, conviene:",
    options: ["Agrupar los documentos en uno solo con formato ligero", "Enviar cada documento por separado", "Adjuntar archivos de gran tamaño", "No escribir texto en el correo"],
    answer: 0,
    explain: "También se aconseja redactar el correo como si fuera la carta de presentación.",
  },
  {
    id: "e2-39", lessonId: "2.6", kind: "choice",
    prompt: "¿Qué es Europass en este contexto?",
    options: ["Un modelo de currículum reconocido en Europa", "Un contrato de trabajo europeo", "Un tipo de subsidio", "Una agencia de colocación"],
    answer: 0,
    explain: "Es un modelo reconocido, útil especialmente para buscar trabajo en otros países europeos.",
  },
  {
    id: "e2-40", lessonId: "2.6", kind: "tf",
    prompt: "Las actividades profesionales indicadas en el currículum deberán poder documentarse con certificados de trabajo.",
    answer: true,
    explain: "Los certificados de trabajo respaldan la experiencia que declaras.",
  },
  {
    id: "e2-41", lessonId: "2.6", kind: "choice",
    prompt: "¿Qué es la autocandidatura?",
    options: ["Enviar tu candidatura a empresas de tu sector sin que hayan publicado una oferta", "Presentarte a una oposición", "Apuntarte a una agencia de viajes", "Responder solo a anuncios publicados"],
    answer: 0,
    explain: "Es una vía de búsqueda habitual; la carta debe adaptarse al perfil de la empresa.",
  },
  {
    "id": "e2-42",
    "lessonId": "2.7",
    "kind": "choice",
    "prompt": "El CCC sirve para:",
    "answer": 0,
    "explain": "Es el número que identifica a la empresa en la Seguridad Social.",
    "options": [
      "Dar de alta a los trabajadores de la empresa ante la TGSS",
      "Declarar el IVA",
      "Pagar la nómina",
      "Comunicar el contrato al SEPE"
    ]
  },
  {
    "id": "e2-43",
    "lessonId": "2.7",
    "kind": "tf",
    "prompt": "La inscripción de la empresa en la TGSS se hace antes del inicio de la actividad.",
    "answer": true,
    "explain": "Es previa a la contratación."
  },
  {
    "id": "e2-44",
    "lessonId": "2.7",
    "kind": "tf",
    "prompt": "En una SL, el CCC se obtiene al mismo tiempo que se da de alta al primer trabajador.",
    "answer": true,
    "explain": "Así lo indica la infografía del Punto de Atención al Emprendedor."
  },
  {
    "id": "e2-45",
    "lessonId": "2.7",
    "kind": "choice",
    "prompt": "¿Qué documento identificativo se necesita para inscribir a un empresario individual?",
    "answer": 0,
    "explain": "Se aporta el documento identificativo del titular de la empresa.",
    "options": [
      "DNI, NIE o pasaporte del titular",
      "El contrato de trabajo",
      "La última nómina",
      "El libro de visitas"
    ]
  },
  {
    "id": "e2-46",
    "lessonId": "2.7",
    "kind": "tf",
    "prompt": "Un autónomo que ya está en el RETA no necesita inscribirse como empleador para contratar.",
    "answer": false,
    "explain": "Debe obtener su CCC como empresario."
  },
  {
    "id": "e2-47",
    "lessonId": "2.7",
    "kind": "tf",
    "prompt": "Los cambios en los datos de la empresa, como el domicilio, se comunican a la TGSS a través del Sistema RED.",
    "answer": true,
    "explain": "El Sistema RED permite modificar datos identificativos y de la actividad."
  },
  {
    "id": "e2-48",
    "lessonId": "2.7",
    "kind": "tf",
    "prompt": "El Sistema RED permite gestionar la baja y la reanudación del CCC.",
    "answer": true,
    "explain": "Es una de sus funcionalidades."
  },
  {
    "id": "e2-49",
    "lessonId": "2.8",
    "kind": "number",
    "prompt": "¿Cuántos días naturales de antelación máxima admite el alta de un trabajador antes de empezar a trabajar?",
    "answer": 60,
    "explain": "Hasta 60 días antes del inicio de la relación.",
    "unit": "días"
  },
  {
    "id": "e2-50",
    "lessonId": "2.8",
    "kind": "tf",
    "prompt": "La afiliación a la Seguridad Social es vitalicia.",
    "answer": true,
    "explain": "Se hace una vez y vale para toda la vida laboral."
  },
  {
    "id": "e2-51",
    "lessonId": "2.8",
    "kind": "tf",
    "prompt": "La solicitud de afiliación implica la solicitud de alta inicial.",
    "answer": true,
    "explain": "Así se tramitan juntas la primera vez."
  },
  {
    "id": "e2-52",
    "lessonId": "2.8",
    "kind": "choice",
    "prompt": "¿Quién solicita el alta de un trabajador por cuenta ajena?",
    "answer": 0,
    "explain": "Es una obligación del empleador.",
    "options": [
      "El empresario",
      "El trabajador siempre",
      "El SEPE",
      "La Agencia Tributaria"
    ]
  },
  {
    "id": "e2-53",
    "lessonId": "2.8",
    "kind": "choice",
    "prompt": "¿Qué dato NO se necesita para tramitar el alta?",
    "answer": 0,
    "explain": "Se requieren CCC, régimen, NSS, fecha de inicio y grupo de cotización.",
    "options": [
      "El importe de la última nómina",
      "El CCC de la empresa",
      "El grupo de cotización",
      "La fecha de inicio"
    ]
  },
  {
    "id": "e2-54",
    "lessonId": "2.8",
    "kind": "tf",
    "prompt": "El alta de un trabajador puede solicitarse con 90 días de antelación.",
    "answer": false,
    "explain": "El máximo es de 60 días naturales."
  },
  {
    "id": "e2-55",
    "lessonId": "2.8",
    "kind": "tf",
    "prompt": "El alta de trabajadores se tramita por el Sistema RED.",
    "answer": true,
    "explain": "RED Directo incluye el servicio de inscripción y afiliación."
  },
  {
    "id": "e2-56",
    "lessonId": "2.9",
    "kind": "number",
    "prompt": "¿Cuántos días naturales fija actualmente el art. 32.3 del Reglamento de afiliación para presentar las bajas y variaciones de datos de los trabajadores?",
    "answer": 6,
    "explain": "Desde el 1 de agosto de 2026, seis días naturales siguientes al cese o a la variación.",
    "unit": "días"
  },
  {
    "id": "e2-57",
    "lessonId": "2.9",
    "kind": "tf",
    "prompt": "El plazo de tres días para la baja de trabajadores por cuenta ajena sigue vigente tras agosto de 2026.",
    "answer": false,
    "explain": "Lo ampliaron a seis días el Real Decreto 643/2026."
  },
  {
    "id": "e2-58",
    "lessonId": "2.9",
    "kind": "choice",
    "prompt": "El Real Decreto 643/2026 entró en vigor el:",
    "answer": 0,
    "explain": "Se publicó el 30 de julio y entró en vigor el día uno del mes siguiente.",
    "options": [
      "1 de agosto de 2026",
      "30 de julio de 2026",
      "1 de enero de 2027",
      "29 de julio de 2026"
    ]
  },
  {
    "id": "e2-59",
    "lessonId": "2.9",
    "kind": "tf",
    "prompt": "La baja de un trabajador por cuenta ajena se tramita solo por vía electrónica a través del Sistema RED.",
    "answer": true,
    "explain": "Así lo indica la información oficial de la Administración."
  },
  {
    "id": "e2-60",
    "lessonId": "2.9",
    "kind": "choice",
    "prompt": "Un trabajador cesa el 10 de noviembre de 2026. ¿Hasta qué día natural puede presentarse la baja en plazo?",
    "answer": 0,
    "explain": "Seis días naturales siguientes: 11, 12, 13, 14, 15 y 16.",
    "options": [
      "16 de noviembre",
      "13 de noviembre",
      "20 de noviembre",
      "30 de noviembre"
    ]
  },
  {
    "id": "e2-61",
    "lessonId": "2.9",
    "kind": "number",
    "prompt": "El real decreto concede un plazo para comunicar el código de ocupación laboral de los trabajadores en alta. ¿De cuántos meses desde su entrada en vigor?",
    "answer": 6,
    "explain": "La disposición adicional única fija seis meses.",
    "unit": "meses"
  },
  {
    "id": "e2-62",
    "lessonId": "2.9",
    "kind": "tf",
    "prompt": "Si la baja se presenta en plazo, la obligación de cotizar se extingue el día del cese en el trabajo.",
    "answer": true,
    "explain": "Fuera de plazo se cotiza hasta el día de la comunicación."
  },
  {
    "id": "e2-63",
    "lessonId": "2.10",
    "kind": "number",
    "prompt": "¿Cuántos días hábiles tiene el empresario para comunicar un contrato a los servicios públicos de empleo desde su concertación?",
    "answer": 10,
    "explain": "Diez días hábiles.",
    "unit": "días"
  },
  {
    "id": "e2-64",
    "lessonId": "2.10",
    "kind": "tf",
    "prompt": "También deben comunicarse las prórrogas de los contratos.",
    "answer": true,
    "explain": "El real decreto incluye contratos y prórrogas."
  },
  {
    "id": "e2-65",
    "lessonId": "2.10",
    "kind": "choice",
    "prompt": "¿Qué norma regula la comunicación del contenido de los contratos de trabajo a los servicios públicos de empleo?",
    "answer": 0,
    "explain": "Regula también el uso de medios telemáticos.",
    "options": [
      "Real Decreto 1424/2002",
      "Real Decreto 84/1996",
      "Orden de 27 de diciembre de 1994",
      "Ley 10/2010"
    ]
  },
  {
    "id": "e2-66",
    "lessonId": "2.10",
    "kind": "tf",
    "prompt": "Los contratos que no se formalicen por escrito están exentos de la obligación de comunicación.",
    "answer": false,
    "explain": "La obligación existe deban o no formalizarse por escrito."
  },
  {
    "id": "e2-67",
    "lessonId": "2.10",
    "kind": "tf",
    "prompt": "En algunas comunidades autónomas la comunicación telemática es obligatoria.",
    "answer": true,
    "explain": "Es el caso, por ejemplo, de Madrid y del País Vasco según sus normas."
  },
  {
    "id": "e2-68",
    "lessonId": "2.10",
    "kind": "choice",
    "prompt": "¿Ante quién se comunica el contrato de trabajo?",
    "answer": 0,
    "explain": "Es una obligación distinta del alta en la TGSS.",
    "options": [
      "Ante el servicio público de empleo",
      "Ante la Agencia Tributaria",
      "Ante el Registro Mercantil",
      "Ante la mutua"
    ]
  },
  {
    "id": "e2-69",
    "lessonId": "2.10",
    "kind": "tf",
    "prompt": "Pueden comunicar contratos los profesionales que actúen en representación de la empresa, con la autorización correspondiente.",
    "answer": true,
    "explain": "La normativa admite la comunicación por representantes."
  },
  {
    "id": "e2-70",
    "lessonId": "2.11",
    "kind": "number",
    "prompt": "Contingencias comunes en 2026: ¿qué porcentaje total se cotiza entre empresa y trabajador?",
    "answer": 28.3,
    "explain": "23,60 % la empresa y 4,70 % el trabajador.",
    "unit": "%",
    "tolerance": 0.01
  },
  {
    "id": "e2-71",
    "lessonId": "2.11",
    "kind": "number",
    "prompt": "MEI en 2026: ¿qué porcentaje total se aplica sobre la base de contingencias comunes?",
    "answer": 0.9,
    "explain": "0,75 % empresa y 0,15 % trabajador.",
    "unit": "%",
    "tolerance": 0.001
  },
  {
    "id": "e2-72",
    "lessonId": "2.11",
    "kind": "number",
    "prompt": "Formación profesional: ¿qué porcentaje corresponde al trabajador?",
    "answer": 0.1,
    "explain": "El total es 0,70 %: 0,60 % empresa y 0,10 % trabajador.",
    "unit": "%",
    "tolerance": 0.001
  },
  {
    "id": "e2-73",
    "lessonId": "2.11",
    "kind": "number",
    "prompt": "Base de cotización de 2.000 €. ¿Cuánto paga el trabajador por contingencias comunes (4,70 %)?",
    "answer": 94,
    "explain": "2.000 × 0,047 = 94 €.",
    "unit": "€"
  },
  {
    "id": "e2-74",
    "lessonId": "2.11",
    "kind": "number",
    "prompt": "Contrato temporal a tiempo completo con base de 1.800 €. ¿Cuánto es la aportación total del trabajador por contingencias comunes, MEI, formación y desempleo (6,55 %)?",
    "answer": 117.9,
    "explain": "84,60 + 2,70 + 1,80 + 28,80 = 117,90 €.",
    "unit": "€",
    "tolerance": 0.01
  },
  {
    "id": "e2-75",
    "lessonId": "2.11",
    "kind": "tf",
    "prompt": "La Orden PJC/297/2026 fija los límites y tipos de cotización de 2026.",
    "answer": true,
    "explain": "Tiene efectos desde el 1 de enero de 2026."
  },
  {
    "id": "e2-76",
    "lessonId": "2.11",
    "kind": "tf",
    "prompt": "Los datos inexactos en el modelo 145 que reducen la retención pueden sancionarse con una multa del 35 % al 150 % de lo no retenido.",
    "answer": true,
    "explain": "Está previsto en el art. 205 de la Ley General Tributaria."
  },
  {
    "id": "e2-77",
    "lessonId": "2.11",
    "kind": "choice",
    "prompt": "Los salarios que superan la base máxima de cotización tienen:",
    "answer": 0,
    "explain": "Se aplica en tres tramos con tipo progresivo.",
    "options": [
      "Una cotización adicional de solidaridad sobre el exceso",
      "Exención total de cotizar por el exceso",
      "Un tipo único igual al de contingencias comunes",
      "Cotización solo de la empresa"
    ]
  },
  {
    "id": "e2-78",
    "lessonId": "2.11",
    "kind": "tf",
    "prompt": "Los tipos y bases de cotización son los mismos todos los años.",
    "answer": false,
    "explain": "Cada ejercicio trae su orden de cotización."
  },
  {
    "id": "e2-79",
    "lessonId": "2.12",
    "kind": "number",
    "prompt": "Permiso por matrimonio: ¿cuántos días naturales?",
    "answer": 15,
    "explain": "Se extiende también al registro de pareja de hecho.",
    "unit": "días"
  },
  {
    "id": "e2-80",
    "lessonId": "2.12",
    "kind": "tf",
    "prompt": "El permiso de 15 días se aplica también al registro de pareja de hecho.",
    "answer": true,
    "explain": "El RDL 5/2023 equiparó la pareja de hecho al matrimonio."
  },
  {
    "id": "e2-81",
    "lessonId": "2.12",
    "kind": "number",
    "prompt": "Permiso por accidente o enfermedad grave u hospitalización de un familiar hasta el segundo grado: ¿cuántos días?",
    "answer": 5,
    "explain": "Antes de la reforma eran dos días.",
    "unit": "días"
  },
  {
    "id": "e2-82",
    "lessonId": "2.12",
    "kind": "choice",
    "prompt": "¿A qué parientes alcanzan los permisos por hospitalización y fallecimiento?",
    "answer": 0,
    "explain": "Incluye consanguinidad y afinidad hasta el segundo grado.",
    "options": [
      "Cónyuge, pareja de hecho y parientes hasta el segundo grado",
      "Solo cónyuge e hijos",
      "Solo familiares que conviven",
      "Cualquier persona que designe el trabajador"
    ]
  },
  {
    "id": "e2-83",
    "lessonId": "2.12",
    "kind": "choice",
    "prompt": "El abuelo de un trabajador es pariente de:",
    "answer": 0,
    "explain": "Los abuelos y los hermanos son parientes de segundo grado.",
    "options": [
      "Segundo grado de consanguinidad",
      "Primer grado",
      "Tercer grado",
      "No es pariente a estos efectos"
    ]
  },
  {
    "id": "e2-84",
    "lessonId": "2.12",
    "kind": "number",
    "prompt": "Fallecimiento de un familiar hasta el segundo grado, sin desplazamiento: ¿cuántos días de permiso?",
    "answer": 2,
    "explain": "Ampliables en dos días si se necesita desplazamiento.",
    "unit": "días"
  },
  {
    "id": "e2-85",
    "lessonId": "2.12",
    "kind": "number",
    "prompt": "Permiso por fuerza mayor familiar: ¿cuántos días al año como máximo?",
    "answer": 4,
    "explain": "Se puede disfrutar por horas hasta completar los cuatro días.",
    "unit": "días"
  },
  {
    "id": "e2-86",
    "lessonId": "2.12",
    "kind": "tf",
    "prompt": "El permiso por fuerza mayor familiar puede disfrutarse por horas.",
    "answer": true,
    "explain": "Hasta completar el máximo de cuatro días al año."
  },
  {
    "id": "e2-87",
    "lessonId": "2.12",
    "kind": "tf",
    "prompt": "Los cinco días del permiso por hospitalización han de disfrutarse seguidos y desde el primer día del ingreso.",
    "answer": false,
    "explain": "No es obligatorio, según las fuentes consultadas."
  },
  {
    "id": "e2-88",
    "lessonId": "2.13",
    "kind": "number",
    "prompt": "Permiso por nacimiento y cuidado de menor por progenitor en familia biparental: ¿cuántas semanas?",
    "answer": 19,
    "explain": "Eran 16 antes del RDL 9/2025.",
    "unit": "semanas"
  },
  {
    "id": "e2-89",
    "lessonId": "2.13",
    "kind": "tf",
    "prompt": "El permiso por nacimiento es individual e intransferible.",
    "answer": true,
    "explain": "Cada progenitor disfruta del suyo."
  },
  {
    "id": "e2-90",
    "lessonId": "2.13",
    "kind": "number",
    "prompt": "En una familia monoparental, ¿cuántas semanas de permiso corresponden a la persona progenitora?",
    "answer": 32,
    "explain": "19 + 13 adicionales por no existir un segundo progenitor.",
    "unit": "semanas"
  },
  {
    "id": "e2-91",
    "lessonId": "2.13",
    "kind": "number",
    "prompt": "Semanas obligatorias e ininterrumpidas tras el parto:",
    "answer": 6,
    "explain": "Se disfrutan inmediatamente después del parto o de la resolución.",
    "unit": "semanas"
  },
  {
    "id": "e2-92",
    "lessonId": "2.13",
    "kind": "number",
    "prompt": "Semanas voluntarias de disfrute flexible hasta los 12 meses del menor en una familia biparental:",
    "answer": 11,
    "explain": "Se distribuyen por semanas.",
    "unit": "semanas"
  },
  {
    "id": "e2-93",
    "lessonId": "2.13",
    "kind": "choice",
    "prompt": "¿Hasta qué edad pueden disfrutarse las 2 semanas adicionales de cuidado del menor?",
    "answer": 0,
    "explain": "Pueden acumularse o interrumpirse por semanas.",
    "options": [
      "8 años",
      "12 meses",
      "3 años",
      "18 años"
    ]
  },
  {
    "id": "e2-94",
    "lessonId": "2.13",
    "kind": "choice",
    "prompt": "La prestación por nacimiento equivale a:",
    "answer": 0,
    "explain": "La base parte de la base de cotización por contingencias comunes del mes anterior.",
    "options": [
      "El 100 % de la base reguladora",
      "El 100 % del salario bruto",
      "El 75 % de la base reguladora",
      "El 60 % de la base reguladora"
    ]
  },
  {
    "id": "e2-95",
    "lessonId": "2.13",
    "kind": "tf",
    "prompt": "La prestación por nacimiento la abona directamente el INSS.",
    "answer": true,
    "explain": "La solicitud puede hacerse en «Tu Seguridad Social»."
  },
  {
    "id": "e2-96",
    "lessonId": "2.13",
    "kind": "tf",
    "prompt": "Al volver del permiso por nacimiento, la persona trabajadora tiene derecho a su mismo puesto y jornada, si no pide reducción de jornada.",
    "answer": true,
    "explain": "Es la regla de reincorporación tras la suspensión del contrato."
  },
  {
    "id": "e2-97",
    "lessonId": "2.14",
    "kind": "choice",
    "prompt": "¿Qué artículo del Estatuto regula el despido disciplinario?",
    "answer": 0,
    "explain": "Los incumplimientos deben ser graves y culpables.",
    "options": [
      "Art. 54",
      "Art. 29",
      "Art. 37",
      "Art. 8"
    ]
  },
  {
    "id": "e2-98",
    "lessonId": "2.14",
    "kind": "tf",
    "prompt": "El despido disciplinario puede comunicarse verbalmente sin riesgo.",
    "answer": false,
    "explain": "Debe ser por escrito; si no, puede declararse improcedente."
  },
  {
    "id": "e2-99",
    "lessonId": "2.14",
    "kind": "choice",
    "prompt": "Si la carta de despido es defectuosa, el despido se califica:",
    "answer": 0,
    "explain": "Art. 55.4 del Estatuto.",
    "options": [
      "Improcedente",
      "Procedente",
      "Nulo siempre",
      "Válido"
    ]
  },
  {
    "id": "e2-100",
    "lessonId": "2.14",
    "kind": "tf",
    "prompt": "La empresa puede justificar el despido con hechos que no figuran en la carta.",
    "answer": false,
    "explain": "Solo puede justificarlo en los hechos imputados en la carta."
  },
  {
    "id": "e2-101",
    "lessonId": "2.14",
    "kind": "number",
    "prompt": "Tras declararse improcedente un despido, ¿de cuántos días dispone la empresa para elegir entre readmitir o indemnizar, desde la notificación de la sentencia?",
    "answer": 5,
    "explain": "Es la opción del art. 56 ET.",
    "unit": "días"
  },
  {
    "id": "e2-102",
    "lessonId": "2.14",
    "kind": "number",
    "prompt": "¿Cuántos días de salario por año de servicio corresponden por el tiempo anterior al 12 de febrero de 2012 en un despido improcedente?",
    "answer": 45,
    "explain": "Con el límite de 720 días de salario en conjunto.",
    "unit": "días"
  },
  {
    "id": "e2-103",
    "lessonId": "2.14",
    "kind": "number",
    "prompt": "Despido improcedente: salario diario 60 € y 4,25 años de antigüedad posteriores al 12-2-2012. ¿Qué indemnización corresponde?",
    "answer": 8415,
    "explain": "33 × 4,25 = 140,25 días. 140,25 × 60 = 8.415 €.",
    "unit": "€"
  },
  {
    "id": "e2-104",
    "lessonId": "2.14",
    "kind": "tf",
    "prompt": "El finiquito incluye las vacaciones devengadas y no disfrutadas.",
    "answer": true,
    "explain": "También los salarios pendientes y la parte proporcional de las pagas extra."
  },
  {
    "id": "e2-105",
    "lessonId": "2.14",
    "kind": "tf",
    "prompt": "El finiquito y la indemnización por despido son lo mismo.",
    "answer": false,
    "explain": "El finiquito liquida lo devengado; la indemnización compensa el despido improcedente u objetivo."
  },
];
