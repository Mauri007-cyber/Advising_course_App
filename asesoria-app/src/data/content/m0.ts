import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const m0Lessons: Record<string, LessonContent> = {
  "x0-1": {
    "intro": "Marta encuentra en una web que un reglamento fija un plazo y que la ley dice otro distinto. ¿Cuál vale? Para responder hay que saber qué normas existen, cuál manda sobre cuál y qué papel tienen la costumbre, los principios generales y la jurisprudencia.",
    "steps": [
      {
        "title": "Las fuentes del ordenamiento",
        "body": [
          "Según el art. 1 del Código Civil, las fuentes del ordenamiento jurídico español son la ley, la costumbre y los principios generales del derecho.",
          "La costumbre solo rige en defecto de ley aplicable.",
          "Los principios generales del derecho se aplican en defecto de ley o costumbre, y además informan todo el ordenamiento.",
          "La jurisprudencia complementa el ordenamiento con la doctrina que, de modo reiterado, establece el Tribunal Supremo al interpretar y aplicar la ley, la costumbre y los principios generales."
        ]
      },
      {
        "title": "La jerarquía normativa",
        "body": [
          "El mismo art. 1 del Código Civil añade que carecerán de validez las disposiciones que contradigan otra de rango superior.",
          "El art. 9.3 de la Constitución garantiza, entre otros, el principio de legalidad, la jerarquía normativa, la publicidad de las normas y la seguridad jurídica.",
          "La Constitución es la norma suprema: toda disposición o acto contrario a ella carece de validez."
        ]
      },
      {
        "title": "Ley y normas con rango de ley",
        "body": [
          "Por ley en sentido estricto se entienden la ley orgánica, la ley ordinaria y las normas con rango de ley, entre ellas el real decreto-ley y el real decreto legislativo.",
          "Entre todas ellas no hay jerarquía, sino distintos procedimientos y ámbitos de aplicación."
        ]
      },
      {
        "title": "Por debajo de la ley",
        "body": [
          "Los jueces y tribunales no aplican los reglamentos ni ninguna otra disposición contrarios a la Constitución, a la ley o al principio de jerarquía normativa."
        ]
      },
      {
        "title": "Tres reglas útiles del Código Civil",
        "body": [
          "Las disposiciones del Código Civil se aplican como supletorias en las materias regidas por otras leyes (art. 4).",
          "Los actos realizados al amparo del texto de una norma que persigan un resultado prohibido por el ordenamiento, o contrario a él, se consideran ejecutados en fraude de ley y no impiden la aplicación de la norma que se trató de eludir (art. 6).",
          "Por la simple derogación de una ley no recobran vigencia las que esta hubiere derogado (art. 2)."
        ]
      }
    ],
    "example": {
      "title": "Dos textos que no coinciden",
      "body": [
        "Marta tiene delante una ley que concede 30 días para un trámite y un reglamento que dice 15.",
        "El reglamento está por debajo de la ley. Si la contradice, carece de validez en ese punto y prevalece la ley.",
        "Antes de aplicar nada, Marta anota el rango de cada texto y su fecha, y comprueba que no haya una modificación posterior."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Tratar una contestación de la DGT como si fuera una ley. Vincula a la Administración tributaria en los términos de la Ley General Tributaria, pero no es una norma de rango de ley."
      },
      {
        "kind": "consejo",
        "text": "Cada vez que cites una norma, anota su rango y su fecha. Esos dos datos resuelven la mayoría de las dudas de prelación."
      },
      {
        "kind": "clave",
        "text": "Constitución, normas con rango de ley, reglamentos. Una disposición que contradice a otra de rango superior carece de validez."
      }
    ],
    "law": [
      "Código Civil, arts. 1, 2, 4 y 6",
      "Constitución Española, art. 9.3"
    ],
    "sources": [
      {
        "title": "Portal Europeo de e-Justicia: legislación nacional española",
        "url": "https://e-justice.europa.eu/topics/legislation-and-case-law/national-legislation/es_es",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Aranzadi LegalToday: texto del Código Civil, título preliminar",
        "url": "https://www.legaltoday.com/?p=72879",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "OMPI (WIPO Lex): Código Civil de España",
        "url": "https://www.wipo.int/wipolex/ar/text/434563",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Redopositor: glosario de ordenamiento jurídico",
        "url": "https://redopositor.com/glosario/ordenamiento-juridico/",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c0.1-1",
        "lessonId": "x0-1",
        "kind": "choice",
        "prompt": "Según el art. 1 del Código Civil, ¿cuáles son las fuentes del ordenamiento jurídico español?",
        "answer": 0,
        "explain": "La jurisprudencia complementa el ordenamiento, pero no figura entre las tres fuentes.",
        "options": [
          "La ley, la costumbre y los principios generales del derecho",
          "Solo la ley y los reglamentos",
          "La ley y las circulares internas",
          "La jurisprudencia únicamente"
        ]
      },
      {
        "id": "c0.1-2",
        "lessonId": "x0-1",
        "kind": "tf",
        "prompt": "La costumbre se aplica siempre, aunque exista una ley aplicable.",
        "answer": false,
        "explain": "Solo rige en defecto de ley aplicable."
      },
      {
        "id": "c0.1-3",
        "lessonId": "x0-1",
        "kind": "choice",
        "prompt": "¿Qué ocurre con una disposición que contradice otra de rango superior?",
        "answer": 0,
        "explain": "Es la consecuencia que fija el art. 1 del Código Civil.",
        "options": [
          "Carece de validez",
          "Prevalece si es más reciente",
          "Prevalece si es más concreta",
          "Se aplica solo en su ámbito territorial"
        ]
      },
      {
        "id": "c0.1-4",
        "lessonId": "x0-1",
        "kind": "tf",
        "prompt": "Entre una ley orgánica y una ley ordinaria existe una relación de jerarquía.",
        "answer": false,
        "explain": "No hay jerarquía entre ellas, sino distintos procedimientos y ámbitos de aplicación."
      }
    ]
  },
  "x0-2": {
    "intro": "Marta necesita saber qué plazo de baja tiene hoy un trabajador. Encuentra tres páginas que dicen cosas distintas. La solución es ir a la fuente: el BOE y su legislación consolidada. En esta lección aprendes a buscar una norma, a leerla y a comprobar si sigue vigente.",
    "steps": [
      {
        "title": "Qué es la legislación consolidada",
        "body": [
          "La consolidación integra en un solo texto, sin valor oficial, las modificaciones y correcciones expresas que una norma ha tenido desde su origen.",
          "El BOE ofrece el último texto actualizado y las versiones intermedias que corresponden a cada modificación.",
          "Los textos consolidados y el análisis jurídico son meramente informativos: para fines jurídicos hay que consultar la publicación oficial."
        ]
      },
      {
        "title": "Cómo se identifica una norma",
        "body": [
          "Cada disposición tiene un identificador del BOE con la estructura BOE-A-año de publicación-número.",
          "También lleva el Identificador Europeo de Legislación (ELI), que permite localizarla de forma estable.",
          "Además tiene un número oficial, habitualmente con la estructura número/año, como 169/2008."
        ]
      },
      {
        "title": "Cómo buscar en la base de datos de Legislación",
        "body": [
          "Puedes elegir el ámbito: estatal, autonómico o europeo.",
          "Puedes marcar «sólo consolidada» para ver únicamente las normas que, además del texto original, tienen versión actualizada.",
          "Por defecto la búsqueda se hace sobre el título; si quieres buscar en todo el texto debes desmarcar esa opción.",
          "El asterisco al final de una palabra funciona como comodín."
        ]
      },
      {
        "title": "Qué comprobar siempre",
        "body": [
          "Que estás leyendo la versión vigente en la fecha de los hechos, no solo la última.",
          "Qué disposición modificó la norma y desde cuándo.",
          "Que existan disposiciones transitorias que cambien el régimen aplicable.",
          "Esta lista de comprobación es el método del curso para no apoyarse en una página sin fuente."
        ]
      }
    ],
    "example": {
      "title": "Localizar el Real Decreto 643/2026",
      "body": [
        "Marta busca el número oficial 643/2026, y la fuente le da el identificador BOE-A-2026-16557.",
        "Abre el texto publicado, ve la fecha y comprueba qué reglamento modifica.",
        "Después consulta si la norma modificada tiene versión consolidada y qué versión estaba vigente en la fecha que le interesa.",
        "Guarda el enlace y la fecha de consulta junto a su conclusión."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Fiarse de un resumen web sin abrir la norma. Un resumen puede estar incompleto o desactualizado."
      },
      {
        "kind": "consejo",
        "text": "Guarda siempre el enlace oficial, la fecha de consulta y el identificador de la norma. Ahorra horas si luego hay dudas."
      },
      {
        "kind": "clave",
        "text": "El texto consolidado orienta; la publicación oficial es la que vale a efectos jurídicos."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "BOE: preguntas frecuentes sobre legislación consolidada",
        "url": "https://www.boe.es/datosabiertos/faq/consolidada.php?lang=es",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "BOE: ayuda de la base de datos de Legislación",
        "url": "https://www.boe.es/buscar/ayudas/legislacion_ayuda.php?lang=va",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "datos.gob.es: legislación consolidada de la Agencia Estatal BOE",
        "url": "https://datos.gob.es/eu/catalogo/ea0040819-legislacion-consolidada-de-la-agencia-estatal-boe",
        "accessed": "2026-10-25",
        "official": true
      }
    ],
    "check": [
      {
        "id": "c0.2-1",
        "lessonId": "x0-2",
        "kind": "tf",
        "prompt": "Los textos consolidados del BOE tienen valor oficial.",
        "answer": false,
        "explain": "Son meramente informativos; para fines jurídicos hay que consultar la publicación oficial."
      },
      {
        "id": "c0.2-2",
        "lessonId": "x0-2",
        "kind": "choice",
        "prompt": "¿Qué estructura tiene el identificador de una norma en el BOE?",
        "answer": 0,
        "explain": "Por ejemplo, BOE-A-2007-19884.",
        "options": [
          "BOE-A-año de publicación-número",
          "Número/año/ministerio",
          "ELI-fecha-título",
          "Año-sección-página"
        ]
      },
      {
        "id": "c0.2-3",
        "lessonId": "x0-2",
        "kind": "choice",
        "prompt": "¿Qué hace la opción «sólo consolidada» al buscar legislación?",
        "answer": 0,
        "explain": "Útil para encontrar el texto vigente.",
        "options": [
          "Muestra solo las normas con versión actualizada, además del texto original",
          "Oculta las normas autonómicas",
          "Busca solo en leyes orgánicas",
          "Elimina las normas derogadas"
        ]
      },
      {
        "id": "c0.2-4",
        "lessonId": "x0-2",
        "kind": "tf",
        "prompt": "Por defecto, la búsqueda en Legislación se realiza sobre el título de las normas.",
        "answer": true,
        "explain": "Para buscar en el texto completo hay que desmarcar esa opción."
      }
    ]
  },
  "x0-4": {
    "intro": "Un cliente le dice a Marta: «Me han pagado 1.200 € por un trabajo, ¿qué impuestos tengo que pagar?». Antes de contestar necesita saber quién cobró, por qué, cuándo, dónde y con qué documentos. Plantear bien una consulta es separar los hechos de las opiniones y detectar qué datos faltan. El procedimiento oficial de consultas tributarias es un buen modelo.",
    "steps": [
      {
        "title": "Hechos, opiniones y datos",
        "body": [
          "Un hecho es algo comprobable: una factura, una fecha, un contrato.",
          "Una opinión es la valoración de alguien: «creo que es un salario».",
          "Un dato que falta es una información que cambia la respuesta y que todavía no tienes. Ante un cliente, primero se anotan los hechos, después lo que falta y solo al final se concluye."
        ]
      },
      {
        "title": "Qué contiene una consulta tributaria escrita",
        "body": [
          "El art. 88 de la Ley General Tributaria permite a los obligados formular consultas sobre el régimen, la clasificación o la calificación tributaria que les corresponda.",
          "El escrito se dirige al órgano competente para contestarlo. En el ámbito del Estado, es la Dirección General de Tributos.",
          "Según el reglamento que lo desarrolla, el escrito identifica al obligado tributario y, en su caso, a su representante, e incluye los antecedentes y circunstancias del caso, expresados con claridad y con la extensión necesaria.",
          "También debe manifestar expresamente si, al presentarla, se está tramitando un procedimiento, recurso o reclamación relacionado con la cuestión planteada."
        ]
      },
      {
        "title": "Cuándo y con qué efectos",
        "body": [
          "Las consultas se formulan antes de que termine el plazo para ejercer los derechos, presentar la declaración o autoliquidación o cumplir la obligación tributaria.",
          "La Administración debe contestar por escrito en seis meses. La falta de contestación en ese plazo no implica aceptar los criterios del escrito de consulta.",
          "La contestación vincula a los órganos de la Administración tributaria en los términos del art. 89, siempre que haya identidad entre los hechos del caso y los de la consulta.",
          "Los criterios se aplican mientras no cambie la legislación o la jurisprudencia y no se alteren las circunstancias y datos recogidos en la consulta."
        ]
      },
      {
        "title": "Lo que enseña este modelo",
        "body": [
          "La respuesta depende de los hechos: si cambian, puede cambiar la respuesta.",
          "Presentar una consulta no interrumpe los plazos para cumplir las obligaciones tributarias.",
          "La contestación tiene carácter informativo y no es recurrible."
        ]
      }
    ],
    "example": {
      "title": "Los 1.200 € del cliente",
      "body": [
        "Hecho comprobable: un cliente ha recibido 1.200 €.",
        "Todavía no sabes quién pagó, por qué concepto, si hay factura o contrato, si el trabajo fue puntual o habitual, ni en qué fecha.",
        "No concluyas «es un salario» ni «es un servicio». Anota los datos que faltan y las normas que habrá que mirar.",
        "Cuando los hechos estén completos, podrás decir con qué hipótesis trabajas y qué fuente la respalda."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Responder antes de tener los hechos. Una misma cifra puede tener tratamientos distintos según quién la cobra y por qué."
      },
      {
        "kind": "consejo",
        "text": "Escribe los hechos en una lista y marca cuáles están documentados. Esa lista es tu ficha de consulta."
      },
      {
        "kind": "clave",
        "text": "Seis meses para contestar, sin silencio positivo: la falta de contestación no es aceptación."
      }
    ],
    "law": [
      "Ley General Tributaria, arts. 88 y 89"
    ],
    "sources": [
      {
        "title": "Iberley: texto del art. 88 de la Ley General Tributaria",
        "url": "https://iberley.es/legislacion/articulo-88-ley-general-tributaria",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economist & Jurist: las consultas tributarias escritas a la DGT",
        "url": "https://www.economistjurist.es/?p=66409",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Sage: cómo formular una consulta tributaria",
        "url": "https://www.sage.com/es-es/blog/consultas-tributarias/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Consell Fiscal de les Illes Balears: contestación y efectos de las consultas tributarias",
        "url": "https://www.caib.es/sites/consellfiscal/es/contestacian_y_efectos_de_las_consultas_tributarias/",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Defensor del Pueblo: plazo de seis meses para contestar consultas tributarias",
        "url": "https://www.defensordelpueblo.es/resoluciones/consulta-tributaria/",
        "accessed": "2026-10-25",
        "official": true
      }
    ],
    "check": [
      {
        "id": "c0.4-1",
        "lessonId": "x0-4",
        "kind": "number",
        "prompt": "¿En cuántos meses debe contestar la Administración tributaria una consulta escrita que reúna los requisitos?",
        "answer": 6,
        "explain": "Es el plazo del art. 88 de la Ley General Tributaria.",
        "unit": "meses"
      },
      {
        "id": "c0.4-2",
        "lessonId": "x0-4",
        "kind": "tf",
        "prompt": "Si la Administración no contesta en seis meses, se entiende aceptado el criterio expuesto en la consulta.",
        "answer": false,
        "explain": "El art. 88 dice expresamente que la falta de contestación no implica aceptación."
      },
      {
        "id": "c0.4-3",
        "lessonId": "x0-4",
        "kind": "choice",
        "prompt": "¿Qué debe incluir el escrito de consulta respecto al caso planteado?",
        "answer": 0,
        "explain": "Con claridad y con la extensión necesaria.",
        "options": [
          "Los antecedentes y circunstancias del caso",
          "Solo el importe de la operación",
          "Una copia de la última declaración",
          "La opinión del asesor"
        ]
      },
      {
        "id": "c0.4-4",
        "lessonId": "x0-4",
        "kind": "choice",
        "prompt": "¿Cuál de estas frases es un hecho comprobable?",
        "answer": 0,
        "explain": "Un hecho se puede comprobar con un documento.",
        "options": [
          "Hay una factura de 1.200 € emitida el 3 de marzo",
          "Creo que es un salario",
          "Seguramente no tiene que pagar impuestos",
          "Parece un servicio puntual"
        ]
      }
    ]
  },
  "x0-5": {
    "intro": "Casi todo lo que se hace en una asesoría acaba en un porcentaje: una cuota, una retención, una prorrata. Antes de aprender cada impuesto conviene dominar cinco operaciones sencillas y saber cómo se llaman las piezas de un tributo. Los porcentajes de los ejemplos son ilustrativos; los reales cambian según la norma y el año.",
    "steps": [
      {
        "title": "Calcular un porcentaje",
        "body": [
          "El p % de una cantidad B se calcula multiplicando B por p y dividiendo entre 100.",
          "Ejemplo: el 15 % de 2.000 es 2.000 × 15 ÷ 100 = 300."
        ]
      },
      {
        "title": "Añadir y quitar un porcentaje",
        "body": [
          "Para pasar de una base a un total con un porcentaje t, se multiplica la base por (1 + t). Con un 10 %, 100 se convierte en 110.",
          "Para volver del total a la base se divide entre (1 + t). Con un 10 %, 110 dividido entre 1,10 da 100.",
          "Error típico: restar el 10 % a 110 da 99, no 100. El porcentaje se aplicó sobre una cantidad distinta."
        ]
      },
      {
        "title": "Regla de tres y prorrateos",
        "body": [
          "Cuando una cantidad debe repartirse por días, primero se halla el valor de una unidad y luego se multiplica.",
          "Ejemplo: 1.500 € en un mes de 30 días son 50 € al día. Doce días valen 12 × 50 = 600 €."
        ]
      },
      {
        "title": "Las piezas de un tributo",
        "body": [
          "La Ley General Tributaria define el hecho imponible (art. 20), el devengo (art. 21), la base imponible (art. 50), el tipo de gravamen (art. 55), la cuota tributaria (art. 56) y la deuda tributaria (art. 58).",
          "El hecho imponible es el presupuesto que fija la ley para que nazca la obligación. El devengo es el momento en que se entiende realizado. La base imponible es la medición o valoración del hecho imponible. El tipo de gravamen es la proporción que se aplica a la base para calcular el gravamen.",
          "La cuota puede ser una cantidad fija o el resultado de multiplicar el tipo por la base. La Ley distingue además cuota íntegra, líquida y diferencial (art. 56)."
        ]
      },
      {
        "title": "Tipos por tramos (escala inventada)",
        "body": [
          "Cuando un tipo se aplica por tramos, se calcula cada tramo por separado y se suman las cuotas.",
          "Escala ilustrativa: hasta 4.000 € al 10 % y el resto al 20 %. Base 10.000 €: 4.000 × 10 % = 400 y 6.000 × 20 % = 1.200. Cuota total: 1.600 €.",
          "Tipo medio: 1.600 ÷ 10.000 = 16 %. Tipo marginal: 20 %, el del último tramo."
        ]
      },
      {
        "title": "Redondeo",
        "body": [
          "Buena práctica de trabajo: redondea solo el resultado final, no los pasos intermedios, y deja constancia del criterio que uses."
        ]
      }
    ],
    "example": {
      "title": "De la factura a la base y a la cuota (tipo ilustrativo)",
      "body": [
        "Una factura tiene base 800 € y un tipo del 10 %. Cuota: 800 × 10 % = 80 €. Total: 880 €.",
        "Otra factura indica un total de 1.100 € con ese mismo tipo del 10 %. Base: 1.100 ÷ 1,10 = 1.000 €. Cuota: 100 €.",
        "Siempre se distinguen tres cifras: base, cuota y total. Confundirlas es un error de clasificación, no solo de cálculo."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Quitar el porcentaje directamente al total. Para recuperar la base hay que dividir entre (1 + tipo)."
      },
      {
        "kind": "consejo",
        "text": "Antes de calcular, escribe qué es cada cifra: base, tipo, cuota o total. La mayoría de los fallos vienen de mezclarlas."
      },
      {
        "kind": "clave",
        "text": "Cuota = base × tipo. Total = base + cuota. Con tipos por tramos, se calcula tramo a tramo."
      }
    ],
    "law": [
      "Ley General Tributaria, arts. 20, 21, 50, 55, 56 y 58"
    ],
    "sources": [
      {
        "title": "Ministerio de Hacienda: texto de la Ley General Tributaria",
        "url": "https://www.hacienda.gob.es/DocLeyes/onlinelt/5456.htm",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Economist & Jurist: índice y articulado de la Ley General Tributaria",
        "url": "https://www.economistjurist.es/?p=154133",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Escuelas Católicas: conceptos tributarios básicos",
        "url": "https://www.escuelascatolicas.es/wp-content/uploads/2017/07/CONCEPTOS-TRIBUTARIOS-BASICOS-18-07-2017.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c0.5-1",
        "lessonId": "x0-5",
        "kind": "number",
        "prompt": "¿Cuánto es el 15 % de 2.000 €?",
        "answer": 300,
        "explain": "2.000 × 15 ÷ 100 = 300.",
        "unit": "€"
      },
      {
        "id": "c0.5-2",
        "lessonId": "x0-5",
        "kind": "number",
        "prompt": "Una factura tiene un total de 1.100 € con un tipo ilustrativo del 10 %. ¿Cuál es la base?",
        "answer": 1000,
        "explain": "1.100 ÷ 1,10 = 1.000 €.",
        "unit": "€"
      },
      {
        "id": "c0.5-3",
        "lessonId": "x0-5",
        "kind": "number",
        "prompt": "Un importe de 1.800 € corresponde a un mes de 30 días. ¿Cuánto corresponde a 10 días?",
        "answer": 600,
        "explain": "1.800 ÷ 30 = 60 € al día. 10 × 60 = 600 €.",
        "unit": "€"
      },
      {
        "id": "c0.5-4",
        "lessonId": "x0-5",
        "kind": "tf",
        "prompt": "Para obtener la base a partir de un total con un 10 %, basta restar el 10 % al total.",
        "answer": false,
        "explain": "Hay que dividir entre 1,10. Restar el 10 % del total daría una base incorrecta."
      }
    ]
  },
  "x0-6": {
    "intro": "Un cliente de Marta dice: «Este año gané mucho, pero no tengo dinero en el banco». Para entender cómo es posible hay que manejar con precisión cinco palabras: activo, pasivo, patrimonio neto, ingreso y gasto, tal como las definen el Código de Comercio y el Plan General de Contabilidad.",
    "steps": [
      {
        "title": "Cinco elementos básicos",
        "body": [
          "Activos: bienes, derechos y otros recursos controlados económicamente por la empresa, resultantes de sucesos pasados, de los que se espera obtener beneficios o rendimientos económicos en el futuro.",
          "Pasivos: obligaciones actuales surgidas por sucesos pasados, para cuya extinción la empresa espera desprenderse de recursos que puedan producir beneficios o rendimientos.",
          "Patrimonio neto: la parte residual de los activos de la empresa una vez deducidos todos sus pasivos.",
          "Ingresos: incrementos del patrimonio neto durante el ejercicio, ya sea en forma de entradas o de aumentos en el valor de los activos o de disminución de los pasivos, siempre que no provengan de aportaciones de los socios.",
          "Gastos: decrementos del patrimonio neto durante el ejercicio, ya sea en forma de salidas o de disminuciones en el valor de los activos o de reconocimiento o aumento de pasivos, siempre que no provengan de distribuciones a los socios."
        ]
      },
      {
        "title": "La relación entre ellos",
        "body": [
          "Patrimonio neto = activos − pasivos.",
          "Los ingresos y gastos del ejercicio se imputan a la cuenta de pérdidas y ganancias y forman parte del resultado, salvo que proceda su imputación directa al patrimonio neto.",
          "Resultado, en lo esencial: ingresos − gastos."
        ]
      },
      {
        "title": "Beneficio no es caja",
        "body": [
          "Un ingreso puede consistir en un aumento del valor de un activo, como un derecho de cobro, sin que haya entrado dinero.",
          "Cobro y pago son movimientos de dinero. Ingreso y gasto son variaciones del patrimonio neto. Pueden ocurrir en fechas distintas.",
          "Por eso una empresa puede tener beneficio y poca tesorería, o al revés."
        ]
      }
    ],
    "example": {
      "title": "El balance de Marta (cifras ilustrativas)",
      "body": [
        "Marta tiene activos por 50.000 € (equipos, existencias y cuenta bancaria) y pasivos por 30.000 € (un préstamo).",
        "Patrimonio neto: 50.000 − 30.000 = 20.000 €.",
        "Presta un servicio de 2.000 € y lo cobrará dentro de un mes. Aumenta su activo con un derecho de cobro: el patrimonio neto sube a 22.000 €. Hay un ingreso, pero todavía no ha entrado dinero.",
        "Paga 500 € de gastos en efectivo: el activo baja 500 € y el patrimonio neto, también. Hay un gasto y, a la vez, salida de dinero."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Usar «ingreso» como sinónimo de «cobro». El ingreso es un aumento del patrimonio neto; el cobro es una entrada de dinero."
      },
      {
        "kind": "consejo",
        "text": "Ante cualquier operación, pregúntate: ¿qué activo o pasivo cambia, y cambia el patrimonio neto? Esa pregunta sirve en todas las lecciones de contabilidad."
      },
      {
        "kind": "clave",
        "text": "Patrimonio neto = activos − pasivos. Beneficio, caja y base imponible no son sinónimos."
      }
    ],
    "law": [
      "Código de Comercio, art. 36",
      "Plan General de Contabilidad (RD 1514/2007), Marco Conceptual"
    ],
    "sources": [
      {
        "title": "Iberley: texto del art. 36 del Código de Comercio",
        "url": "https://www.iberley.es/legislacion/articulo-36-codigo-comercio",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Supercontable: Marco Conceptual de la Contabilidad",
        "url": "https://www.supercontable.com/informacion/Contabilidad/Marco_Conceptual_de_la_Contabilidad.PGC_Pyme.7696.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Diccionario panhispánico del español jurídico: patrimonio neto",
        "url": "https://dpej.rae.es/lema/patrimonio-neto",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Plan General de Contabilidad, texto consolidado (BOE-A-2007-19884)",
        "url": "https://www.fpct.ulpgc.es/images/transparencia/2025/2.1.6 BOE-A-2007-19884 Plan General de Contabilidad.-consolidado-31.03.2025.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c0.6-1",
        "lessonId": "x0-6",
        "kind": "choice",
        "prompt": "El patrimonio neto es:",
        "answer": 0,
        "explain": "Patrimonio neto = activos − pasivos.",
        "options": [
          "La parte residual de los activos una vez deducidos todos los pasivos",
          "La suma de ingresos y gastos",
          "El dinero que hay en el banco",
          "El total de deudas de la empresa"
        ]
      },
      {
        "id": "c0.6-2",
        "lessonId": "x0-6",
        "kind": "number",
        "prompt": "Una empresa tiene activos por 80.000 € y pasivos por 55.000 €. ¿Cuál es su patrimonio neto?",
        "answer": 25000,
        "explain": "80.000 − 55.000 = 25.000 €.",
        "unit": "€"
      },
      {
        "id": "c0.6-3",
        "lessonId": "x0-6",
        "kind": "tf",
        "prompt": "Un ingreso siempre supone que ha entrado dinero en la empresa.",
        "answer": false,
        "explain": "Puede ser un aumento del valor de un activo, como un derecho de cobro, sin entrada de dinero."
      },
      {
        "id": "c0.6-4",
        "lessonId": "x0-6",
        "kind": "choice",
        "prompt": "¿Qué es un gasto según el Código de Comercio?",
        "answer": 0,
        "explain": "No incluye distribuciones a los socios o propietarios.",
        "options": [
          "Un decremento del patrimonio neto durante el ejercicio",
          "Cualquier pago en efectivo",
          "Una deuda a largo plazo",
          "Un aumento del activo"
        ]
      }
    ]
  },
  "x0-7": {
    "intro": "Una notificación dice: «tiene diez días para presentar la documentación». ¿Diez días desde cuándo? ¿Cuentan los sábados? ¿Y si el último día es festivo? Un error de un día puede hacer perder un derecho. En esta lección ves las reglas generales de cómputo de plazos administrativos y dos excepciones que conviene conocer.",
    "steps": [
      {
        "title": "Dónde están las reglas",
        "body": [
          "La norma de referencia sobre el cómputo de plazos en el procedimiento administrativo es la Ley 39/2015, de 1 de octubre. Sus arts. 30 y 31 regulan el cómputo y los registros.",
          "En materia tributaria, además, la Ley General Tributaria tiene reglas propias en puntos concretos. Comprueba siempre la norma específica del procedimiento."
        ]
      },
      {
        "title": "Plazos señalados por días",
        "body": [
          "Salvo que una ley o el Derecho de la Unión Europea indique otro cómputo, se entiende que son días hábiles. Se excluyen los sábados, los domingos y los festivos.",
          "El plazo se cuenta a partir del día siguiente a aquel en que tiene lugar la notificación o publicación del acto.",
          "Si el plazo es en días naturales, debe constar expresamente en la notificación."
        ]
      },
      {
        "title": "Plazos señalados por meses o años",
        "body": [
          "Se cuentan de fecha a fecha, a partir del día siguiente a la notificación o publicación.",
          "Si en el mes de vencimiento no hay un día equivalente al inicial del cómputo, el plazo expira el último día del mes."
        ]
      },
      {
        "title": "Cuando el último día es inhábil",
        "body": [
          "Si el último día del plazo es inhábil, se entiende prorrogado al primer día hábil siguiente.",
          "Si un día es hábil en el municipio o comunidad autónoma del interesado e inhábil en la sede del órgano administrativo, o al revés, se considera inhábil."
        ]
      },
      {
        "title": "Presentación en registros electrónicos",
        "body": [
          "La presentación en un día inhábil se entiende realizada en la primera hora del primer día hábil siguiente, salvo que una norma permita expresamente la recepción en día inhábil."
        ]
      },
      {
        "title": "Dos excepciones que conviene conocer",
        "body": [
          "El cómputo civil de los plazos no excluye los días inhábiles.",
          "El Tribunal Supremo ha dictaminado que el plazo de prescripción de cuatro años del derecho de la Administración a liquidar (art. 66 LGT) se computa de fecha a fecha, sin que se prorrogue por ser inhábil el último día.",
          "Otras lecciones tratan plazos con reglas propias: el alta censal ([[1.2]]), las bajas de trabajadores ([[2.9]]) o la impugnación del despido ([[2.14]])."
        ]
      }
    ],
    "example": {
      "title": "Dos cómputos (calendario de 2027)",
      "body": [
        "Una notificación llega el lunes 11 de enero de 2027 con un plazo de diez días hábiles y sin festivos intermedios. El cómputo empieza el martes 12. Los días hábiles son 12, 13, 14 y 15; luego 18, 19, 20, 21 y 22; y por último el lunes 25. El plazo vence el 25 de enero.",
        "Otra notificación llega el 30 de enero de 2027 con un plazo de un mes. En febrero no hay día 31, que sería el equivalente al inicio del cómputo, así que el plazo expira el último día del mes: el 28 de febrero, que es domingo.",
        "Como el último día es inhábil, el plazo se prorroga al primer día hábil siguiente: el lunes 1 de marzo."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Contar el día de la notificación o incluir sábados en un plazo de días hábiles. El plazo empieza el día siguiente y los sábados no cuentan."
      },
      {
        "kind": "consejo",
        "text": "Apunta siempre tres datos: fecha de notificación, tipo de plazo (hábil, natural, meses) y fecha de vencimiento calculada. Revisa los festivos del lugar."
      },
      {
        "kind": "clave",
        "text": "Días: hábiles, sin sábados, domingos ni festivos. Meses: de fecha a fecha. Último día inhábil: se prorroga, salvo la prescripción."
      }
    ],
    "law": [
      "Ley 39/2015, arts. 30 y 31",
      "Ley General Tributaria, art. 66"
    ],
    "sources": [
      {
        "title": "Sede de la DGT: calendario de días inhábiles y sistema de cómputo",
        "url": "https://sede.dgt.gob.es/eu/contenido/calendario-de-dias-inhabiles/",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Sede del Ministerio de Defensa: cómputo de plazos (arts. 30 y 31 de la Ley 39/2015)",
        "url": "https://sede.defensa.gob.es/acceda/tablon/descargarfichero?id=555",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Universidad de Málaga: cómo se computan los plazos",
        "url": "https://riuma.uma.es/bitstreams/b0e9b300-f824-4e7e-b198-90c853c04785/download",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "DPEJ: cómputo de plazos",
        "url": "https://dpej.rae.es/lema/c%C3%B3mputo-de-plazos",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economist & Jurist: el TS y el cómputo de la prescripción de fecha a fecha",
        "url": "https://www.economistjurist.es/articulos-juridicos-destacados/el-ts-dictamina-que-el-plazo-de-prescripcion-de-la-liquidacion-tributaria-debe-computarse-de-fecha-a-fecha-sin-importar-si-el-ultimo-dia-es-habil-o-inhabil",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c0.7-1",
        "lessonId": "x0-7",
        "kind": "tf",
        "prompt": "En un plazo de diez días señalado en un procedimiento administrativo, salvo indicación contraria, los sábados cuentan como hábiles.",
        "answer": false,
        "explain": "Los días son hábiles, y se excluyen sábados, domingos y festivos."
      },
      {
        "id": "c0.7-2",
        "lessonId": "x0-7",
        "kind": "choice",
        "prompt": "¿Desde cuándo se cuenta un plazo señalado por días?",
        "answer": 0,
        "explain": "El día de la notificación no cuenta.",
        "options": [
          "Desde el día siguiente a la notificación o publicación",
          "Desde el mismo día de la notificación",
          "Desde el primer día del mes",
          "Desde que lo decide el interesado"
        ]
      },
      {
        "id": "c0.7-3",
        "lessonId": "x0-7",
        "kind": "choice",
        "prompt": "Un plazo de un mes empieza a contarse y en el mes de vencimiento no hay día equivalente. ¿Cuándo expira?",
        "answer": 0,
        "explain": "Es la regla de los plazos por meses.",
        "options": [
          "El último día del mes",
          "El primer día del mes siguiente",
          "El día 15",
          "Nunca expira"
        ]
      },
      {
        "id": "c0.7-4",
        "lessonId": "x0-7",
        "kind": "tf",
        "prompt": "El plazo de prescripción de cuatro años del art. 66 LGT se prorroga si su último día es inhábil.",
        "answer": false,
        "explain": "El Tribunal Supremo lo computa de fecha a fecha sin prórroga por día inhábil."
      }
    ]
  },
  "x0-8": {
    "intro": "Con los conceptos de las lecciones anteriores ya puedes trabajar con orden. Esta lección reúne un método para resolver una consulta de principio a fin, sin saltarte pasos. Es una guía didáctica del curso, no una norma, y se apoya en las fuentes oficiales que ya conoces.",
    "steps": [
      {
        "title": "Los nueve pasos",
        "body": [
          "1. Fijar la fecha y el territorio.",
          "2. Identificar al contribuyente, su residencia, su actividad y los hechos.",
          "3. Enumerar los impuestos y obligaciones que podrían afectarle.",
          "4. Localizar la norma y la versión aplicable en esa fecha.",
          "5. Comprobar requisitos, excepciones, límites y disposiciones transitorias.",
          "6. Calcular con hipótesis explícitas.",
          "7. Contrastar con la doctrina administrativa y la jurisprudencia.",
          "8. Explicar el resultado, las alternativas, los riesgos y la documentación.",
          "9. Registrar las fuentes y la fecha de revisión."
        ]
      },
      {
        "title": "Cómo se apoya cada paso",
        "body": [
          "Pasos 1 y 4: la fecha de los hechos decide qué versión de la norma se aplica (lección [[x0-2]]).",
          "Paso 2: hechos, opiniones y datos que faltan (lección [[x0-4]]).",
          "Paso 6: porcentajes, bases y cuotas (lección [[x0-5]]).",
          "Pasos 1 y 8: los plazos y su cómputo (lección [[x0-7]]).",
          "Paso 7: las contestaciones de la DGT vinculan a la Administración si los hechos son idénticos, mientras no cambie la legislación o la jurisprudencia."
        ]
      },
      {
        "title": "Qué hacer cuando faltan datos",
        "body": [
          "Una respuesta inicial puede ser: «con estos datos, la hipótesis más probable es X; antes de confirmarla necesito A, B y C».",
          "Distingue siempre entre orientación preliminar y conclusión revisada con hechos y fuentes completos."
        ]
      }
    ],
    "example": {
      "title": "Un caso de principio a fin (hipotético)",
      "body": [
        "Un cliente, persona física residente en Madrid, ha emitido una factura de 1.200 € a una empresa por un trabajo puntual realizado en marzo de 2027.",
        "Paso 1: fecha, marzo de 2027; territorio, Madrid. Paso 2: persona física; faltan datos sobre la habitualidad y sobre si está dado de alta en el censo.",
        "Paso 3: se enumeran los impuestos y obligaciones posibles y se marcan como pendientes de verificar. Pasos 4 y 5: se localiza la norma vigente en esa fecha y sus requisitos.",
        "Paso 6: se calcula solo cuando los hechos estén completos. Paso 9: se guarda el enlace, la versión y la fecha de consulta."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Llegar a una conclusión sin haber fijado fecha y territorio. Una regla correcta en otro año o en otra comunidad puede ser la equivocada."
      },
      {
        "kind": "consejo",
        "text": "Cuando no puedas cerrar el caso, entrega una conclusión provisional con la lista de datos que faltan."
      },
      {
        "kind": "clave",
        "text": "Hechos, norma, cálculo, riesgo y fuentes: ese es el orden. Guarda siempre la fecha de revisión."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "BOE: preguntas frecuentes sobre legislación consolidada",
        "url": "https://www.boe.es/datosabiertos/faq/consolidada.php?lang=es",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Sede de la DGT: calendario de días inhábiles y cómputo de plazos",
        "url": "https://sede.dgt.gob.es/eu/contenido/calendario-de-dias-inhabiles/",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Iberley: texto del art. 88 de la Ley General Tributaria",
        "url": "https://iberley.es/legislacion/articulo-88-ley-general-tributaria",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c0.8-1",
        "lessonId": "x0-8",
        "kind": "choice",
        "prompt": "¿Cuál es el primer paso del método de resolución de consultas?",
        "answer": 0,
        "explain": "Sin fecha y territorio no se sabe qué normas aplican.",
        "options": [
          "Fijar la fecha y el territorio",
          "Calcular el impuesto",
          "Redactar la conclusión",
          "Consultar la jurisprudencia"
        ]
      },
      {
        "id": "c0.8-2",
        "lessonId": "x0-8",
        "kind": "tf",
        "prompt": "El método de nueve pasos es una norma legal de obligado cumplimiento.",
        "answer": false,
        "explain": "Es una guía didáctica del curso."
      },
      {
        "id": "c0.8-3",
        "lessonId": "x0-8",
        "kind": "choice",
        "prompt": "¿Qué debe registrarse al final del método?",
        "answer": 0,
        "explain": "Permite repetir y comprobar el razonamiento.",
        "options": [
          "Las fuentes y la fecha de revisión",
          "Solo el importe calculado",
          "El nombre del asesor",
          "Nada, si el cliente lo acepta"
        ]
      },
      {
        "id": "c0.8-4",
        "lessonId": "x0-8",
        "kind": "tf",
        "prompt": "Se puede calcular con seguridad antes de conocer los hechos del cliente.",
        "answer": false,
        "explain": "Primero se identifican y completan los hechos; el cálculo va con hipótesis explícitas."
      }
    ]
  },
};

export const m0Bank: Question[] = [
  {
    "id": "e0-01",
    "lessonId": "x0-1",
    "kind": "choice",
    "prompt": "¿Qué norma se sitúa en la cúspide del ordenamiento jurídico español?",
    "answer": 0,
    "explain": "Toda disposición o acto contrario a la Constitución carece de validez.",
    "options": [
      "La Constitución",
      "El Código Civil",
      "Un real decreto",
      "Una orden ministerial"
    ]
  },
  {
    "id": "e0-02",
    "lessonId": "x0-1",
    "kind": "tf",
    "prompt": "Los principios generales del derecho se aplican en defecto de ley o costumbre.",
    "answer": true,
    "explain": "Además informan el conjunto del ordenamiento.",
    "law": "Código Civil, art. 1"
  },
  {
    "id": "e0-03",
    "lessonId": "x0-1",
    "kind": "choice",
    "prompt": "¿Qué principio garantiza el art. 9.3 de la Constitución?",
    "answer": 0,
    "explain": "Garantiza también la legalidad, la publicidad de las normas y la seguridad jurídica.",
    "options": [
      "La jerarquía normativa, entre otros",
      "La libertad de comercio exclusivamente",
      "El derecho de huelga",
      "La gratuidad de los trámites"
    ],
    "law": "Constitución, art. 9.3"
  },
  {
    "id": "e0-04",
    "lessonId": "x0-1",
    "kind": "tf",
    "prompt": "Un real decreto-ley tiene rango de ley.",
    "answer": true,
    "explain": "Junto al real decreto legislativo, es una norma con rango de ley."
  },
  {
    "id": "e0-05",
    "lessonId": "x0-1",
    "kind": "choice",
    "prompt": "Un reglamento contradice una ley. ¿Qué deben hacer los jueces?",
    "answer": 0,
    "explain": "No aplican los reglamentos contrarios a la ley o al principio de jerarquía normativa.",
    "options": [
      "No aplicar el reglamento en ese punto",
      "Aplicar el reglamento porque es más reciente",
      "Aplicar ambos a partes iguales",
      "Suspender el proceso siempre"
    ]
  },
  {
    "id": "e0-06",
    "lessonId": "x0-1",
    "kind": "choice",
    "prompt": "Actos que se amparan en el texto de una norma para lograr un resultado que el ordenamiento prohíbe se consideran:",
    "answer": 0,
    "explain": "No impiden la aplicación de la norma que se trató de eludir.",
    "options": [
      "Ejecutados en fraude de ley",
      "Válidos si cumplen el texto",
      "Una costumbre",
      "Una derogación"
    ],
    "law": "Código Civil, art. 6"
  },
  {
    "id": "e0-07",
    "lessonId": "x0-1",
    "kind": "tf",
    "prompt": "Por la simple derogación de una ley recobran vigencia las leyes que esa ley había derogado.",
    "answer": false,
    "explain": "No recobran vigencia por la simple derogación.",
    "law": "Código Civil, art. 2"
  },
  {
    "id": "e0-08",
    "lessonId": "x0-2",
    "kind": "choice",
    "prompt": "¿Qué integra la consolidación en un solo texto?",
    "answer": 0,
    "explain": "Sin valor oficial, con el objetivo de facilitar el acceso al Derecho vigente.",
    "options": [
      "Las modificaciones y correcciones expresas de una norma",
      "Todas las sentencias que la aplican",
      "Solo las derogaciones",
      "Los comentarios de la doctrina"
    ]
  },
  {
    "id": "e0-09",
    "lessonId": "x0-2",
    "kind": "tf",
    "prompt": "El BOE ofrece también las versiones intermedias que corresponden a cada modificación de una norma.",
    "answer": true,
    "explain": "Permite ver qué texto estaba vigente en una fecha concreta."
  },
  {
    "id": "e0-10",
    "lessonId": "x0-2",
    "kind": "choice",
    "prompt": "¿Qué significa ELI?",
    "answer": 0,
    "explain": "Identifica de forma estable las normas.",
    "options": [
      "Identificador Europeo de Legislación",
      "Ejemplar de Legislación Interna",
      "Edición Legal Internacional",
      "Enlace de Legislación Indexada"
    ]
  },
  {
    "id": "e0-11",
    "lessonId": "x0-2",
    "kind": "choice",
    "prompt": "Ejemplo de número oficial de una disposición:",
    "answer": 0,
    "explain": "El número oficial suele tener la estructura número/año.",
    "options": [
      "169/2008",
      "BOE-A-2007-19884",
      "ELI-1",
      "2008-169-A"
    ]
  },
  {
    "id": "e0-12",
    "lessonId": "x0-2",
    "kind": "tf",
    "prompt": "El asterisco al final de una palabra funciona como comodín en la búsqueda.",
    "answer": true,
    "explain": "Permite buscar variantes de una palabra."
  },
  {
    "id": "e0-13",
    "lessonId": "x0-2",
    "kind": "choice",
    "prompt": "Antes de aplicar una norma a unos hechos, hay que comprobar:",
    "answer": 0,
    "explain": "Las versiones intermedias existen precisamente para ese fin.",
    "options": [
      "Qué versión estaba vigente en la fecha de los hechos",
      "Solo cuál es la última versión",
      "Solo el título",
      "Solo la fecha de publicación"
    ]
  },
  {
    "id": "e0-14",
    "lessonId": "x0-2",
    "kind": "tf",
    "prompt": "Un resumen en una página web es suficiente para dar una respuesta fiscal sin abrir la norma.",
    "answer": false,
    "explain": "Hay que apoyarse en la fuente oficial y anotar fecha de consulta."
  },
  {
    "id": "e0-15",
    "lessonId": "x0-4",
    "kind": "choice",
    "prompt": "¿Sobre qué pueden formularse consultas tributarias escritas?",
    "answer": 0,
    "explain": "Así lo establece el art. 88 LGT.",
    "options": [
      "Sobre el régimen, la clasificación o la calificación tributaria que corresponda",
      "Sobre cualquier asunto jurídico",
      "Solo sobre sanciones",
      "Solo sobre deudas ya pagadas"
    ],
    "law": "LGT, art. 88"
  },
  {
    "id": "e0-16",
    "lessonId": "x0-4",
    "kind": "tf",
    "prompt": "Una consulta tributaria debe formularse antes de que termine el plazo para cumplir la obligación a la que se refiere.",
    "answer": true,
    "explain": "Se formulan antes de la finalización del plazo establecido.",
    "law": "LGT, art. 88"
  },
  {
    "id": "e0-17",
    "lessonId": "x0-4",
    "kind": "choice",
    "prompt": "En el ámbito estatal, ¿qué órgano contesta las consultas tributarias escritas?",
    "answer": 0,
    "explain": "Lo especifica el reglamento de desarrollo.",
    "options": [
      "La Dirección General de Tributos",
      "Los juzgados de lo contencioso",
      "El Registro Mercantil",
      "El SEPE"
    ]
  },
  {
    "id": "e0-18",
    "lessonId": "x0-4",
    "kind": "tf",
    "prompt": "Presentar una consulta interrumpe el plazo para cumplir la obligación tributaria.",
    "answer": false,
    "explain": "No interrumpe plazo alguno."
  },
  {
    "id": "e0-19",
    "lessonId": "x0-4",
    "kind": "tf",
    "prompt": "La contestación de la DGT vincula a la Administración si los hechos son idénticos a los de la consulta.",
    "answer": true,
    "explain": "Es el efecto del art. 89 LGT.",
    "law": "LGT, art. 89"
  },
  {
    "id": "e0-20",
    "lessonId": "x0-4",
    "kind": "tf",
    "prompt": "En una consulta hay que declarar si se está tramitando un procedimiento o recurso sobre la misma cuestión.",
    "answer": true,
    "explain": "Es una manifestación expresa que exige el reglamento."
  },
  {
    "id": "e0-21",
    "lessonId": "x0-4",
    "kind": "choice",
    "prompt": "«Creo que le pagan por cuenta ajena» es:",
    "answer": 0,
    "explain": "Hay que contrastarla con documentos.",
    "options": [
      "Una opinión",
      "Un hecho comprobable",
      "Un dato documentado",
      "Una norma"
    ]
  },
  {
    "id": "e0-22",
    "lessonId": "x0-5",
    "kind": "number",
    "prompt": "Base de 800 € y tipo ilustrativo del 10 %. ¿Cuál es la cuota?",
    "answer": 80,
    "explain": "800 × 10 % = 80 €.",
    "unit": "€"
  },
  {
    "id": "e0-23",
    "lessonId": "x0-5",
    "kind": "number",
    "prompt": "Base de 800 € y tipo ilustrativo del 10 %. ¿Cuál es el total?",
    "answer": 880,
    "explain": "Base más cuota: 800 + 80.",
    "unit": "€"
  },
  {
    "id": "e0-24",
    "lessonId": "x0-5",
    "kind": "choice",
    "prompt": "¿Qué define la Ley General Tributaria como la medición o valoración del hecho imponible?",
    "answer": 0,
    "explain": "Se regula en el art. 50 LGT.",
    "options": [
      "La base imponible",
      "El devengo",
      "El tipo de gravamen",
      "La deuda tributaria"
    ],
    "law": "LGT, art. 50"
  },
  {
    "id": "e0-25",
    "lessonId": "x0-5",
    "kind": "choice",
    "prompt": "El momento en que se entiende realizado el hecho imponible se llama:",
    "answer": 0,
    "explain": "Se regula en el art. 21 LGT.",
    "options": [
      "Devengo",
      "Cuota",
      "Base liquidable",
      "Tipo de gravamen"
    ],
    "law": "LGT, art. 21"
  },
  {
    "id": "e0-26",
    "lessonId": "x0-5",
    "kind": "number",
    "prompt": "Escala ilustrativa: 10 % hasta 4.000 € y 20 % el resto. Con una base de 10.000 €, ¿cuál es la cuota?",
    "answer": 1600,
    "explain": "400 + 1.200 = 1.600 €.",
    "unit": "€"
  },
  {
    "id": "e0-27",
    "lessonId": "x0-5",
    "kind": "number",
    "prompt": "Con la misma escala y la misma base de 10.000 €, ¿cuál es el tipo medio?",
    "answer": 16,
    "explain": "1.600 ÷ 10.000 = 16 %.",
    "unit": "%"
  },
  {
    "id": "e0-28",
    "lessonId": "x0-5",
    "kind": "tf",
    "prompt": "El tipo marginal de una escala por tramos es el del último tramo que se alcanza.",
    "answer": true,
    "explain": "En el ejemplo, el 20 %."
  },
  {
    "id": "e0-29",
    "lessonId": "x0-6",
    "kind": "choice",
    "prompt": "Un activo es:",
    "answer": 0,
    "explain": "Resulta de sucesos pasados.",
    "options": [
      "Un bien, derecho u otro recurso controlado económicamente por la empresa de los que se espera obtener beneficios futuros",
      "Una obligación de pago",
      "Una aportación de socios",
      "Un gasto del ejercicio"
    ],
    "law": "Código de Comercio, art. 36"
  },
  {
    "id": "e0-30",
    "lessonId": "x0-6",
    "kind": "choice",
    "prompt": "Un pasivo es:",
    "answer": 0,
    "explain": "Su extinción supone desprenderse de recursos.",
    "options": [
      "Una obligación actual surgida por sucesos pasados",
      "Un derecho de cobro",
      "Un ingreso pendiente",
      "Un bien de la empresa"
    ],
    "law": "Código de Comercio, art. 36"
  },
  {
    "id": "e0-31",
    "lessonId": "x0-6",
    "kind": "choice",
    "prompt": "Los ingresos y gastos del ejercicio se imputan, en general, a:",
    "answer": 0,
    "explain": "Forman parte del resultado, salvo imputación directa al patrimonio neto.",
    "options": [
      "La cuenta de pérdidas y ganancias",
      "Solo al balance",
      "Exclusivamente a la memoria",
      "Al libro de actas"
    ]
  },
  {
    "id": "e0-32",
    "lessonId": "x0-6",
    "kind": "tf",
    "prompt": "Una aportación de los socios constituye un ingreso.",
    "answer": false,
    "explain": "Los ingresos excluyen las aportaciones de socios o propietarios."
  },
  {
    "id": "e0-33",
    "lessonId": "x0-6",
    "kind": "tf",
    "prompt": "Un reparto a los socios en su condición de tales constituye un gasto.",
    "answer": false,
    "explain": "Los gastos excluyen las distribuciones a los socios o propietarios."
  },
  {
    "id": "e0-34",
    "lessonId": "x0-6",
    "kind": "number",
    "prompt": "Activos 120.000 €, pasivos 70.000 €. ¿Cuál es el patrimonio neto?",
    "answer": 50000,
    "explain": "120.000 − 70.000 = 50.000 €.",
    "unit": "€"
  },
  {
    "id": "e0-35",
    "lessonId": "x0-6",
    "kind": "tf",
    "prompt": "Una empresa puede tener beneficio y poca tesorería al mismo tiempo.",
    "answer": true,
    "explain": "Ingreso y cobro no tienen por qué coincidir en el tiempo."
  },
  {
    "id": "e0-36",
    "lessonId": "x0-7",
    "kind": "choice",
    "prompt": "¿Qué ley regula con carácter general el cómputo de plazos del procedimiento administrativo?",
    "answer": 0,
    "explain": "Sus arts. 30 y 31 regulan el cómputo.",
    "options": [
      "Ley 39/2015",
      "Ley 37/1992",
      "Real Decreto 1514/2007",
      "Ley 10/2010"
    ]
  },
  {
    "id": "e0-37",
    "lessonId": "x0-7",
    "kind": "tf",
    "prompt": "Si el plazo es en días naturales, debe constar expresamente en la notificación.",
    "answer": true,
    "explain": "Por defecto los plazos en días son hábiles."
  },
  {
    "id": "e0-38",
    "lessonId": "x0-7",
    "kind": "tf",
    "prompt": "Si el último día de un plazo administrativo es inhábil, se prorroga al primer día hábil siguiente.",
    "answer": true,
    "explain": "Salvo excepciones como la prescripción."
  },
  {
    "id": "e0-39",
    "lessonId": "x0-7",
    "kind": "tf",
    "prompt": "En el cómputo civil de los plazos se excluyen los días inhábiles.",
    "answer": false,
    "explain": "El cómputo civil no excluye los inhábiles."
  },
  {
    "id": "e0-40",
    "lessonId": "x0-7",
    "kind": "number",
    "prompt": "Una notificación llega el lunes 11 de enero de 2027 con 10 días hábiles y sin festivos. ¿Qué día de enero vence el plazo?",
    "answer": 25,
    "explain": "El cómputo empieza el martes 12; el décimo día hábil es el lunes 25.",
    "unit": "de enero"
  },
  {
    "id": "e0-41",
    "lessonId": "x0-7",
    "kind": "choice",
    "prompt": "Una presentación electrónica se hace en un día inhábil. Se entiende realizada:",
    "answer": 0,
    "explain": "Salvo que una norma permita la recepción en día inhábil.",
    "options": [
      "En la primera hora del primer día hábil siguiente",
      "En ese mismo día a las 24:00",
      "Fuera de plazo siempre",
      "Dos días hábiles después"
    ]
  },
  {
    "id": "e0-42",
    "lessonId": "x0-7",
    "kind": "choice",
    "prompt": "Notificación el 30 de enero de 2027 con plazo de un mes. El 28 de febrero de 2027 es domingo. ¿Cuándo vence?",
    "answer": 0,
    "explain": "El último día es inhábil y se prorroga al primer día hábil siguiente.",
    "options": [
      "El lunes 1 de marzo",
      "El sábado 27 de febrero",
      "El 28 de febrero",
      "El 31 de marzo"
    ]
  },
  {
    "id": "e0-43",
    "lessonId": "x0-8",
    "kind": "number",
    "prompt": "¿Cuántos pasos tiene el método de resolución de consultas del curso?",
    "answer": 9,
    "explain": "Desde fijar fecha y territorio hasta registrar fuentes.",
    "unit": "pasos"
  },
  {
    "id": "e0-44",
    "lessonId": "x0-8",
    "kind": "choice",
    "prompt": "El paso 4 consiste en:",
    "answer": 0,
    "explain": "La versión depende de la fecha de los hechos.",
    "options": [
      "Localizar la norma y la versión aplicable",
      "Calcular el importe",
      "Enumerar impuestos",
      "Explicar los riesgos"
    ]
  },
  {
    "id": "e0-45",
    "lessonId": "x0-8",
    "kind": "tf",
    "prompt": "Si faltan datos, una respuesta provisional puede nombrar la hipótesis más probable y los datos que se necesitan para confirmarla.",
    "answer": true,
    "explain": "Es preferible a fingir certeza."
  },
  {
    "id": "e0-46",
    "lessonId": "x0-8",
    "kind": "tf",
    "prompt": "Contrastar con doctrina administrativa y jurisprudencia forma parte del método.",
    "answer": true,
    "explain": "Es el paso 7."
  },
  {
    "id": "e0-47",
    "lessonId": "x0-8",
    "kind": "choice",
    "prompt": "En el paso 5 se comprueban:",
    "answer": 0,
    "explain": "Es la fase de contraste de la norma con los hechos.",
    "options": [
      "Requisitos, excepciones, límites y disposiciones transitorias",
      "Solo los plazos de pago",
      "Solo los tipos impositivos",
      "El nombre del cliente"
    ]
  },
  {
    "id": "e0-48",
    "lessonId": "x0-8",
    "kind": "choice",
    "prompt": "El paso 8 pide:",
    "answer": 0,
    "explain": "Comunicar con claridad y límites es parte del trabajo.",
    "options": [
      "Explicar el resultado, las alternativas, los riesgos y la documentación",
      "Cobrar la minuta",
      "Presentar el modelo",
      "Archivar sin comentar"
    ]
  },
  {
    "id": "e0-49",
    "lessonId": "x0-8",
    "kind": "tf",
    "prompt": "La fecha de los hechos determina qué versión de una norma consolidada debe aplicarse.",
    "answer": true,
    "explain": "Por eso el BOE conserva las versiones intermedias."
  },
];
