import type { Question } from "../questions";
import type { LessonContent } from "./types";

const D = "2026-10-23";

export const m1Lessons: Record<string, LessonContent> = {
  "1.1": {
    intro:
      "Marta quiere abrir un taller de reformas y duda entre ejercer ella misma o constituir una sociedad limitada (SL). En esta lección ves las reglas de partida: cómo responde una persona frente a sus deudas y qué exige la ley para crear una SL. Los impuestos y la Seguridad Social de cada opción se estudian en las lecciones siguientes.",
    steps: [
      {
        title: "La persona física responde con todo su patrimonio",
        body: [
          "El Código Civil (art. 1911) establece que quien debe responde del cumplimiento de sus obligaciones con todos sus bienes, tanto los que tiene hoy como los que adquiera en el futuro.",
          "Es el punto de partida para valorar cualquier forma jurídica: la pregunta es siempre qué patrimonio queda expuesto ante una deuda.",
        ],
      },
      {
        title: "Capital mínimo de la SL",
        body: [
          "La Ley 18/2022, de creación y crecimiento de empresas, publicada en el BOE el 29 de septiembre de 2022, redujo el capital mínimo de la SL de 3.000 € a 1 €.",
          "La reforma no cambió el capital mínimo de las sociedades anónimas.",
        ],
      },
      {
        title: "Si el capital es inferior a 3.000 €",
        body: [
          "Hay que destinar a reserva legal al menos el 20 % del beneficio, hasta que la suma de la reserva legal y el capital alcance los 3.000 €.",
          "Si en una liquidación el patrimonio no basta para pagar las deudas, los socios responden solidariamente de la diferencia entre 3.000 € y el capital suscrito.",
        ],
      },
      {
        title: "Reserva legal con capital de 3.000 € o más",
        body: ["Rige la regla general del art. 274 de la Ley de Sociedades de Capital: destinar el 10 % del beneficio hasta que la reserva alcance el 20 % del capital social."],
      },
    ],
    example: {
      title: "Tres socios con 1.000 € de capital",
      body: [
        "Tres socios constituyen una SL con un capital de 1.000 €, inferior a 3.000 €.",
        "Reserva obligatoria: se deben destinar a reserva legal al menos el 20 % de cada beneficio hasta que reserva + capital lleguen a 3.000 €, es decir, hasta que la reserva sume 2.000 €. Con un beneficio de 5.000 € el primer año, dotarían 1.000 €.",
        "Liquidación: si algún día se liquida con patrimonio insuficiente, los socios responden solidariamente de 3.000 − 1.000 = 2.000 €.",
      ],
    },
    tips: [
      { kind: "consejo", text: "Antes de recomendar una forma jurídica, calcula con las cifras del cliente: capital inicial y reserva legal que tendrá que dotar." },
      { kind: "error", text: "Pensar que constituir con 1 € significa no tener obligaciones. Mientras el capital sea inferior a 3.000 € rigen la reserva reforzada y la responsabilidad solidaria en liquidación." },
      { kind: "clave", text: "El umbral que importa es 3.000 €: por debajo, 20 % del beneficio a reserva legal y responsabilidad solidaria por la diferencia en liquidación." },
    ],
    law: [
      "Código Civil, art. 1911",
      "Ley de Sociedades de Capital (RDL 1/2010), arts. 4 y 274",
      "Ley 18/2022, de 28 de septiembre, de creación y crecimiento de empresas",
    ],
    sources: [
      { title: "Garrigues: reforma que reduce a 1 euro el capital mínimo de la SL", url: "https://www.garrigues.com/es_ES/noticia/publicada-boe-reforma-reduce-3000-euros-1-euro-capital-minimo-constituir-sociedad", accessed: D, official: false },
      { title: "PwC: nuevas medidas para agilizar la constitución de SL", url: "https://periscopiofiscalylegal.pwc.es/nuevas-medidas-societarias-orientadas-a-agilizar-la-constitucion-de-sociedades-de-responsabilidad-limitada/", accessed: D, official: false },
      { title: "Notarios y Registradores: novedades societarias de la Ley Crea y Crece", url: "https://www.notariosyregistradores.com/web/secciones/oficina-notarial/otros-temas/novedades-societarias-de-interes-notarial-en-la-ley-de-creacion-y-crecimiento-de-empresas/", accessed: D, official: false },
      { title: "Abogacía del Estado: Derecho civil, tema 43 (art. 1911 CC)", url: "https://www.asoc-abogadosdelestado.es/files/uploads/file/006dbf38-2996-4878-9588-9e58ba083cdb/derecho-civil-tema-43-jmo.docx", accessed: D, official: false },
    ],
    check: [
      {
        id: "c1.1-1", lessonId: "1.1", kind: "number",
        prompt: "¿Cuál es el capital mínimo, en euros, para constituir una SL tras la Ley 18/2022?",
        answer: 1, unit: "€",
        explain: "La Ley 18/2022 lo redujo de 3.000 € a 1 €.",
        law: "Ley de Sociedades de Capital, art. 4",
      },
      {
        id: "c1.1-2", lessonId: "1.1", kind: "tf",
        prompt: "Con un capital inferior a 3.000 €, debe destinarse a reserva legal al menos el 20 % del beneficio hasta que reserva y capital sumen 3.000 €.",
        answer: true,
        explain: "Es una de las dos reglas especiales para las SL con capital inferior a 3.000 €.",
        law: "Ley de Sociedades de Capital, art. 4",
      },
      {
        id: "c1.1-3", lessonId: "1.1", kind: "number",
        prompt: "Una SL con 2.500 € de capital se liquida con patrimonio insuficiente. ¿De qué importe responden solidariamente los socios?",
        answer: 500, unit: "€",
        explain: "3.000 − 2.500 = 500 €: la diferencia entre 3.000 € y el capital suscrito.",
        law: "Ley de Sociedades de Capital, art. 4",
      },
      {
        id: "c1.1-4", lessonId: "1.1", kind: "choice",
        prompt: "Según el art. 1911 del Código Civil, ¿con qué bienes responde el deudor del cumplimiento de sus obligaciones?",
        options: ["Solo con los bienes que tenía al contraer la deuda", "Con todos sus bienes, presentes y futuros", "Solo con bienes destinados a su actividad", "Con ninguno si es una deuda comercial"],
        answer: 1,
        explain: "Es el principio de responsabilidad patrimonial universal del deudor.",
        law: "Código Civil, art. 1911",
      },
    ],
  },
  "1.2": {
    intro:
      "Marta ya ha decidido cómo ejercer su actividad. Antes de facturar su primer euro debe comunicarlo a Hacienda. Esa comunicación se hace con la declaración censal, que también sirve después para avisar de cambios y para darse de baja.",
    steps: [
      {
        title: "Qué es la declaración censal",
        body: [
          "El modelo 036 es la declaración censal de alta, modificación y baja en el Censo de empresarios, profesionales y retenedores.",
          "El modelo 037, la versión simplificada, está suprimido: la Orden HAC/1526/2024, publicada en el BOE el 9 de enero de 2025, lo eliminó con efectos desde el 3 de febrero de 2025. Hoy todo se tramita con el 036.",
          "Con la declaración de alta, las personas jurídicas y las personas físicas empresarias o profesionales que no tengan NIF lo solicitan.",
        ],
      },
      {
        title: "Quién debe darse de alta",
        body: [
          "Los empresarios o profesionales que vayan a comenzar actividades económicas en territorio español.",
          "Quienes, sin ser empresarios ni profesionales, abonen rentas sujetas a retención o ingreso a cuenta.",
        ],
      },
      {
        title: "Plazos",
        body: [
          "Alta: antes de iniciar la actividad. Para el NIF de quien va a ejercer una actividad, antes de realizar entregas, adquisiciones, cobros, pagos o de contratar personal para esa actividad.",
          "Personas jurídicas y entidades sin personalidad jurídica: el NIF se solicita dentro del mes siguiente a su constitución.",
          "Modificación: en general, un mes a contar desde el día siguiente a aquel en que se produce el hecho que la motiva.",
          "Baja por cese de la actividad de una persona física: un mes. Si fallece el obligado, sus herederos disponen de seis meses.",
        ],
      },
      {
        title: "Cómo se presenta",
        body: [
          "Por internet con certificado electrónico. Las personas físicas no obligadas a usar certificado también pueden usar Cl@ve.",
          "La presentación electrónica es obligatoria, entre otros, para las sociedades anónimas y las sociedades de responsabilidad limitada, las administraciones públicas y los grandes contribuyentes. La obligación no se aplica cuando el modelo se usa para solicitar el NIF.",
          "En papel, en la Administración o Delegación de la AEAT del domicilio fiscal, con cita previa.",
          "El Documento Único Electrónico (DUE), tramitado a través de un Punto de Atención al Emprendedor, puede sustituir al 036 cuando la normativa lo autorice, por ejemplo al constituir una SL.",
        ],
      },
      {
        title: "Qué se declara de la actividad",
        body: [
          "Se rellena una hoja por cada actividad, clasificada según las normas del Impuesto sobre Actividades Económicas (IAE).",
          "El modelo distingue, entre las que forman parte del IAE: alquiler de locales (A01), ganadería independiente (A02), resto de empresariales (A03), artísticas y deportivas (A04) y profesionales (A05).",
          "En una modificación solo se rellenan las casillas que cambian.",
        ],
      },
    ],
    example: {
      title: "El recorrido de Marta",
      body: [
        "Antes de comprar materiales o contratar a nadie, presenta el alta en el censo (casilla 111).",
        "Indica su actividad con el tipo que corresponda según el IAE.",
        "Más adelante cambia su domicilio fiscal: presenta una modificación (casilla 122) en el plazo de un mes desde el día siguiente al cambio.",
        "Si algún día cesa en toda su actividad, presenta la baja (casilla 150) en el plazo de un mes.",
      ],
    },
    tips: [
      { kind: "error", text: "Seguir hablando del modelo 037. Está suprimido desde el 3 de febrero de 2025 y cualquier material anterior a esa fecha puede mencionarlo como vigente." },
      { kind: "consejo", text: "En una modificación, marca solo las casillas que cambian. Las instrucciones advierten de que rellenar de más puede retener la presentación por falta de documentación." },
      { kind: "clave", text: "Plazos: el alta, antes de empezar; la modificación y la baja de una persona física, un mes." },
    ],
    law: [
      "Orden EHA/1274/2007, de 26 de abril (modelo 036)",
      "Orden HAC/1526/2024, de 11 de diciembre (suprime el modelo 037)",
      "Real Decreto 1065/2007 (Reglamento general de aplicación de los tributos), arts. 9 y 11",
    ],
    sources: [
      { title: "AEAT: instrucciones del modelo 036", url: "https://www3.agenciatributaria.gob.es/static_files/Sede/Procedimiento_ayuda/G322/instr_mod036.pdf", accessed: D, official: true },
      { title: "AEAT: ficha del procedimiento del modelo 036", url: "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G322.shtml", accessed: D, official: true },
      { title: "AEAT: noticia sobre la Orden de modificación de declaraciones censales", url: "https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2025/enero/9/orden-ministerial-modificacion-declaraciones-censales.html", accessed: D, official: true },
      { title: "BOE: Orden HAC/1526/2024, de 11 de diciembre", url: "https://www.boe.es/eli/es/o/2024/12/11/hac1526", accessed: D, official: true },
    ],
    check: [
      {
        id: "c1.2-1", lessonId: "1.2", kind: "choice",
        prompt: "¿Para qué se utiliza el modelo 036?",
        options: ["Para la autoliquidación trimestral del IVA", "Para el alta, la modificación y la baja en el Censo de empresarios, profesionales y retenedores", "Para ingresar las retenciones del trabajo", "Para depositar las cuentas anuales"],
        answer: 1,
        explain: "Es la declaración censal. Sirve para comunicar el inicio de la actividad, los cambios posteriores y el cese.",
        law: "Orden EHA/1274/2007",
      },
      {
        id: "c1.2-2", lessonId: "1.2", kind: "tf",
        prompt: "El modelo 037 de declaración censal simplificada sigue vigente.",
        answer: false,
        explain: "La Orden HAC/1526/2024 lo suprimió con efectos desde el 3 de febrero de 2025.",
        law: "Orden HAC/1526/2024",
      },
      {
        id: "c1.2-3", lessonId: "1.2", kind: "number",
        prompt: "¿Cuántos meses es, en general, el plazo para presentar una declaración censal de modificación?",
        answer: 1, unit: "mes(es)",
        explain: "Un mes a contar desde el día siguiente a aquel en que se producen los hechos que determinan la presentación.",
        law: "Instrucciones del modelo 036",
      },
      {
        id: "c1.2-4", lessonId: "1.2", kind: "choice",
        prompt: "El alta en el censo para comenzar una actividad debe presentarse:",
        options: ["Antes de iniciar la actividad", "Dentro del primer trimestre de actividad", "Al presentar la primera declaración de IVA", "Al cerrar el ejercicio"],
        answer: 0,
        explain: "La comunicación de inicio se hace con anterioridad al inicio de las actividades, de las operaciones o del nacimiento de la obligación de retener.",
        law: "Instrucciones del modelo 036; RD 1065/2007, art. 9",
      },
    ],
  },
  "1.3": {
    intro:
      "Marta ya ha comunicado su actividad a Hacienda. Ahora toca la Seguridad Social: ¿en qué régimen cotiza ella y en cuál lo haría alguien a quien contrate? La respuesta depende de si trabaja por cuenta propia o por cuenta ajena.",
    steps: [
      {
        title: "Dos regímenes de partida",
        body: [
          "Quien trabaja por cuenta ajena cotiza en el Régimen General de la Seguridad Social.",
          "Quien trabaja por cuenta propia cotiza en su propio régimen: el Régimen Especial de Trabajadores Autónomos (RETA).",
        ],
      },
      {
        title: "Quién debe estar en el RETA",
        body: [
          "El art. 305 de la Ley General de la Seguridad Social incluye obligatoriamente a las personas físicas mayores de 18 años que realicen una actividad económica o profesional a título lucrativo de forma habitual, personal, directa, por cuenta propia y fuera del ámbito de dirección y organización de otra persona, tengan o no trabajadores contratados.",
          "También incluye a quienes ejerzan funciones de dirección y gerencia, como consejero o administrador, o presten otros servicios para una sociedad de capital a título lucrativo y de forma habitual, personal y directa, siempre que posean el control efectivo, directo o indirecto, de la sociedad.",
          "Incluye además al cónyuge y a los parientes del autónomo que trabajen de forma habitual y no tengan la consideración de trabajadores por cuenta ajena.",
          "Los autónomos económicamente dependientes (TRADE), que reciben al menos el 75 % de sus ingresos de un mismo cliente, también cotizan en el RETA.",
          "Quedan fuera los trabajadores por cuenta propia cuya actividad se incluya en otro régimen de la Seguridad Social.",
        ],
      },
      {
        title: "Cómo se calcula la cuota desde 2023",
        body: [
          "Desde 2023 los autónomos cotizan según sus rendimientos netos reales, distribuidos en 15 tramos. El sistema nació con el Real Decreto-ley 13/2022 y se aplica por etapas.",
          "Durante el año se cotiza por una previsión de ingresos y, al terminar, se regulariza con los rendimientos reales que Hacienda comunica a la Seguridad Social.",
          "Los nuevos autónomos pueden acogerse a una tarifa plana. Su importe y condiciones cambian: consúltalos siempre en la Seguridad Social antes de aplicarlos.",
        ],
      },
    ],
    example: {
      title: "Tres personas, tres encuadramientos",
      body: [
        "Marta trabaja en su taller, por cuenta propia y de forma habitual: cotiza en el RETA.",
        "Carlos, empleado de Marta con contrato de trabajo, trabaja por cuenta ajena: cotiza en el Régimen General.",
        "Si Marta constituyera una SL y fuera administradora con el control efectivo de la sociedad, prestando servicios de forma habitual, personal y directa, también encajaría en el RETA.",
      ],
    },
    tips: [
      { kind: "consejo", text: "Ante un familiar que trabaja con un autónomo, comprueba antes si se cumplen las condiciones del art. 305: habitualidad y ausencia de condición de trabajador por cuenta ajena." },
      { kind: "error", text: "Dar la cuota anual por definitiva. La cotización del año es una previsión y se regulariza con los rendimientos reales." },
      { kind: "clave", text: "Los importes de bases, tramos y tarifa plana cambian cada año. Nunca los uses de memoria: consulta la tabla vigente." },
    ],
    law: [
      "Ley General de la Seguridad Social (RDL 8/2015), art. 305",
      "Real Decreto-ley 13/2022 (cotización de autónomos por ingresos reales)",
    ],
    sources: [
      { title: "Infoautónomos: qué es el RETA (resumen de la Seguridad Social)", url: "https://www.infoautonomos.com/seguridad-social/que-es-el-reta/", accessed: D, official: false },
      { title: "Supercontable: texto del art. 305 de la LGSS", url: "https://www.supercontable.com/informacion/laboral/Articulo_305.Real_Decreto_Legislativo_8-2015-_de_30_.html", accessed: D, official: false },
      { title: "INAP: sentencia que reproduce el art. 305 de la LGSS", url: "https://laadministracionaldia.inap.es/noticia.asp?id=1259086", accessed: D, official: false },
      { title: "Infoautónomos: cuota de autónomos por ingresos reales", url: "https://www.infoautonomos.com/?p=2654", accessed: D, official: false },
      { title: "Declarando: qué es el RETA y cómo se regulariza la cotización", url: "https://declarando.es/alta-como-autonomo/que-es-reta", accessed: D, official: false },
    ],
    check: [
      {
        id: "c1.3-1", lessonId: "1.3", kind: "choice",
        prompt: "Un empleado con contrato de trabajo en una empresa cotiza en:",
        options: ["El Régimen General", "El RETA", "Ninguno", "El Régimen Especial del Mar"],
        answer: 0,
        explain: "Los trabajadores por cuenta ajena cotizan en el Régimen General.",
      },
      {
        id: "c1.3-2", lessonId: "1.3", kind: "tf",
        prompt: "Según el art. 305 de la LGSS, entra en el RETA quien realiza una actividad económica de forma habitual, personal, directa y por cuenta propia.",
        answer: true,
        explain: "Esos son los rasgos que exige el art. 305, junto con ser mayor de 18 años y actuar fuera del ámbito de dirección de otra persona.",
        law: "LGSS, art. 305",
      },
      {
        id: "c1.3-3", lessonId: "1.3", kind: "number",
        prompt: "¿A partir de qué edad, en años, incluye el art. 305 de la LGSS a las personas físicas en el RETA?",
        answer: 18, unit: "años",
        explain: "El art. 305 se refiere a personas físicas mayores de dieciocho años.",
        law: "LGSS, art. 305",
      },
      {
        id: "c1.3-4", lessonId: "1.3", kind: "tf",
        prompt: "La cuota de un autónomo durante el año es definitiva y no se regulariza.",
        answer: false,
        explain: "Se cotiza por una previsión de ingresos y, al terminar el año, se regulariza con los rendimientos reales.",
      },
    ],
  },
};

export const m1Bank: Question[] = [
  {
    id: "e1-01", lessonId: "1.1", kind: "choice",
    prompt: "Según el art. 1911 del Código Civil, el deudor responde del cumplimiento de sus obligaciones con:",
    options: ["Solo los bienes que tenía al contraer la deuda", "Todos sus bienes, presentes y futuros", "Únicamente su vivienda habitual", "Solo los bienes de su actividad profesional"],
    answer: 1,
    explain: "Es el principio de responsabilidad patrimonial universal: incluye los bienes que adquiera después de contraer la deuda.",
    law: "Código Civil, art. 1911",
  },
  {
    id: "e1-02", lessonId: "1.1", kind: "tf",
    prompt: "El capital social mínimo para constituir una SL sigue siendo de 3.000 €.",
    answer: false,
    explain: "Desde la Ley 18/2022 el mínimo es 1 €, con reglas especiales si el capital es inferior a 3.000 €.",
    law: "Ley 18/2022; Ley de Sociedades de Capital, art. 4",
  },
  {
    id: "e1-03", lessonId: "1.1", kind: "number",
    prompt: "Una SL tiene un capital de 3.000 € y un socio posee el 40 % de las participaciones. ¿Cuántos euros de capital le corresponden?",
    answer: 1200, unit: "€",
    explain: "3.000 × 0,40 = 1.200 €.",
  },
  {
    id: "e1-04", lessonId: "1.1", kind: "choice",
    scenario: "Una SL se constituye con 1.000 € de capital y obtiene beneficios.",
    prompt: "¿Qué porcentaje mínimo del beneficio debe destinar a reserva legal hasta que reserva y capital sumen 3.000 €?",
    options: ["5 %", "10 %", "20 %", "50 %"],
    answer: 2,
    explain: "Con capital inferior a 3.000 € se exige al menos el 20 % del beneficio, no el 10 % de la regla general.",
    law: "Ley de Sociedades de Capital, art. 4",
  },
  {
    id: "e1-05", lessonId: "1.1", kind: "number",
    prompt: "Una SL con 2.000 € de capital se liquida y su patrimonio no basta para pagar las deudas. ¿De qué importe responden solidariamente los socios?",
    answer: 1000, unit: "€",
    explain: "3.000 − 2.000 = 1.000 €: la diferencia entre 3.000 € y el capital suscrito.",
    law: "Ley de Sociedades de Capital, art. 4",
  },
  {
    id: "e1-06", lessonId: "1.1", kind: "tf",
    prompt: "La Ley 18/2022 modificó también el capital mínimo de las sociedades anónimas.",
    answer: false,
    explain: "La reducción a 1 € afecta a las sociedades limitadas; las anónimas no se modificaron.",
    law: "Ley 18/2022",
  },
  {
    id: "e1-07", lessonId: "1.1", kind: "number",
    prompt: "Una SL tiene 1.000 € de capital. ¿A cuántos euros debe llegar la reserva legal para que reserva más capital alcancen 3.000 €?",
    answer: 2000, unit: "€",
    explain: "3.000 − 1.000 = 2.000 €.",
    law: "Ley de Sociedades de Capital, art. 4",
  },
  {
    id: "e1-08", lessonId: "1.1", kind: "choice",
    prompt: "Con un capital de 3.000 € o más, la regla general de reserva legal (art. 274 LSC) exige destinar el:",
    options: ["10 % del beneficio hasta que la reserva alcance el 20 % del capital", "20 % del beneficio hasta alcanzar 3.000 €", "50 % del beneficio siempre", "Nada: es voluntario"],
    answer: 0,
    explain: "Es la regla general. El 20 % reforzado solo se aplica mientras el capital sea inferior a 3.000 €.",
    law: "Ley de Sociedades de Capital, art. 274",
  },
  {
    id: "e1-09", lessonId: "1.2", kind: "choice",
    prompt: "¿Qué modelo se utiliza hoy para el alta, la modificación y la baja en el censo de empresarios, profesionales y retenedores?",
    options: ["Modelo 036", "Modelo 037", "Modelo 303", "Modelo 130"],
    answer: 0,
    explain: "El 036 es la declaración censal. El 037 simplificado fue suprimido.",
    law: "Orden EHA/1274/2007; Orden HAC/1526/2024",
  },
  {
    id: "e1-10", lessonId: "1.2", kind: "tf",
    prompt: "Un autónomo que empieza hoy puede usar el modelo 037, la declaración censal simplificada.",
    answer: false,
    explain: "El modelo 037 está suprimido desde el 3 de febrero de 2025. Se usa el 036.",
    law: "Orden HAC/1526/2024",
  },
  {
    id: "e1-11", lessonId: "1.2", kind: "choice",
    prompt: "¿Cuándo debe presentarse la declaración censal de alta para iniciar una actividad?",
    options: ["Antes de iniciar la actividad", "En el mes siguiente al inicio", "En el trimestre siguiente al inicio", "Al presentar la primera declaración de IVA"],
    answer: 0,
    explain: "La comunicación de inicio se presenta con anterioridad al inicio de las actividades o de las operaciones.",
    law: "Instrucciones del modelo 036",
  },
  {
    id: "e1-12", lessonId: "1.2", kind: "number",
    scenario: "Lucía, que ya está dada de alta en el censo, cambia su domicilio fiscal.",
    prompt: "¿En cuántos meses, a contar desde el día siguiente al cambio, debe comunicarlo con una declaración censal de modificación?",
    answer: 1, unit: "mes(es)",
    explain: "El plazo general de la declaración de modificación es de un mes.",
    law: "Instrucciones del modelo 036",
  },
  {
    id: "e1-13", lessonId: "1.2", kind: "tf",
    prompt: "Las sociedades de responsabilidad limitada están obligadas a presentar el modelo 036 por vía electrónica, salvo cuando lo usan para solicitar el NIF.",
    answer: true,
    explain: "La presentación electrónica es obligatoria para SA y SL, administraciones públicas y grandes contribuyentes. No se aplica a la solicitud de NIF.",
    law: "Ficha AEAT del modelo 036",
  },
  {
    id: "e1-14", lessonId: "1.2", kind: "tf",
    prompt: "Una persona física no obligada a usar certificado electrónico puede presentar el modelo 036 por internet con Cl@ve.",
    answer: true,
    explain: "Las personas físicas no obligadas a usar certificado electrónico pueden identificarse con Cl@ve.",
    law: "Ficha AEAT del modelo 036",
  },
  {
    id: "e1-15", lessonId: "1.2", kind: "number",
    prompt: "Fallece un autónomo. ¿De cuántos meses disponen sus herederos para presentar la declaración de baja en el censo?",
    answer: 6, unit: "meses",
    explain: "Los herederos disponen de seis meses desde el fallecimiento.",
    law: "Instrucciones del modelo 036",
  },
  {
    id: "e1-16", lessonId: "1.3", kind: "choice",
    scenario: "Carlos trabaja como empleado de un taller, con contrato de trabajo.",
    prompt: "¿En qué régimen de la Seguridad Social cotiza?",
    options: ["Régimen General", "RETA", "No cotiza", "Régimen Especial del Mar"],
    answer: 0,
    explain: "Los trabajadores por cuenta ajena cotizan en el Régimen General.",
  },
  {
    id: "e1-17", lessonId: "1.3", kind: "tf",
    prompt: "Un administrador de una sociedad de capital que presta servicios de forma habitual, personal y directa y posee el control efectivo de la sociedad queda incluido en el RETA.",
    answer: true,
    explain: "El art. 305 incluye a quienes ejercen dirección y gerencia o prestan otros servicios para una sociedad de capital con control efectivo, directo o indirecto.",
    law: "LGSS, art. 305",
  },
  {
    id: "e1-18", lessonId: "1.3", kind: "tf",
    prompt: "Desde 2023, los autónomos cotizan según sus rendimientos netos reales, distribuidos en tramos.",
    answer: true,
    explain: "Es el sistema creado por el Real Decreto-ley 13/2022, que se aplica por etapas.",
    law: "Real Decreto-ley 13/2022",
  },
  {
    id: "e1-19", lessonId: "1.3", kind: "tf",
    prompt: "La cotización provisional de un autónomo durante el año se regulariza al terminar el año con sus rendimientos reales.",
    answer: true,
    explain: "Se cotiza por una previsión y, al cierre, se ajusta con los datos reales que Hacienda comunica a la Seguridad Social.",
  },
  {
    id: "e1-20", lessonId: "1.3", kind: "number",
    prompt: "Un autónomo económicamente dependiente (TRADE) recibe, como mínimo, ¿qué porcentaje de sus ingresos de un mismo cliente?",
    answer: 75, unit: "%",
    explain: "El TRADE es quien recibe, al menos, el 75 % de sus ingresos de un mismo cliente.",
  },
];
