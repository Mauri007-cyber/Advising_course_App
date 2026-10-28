import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const m4Lessons: Record<string, LessonContent> = {
  "x4-1": {
    "intro": "Marta quiere presentar sus declaraciones y consultar sus notificaciones sin ir a una oficina. Para ello necesita un medio de identificación ante la Agencia Tributaria. Y si va a trabajar para clientes, necesitará además poder actuar en su nombre. En esta lección ves las opciones disponibles y cuándo usar cada una.",
    "steps": [
      {
        "title": "Identificarse en nombre propio",
        "body": [
          "Cl@ve es el sistema de identificación y firma electrónica para personas físicas. Permite identificarse con el teléfono móvil (Cl@ve temporal) o con un código de usuario y contraseña (Cl@ve permanente).",
          "El alta en Cl@ve puede hacerse sin trámite presencial: de forma inmediata con el DNI electrónico u otro certificado, por videollamada, o solicitando por internet una carta de invitación que llega al domicilio fiscal.",
          "El registro presencial exige acudir personalmente con el DNI en una oficina de registro (AEAT, Seguridad Social, SEPE, Delegaciones y Subdelegaciones del Gobierno, entre otras). No se puede hacer por representación."
        ]
      },
      {
        "title": "El certificado electrónico",
        "body": [
          "Sirve a personas físicas y jurídicas. Es el medio más versátil porque se puede usar tanto en nombre propio como para actuar por una entidad.",
          "Los administradores únicos o solidarios de entidades inscritas en el Registro Mercantil pueden solicitar online el certificado de la FNMT identificándose con el DNI electrónico o con un certificado de persona física."
        ]
      },
      {
        "title": "Actuar en nombre de terceros",
        "body": [
          "Existen tres vías: ser colaborador social, estar apoderado en el Registro de apoderamientos de la AEAT, o tener representación en otro supuesto previsto.",
          "Si no eres colaborador social ni tienes apoderamiento, el titular del certificado debe coincidir con el titular de la declaración o trámite.",
          "El Registro electrónico de apoderamientos recoge las representaciones que los interesados otorgan a terceros para actuar por vía electrónica ante la Agencia Tributaria. Se puede inscribir con el formulario, por comparecencia con documento público o privado con firma notarialmente legitimada, o por la web. Es necesario mencionar los trámites a que se refiere el apoderamiento.",
          "Para recibir notificaciones, el apoderamiento requiere la confirmación del apoderado."
        ]
      },
      {
        "title": "Dónde llegan las notificaciones",
        "body": [
          "Las notificaciones electrónicas se consultan en la Dirección Electrónica Habilitada única (DEHú) y en la sede electrónica, que avisa por correo electrónico."
        ]
      }
    ],
    "example": {
      "title": "Marta empieza a trabajar para clientes",
      "body": [
        "Para sus propios trámites, Marta se da de alta en Cl@ve con una carta de invitación que le llega a su domicilio fiscal.",
        "Un cliente quiere que Marta presente su declaración. Marta necesita un apoderamiento inscrito en el Registro de apoderamientos o ser colaboradora social. Sin eso, el certificado debería ser el del propio cliente.",
        "El cliente otorga el apoderamiento en la web, con su certificado o Cl@ve, y menciona los trámites concretos. Marta puede comprobar después el apoderamiento en «Consulta, confirmación y renuncia de apoderamientos recibidos».",
        "Para que Marta reciba las notificaciones del cliente, el apoderamiento correspondiente debe aparecer como confirmado."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Utilizar el certificado o la Cl@ve de un cliente para presentarle una declaración. Se debe actuar con apoderamiento o como colaborador social."
      },
      {
        "kind": "consejo",
        "text": "Pide siempre que el apoderamiento mencione los trámites concretos. Así dejas constancia del alcance de tu actuación."
      },
      {
        "kind": "clave",
        "text": "Cl@ve para personas físicas, certificado para personas físicas y jurídicas, apoderamiento o colaboración social para actuar por terceros."
      }
    ],
    "law": [
      "Ley 39/2015, de 1 de octubre, arts. 5 y siguientes sobre representación",
      "Resolución de 9 de marzo de 2018 de la AEAT sobre apoderamientos"
    ],
    "sources": [
      {
        "title": "AEAT: apoderamiento para trámites en materia tributaria por Internet",
        "url": "https://sede.agenciatributaria.gob.es/Sede/procedimientos/ZP01.shtml",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: errores en presentaciones en nombre de terceros",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/presentacion-declaraciones-ayuda-tecnica/errores-relacionados-presentacion-nombre-terceros.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Ministerio de Justicia: registro presencial en Cl@ve",
        "url": "https://www.mjusticia.gob.es/es/certificados-digitales-clave/registro-presencial-clave",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Colegio de la Abogacía de Madrid: vías para realizar trámites por vía electrónica",
        "url": "https://web.icam.es/la-agencia-tributaria-recuerda-las-opciones-disponibles-para-la-realizacion-de-tramites-por-via-electronica/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cograsova: encuentro con asesores, medios de identificación (AEAT)",
        "url": "https://www.cograsova.es/adjuntosmail/2022/20221130/Encuentro%20asesores%20-%2022nov%20INF.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.1-1",
        "lessonId": "x4-1",
        "kind": "choice",
        "prompt": "Cl@ve permanente es un sistema de identificación basado en:",
        "answer": 0,
        "explain": "Cl@ve temporal usa el teléfono móvil.",
        "options": [
          "Un código de usuario y una contraseña",
          "Una carta en papel",
          "Un certificado de empresa",
          "Un correo electrónico"
        ]
      },
      {
        "id": "c4.1-2",
        "lessonId": "x4-1",
        "kind": "tf",
        "prompt": "El registro presencial en Cl@ve puede hacerlo un apoderado en nombre del interesado.",
        "answer": false,
        "explain": "No se puede hacer por representación: exige la presencia física de la persona."
      },
      {
        "id": "c4.1-3",
        "lessonId": "x4-1",
        "kind": "tf",
        "prompt": "Si no eres colaborador social ni apoderado, el titular del certificado debe coincidir con el titular de la declaración.",
        "answer": true,
        "explain": "Es la regla de la AEAT para presentar en nombre de terceros."
      },
      {
        "id": "c4.1-4",
        "lessonId": "x4-1",
        "kind": "choice",
        "prompt": "¿Dónde se consultan las notificaciones electrónicas de la AEAT?",
        "answer": 0,
        "explain": "La sede avisa por correo electrónico.",
        "options": [
          "En la DEHú y en la sede electrónica",
          "Solo en papel",
          "Solo en el BOE",
          "En el Registro Mercantil"
        ]
      }
    ]
  },
  "x4-2": {
    "intro": "Marta ya maneja base, tipo y cuota. Esta lección sitúa esas piezas en el edificio que las contiene: la Ley General Tributaria. Verás qué clases de tributos existen, qué es la relación jurídico-tributaria y qué obligaciones nacen de ella, para saber en qué cajón de la ley buscar cada duda.",
    "steps": [
      {
        "title": "Clases de tributos",
        "body": [
          "Según el art. 2 de la Ley General Tributaria, los tributos se clasifican en tasas, contribuciones especiales e impuestos.",
          "Los impuestos son tributos exigidos sin contraprestación, cuyo hecho imponible está constituido por negocios, actos o hechos que ponen de manifiesto la capacidad económica del contribuyente."
        ]
      },
      {
        "title": "La relación jurídico-tributaria",
        "body": [
          "Según el art. 17, es el conjunto de obligaciones y deberes, derechos y potestades originados por la aplicación de los tributos.",
          "De ella derivan obligaciones materiales y formales para los obligados tributarios y, en su caso, para la Administración."
        ]
      },
      {
        "title": "Las obligaciones principales",
        "body": [
          "La obligación tributaria principal tiene por objeto el pago de la cuota tributaria. Nace con la realización del hecho imponible.",
          "La obligación de realizar pagos a cuenta tiene carácter autónomo respecto de la principal. El contribuyente puede deducir de la obligación principal el importe de los pagos a cuenta realizados.",
          "Además existen obligaciones formales: presentar declaraciones, llevar libros, conservar documentos y otras que impone la normativa."
        ]
      },
      {
        "title": "Hecho imponible, devengo y exención",
        "body": [
          "El hecho imponible es el presupuesto fijado por la ley para configurar cada tributo y cuya realización origina la obligación tributaria principal.",
          "El devengo es el momento en el que se entiende realizado el hecho imponible y se produce el nacimiento de la obligación principal.",
          "La ley puede eximir del cumplimiento de la obligación principal en supuestos en que, aun realizándose el hecho imponible, no procede pagar."
        ]
      },
      {
        "title": "Cuantificación",
        "body": [
          "La cuantificación de la obligación principal parte de la base imponible, aplica el tipo de gravamen y determina la cuota tributaria. La cuota, más otros conceptos, forma la deuda tributaria (capítulo sobre cuantificación)."
        ]
      },
      {
        "title": "Dónde buscar cada cosa",
        "body": [
          "Relación jurídico-tributaria: art. 17. Obligados tributarios: art. 35. Domicilio fiscal: art. 48. La cuantificación de la obligación y la cuota y la deuda tributaria forman el capítulo siguiente. Los procedimientos, la información y asistencia a los obligados y la declaración tributaria están en el título de aplicación de los tributos."
        ]
      }
    ],
    "example": {
      "title": "Una venta con IVA (ilustrativa)",
      "body": [
        "Marta vende un servicio por 1.000 € a una empresa. La venta realiza el hecho imponible; se produce el devengo y nace la obligación tributaria principal.",
        "Marta aplica el tipo que corresponda a la base de 1.000 € y obtiene la cuota. Cuota, retenciones y otros conceptos formarán el resultado de su declaración.",
        "Además tiene deberes formales: facturar, registrar la operación y presentar la autoliquidación a su debido tiempo. Esas obligaciones existen aunque la cuota de un periodo salga a cero."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Pensar que si no hay cuota a pagar no hay obligaciones. Las obligaciones formales existen igualmente."
      },
      {
        "kind": "consejo",
        "text": "Ante una duda general sobre cómo funciona un tributo, empieza por el índice de la Ley General Tributaria."
      },
      {
        "kind": "clave",
        "text": "Hecho imponible, devengo, base, tipo, cuota, deuda. Principal, pagos a cuenta y formales."
      }
    ],
    "law": [
      "Ley General Tributaria, arts. 2, 17, 20, 21, 35, 48, 50, 55, 56 y 58"
    ],
    "sources": [
      {
        "title": "Ministerio de Hacienda: texto de la Ley General Tributaria",
        "url": "https://www.hacienda.gob.es/DocLeyes/onlinelt/5456.htm",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Escuelas Católicas: conceptos tributarios básicos",
        "url": "https://www.escuelascatolicas.es/wp-content/uploads/2017/07/CONCEPTOS-TRIBUTARIOS-BASICOS-18-07-2017.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Estudiando Tributario: la relación jurídico-tributaria",
        "url": "https://www.estudiandotributario.es/media/kunena/attachments/22528/TEMA7.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Iberley: texto de la Ley General Tributaria",
        "url": "https://www.iberley.es/legislacion/ley-general-tributaria-696586",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.2-1",
        "lessonId": "x4-2",
        "kind": "choice",
        "prompt": "¿Cómo clasifica el art. 2 LGT los tributos?",
        "answer": 0,
        "explain": "Es la clasificación legal.",
        "options": [
          "Tasas, contribuciones especiales e impuestos",
          "Directos e indirectos",
          "Estatales y locales",
          "Fijos y variables"
        ]
      },
      {
        "id": "c4.2-2",
        "lessonId": "x4-2",
        "kind": "tf",
        "prompt": "La obligación de realizar pagos a cuenta es autónoma respecto de la obligación tributaria principal.",
        "answer": true,
        "explain": "El contribuyente puede deducir los pagos a cuenta de la obligación principal."
      },
      {
        "id": "c4.2-3",
        "lessonId": "x4-2",
        "kind": "choice",
        "prompt": "La obligación tributaria principal tiene por objeto:",
        "answer": 0,
        "explain": "Presentar y llevar libros son obligaciones formales.",
        "options": [
          "El pago de la cuota tributaria",
          "La presentación de la declaración",
          "La llevanza de libros",
          "La conservación de documentos"
        ]
      },
      {
        "id": "c4.2-4",
        "lessonId": "x4-2",
        "kind": "tf",
        "prompt": "Si la cuota de un periodo es cero, desaparecen las obligaciones formales.",
        "answer": false,
        "explain": "Las obligaciones formales existen aunque no haya cuota."
      }
    ]
  },
  "x4-3": {
    "intro": "Marta recibe una comunicación de la Agencia Tributaria y se pregunta si va dirigida a ella como contribuyente o como retenedora, y a qué dirección debería haberse enviado. Estas preguntas se resuelven con dos ideas: las clases de obligados tributarios y el domicilio fiscal.",
    "steps": [
      {
        "title": "Quién es obligado tributario",
        "body": [
          "El art. 35 de la Ley General Tributaria enumera las clases de obligados tributarios: sujetos pasivos (contribuyente o sustituto del contribuyente), obligados a realizar pagos a cuenta, sucesores, responsables, y representantes de personas o entidades no residentes, entre otros.",
          "El contribuyente es el sujeto pasivo a quien la ley de cada tributo impone la obligación principal. El sustituto ocupa su lugar y puede exigirle después el importe satisfecho.",
          "El retenedor es quien debe practicar retenciones. Es un obligado a realizar pagos a cuenta."
        ]
      },
      {
        "title": "Qué es el domicilio fiscal",
        "body": [
          "Es el lugar de localización del obligado tributario en sus relaciones con la Administración tributaria (art. 48).",
          "Personas físicas: el lugar donde tengan su residencia habitual. Si desarrollan principalmente actividades económicas, la Administración puede considerar domicilio fiscal el lugar donde esté centralizada la gestión administrativa y la dirección de esas actividades.",
          "Personas jurídicas: su domicilio social, siempre que en él esté efectivamente centralizada su gestión administrativa y la dirección de sus negocios.",
          "Personas o entidades no residentes: se determina según la normativa de cada tributo y, a falta de regulación, es el del representante."
        ]
      },
      {
        "title": "Qué debes hacer",
        "body": [
          "Los obligados deben comunicar su domicilio fiscal y sus cambios a la Administración tributaria, en la forma que establezca el reglamento. En la práctica se hace con la declaración censal (lección [[1.2]]).",
          "Cada Administración puede comprobar y rectificar el domicilio declarado en relación con los tributos que gestiona."
        ]
      },
      {
        "title": "Por qué importa",
        "body": [
          "El domicilio fiscal determina qué Administración es competente y a dónde se dirigen muchas comunicaciones. Un domicilio mal declarado puede provocar notificaciones perdidas y plazos que corren sin que lo sepas."
        ]
      },
      {
        "title": "Residencia fiscal: un aviso",
        "body": [
          "La residencia fiscal a efectos de cada impuesto se define en la ley de ese impuesto. No es lo mismo que nacionalidad, empadronamiento o domicilio fiscal. Se verá en los módulos de IRPF y de Sociedades."
        ]
      }
    ],
    "example": {
      "title": "Marta, contribuyente y retenedora",
      "body": [
        "Marta es contribuyente del IRPF por sus rendimientos.",
        "Cuando paga la nómina a Carlos, retiene una parte para la Hacienda Pública: es retenedora, un obligado a realizar pagos a cuenta.",
        "Su domicilio fiscal es el de su residencia habitual. Si cambia de ciudad, debe comunicarlo con la declaración censal en el plazo de un mes (lección [[1.2]]).",
        "Si una comunicación se envía al domicilio antiguo, Marta puede ver cómo corren plazos sin enterarse."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Confundir domicilio fiscal con domicilio social o empadronamiento. Cada uno tiene su propia regla."
      },
      {
        "kind": "consejo",
        "text": "Tras un cambio de domicilio, revisa que el cambio ya consta en la sede electrónica antes de dar el asunto por cerrado."
      },
      {
        "kind": "clave",
        "text": "Contribuyente, sustituto, retenedor, responsable. Domicilio fiscal de personas físicas: residencia habitual."
      }
    ],
    "law": [
      "Ley General Tributaria, arts. 35 y 48"
    ],
    "sources": [
      {
        "title": "Iberley: texto del art. 48 de la Ley General Tributaria",
        "url": "https://iberley.es/legislacion/articulo-48-ley-general-tributaria",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Ministerio de Hacienda: texto de la Ley General Tributaria",
        "url": "https://www.hacienda.gob.es/DocLeyes/onlinelt/5456.htm",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Escuelas Católicas: conceptos tributarios básicos",
        "url": "https://www.escuelascatolicas.es/wp-content/uploads/2017/07/CONCEPTOS-TRIBUTARIOS-BASICOS-18-07-2017.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economist & Jurist: índice de la Ley General Tributaria",
        "url": "https://www.economistjurist.es/?p=154133",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.3-1",
        "lessonId": "x4-3",
        "kind": "choice",
        "prompt": "El domicilio fiscal de una persona física es, con carácter general:",
        "answer": 0,
        "explain": "Con la excepción de quien centraliza una actividad económica.",
        "options": [
          "El lugar donde tiene su residencia habitual",
          "Su domicilio social",
          "El que elija libremente",
          "El de su gestor"
        ]
      },
      {
        "id": "c4.3-2",
        "lessonId": "x4-3",
        "kind": "choice",
        "prompt": "El domicilio fiscal de una persona jurídica es:",
        "answer": 0,
        "explain": "Art. 48.2 LGT.",
        "options": [
          "Su domicilio social, si en él está centralizada su gestión administrativa y dirección",
          "Siempre el del administrador",
          "El del cliente principal",
          "El de la notaría"
        ]
      },
      {
        "id": "c4.3-3",
        "lessonId": "x4-3",
        "kind": "choice",
        "prompt": "¿Quién es un retenedor?",
        "answer": 0,
        "explain": "Es un obligado a realizar pagos a cuenta.",
        "options": [
          "Quien debe practicar retenciones",
          "El que cobra la cuota",
          "El que representa al no residente",
          "El sucesor"
        ]
      },
      {
        "id": "c4.3-4",
        "lessonId": "x4-3",
        "kind": "tf",
        "prompt": "Los obligados deben comunicar a la Administración su domicilio fiscal y sus cambios.",
        "answer": true,
        "explain": "Art. 48.3 LGT."
      }
    ]
  },
  "x4-4": {
    "intro": "Marta vende un servicio a una empresa y le preguntan si debe cobrar IVA. Para responder hay que contestar tres preguntas en orden: ¿es una operación sujeta?, ¿quién es el sujeto pasivo? y ¿cuándo se devenga? Esta lección recorre esas tres preguntas con las reglas de la Ley 37/1992 del IVA.",
    "steps": [
      {
        "title": "Qué grava el IVA",
        "body": [
          "El art. 1 de la Ley del IVA grava tres tipos de operaciones: las entregas de bienes y prestaciones de servicios efectuadas por empresarios o profesionales, las adquisiciones intracomunitarias de bienes y las importaciones de bienes.",
          "Aquí solo se estudian las operaciones interiores, es decir, las entregas de bienes y prestaciones de servicios. Las demás se ven en el módulo de fiscalidad internacional."
        ]
      },
      {
        "title": "El hecho imponible (art. 4)",
        "body": [
          "Están sujetas las entregas de bienes y prestaciones de servicios realizadas en el ámbito espacial del impuesto, por empresarios o profesionales, a título oneroso, con carácter habitual u ocasional, en el desarrollo de su actividad empresarial o profesional.",
          "El ámbito espacial es la Península y las Islas Baleares.",
          "También están sujetas las operaciones realizadas por sociedades mercantiles cuando tienen la condición de empresario o profesional, incluso si se efectúan a favor de sus propios socios."
        ]
      },
      {
        "title": "Empresario o profesional (art. 5)",
        "body": [
          "La ley define quién es empresario o profesional a efectos del IVA. Se incluyen, entre otros, los arrendadores de bienes.",
          "No se consideran empresarios o profesionales quienes realicen exclusivamente entregas de bienes o prestaciones de servicios a título gratuito."
        ]
      },
      {
        "title": "Entrega de bienes y prestación de servicios",
        "body": [
          "Entrega de bienes es la transmisión del poder de disposición sobre bienes corporales (art. 8).",
          "Prestación de servicios es toda operación sujeta que no sea entrega de bienes, adquisición intracomunitaria ni importación (art. 11)."
        ]
      },
      {
        "title": "No sujeción",
        "body": [
          "El art. 7 declara no sujetas, entre otras operaciones, las entregas de muestras gratuitas y objetos publicitarios, y las prestaciones de servicios de demostración a título gratuito para promocionar las actividades empresariales o profesionales."
        ]
      },
      {
        "title": "Quién es sujeto pasivo y repercute (arts. 84 y 88)",
        "body": [
          "En las entregas y prestaciones interiores, el sujeto pasivo es, en general, el empresario o profesional que las realiza. Repercute el impuesto a quien recibe la operación.",
          "Existen casos de inversión del sujeto pasivo, en los que la obligación pasa al destinatario. Se verán en el módulo internacional y en las lecciones de IVA avanzado."
        ]
      },
      {
        "title": "El devengo (art. 75)",
        "body": [
          "En las entregas de bienes, cuando se pongan a disposición del adquirente. En las ventas a plazos, el impuesto se devenga en su totalidad en ese momento, aunque los plazos se paguen después.",
          "En las prestaciones de servicios, cuando se presten, ejecuten o efectúen las operaciones gravadas, salvo operaciones continuadas con reglas propias.",
          "Si hay pagos anticipados anteriores a la operación, el devengo se produce en el momento de cada pago, por el importe cobrado.",
          "El tipo aplicable es el vigente en el momento del devengo."
        ]
      }
    ],
    "example": {
      "title": "Marta factura un servicio (ilustrativo)",
      "body": [
        "Marta, autónoma dada de alta, presta un servicio de reformas a una empresa por 1.000 €. Es una prestación de servicios, realizada en la Península, por una empresaria, a título oneroso: está sujeta.",
        "Marta es la sujeto pasivo y debe repercutir el IVA a su cliente.",
        "El devengo se produce cuando se ejecuta el servicio. Si el cliente le adelanta 300 € antes de empezar, en ese momento se devenga el IVA correspondiente a esos 300 €.",
        "Si Marta regalara sin contraprestación muestras publicitarias de escaso valor, esas entregas no estarían sujetas."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Pensar que el IVA se devenga cuando se cobra. En general se devenga con la entrega o la prestación, o con los pagos anticipados."
      },
      {
        "kind": "consejo",
        "text": "Antes de facturar, comprueba cuatro cosas: operación, empresario, onerosa y territorio. Si falta una, puede no estar sujeta."
      },
      {
        "kind": "clave",
        "text": "Entrega de bienes: devengo con la puesta a disposición. Servicios: cuando se prestan. Pagos anticipados: devengo en cada pago."
      }
    ],
    "law": [
      "Ley 37/1992, del IVA, arts. 1, 4, 5, 7, 8, 11, 75, 84 y 88"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico IVA 2024, devengo de entregas y servicios",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2024/capitulo-04-sujetos-pasivos-repercusion-impositivo/cuando-se-producen-operaciones-efectos-devengo/entregas-bienes-prestaciones-servicios-devengo.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Xunta de Galicia: texto de la Ley del IVA",
        "url": "https://centros.edu.xunta.gal/cfrcoruna/aulavirtual/pluginfile.php/3432/mod_resource/content/0/Ley_IVA.doc",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Fiscal Impuestos: entregas de bienes y prestaciones de servicios",
        "url": "https://www.fiscal-impuestos.com/node/5408",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Escuelas Católicas: IVA, nociones generales",
        "url": "https://www.escuelascatolicas.es/wp-content/uploads/2017/07/IVA-NOCIONES-GENERALES-18-07-2017.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universitat de Barcelona: sujetos pasivos, base imponible y devengo",
        "url": "https://diposit.ub.edu/dspace/bitstream/2445/16425/6/Tema%2011.%20Curso.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.4-1",
        "lessonId": "x4-4",
        "kind": "choice",
        "prompt": "¿Qué operaciones interiores grava el IVA?",
        "answer": 0,
        "explain": "Art. 4 de la Ley del IVA.",
        "options": [
          "Entregas de bienes y prestaciones de servicios realizadas por empresarios o profesionales",
          "Todas las ventas, aunque las haga un particular",
          "Solo las exportaciones",
          "Solo las ventas a otros empresarios"
        ]
      },
      {
        "id": "c4.4-2",
        "lessonId": "x4-4",
        "kind": "tf",
        "prompt": "Una prestación de servicios realizada a título gratuito por quien solo hace operaciones gratuitas está sujeta al IVA.",
        "answer": false,
        "explain": "No se consideran empresarios quienes realicen exclusivamente operaciones a título gratuito."
      },
      {
        "id": "c4.4-3",
        "lessonId": "x4-4",
        "kind": "choice",
        "prompt": "¿Cuándo se devenga el IVA en una entrega de bienes?",
        "answer": 0,
        "explain": "Con la excepción de los pagos anticipados.",
        "options": [
          "Cuando se pone el bien a disposición del adquirente",
          "Cuando se cobra la factura",
          "Al final del año",
          "Cuando se presenta el modelo 303"
        ]
      },
      {
        "id": "c4.4-4",
        "lessonId": "x4-4",
        "kind": "tf",
        "prompt": "Si el cliente paga un anticipo antes de la prestación, el IVA se devenga por ese anticipo en el momento del pago.",
        "answer": true,
        "explain": "Es la regla de los pagos anticipados."
      }
    ]
  },
  "x4-5": {
    "intro": "Una vez sabes que una operación está sujeta, hay que cuantificarla: ¿sobre qué importe se calcula el IVA, a qué tipo y puede estar exenta? Esta lección responde a las tres preguntas con ejemplos de cálculo. Los tipos son los del momento de la consulta: confírmalos siempre en la ley vigente.",
    "steps": [
      {
        "title": "La base imponible",
        "body": [
          "En las entregas de bienes y prestaciones de servicios, la base imponible es, en general, el importe total de la contraprestación de las operaciones sujetas al impuesto (arts. 78 a 81 de la Ley del IVA).",
          "La ley incluye reglas específicas para supuestos como las operaciones sin contraprestación en dinero, las primas por prestaciones anticipadas o la transformación de bienes."
        ]
      },
      {
        "title": "Los tipos",
        "body": [
          "Existen tres tipos: general 21 %, reducido 10 % y superreducido 4 %, según el tipo de bien o servicio (arts. 90 y 91).",
          "El tipo general se aplica por defecto. Los tipos reducido y superreducido se aplican a las operaciones que la ley enumera.",
          "El tipo aplicable a cada operación es el vigente en el momento del devengo."
        ]
      },
      {
        "title": "Cálculo",
        "body": [
          "Cuota = base imponible × tipo. Total de la factura = base + cuota.",
          "Para obtener la base desde el total: total ÷ (1 + tipo)."
        ]
      },
      {
        "title": "Exenciones (art. 20 y siguientes)",
        "body": [
          "Una operación sujeta puede estar exenta. Entre otras, están exentas determinadas prestaciones sanitarias, asistenciales y de enseñanza, y las operaciones de seguros y financieras.",
          "Las exenciones plenas permiten deducir el IVA soportado y se asocian sobre todo al comercio exterior, como las entregas intracomunitarias de bienes.",
          "Las exenciones limitadas se refieren a operaciones interiores, como las operaciones financieras y de seguros o determinadas operaciones inmobiliarias, y no dan derecho a deducir el IVA soportado correspondiente."
        ]
      },
      {
        "title": "Sujeta no es lo mismo que exenta ni que no sujeta",
        "body": [
          "No sujeta: no entra en el hecho imponible. Exenta: está sujeta, pero la ley la exime de pagar. Ambas se distinguen en la factura y en las declaraciones."
        ]
      }
    ],
    "example": {
      "title": "Cálculos con el tipo general (ilustrativo)",
      "body": [
        "Base de 500 €. Tipo general del 21 %. Cuota: 500 × 0,21 = 105 €. Total: 605 €.",
        "Total de una factura: 1.210 € con tipo general. Base: 1.210 ÷ 1,21 = 1.000 €. Cuota: 210 €.",
        "Una prestación sanitaria exenta de 200 € se factura sin IVA. El prestador no repercute IVA, pero tampoco podrá deducir el IVA que soporte para esa actividad.",
        "Una muestra publicitaria regalada no se factura, porque no está sujeta."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar el 21 % a todo. Hay operaciones con tipo reducido, superreducido, exentas y no sujetas. Comprueba la naturaleza de cada operación."
      },
      {
        "kind": "consejo",
        "text": "Para recuperar la base desde el total, divide entre 1,21 (o el tipo que toque). No restes el 21 % al total."
      },
      {
        "kind": "clave",
        "text": "Tipos: 21 %, 10 % y 4 %. El tipo es el del devengo. Exenta ≠ no sujeta."
      }
    ],
    "law": [
      "Ley 37/1992, del IVA, arts. 20, 78 a 81, 90 y 91"
    ],
    "sources": [
      {
        "title": "UOC: impuesto sobre el valor añadido I",
        "url": "https://openaccess.uoc.edu/bitstream/10609/79486/4/Impuesto%20sobre%20el%20valor%20a%c3%b1adido%20e%20impuestos%20especiales_M%c3%b3dulo%201_Impuesto%20sobre%20el%20valor%20a%c3%b1adido%20%28I%29.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Stelorder: tipos de IVA y exenciones",
        "url": "https://www.stelorder.com/blog/iva/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Ayuntamiento de Majadahonda: evolución de los tipos del IVA",
        "url": "https://www.majadahonda.org/documents/36614/789969/Instar+al+Gobierno+a+que+no+aumente+el+IVA+de+educaci%C3%B3n+ni+sanidad.pdf/6af69792-d026-9dc4-a6f4-aa3b13801003",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Diputación de Toledo: circular sobre tipos y momento del devengo",
        "url": "https://www.diputoledo.es/global/10/descarga/8940",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universitat de Barcelona: sujetos pasivos, base imponible y devengo",
        "url": "https://diposit.ub.edu/dspace/bitstream/2445/16425/6/Tema%2011.%20Curso.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.5-1",
        "lessonId": "x4-5",
        "kind": "number",
        "prompt": "Base de 500 € y tipo general del 21 %. ¿Cuál es la cuota?",
        "answer": 105,
        "explain": "500 × 0,21 = 105 €.",
        "unit": "€"
      },
      {
        "id": "c4.5-2",
        "lessonId": "x4-5",
        "kind": "number",
        "prompt": "Total de una factura de 1.210 € con tipo general. ¿Cuál es la base?",
        "answer": 1000,
        "explain": "1.210 ÷ 1,21 = 1.000 €.",
        "unit": "€"
      },
      {
        "id": "c4.5-3",
        "lessonId": "x4-5",
        "kind": "choice",
        "prompt": "¿Qué tipos de IVA existen?",
        "answer": 0,
        "explain": "General, reducido y superreducido.",
        "options": [
          "21 %, 10 % y 4 %",
          "21 % y 0 %",
          "7 % y 15 %",
          "Solo 21 %"
        ]
      },
      {
        "id": "c4.5-4",
        "lessonId": "x4-5",
        "kind": "tf",
        "prompt": "Una operación exenta es una operación no sujeta.",
        "answer": false,
        "explain": "La exenta está sujeta pero la ley la exime; la no sujeta no entra en el hecho imponible."
      }
    ]
  },
  "x4-6": {
    "intro": "Marta ha repercutido IVA a sus clientes y ha soportado IVA en sus compras. Cada trimestre debe liquidar la diferencia con la Agencia Tributaria. Esta lección cubre cuándo se puede deducir el IVA soportado, qué requisitos se exigen y cómo se presenta el modelo 303.",
    "steps": [
      {
        "title": "El derecho a deducir",
        "body": [
          "Los sujetos pasivos pueden restar de las cuotas devengadas por sus operaciones las cuotas que han soportado en sus adquisiciones de bienes y servicios o en sus importaciones, si cumplen los requisitos. Este derecho es un elemento fundamental del funcionamiento del IVA.",
          "El régimen está en los artículos 92 a 114 de la Ley del IVA."
        ]
      },
      {
        "title": "Cuatro tipos de requisitos",
        "body": [
          "Subjetivos: quien deduce debe ser sujeto pasivo con condición de empresario o profesional.",
          "Objetivos: las cuotas deben soportarse en operaciones que se utilicen en la actividad. No son deducibles las cuotas soportadas en adquisiciones que no se afecten directa y exclusivamente a la actividad (art. 95). Para los vehículos, la ley presume una afectación del 50 %.",
          "Formales: se necesita un justificante. Valen la factura original, el documento de liquidación de la importación o la autofactura en la inversión del sujeto pasivo.",
          "Temporales: el derecho nace cuando se devengan las cuotas deducibles y se ejercita en la declaración del periodo en que se soportaron o en los siguientes, siempre que no hayan pasado más de cuatro años desde que nació."
        ]
      },
      {
        "title": "El modelo 303",
        "body": [
          "Es la autoliquidación periódica del IVA. Recoge el IVA devengado (bases y cuotas) y el IVA deducible (cuotas soportadas en operaciones interiores corrientes, con bienes de inversión, y en importaciones).",
          "El resultado es la diferencia entre el devengado y el deducible. También recoge las cuotas a compensar de periodos anteriores."
        ]
      },
      {
        "title": "Plazos de presentación",
        "body": [
          "Trimestral: del 1 al 20 de abril, julio y octubre. El cuarto trimestre se presenta del 1 al 30 de enero, y en el mismo plazo se presenta, en su caso, la declaración resumen anual, modelo 390.",
          "Mensual: del 1 al 30 del mes siguiente, o hasta el último día de febrero para enero.",
          "Si el último día es inhábil, y el sábado lo es, el plazo se traslada al día hábil siguiente."
        ]
      },
      {
        "title": "Errores y regularización",
        "body": [
          "Si se descubre un error en una autoliquidación presentada, se corrige con una autoliquidación rectificativa. La complementaria se usa en los supuestos previstos por la normativa. Consulta el manual vigente de la AEAT para decidir cuál procede."
        ]
      }
    ],
    "example": {
      "title": "El trimestre de Marta (cifras ilustrativas)",
      "body": [
        "Ventas del trimestre: 10.000 € de base al tipo general. IVA devengado: 2.100 €.",
        "Compras y gastos con factura y afectos a la actividad: 4.000 € de base. IVA soportado deducible: 840 €.",
        "Resultado: 2.100 − 840 = 1.260 €, que Marta debe ingresar.",
        "Se presenta del 1 al 20 del mes siguiente al trimestre (en el cuarto, del 1 al 30 de enero). Si el último día cae en sábado, pasa al lunes."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Deducir el IVA de una factura que no está a nombre de la actividad o que carece de los datos exigidos. Sin justificante válido, no hay deducción."
      },
      {
        "kind": "consejo",
        "text": "Archiva la factura original y comprueba la afectación antes de deducir. Los vehículos tienen una regla especial."
      },
      {
        "kind": "clave",
        "text": "Presentación: 1 al 20 de abril, julio y octubre; 1 al 30 de enero. Deducción: requisitos subjetivos, objetivos, formales y temporales; cuatro años máximo."
      }
    ],
    "law": [
      "Ley 37/1992, del IVA, arts. 92 a 114",
      "Orden por la que se aprueba el modelo 303"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico IVA 2024, plazos de presentación",
        "url": "https://sede.agenciatributaria.gob.es/Sede/eu_es/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2024/capitulo-08-gestion-iva/autoliquidaciones-iva/plazos-presentacion.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: Manual práctico IVA 2023, deducciones",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2023/capitulo-05-deducciones-devoluciones/deducciones.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: formulario del modelo 303 (Manual IVA 2025)",
        "url": "https://www3.agenciatributaria.gob.es/static_files/Sede/Biblioteca/Manual/Practicos/IVA/IVA_2025/Imagenes/Cap_7_303_1T.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Fiscal Impuestos: deducciones, requisitos de deducibilidad",
        "url": "https://www.fiscal-impuestos.com/node/61",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Fieldfisher: deducción de cuotas de IVA en los suministros de autónomos",
        "url": "https://www.fieldfisher.com/es-es/locations/espana/actualidad/la-deduccion-de-las-cuotas-de-iva-soportadas-en-lo",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.6-1",
        "lessonId": "x4-6",
        "kind": "number",
        "prompt": "IVA devengado 2.100 € e IVA deducible 840 €. ¿Cuánto debe ingresar el empresario?",
        "answer": 1260,
        "explain": "2.100 − 840 = 1.260 €.",
        "unit": "€"
      },
      {
        "id": "c4.6-2",
        "lessonId": "x4-6",
        "kind": "choice",
        "prompt": "¿Cuál es el plazo de presentación del modelo 303 del primer trimestre?",
        "answer": 0,
        "explain": "El cuarto trimestre se presenta del 1 al 30 de enero.",
        "options": [
          "Del 1 al 20 de abril",
          "Del 1 al 30 de enero",
          "Del 1 al 30 de junio",
          "Hasta el 31 de diciembre"
        ]
      },
      {
        "id": "c4.6-3",
        "lessonId": "x4-6",
        "kind": "tf",
        "prompt": "El derecho a deducir las cuotas soportadas puede ejercerse sin límite temporal.",
        "answer": false,
        "explain": "No pueden haber transcurrido más de cuatro años desde que nació el derecho."
      },
      {
        "id": "c4.6-4",
        "lessonId": "x4-6",
        "kind": "tf",
        "prompt": "La factura original es uno de los justificantes válidos para deducir el IVA soportado.",
        "answer": true,
        "explain": "También la liquidación de importación y la autofactura en inversión del sujeto pasivo."
      }
    ]
  },
  "x4-7": {
    "intro": "No todos los empresarios liquidan el IVA de la misma manera. Un comercio minorista, una pequeña empresa con clientes que pagan tarde y un autónomo con módulos pueden tener reglas distintas. Esta lección presenta los tres regímenes especiales más habituales: el recargo de equivalencia, el criterio de caja y el régimen simplificado. Primero, la regla general: sin una razón concreta, se aplica el régimen general.",
    "steps": [
      {
        "title": "Los regímenes especiales",
        "body": [
          "La Ley del IVA regula varios regímenes especiales. Los más relevantes en el día a día son el simplificado, el recargo de equivalencia y el criterio de caja.",
          "Son voluntarios, salvo los aplicables a las operaciones con oro de inversión, las agencias de viajes y el recargo de equivalencia, que son obligatorios.",
          "La renuncia a los regímenes simplificado, de la agricultura, ganadería y pesca y del criterio de caja tiene efectos durante un periodo mínimo de tres años."
        ]
      },
      {
        "title": "Recargo de equivalencia",
        "body": [
          "Es un régimen obligatorio para comerciantes minoristas que sean personas físicas, o entidades en atribución de rentas formadas por personas físicas. Venden habitualmente bienes sin transformarlos a consumidores finales.",
          "El proveedor repercute al minorista el IVA más un recargo: 5,2 % cuando el tipo es el 21 %, 1,4 % con el 10 % y 0,5 % con el 4 %. El tabaco tiene un recargo propio del 1,75 %.",
          "El proveedor declara e ingresa el IVA y el recargo. El minorista no presenta los modelos 303 ni 390 por esas ventas, y no puede deducir el IVA ni el recargo que soporta.",
          "Está regulado en los artículos 148 a 163 de la Ley del IVA."
        ]
      },
      {
        "title": "Criterio de caja",
        "body": [
          "Retrasa el devengo del IVA repercutido hasta el cobro al cliente, y también retrasa la deducción del IVA soportado hasta el pago al proveedor. Por eso se llama criterio de caja doble.",
          "Tiene una fecha límite: el 31 de diciembre del año inmediato posterior a aquel en que se efectuaron las operaciones.",
          "Pueden aplicarlo los sujetos pasivos cuyo volumen de operaciones del año natural anterior no superó los 2.000.000 €. Quedan excluidos quienes cobren en efectivo de un mismo destinatario más de 100.000 € en el año.",
          "Es optativo: se ejerce en la declaración de inicio de actividad o en la declaración censal durante el mes de diciembre anterior al año en que debe surtir efecto. La opción se prorroga salvo renuncia."
        ]
      },
      {
        "title": "Régimen simplificado",
        "body": [
          "Es voluntario, se aplica automáticamente salvo renuncia y calcula la cuota devengada por las operaciones corrientes con un sistema propio, distinto del régimen general.",
          "La renuncia a la estimación objetiva del IRPF implica la renuncia al régimen simplificado de IVA.",
          "El detalle del cálculo se verá junto a la estimación objetiva del IRPF en el módulo correspondiente."
        ]
      }
    ],
    "example": {
      "title": "Tres negocios, tres tratamientos (supuestos ilustrativos)",
      "body": [
        "Una tienda de ropa de una persona física que compra a un mayorista y vende a particulares está en recargo de equivalencia. En una compra con base 10.000 € paga IVA del 21 % más un recargo del 5,2 %: 520 € de recargo. No presenta el modelo 303 por esas ventas.",
        "Una empresa de reformas con clientes que pagan a 90 días y un volumen de operaciones de 1.000.000 € puede optar por el criterio de caja. Factura en marzo y cobra en junio: el IVA repercutido se declara en el periodo del cobro.",
        "Un autónomo en estimación objetiva del IRPF que renuncia a ella deja también el régimen simplificado, y debe esperar tres años para revertir la renuncia a este último."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar el criterio de caja y olvidar que también retrasa la deducción del IVA soportado hasta el pago al proveedor."
      },
      {
        "kind": "consejo",
        "text": "Antes de aconsejar un régimen especial, comprueba el volumen de operaciones del año anterior y los cobros en efectivo. Los umbrales los fija la ley."
      },
      {
        "kind": "clave",
        "text": "Recargo: obligatorio para minoristas, 5,2 / 1,4 / 0,5 %. Caja: 2.000.000 €, doble, tope el 31 de diciembre del año siguiente. Renuncias: tres años."
      }
    ],
    "law": [
      "Ley 37/1992, del IVA, arts. 148 a 163 (recargo de equivalencia)",
      "Ley 37/1992, del IVA, régimen especial del criterio de caja"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico IVA 2024, regímenes especiales",
        "url": "https://sede.agenciatributaria.gob.es/Sede/eu_es/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2024/capitulo-06-regimenes-especiales-iva/introduccion.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: régimen especial del criterio de caja",
        "url": "https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/criterio-caja.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: preguntas frecuentes del criterio de caja",
        "url": "https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/criterio-caja/preguntas-frecuentes.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: cuestiones frecuentes sobre regímenes especiales, Manual IVA 2024",
        "url": "https://sede.agenciatributaria.gob.es/Sede/eu_es/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2024/capitulo-06-regimenes-especiales-iva/cuestiones-frecuentes-planteadas-capitulo.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Legalitas: el recargo de equivalencia",
        "url": "https://www.legalitas.com/actualidad/recargo-de-equivalencia",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Sage: el recargo de equivalencia",
        "url": "https://www.sage.com/es-es/blog/diccionario-empresarial/recargo-de-equivalencia/",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.7-1",
        "lessonId": "x4-7",
        "kind": "number",
        "prompt": "Con un tipo de IVA del 21 %, ¿qué recargo de equivalencia se aplica?",
        "answer": 5.2,
        "explain": "Con el 10 % es 1,4 % y con el 4 % es 0,5 %.",
        "unit": "%",
        "tolerance": 0.01
      },
      {
        "id": "c4.7-2",
        "lessonId": "x4-7",
        "kind": "number",
        "prompt": "¿Cuál es el volumen de operaciones máximo del año anterior para aplicar el criterio de caja, en euros?",
        "answer": 2000000,
        "explain": "Se excluye además a quienes cobran en efectivo más de 100.000 € de un mismo destinatario.",
        "unit": "€"
      },
      {
        "id": "c4.7-3",
        "lessonId": "x4-7",
        "kind": "choice",
        "prompt": "Un minorista en recargo de equivalencia, por las ventas incluidas en el régimen:",
        "answer": 0,
        "explain": "El proveedor ingresa el IVA y el recargo.",
        "options": [
          "No presenta el modelo 303",
          "Presenta el 303 cada trimestre",
          "Deduce el recargo soportado",
          "Presenta el modelo 390 y el 303"
        ]
      },
      {
        "id": "c4.7-4",
        "lessonId": "x4-7",
        "kind": "number",
        "prompt": "¿Cuántos años mínimo dura la renuncia a los regímenes simplificado, agricultura o criterio de caja?",
        "answer": 3,
        "explain": "Es el periodo mínimo de efectos de la renuncia.",
        "unit": "años"
      }
    ]
  },
  "x4-8": {
    "intro": "Marta emite su primera factura a un cliente empresa. ¿Qué datos debe llevar? ¿Basta un ticket? ¿Y si se equivoca en el importe? El Reglamento de facturación responde a estas preguntas. Esta lección recoge sus reglas básicas: tipos de factura, contenido, rectificación, formato y conservación.",
    "steps": [
      {
        "title": "La norma",
        "body": [
          "El Reglamento de facturación está en el Real Decreto 1619/2012, de 30 de noviembre, publicado en el BOE de 1 de diciembre de 2012 y en vigor desde el 1 de enero de 2013.",
          "Establece dos tipos de factura: la factura completa u ordinaria y la factura simplificada, que sustituye a los antiguos tiques."
        ]
      },
      {
        "title": "Contenido de la factura completa",
        "body": [
          "Número y, en su caso, serie, que debe ser correlativa dentro de cada serie.",
          "Fecha de expedición y, si es distinta, fecha de la operación o del pago anticipado.",
          "NIF y nombre y apellidos o denominación social de quien la expide, y NIF y domicilio del destinatario.",
          "Descripción de las operaciones con los datos necesarios para determinar la base imponible, el tipo impositivo aplicado y la cuota repercutida, consignada por separado.",
          "Si en la misma factura hay operaciones con diferentes tipos de IVA, se especifica por separado la parte de base imponible de cada una."
        ]
      },
      {
        "title": "La factura simplificada",
        "body": [
          "Se puede emitir cuando el importe no exceda de 400 € con IVA incluido, o cuando deba expedirse una factura rectificativa.",
          "También puede emitirse cuando el importe no exceda de 3.000 € con IVA incluido, en determinadas operaciones, como las ventas al por menor, las ventas o servicios a domicilio o los servicios de ambulancia.",
          "Su contenido es más reducido: no incluye los datos del destinatario ni la cuota, y muestra el tipo aplicado o la expresión «IVA incluido».",
          "Quien la recibe no puede deducirse el IVA salvo que en la factura figuren sus datos de identificación fiscal."
        ]
      },
      {
        "title": "La factura rectificativa",
        "body": [
          "Modifica una o varias facturas anteriores. Debe llevar la expresión de que es rectificativa, una serie numérica propia, la identificación de la factura rectificada y las especificaciones que se modifican.",
          "La rectificación se expresa indicando directamente el importe de la rectificación, o los importes tal como quedan tras ella."
        ]
      },
      {
        "title": "Forma de expedición",
        "body": [
          "Se puede expedir en papel o en formato electrónico. Debe garantizarse desde la fecha de expedición y durante todo el periodo de conservación la autenticidad del origen, la integridad del contenido y la legibilidad.",
          "El plazo para expedir la factura y los casos en que la obligación de expedirla se cumple de otra forma se regulan en el propio reglamento: consulta su texto vigente antes de aplicarlos."
        ]
      },
      {
        "title": "Conservación",
        "body": [
          "Las fuentes consultadas señalan seis años como plazo mercantil y cuatro años como referencia por la prescripción tributaria. En la práctica conviene conservar durante el plazo más largo."
        ]
      }
    ],
    "example": {
      "title": "Tres facturas de Marta (importes ilustrativos)",
      "body": [
        "Venta a un particular de 350 € con IVA incluido: puede emitir una factura simplificada, porque no supera los 400 €. No incluye datos del cliente ni la cuota.",
        "Servicio a una empresa por 5.000 €: factura completa, con los datos de ambas partes, la base, el tipo, la cuota y el total.",
        "Marta facturó una base de 1.000 € al 21 %: cuota 210 €. Debía ser 800 €. Emite una factura rectificativa en serie propia que indica la factura rectificada y una rectificación de −200 € de base y −42 € de cuota. Tras ella queda base 800 € y cuota 168 €."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Emitir factura simplificada a un cliente empresario que va a deducir el IVA sin consignar sus datos. Sin identificación fiscal del receptor no hay deducción."
      },
      {
        "kind": "consejo",
        "text": "Usa una serie distinta para las rectificativas y referencia siempre la factura que rectificas."
      },
      {
        "kind": "clave",
        "text": "Simplificada: hasta 400 €, rectificativas y, en ciertos casos, hasta 3.000 €. Completa: datos de ambas partes. Conservación: usa el plazo más largo."
      }
    ],
    "law": [
      "Real Decreto 1619/2012, de 30 de noviembre (Reglamento de facturación)",
      "Reglamento del IVA (RD 1624/1992)"
    ],
    "sources": [
      {
        "title": "Economist & Jurist: Real Decreto 1619/2012 (BOE 01-12-2012)",
        "url": "https://global.economistjurist.es/BDI/legislacion/legislaciongeneral/emergentelegislacion.php?id=127653",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "UCM: reglamento de facturación 2013",
        "url": "https://www.ucm.es/ucpe/file/refnorm_reglamento_facturacion_2013",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Sage: las nuevas obligaciones y normas de facturación",
        "url": "https://www.sage.com/es-es/blog/las-nuevas-obligaciones-y-normas-de-facturacion/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "DIG: normativa de facturación",
        "url": "https://www.dig.es/normativa-de-facturacion/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Quaderno: cómo facturar en España",
        "url": "https://quaderno.io/articulos/como-facturar-tus-productos-o-servicios-en-espana",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Holded: requisitos y datos de las facturas",
        "url": "https://www.holded.com/es/guias/requisitos-datos-facturas",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.8-1",
        "lessonId": "x4-8",
        "kind": "number",
        "prompt": "¿Hasta qué importe, con IVA incluido, puede emitirse con carácter general una factura simplificada, en euros?",
        "answer": 400,
        "explain": "También cuando deba emitirse una rectificativa y, en ciertas operaciones, hasta 3.000 €.",
        "unit": "€"
      },
      {
        "id": "c4.8-2",
        "lessonId": "x4-8",
        "kind": "tf",
        "prompt": "Una factura rectificativa debe tener una serie propia e identificar la factura que rectifica.",
        "answer": true,
        "explain": "Y expresar la rectificación efectuada."
      },
      {
        "id": "c4.8-3",
        "lessonId": "x4-8",
        "kind": "choice",
        "prompt": "¿Qué dato NO incluye la factura simplificada?",
        "answer": 0,
        "explain": "Por eso el receptor no puede deducir IVA si no figura su identificación fiscal.",
        "options": [
          "Los datos del destinatario y la cuota",
          "El número",
          "La fecha",
          "El tipo impositivo"
        ]
      },
      {
        "id": "c4.8-4",
        "lessonId": "x4-8",
        "kind": "tf",
        "prompt": "Las facturas solo pueden expedirse en papel.",
        "answer": false,
        "explain": "Pueden expedirse en papel o en formato electrónico, garantizando autenticidad, integridad y legibilidad."
      }
    ]
  },
  "x4-9": {
    "intro": "Marta ha oído hablar de Veri*factu y de la factura electrónica obligatoria, y le han dicho tres fechas distintas. La razón es que el calendario se ha movido varias veces y que son dos obligaciones diferentes. Esta lección explica qué es cada una y deja claro qué dice el BOE y qué ha anunciado el Ministerio, a 25 de octubre de 2026. Antes de aconsejar a un cliente, verifica siempre el estado vigente.",
    "steps": [
      {
        "title": "Dos obligaciones distintas",
        "body": [
          "Veri*factu es el reglamento de requisitos de los sistemas informáticos de facturación (Real Decreto 1007/2023, de 5 de diciembre). Exige que el software garantice integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de los registros de facturación.",
          "La factura electrónica obligatoria entre empresas y profesionales (B2B) nace de la Ley 18/2022, de creación y crecimiento de empresas, conocida como Ley Crea y Crece.",
          "Veri*factu y la factura electrónica B2B regulan aspectos diferentes, aunque sus calendarios se estén acercando."
        ]
      },
      {
        "title": "Qué exige Veri*factu",
        "body": [
          "Los programas de facturación deben generar un registro de facturación por cada factura y ajustarse a un formato determinado. Existen dos modalidades: la que remite los registros a la Agencia Tributaria (Veri*factu) y la que los conserva (no Veri*factu).",
          "No es un sistema de autorización previa de las facturas. Se trata de una obligación de registro y, en su modalidad Veri*factu, de remisión.",
          "Los contribuyentes que ya remiten sus facturas al Suministro Inmediato de Información (SII) quedan exentos."
        ]
      },
      {
        "title": "El calendario legal hasta ahora",
        "body": [
          "El Real Decreto 1007/2023 fijó la adaptación para el 1 de julio de 2025. El Real Decreto 254/2025 la retrasó al 1 de enero de 2026 para los contribuyentes del Impuesto sobre Sociedades y al 1 de julio de 2026 para el resto.",
          "El Real Decreto-ley 15/2025, de 2 de diciembre, publicado en el BOE el 3 de diciembre y convalidado después, volvió a retrasarla: 1 de enero de 2027 para los contribuyentes del Impuesto sobre Sociedades y 1 de julio de 2027 para el resto (contribuyentes del IRPF, no residentes con establecimiento permanente y entidades en atribución de rentas).",
          "Los fabricantes y comercializadores de software debían ofrecer productos adaptados desde el 29 de julio de 2025."
        ]
      },
      {
        "title": "Lo anunciado el 5 de octubre de 2026",
        "body": [
          "El Ministerio de Hacienda comunicó, mediante una nota informativa, su previsión de aplazar hasta octubre de 2028 las obligaciones pendientes del Real Decreto 1007/2023 para empresarios y profesionales cuya facturación anual no supere los 8 millones de euros.",
          "El motivo es alinear Veri*factu con la factura electrónica B2B.",
          "Una nota informativa no modifica la norma. Las fuentes consultadas señalan que el texto consolidado del Real Decreto 1007/2023 todavía recoge las fechas de 2027, a la espera de una norma que lo cambie. Hasta entonces, la fecha jurídicamente vigente es la del BOE."
        ]
      },
      {
        "title": "La factura electrónica B2B",
        "body": [
          "Para empresarios y profesionales con facturación anual superior a 8 millones de euros, la obligación llega en octubre de 2027. Para el resto, en octubre de 2028.",
          "Se ha publicado la Orden HAC/1028/2026, que define los aspectos técnicos y operativos de la solución pública de facturación electrónica."
        ]
      },
      {
        "title": "Cómo actuar ante un cliente",
        "body": [
          "Pregunta el volumen de facturación y qué software usa. Identifica en qué grupo está: contribuyente del Impuesto sobre Sociedades, autónomo o gran empresa.",
          "Revisa en el BOE y en la sede de la AEAT el calendario vigente antes de fijar una fecha. Anota la fecha de consulta."
        ]
      }
    ],
    "example": {
      "title": "Tres clientes (supuestos ilustrativos)",
      "body": [
        "Una SL que factura 500.000 € al año: contribuyente del Impuesto sobre Sociedades, por debajo de 8 millones. Según el BOE a esta fecha, Veri*factu llega el 1 de enero de 2027; según lo anunciado, octubre de 2028. Marta le recomienda preparar el software ya y verificar la norma antes de fijar plazos.",
        "Una autónoma en IRPF que factura 60.000 €: 1 de julio de 2027 según el BOE; octubre de 2028 según lo anunciado.",
        "Una empresa que factura 20 millones de euros: la factura electrónica B2B le obliga desde octubre de 2027."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Dar por definitiva una fecha anunciada por nota informativa. Hasta que no se publique la norma, rige la del BOE."
      },
      {
        "kind": "consejo",
        "text": "Mantén una ficha de calendario con la norma, la fecha y el estado (vigente o anunciado). Se actualiza con facilidad."
      },
      {
        "kind": "clave",
        "text": "Veri*factu = requisitos del software. Factura electrónica B2B = formato y envío entre empresas. El calendario es distinto y cambia: verifícalo."
      }
    ],
    "law": [
      "Real Decreto 1007/2023, de 5 de diciembre (Reglamento Veri*factu)",
      "Ley 18/2022, de 28 de septiembre (Crea y Crece)",
      "Orden HAC/1177/2024, de 17 de octubre",
      "Real Decreto 254/2025",
      "Real Decreto-ley 15/2025, de 2 de diciembre",
      "Orden HAC/1028/2026"
    ],
    "sources": [
      {
        "title": "Garrigues: se retrasa la entrada en vigor de Veri*factu",
        "url": "https://www.garrigues.com/es_ES/noticia/retrasa-entrada-vigor-verifactu",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "RSM: VeriFactu aplazado hasta 2027 (RDL 15/2025, BOE-A-2025-24446)",
        "url": "https://www.rsm.global/spain/sites/default/files/media/VeriFactu%20aplazado%20hasta%202027.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "KPMG: calendario de adaptación de los sistemas de facturación",
        "url": "https://assets.kpmg.com/content/dam/kpmgsites/es/pdf/2025/09/tax-alert-verifactu-calendario-adaptacion-sistemas-facturacion-23580700-4.pdf.coredownload.inline.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "SAPI: Verifactu se aplaza a octubre de 2028, qué dice el BOE",
        "url": "https://sapi.es/blog/verifactu-se-aplaza-a-octubre-de-2028-nuevas-fechas-que-dice-el-boe-y-que-hacer-ahora",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "DSI: aplazamiento de Verifactu a 2028 y factura electrónica",
        "url": "https://www.dsi-net.com/verifactu-aplazamiento-2028/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "elEconomista: Hacienda vuelve a retrasar Verifactu hasta octubre de 2028",
        "url": "https://www.eleconomista.es/economia/noticias/14018805/10/26/hacienda-vuelve-a-retrasar-la-entrada-en-vigor-de-verifactu-hasta-octubre-de-2028.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Tradeshift: mandato de facturación electrónica B2B en España",
        "url": "https://tradeshift.com/?p=71104",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c4.9-1",
        "lessonId": "x4-9",
        "kind": "choice",
        "prompt": "¿Qué regula el Real Decreto 1007/2023?",
        "answer": 0,
        "explain": "La factura electrónica B2B nace de la Ley Crea y Crece.",
        "options": [
          "Los requisitos de los sistemas informáticos de facturación (Veri*factu)",
          "El formato de la factura electrónica B2B",
          "El IVA de las importaciones",
          "El libro diario"
        ]
      },
      {
        "id": "c4.9-2",
        "lessonId": "x4-9",
        "kind": "tf",
        "prompt": "Una nota informativa del Ministerio de Hacienda modifica por sí sola las fechas del BOE.",
        "answer": false,
        "explain": "Hasta que se publique una norma, rigen las fechas del BOE."
      },
      {
        "id": "c4.9-3",
        "lessonId": "x4-9",
        "kind": "choice",
        "prompt": "Según el Real Decreto-ley 15/2025, ¿qué fecha fija para los contribuyentes del Impuesto sobre Sociedades?",
        "answer": 0,
        "explain": "El resto de obligados, el 1 de julio de 2027.",
        "options": [
          "1 de enero de 2027",
          "1 de julio de 2025",
          "1 de octubre de 2028",
          "1 de enero de 2026"
        ]
      },
      {
        "id": "c4.9-4",
        "lessonId": "x4-9",
        "kind": "tf",
        "prompt": "Veri*factu y la factura electrónica B2B son exactamente la misma obligación.",
        "answer": false,
        "explain": "Regulan aspectos diferentes: requisitos del software frente a factura electrónica entre empresas."
      }
    ]
  },
};

export const m4Bank: Question[] = [
  {
    "id": "e4-01",
    "lessonId": "x4-1",
    "kind": "choice",
    "prompt": "¿Qué sistema permite identificarse con el teléfono móvil ante la Administración?",
    "answer": 0,
    "explain": "Cl@ve permanente usa usuario y contraseña.",
    "options": [
      "Cl@ve temporal",
      "Certificado de empresa",
      "Libro de visitas",
      "Registro Mercantil"
    ]
  },
  {
    "id": "e4-02",
    "lessonId": "x4-1",
    "kind": "tf",
    "prompt": "Se puede obtener el alta en Cl@ve solicitando por internet una carta de invitación que llega al domicilio fiscal.",
    "answer": true,
    "explain": "Es una de las vías sin trámite presencial."
  },
  {
    "id": "e4-03",
    "lessonId": "x4-1",
    "kind": "tf",
    "prompt": "El certificado electrónico solo está disponible para personas físicas.",
    "answer": false,
    "explain": "Sirve a personas físicas y jurídicas."
  },
  {
    "id": "e4-04",
    "lessonId": "x4-1",
    "kind": "choice",
    "prompt": "Para actuar por vía electrónica ante la AEAT en nombre de un tercero, además de ser colaborador social, se puede:",
    "answer": 0,
    "explain": "El apoderamiento debe mencionar los trámites concretos.",
    "options": [
      "Estar apoderado en el Registro de apoderamientos",
      "Usar la Cl@ve del tercero",
      "Usar el DNI del tercero",
      "Enviar un correo a la AEAT"
    ]
  },
  {
    "id": "e4-05",
    "lessonId": "x4-1",
    "kind": "tf",
    "prompt": "Un apoderamiento para recibir notificaciones requiere confirmación del apoderado.",
    "answer": true,
    "explain": "Debe aparecer como «Confirmado»."
  },
  {
    "id": "e4-06",
    "lessonId": "x4-1",
    "kind": "choice",
    "prompt": "El Registro electrónico de apoderamientos de la AEAT se usa para:",
    "answer": 0,
    "explain": "Recoge las representaciones otorgadas a terceros.",
    "options": [
      "Actuaciones electrónicas ante la AEAT, sin carácter de registro público",
      "Inscribir propiedades",
      "Legalizar libros contables",
      "Constituir sociedades"
    ]
  },
  {
    "id": "e4-07",
    "lessonId": "x4-1",
    "kind": "tf",
    "prompt": "Un administrador de una sociedad inscrita puede solicitar online el certificado de la FNMT identificándose con su DNI electrónico.",
    "answer": true,
    "explain": "Es una vía prevista para administradores únicos o solidarios."
  },
  {
    "id": "e4-08",
    "lessonId": "x4-2",
    "kind": "choice",
    "prompt": "El hecho imponible es:",
    "answer": 0,
    "explain": "El devengo es el momento en que se entiende realizado.",
    "options": [
      "El presupuesto fijado por la ley cuya realización origina la obligación tributaria principal",
      "El momento del pago",
      "El importe de la cuota",
      "La notificación"
    ]
  },
  {
    "id": "e4-09",
    "lessonId": "x4-2",
    "kind": "choice",
    "prompt": "El devengo es:",
    "answer": 0,
    "explain": "Determina el nacimiento de la obligación.",
    "options": [
      "El momento en que se entiende realizado el hecho imponible",
      "El plazo para pagar",
      "La base imponible",
      "El tipo de gravamen"
    ]
  },
  {
    "id": "e4-10",
    "lessonId": "x4-2",
    "kind": "tf",
    "prompt": "Los impuestos se exigen sin contraprestación.",
    "answer": true,
    "explain": "Su hecho imponible expresa capacidad económica."
  },
  {
    "id": "e4-11",
    "lessonId": "x4-2",
    "kind": "choice",
    "prompt": "¿Qué artículo de la LGT define el domicilio fiscal?",
    "answer": 0,
    "explain": "Es la regla de localización del obligado.",
    "options": [
      "Art. 48",
      "Art. 17",
      "Art. 2",
      "Art. 88"
    ]
  },
  {
    "id": "e4-12",
    "lessonId": "x4-2",
    "kind": "choice",
    "prompt": "¿Qué es una obligación formal?",
    "answer": 0,
    "explain": "Existen aunque no haya cuota.",
    "options": [
      "Presentar declaraciones, llevar libros o conservar documentos",
      "Pagar la cuota",
      "Realizar un pago a cuenta",
      "Devengar el impuesto"
    ]
  },
  {
    "id": "e4-13",
    "lessonId": "x4-2",
    "kind": "tf",
    "prompt": "La ley puede eximir del cumplimiento de la obligación principal aunque se realice el hecho imponible.",
    "answer": true,
    "explain": "Es el caso de las exenciones."
  },
  {
    "id": "e4-14",
    "lessonId": "x4-2",
    "kind": "tf",
    "prompt": "Los pagos a cuenta nunca se descuentan de la obligación principal.",
    "answer": false,
    "explain": "El contribuyente puede deducirlos."
  },
  {
    "id": "e4-15",
    "lessonId": "x4-3",
    "kind": "choice",
    "prompt": "¿Qué define el art. 35 de la LGT?",
    "answer": 0,
    "explain": "Incluye contribuyentes, sustitutos, retenedores y otros.",
    "options": [
      "Las clases de obligados tributarios",
      "Los plazos de prescripción",
      "Los recursos",
      "Las sanciones"
    ]
  },
  {
    "id": "e4-16",
    "lessonId": "x4-3",
    "kind": "choice",
    "prompt": "El sustituto del contribuyente puede exigir al contribuyente:",
    "answer": 0,
    "explain": "Ocupa su lugar en el cumplimiento de la obligación.",
    "options": [
      "El importe de las obligaciones satisfechas",
      "Nada",
      "Una indemnización",
      "Una sanción"
    ]
  },
  {
    "id": "e4-17",
    "lessonId": "x4-3",
    "kind": "tf",
    "prompt": "Una persona física que desarrolla principalmente actividades económicas puede tener como domicilio fiscal el de la gestión centralizada de sus actividades.",
    "answer": true,
    "explain": "Es una facultad que el art. 48 reconoce a la Administración."
  },
  {
    "id": "e4-18",
    "lessonId": "x4-3",
    "kind": "tf",
    "prompt": "El domicilio fiscal de una persona física es siempre el de su nacionalidad.",
    "answer": false,
    "explain": "La nacionalidad no determina el domicilio fiscal."
  },
  {
    "id": "e4-19",
    "lessonId": "x4-3",
    "kind": "choice",
    "prompt": "Para entidades no residentes sin regulación específica, el domicilio fiscal es:",
    "answer": 0,
    "explain": "Art. 48.2.d LGT.",
    "options": [
      "El del representante",
      "El del país de origen",
      "El de su cliente",
      "No tienen"
    ]
  },
  {
    "id": "e4-20",
    "lessonId": "x4-3",
    "kind": "tf",
    "prompt": "Cada Administración puede comprobar y rectificar el domicilio fiscal declarado en los tributos que le competen.",
    "answer": true,
    "explain": "Art. 48.4 LGT."
  },
  {
    "id": "e4-21",
    "lessonId": "x4-3",
    "kind": "tf",
    "prompt": "Residencia fiscal y nacionalidad son lo mismo.",
    "answer": false,
    "explain": "La residencia fiscal se define por la ley de cada impuesto."
  },
  {
    "id": "e4-22",
    "lessonId": "x4-4",
    "kind": "choice",
    "prompt": "¿Qué es una entrega de bienes en el IVA?",
    "answer": 0,
    "explain": "Art. 8 de la Ley del IVA.",
    "options": [
      "La transmisión del poder de disposición sobre bienes corporales",
      "Cualquier servicio prestado",
      "Una importación",
      "Un pago anticipado"
    ]
  },
  {
    "id": "e4-23",
    "lessonId": "x4-4",
    "kind": "choice",
    "prompt": "Una prestación de servicios, para el IVA, es:",
    "answer": 0,
    "explain": "Se define en sentido negativo (art. 11).",
    "options": [
      "Toda operación sujeta que no sea entrega de bienes, adquisición intracomunitaria ni importación",
      "Solo servicios profesionales",
      "Solo trabajos manuales",
      "Solo arrendamientos"
    ]
  },
  {
    "id": "e4-24",
    "lessonId": "x4-4",
    "kind": "tf",
    "prompt": "El ámbito espacial del IVA es la Península y las Islas Baleares.",
    "answer": true,
    "explain": "Canarias, Ceuta y Melilla quedan fuera de ese ámbito."
  },
  {
    "id": "e4-25",
    "lessonId": "x4-4",
    "kind": "tf",
    "prompt": "Las muestras gratuitas y los objetos publicitarios están sujetos al IVA.",
    "answer": false,
    "explain": "El art. 7 los declara no sujetos."
  },
  {
    "id": "e4-26",
    "lessonId": "x4-4",
    "kind": "choice",
    "prompt": "En una venta a plazos de un bien, el IVA se devenga:",
    "answer": 0,
    "explain": "Aunque los plazos se satisfagan después.",
    "options": [
      "En su totalidad al ponerse el bien a disposición del adquirente",
      "Cuando se paga el último plazo",
      "En cada plazo por su parte",
      "Nunca"
    ]
  },
  {
    "id": "e4-27",
    "lessonId": "x4-4",
    "kind": "tf",
    "prompt": "El tipo de IVA aplicable es el vigente en el momento del devengo.",
    "answer": true,
    "explain": "Art. 90.Dos de la Ley del IVA."
  },
  {
    "id": "e4-28",
    "lessonId": "x4-4",
    "kind": "choice",
    "prompt": "¿Quién es, en general, el sujeto pasivo en las entregas y prestaciones interiores?",
    "answer": 0,
    "explain": "Salvo inversión del sujeto pasivo.",
    "options": [
      "El empresario o profesional que las realiza",
      "El cliente",
      "La Agencia Tributaria",
      "El banco"
    ]
  },
  {
    "id": "e4-29",
    "lessonId": "x4-5",
    "kind": "number",
    "prompt": "Base de 2.000 € y tipo reducido del 10 %. ¿Cuál es la cuota?",
    "answer": 200,
    "explain": "2.000 × 0,10 = 200 €.",
    "unit": "€"
  },
  {
    "id": "e4-30",
    "lessonId": "x4-5",
    "kind": "number",
    "prompt": "Base de 800 € y tipo superreducido del 4 %. ¿Cuál es la cuota?",
    "answer": 32,
    "explain": "800 × 0,04 = 32 €.",
    "unit": "€"
  },
  {
    "id": "e4-31",
    "lessonId": "x4-5",
    "kind": "number",
    "prompt": "Factura con total de 1.100 € y tipo reducido del 10 %. ¿Cuál es la base?",
    "answer": 1000,
    "explain": "1.100 ÷ 1,10 = 1.000 €.",
    "unit": "€"
  },
  {
    "id": "e4-32",
    "lessonId": "x4-5",
    "kind": "tf",
    "prompt": "La base imponible es, en general, el importe total de la contraprestación de las operaciones sujetas.",
    "answer": true,
    "explain": "Arts. 78 a 81 de la Ley del IVA."
  },
  {
    "id": "e4-33",
    "lessonId": "x4-5",
    "kind": "choice",
    "prompt": "Las exenciones plenas están asociadas principalmente a:",
    "answer": 0,
    "explain": "Dan derecho a deducir el IVA soportado.",
    "options": [
      "Operaciones de comercio exterior",
      "Seguros",
      "Operaciones financieras",
      "Enseñanza"
    ]
  },
  {
    "id": "e4-34",
    "lessonId": "x4-5",
    "kind": "tf",
    "prompt": "Las exenciones limitadas no dan derecho a deducir el IVA soportado correspondiente.",
    "answer": true,
    "explain": "Se refieren a operaciones interiores."
  },
  {
    "id": "e4-35",
    "lessonId": "x4-5",
    "kind": "tf",
    "prompt": "Si cambia el tipo de IVA entre dos fechas, a una misma operación se le aplica el tipo anterior al devengo.",
    "answer": false,
    "explain": "Se aplica el tipo vigente en el momento del devengo."
  },
  {
    "id": "e4-36",
    "lessonId": "x4-6",
    "kind": "choice",
    "prompt": "¿Qué artículos de la Ley del IVA regulan las deducciones?",
    "answer": 0,
    "explain": "Es el régimen de deducciones.",
    "options": [
      "Arts. 92 a 114",
      "Arts. 1 a 10",
      "Arts. 75 a 80",
      "Arts. 200 a 220"
    ]
  },
  {
    "id": "e4-37",
    "lessonId": "x4-6",
    "kind": "choice",
    "prompt": "La declaración resumen anual del IVA es el modelo:",
    "answer": 0,
    "explain": "Se presenta en el plazo del cuarto trimestre, del 1 al 30 de enero.",
    "options": [
      "390",
      "303",
      "347",
      "111"
    ]
  },
  {
    "id": "e4-38",
    "lessonId": "x4-6",
    "kind": "tf",
    "prompt": "Para los vehículos, la ley presume una afectación del 50 % a la actividad.",
    "answer": true,
    "explain": "Es la regla del art. 95."
  },
  {
    "id": "e4-39",
    "lessonId": "x4-6",
    "kind": "tf",
    "prompt": "Son deducibles las cuotas soportadas en adquisiciones que no se afectan directa y exclusivamente a la actividad.",
    "answer": false,
    "explain": "El art. 95 las excluye, salvo excepciones como los vehículos."
  },
  {
    "id": "e4-40",
    "lessonId": "x4-6",
    "kind": "choice",
    "prompt": "El derecho a deducir nace, por regla general:",
    "answer": 0,
    "explain": "Se ejerce en el periodo en que se soportan o en los siguientes.",
    "options": [
      "Cuando se devengan las cuotas deducibles",
      "Cuando se paga la factura",
      "Al final del ejercicio",
      "Cuando se presenta el 303"
    ]
  },
  {
    "id": "e4-41",
    "lessonId": "x4-6",
    "kind": "choice",
    "prompt": "Si el último día de presentación de un 303 cae en sábado, la fecha límite se traslada:",
    "answer": 0,
    "explain": "El sábado es día inhábil.",
    "options": [
      "Al día hábil siguiente",
      "Al viernes anterior",
      "Al domingo",
      "No se traslada"
    ]
  },
  {
    "id": "e4-42",
    "lessonId": "x4-6",
    "kind": "number",
    "prompt": "IVA devengado 1.500 € e IVA deducible 1.100 €. ¿Cuánto debe ingresar?",
    "answer": 400,
    "explain": "1.500 − 1.100 = 400 €.",
    "unit": "€"
  },
  {
    "id": "e4-43",
    "lessonId": "x4-7",
    "kind": "choice",
    "prompt": "¿Cuál de estos regímenes especiales es obligatorio?",
    "answer": 0,
    "explain": "También son obligatorios oro de inversión y agencias de viajes.",
    "options": [
      "Recargo de equivalencia",
      "Criterio de caja",
      "Régimen simplificado",
      "Todos son voluntarios"
    ]
  },
  {
    "id": "e4-44",
    "lessonId": "x4-7",
    "kind": "tf",
    "prompt": "En el criterio de caja se retrasa el devengo del IVA repercutido hasta el cobro y también la deducción del IVA soportado hasta el pago.",
    "answer": true,
    "explain": "Es el criterio de caja doble."
  },
  {
    "id": "e4-45",
    "lessonId": "x4-7",
    "kind": "number",
    "prompt": "¿Cuál es el tope de cobros en efectivo de un mismo destinatario a partir del cual se excluye del criterio de caja, en euros?",
    "answer": 100000,
    "explain": "Se computa en el año natural.",
    "unit": "€"
  },
  {
    "id": "e4-46",
    "lessonId": "x4-7",
    "kind": "tf",
    "prompt": "Un minorista en recargo de equivalencia puede deducir el IVA y el recargo que soporta en sus compras.",
    "answer": false,
    "explain": "No son deducibles."
  },
  {
    "id": "e4-47",
    "lessonId": "x4-7",
    "kind": "choice",
    "prompt": "El proveedor de un minorista en recargo de equivalencia debe:",
    "answer": 0,
    "explain": "El recargo se incluye en sus facturas.",
    "options": [
      "Repercutir el recargo y declararlo como IVA repercutido",
      "Ignorar el régimen",
      "Ingresar solo el recargo",
      "Dar de baja al minorista"
    ]
  },
  {
    "id": "e4-48",
    "lessonId": "x4-7",
    "kind": "number",
    "prompt": "Compra de mercaderías con base de 10.000 € a un tipo del 21 % y recargo de equivalencia del 5,2 %. ¿Cuánto es el recargo?",
    "answer": 520,
    "explain": "10.000 × 5,2 % = 520 €.",
    "unit": "€"
  },
  {
    "id": "e4-49",
    "lessonId": "x4-7",
    "kind": "tf",
    "prompt": "La renuncia a la estimación objetiva del IRPF implica la renuncia al régimen simplificado del IVA.",
    "answer": true,
    "explain": "Y también a la agricultura, ganadería y pesca."
  },
  {
    "id": "e4-50",
    "lessonId": "x4-8",
    "kind": "choice",
    "prompt": "¿Qué norma aprueba el Reglamento de facturación?",
    "answer": 0,
    "explain": "En vigor desde el 1 de enero de 2013.",
    "options": [
      "Real Decreto 1619/2012",
      "Real Decreto 1007/2023",
      "Ley 18/2022",
      "Real Decreto 84/1996"
    ]
  },
  {
    "id": "e4-51",
    "lessonId": "x4-8",
    "kind": "tf",
    "prompt": "El Reglamento de 2012 establece dos tipos de factura: completa y simplificada.",
    "answer": true,
    "explain": "La simplificada sustituye a los tiques."
  },
  {
    "id": "e4-52",
    "lessonId": "x4-8",
    "kind": "number",
    "prompt": "¿Hasta qué importe con IVA incluido puede emitirse factura simplificada en ventas al por menor, en euros?",
    "answer": 3000,
    "explain": "Es el límite para supuestos concretos como ventas al por menor, a domicilio o servicios de ambulancia.",
    "unit": "€"
  },
  {
    "id": "e4-53",
    "lessonId": "x4-8",
    "kind": "tf",
    "prompt": "En una factura con operaciones a distintos tipos de IVA, hay que especificar por separado la base de cada una.",
    "answer": true,
    "explain": "Es un requisito de contenido."
  },
  {
    "id": "e4-54",
    "lessonId": "x4-8",
    "kind": "choice",
    "prompt": "Factura de base 1.000 € al 21 % debía ser 800 €. ¿Cuál es la cuota de IVA tras la rectificación?",
    "answer": 0,
    "explain": "800 × 21 % = 168 €; la rectificación es de −42 €.",
    "options": [
      "168 €",
      "210 €",
      "42 €",
      "800 €"
    ]
  },
  {
    "id": "e4-55",
    "lessonId": "x4-8",
    "kind": "tf",
    "prompt": "Una factura debe garantizar autenticidad, integridad y legibilidad durante todo el periodo de conservación.",
    "answer": true,
    "explain": "Se exige tanto en papel como en electrónico."
  },
  {
    "id": "e4-56",
    "lessonId": "x4-8",
    "kind": "choice",
    "prompt": "¿Qué datos del cliente incluye una factura completa?",
    "answer": 0,
    "explain": "La factura simplificada no los incluye.",
    "options": [
      "NIF y domicilio",
      "Solo el nombre",
      "Ninguno",
      "Solo el teléfono"
    ]
  },
  {
    "id": "e4-57",
    "lessonId": "x4-9",
    "kind": "choice",
    "prompt": "¿Qué ley es la base de la factura electrónica entre empresas?",
    "answer": 0,
    "explain": "Fue aprobada el 28 de septiembre de 2022.",
    "options": [
      "Ley 18/2022, Crea y Crece",
      "Ley 37/1992",
      "Ley 58/2003",
      "Ley 10/2010"
    ]
  },
  {
    "id": "e4-58",
    "lessonId": "x4-9",
    "kind": "choice",
    "prompt": "¿Qué real decreto contiene el Reglamento Veri*factu?",
    "answer": 0,
    "explain": "Aprobado el 5 de diciembre de 2023.",
    "options": [
      "Real Decreto 1007/2023",
      "Real Decreto 1619/2012",
      "Real Decreto 84/1996",
      "Real Decreto 643/2026"
    ]
  },
  {
    "id": "e4-59",
    "lessonId": "x4-9",
    "kind": "tf",
    "prompt": "Veri*factu es un sistema de autorización previa de cada factura.",
    "answer": false,
    "explain": "No es un modelo de autorización previa, sino de registro y remisión."
  },
  {
    "id": "e4-60",
    "lessonId": "x4-9",
    "kind": "tf",
    "prompt": "Los contribuyentes que ya remiten sus facturas por el SII quedan exentos de Veri*factu.",
    "answer": true,
    "explain": "Según las fuentes consultadas."
  },
  {
    "id": "e4-61",
    "lessonId": "x4-9",
    "kind": "choice",
    "prompt": "El Real Decreto-ley 15/2025 fijó para el resto de obligados distintos de los del Impuesto sobre Sociedades:",
    "answer": 0,
    "explain": "Para IRPF, no residentes con establecimiento permanente y entidades en atribución de rentas.",
    "options": [
      "1 de julio de 2027",
      "1 de enero de 2027",
      "1 de octubre de 2028",
      "29 de julio de 2025"
    ]
  },
  {
    "id": "e4-62",
    "lessonId": "x4-9",
    "kind": "choice",
    "prompt": "¿A partir de qué volumen de facturación anual llega antes la factura electrónica B2B, en octubre de 2027?",
    "answer": 0,
    "explain": "Para el resto de empresarios y profesionales, octubre de 2028.",
    "options": [
      "Más de 8 millones de euros",
      "Más de 1 millón",
      "Más de 100.000 euros",
      "Cualquiera"
    ]
  },
  {
    "id": "e4-63",
    "lessonId": "x4-9",
    "kind": "tf",
    "prompt": "El 5 de octubre de 2026 el Ministerio de Hacienda anunció la previsión de aplazar Veri*factu hasta octubre de 2028.",
    "answer": true,
    "explain": "Es un anuncio, a la espera de una norma que lo recoja."
  },
];
