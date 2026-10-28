import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const m3Lessons: Record<string, LessonContent> = {
  "x3-1": {
    "intro": "Marta ha empezado a facturar y su cliente le pregunta: «¿llevas contabilidad?». La respuesta no es opcional. En esta lección ves por qué existe la contabilidad, qué debe reflejar y cómo se ve una empresa en un balance. Todo lo demás del módulo se apoya en esta idea: el balance siempre cuadra.",
    "steps": [
      {
        "title": "Para qué sirve y quién la lleva",
        "body": [
          "El Código de Comercio (art. 25) obliga a todo empresario a llevar una contabilidad ordenada, adecuada a la actividad de su empresa, que permita un seguimiento cronológico de todas sus operaciones y la elaboración periódica de balances e inventarios.",
          "Las cuentas anuales deben mostrar la imagen fiel del patrimonio, de la situación financiera y de los resultados de la empresa."
        ]
      },
      {
        "title": "La ecuación fundamental",
        "body": [
          "Activo = Pasivo + Patrimonio neto. También se escribe Patrimonio neto = Activo − Pasivo.",
          "El activo muestra en qué se ha invertido; el pasivo y el patrimonio neto muestran de dónde ha salido el dinero: deudas y aportaciones o resultados de los propietarios."
        ]
      },
      {
        "title": "El balance y sus masas",
        "body": [
          "El modelo de balance del Plan General de Contabilidad distingue activo no corriente y activo corriente, de un lado, y patrimonio neto, pasivo no corriente y pasivo corriente, de otro.",
          "La suma del activo debe coincidir siempre con la suma del patrimonio neto y el pasivo."
        ]
      },
      {
        "title": "Cada operación mueve al menos dos partidas",
        "body": [
          "Cuando algo cambia en la empresa, siempre cambian al menos dos elementos del balance, de modo que la ecuación sigue cumpliéndose.",
          "Esta es la base de la partida doble, que verás en la lección [[x3-3]]."
        ]
      }
    ],
    "example": {
      "title": "Cuatro operaciones y un balance que no deja de cuadrar",
      "body": [
        "Marta aporta 10.000 € al banco de su empresa. Activo 10.000 € = patrimonio neto 10.000 €.",
        "Pide un préstamo de 5.000 €. Activo 15.000 € = pasivo 5.000 € + patrimonio neto 10.000 €.",
        "Compra un equipo por 3.000 € al contado. El activo sigue en 15.000 €: 12.000 € en el banco y 3.000 € en equipo.",
        "Compra mercaderías por 2.000 € a pagar dentro de un mes. El activo sube a 17.000 € y el pasivo a 7.000 €. La ecuación sigue cumpliéndose: 17.000 = 7.000 + 10.000."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Pensar que el patrimonio neto es lo que hay en el banco. Es la diferencia entre todo lo que se tiene y todo lo que se debe."
      },
      {
        "kind": "consejo",
        "text": "Cuando pruebes una operación, comprueba la ecuación antes y después. Si no cuadra, falta una partida."
      },
      {
        "kind": "clave",
        "text": "Activo = Pasivo + Patrimonio neto. Toda operación afecta al menos a dos partidas."
      }
    ],
    "law": [
      "Código de Comercio, arts. 25 y 34",
      "Plan General de Contabilidad (RD 1514/2007)"
    ],
    "sources": [
      {
        "title": "AEAT: obligaciones contables y registrales, libros obligatorios",
        "url": "https://sede.agenciatributaria.gob.es/Sede/impuesto-sobre-sociedades/gestion-impuesto-sobre-sociedades/obligaciones-contables-registrales/libros-obligatorios.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Civil-Mercantil: título III del Código de Comercio, arts. 25 a 49",
        "url": "https://www.civil-mercantil.com/libro-primero-titulo-iii-codigo-comercio-contabilidad-empresarios.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Iberley: texto del art. 36 del Código de Comercio",
        "url": "https://www.iberley.es/legislacion/articulo-36-codigo-comercio",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Contabilidad TK: modelo de balance del PGC",
        "url": "https://www.contabilidadtk.es/sites/contabilidadtk.es/files/cuadro1.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Ayuda T Pymes: partida doble y ecuación contable",
        "url": "https://ayudatpymes.com/gestron/partida-doble-contabilidad",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.1-1",
        "lessonId": "x3-1",
        "kind": "choice",
        "prompt": "La ecuación fundamental de la contabilidad es:",
        "answer": 0,
        "explain": "El activo se financia con deudas y con patrimonio neto.",
        "options": [
          "Activo = Pasivo + Patrimonio neto",
          "Activo = Ingresos − Gastos",
          "Pasivo = Activo + Patrimonio neto",
          "Patrimonio neto = Ingresos + Pasivo"
        ]
      },
      {
        "id": "c3.1-2",
        "lessonId": "x3-1",
        "kind": "number",
        "prompt": "Activo de 17.000 € y pasivo de 7.000 €. ¿Cuál es el patrimonio neto?",
        "answer": 10000,
        "explain": "17.000 − 7.000 = 10.000 €.",
        "unit": "€"
      },
      {
        "id": "c3.1-3",
        "lessonId": "x3-1",
        "kind": "tf",
        "prompt": "Según el Código de Comercio, solo las sociedades están obligadas a llevar contabilidad ordenada.",
        "answer": false,
        "explain": "El art. 25 se refiere a todo empresario."
      },
      {
        "id": "c3.1-4",
        "lessonId": "x3-1",
        "kind": "tf",
        "prompt": "Comprar un equipo al contado cambia la suma total del activo.",
        "answer": false,
        "explain": "Aumenta el equipo y disminuye el banco: el total no cambia."
      }
    ]
  },
  "x3-2": {
    "intro": "Para que la contabilidad de todas las empresas hable el mismo idioma, existe el Plan General de Contabilidad (PGC). Su cuadro de cuentas permite colocar cada operación en la cuenta adecuada con un código numérico. En esta lección aprendes a leerlo.",
    "steps": [
      {
        "title": "Las cinco partes del PGC",
        "body": [
          "El Plan General de Contabilidad se aprobó por el Real Decreto 1514/2007, de 16 de noviembre (BOE núm. 278, de 20 de noviembre de 2007), y se modificó, entre otras, por el Real Decreto 1/2021.",
          "Se estructura en cinco partes: marco conceptual, normas de registro y valoración, cuentas anuales, cuadro de cuentas, y definiciones y relaciones contables.",
          "Existe también el Plan General de Contabilidad de Pequeñas y Medianas Empresas, aprobado por el Real Decreto 1515/2007.",
          "El cuadro de cuentas y la parte de definiciones y relaciones contables no son de aplicación obligatoria."
        ]
      },
      {
        "title": "Los nueve grupos",
        "body": [
          "Grupo 1: financiación básica. Grupo 2: activo no corriente. Grupo 3: existencias.",
          "Grupo 4: acreedores y deudores por operaciones comerciales. Grupo 5: cuentas financieras.",
          "Grupo 6: compras y gastos. Grupo 7: ventas e ingresos.",
          "Grupos 8 y 9: gastos imputados al patrimonio neto e ingresos imputados al patrimonio neto."
        ]
      },
      {
        "title": "Cómo se lee un código",
        "body": [
          "La clasificación es decimal: un dígito identifica el grupo, dos el subgrupo y tres la cuenta. Por ejemplo, 430 identifica la cuenta de clientes.",
          "Las subcuentas añaden más dígitos: 4700 es Hacienda Pública, deudora por IVA."
        ]
      },
      {
        "title": "Cuentas que usarás constantemente",
        "body": [
          "300 Mercaderías. 400 Proveedores. 430 Clientes. 472 Hacienda Pública, IVA soportado. 477 Hacienda Pública, IVA repercutido.",
          "570 Caja, euros. 572 Bancos e instituciones de crédito c/c vista, euros.",
          "600 Compras de mercaderías. 640 Sueldos y salarios. 700 Ventas de mercaderías. 705 Prestaciones de servicios."
        ]
      }
    ],
    "example": {
      "title": "Clasificar cuentas por grupo",
      "body": [
        "300 Mercaderías: grupo 3, existencias.",
        "400 Proveedores y 430 Clientes: grupo 4, acreedores y deudores por operaciones comerciales.",
        "570 Caja y 572 Bancos: grupo 5, cuentas financieras.",
        "600 Compras y 640 Sueldos y salarios: grupo 6, compras y gastos.",
        "700 Ventas de mercaderías: grupo 7, ventas e ingresos."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Buscar una cuenta por su nombre en memoria. Usa siempre el cuadro de cuentas y comprueba el código."
      },
      {
        "kind": "consejo",
        "text": "Aprende primero los grupos y después las cuentas. El primer dígito te dice dónde mirar."
      },
      {
        "kind": "clave",
        "text": "Nueve grupos. El 6 son los gastos y el 7 los ingresos. El cuadro de cuentas es una guía, no una obligación."
      }
    ],
    "law": [
      "Real Decreto 1514/2007 (Plan General de Contabilidad)",
      "Real Decreto 1515/2007 (PGC de Pymes)"
    ],
    "sources": [
      {
        "title": "Plan General de Contabilidad, texto consolidado (BOE-A-2007-19884)",
        "url": "https://www.fpct.ulpgc.es/images/transparencia/2025/2.1.6 BOE-A-2007-19884 Plan General de Contabilidad.-consolidado-31.03.2025.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Stelorder: cuentas contables del PGC",
        "url": "https://www.stelorder.com/blog/cuentas-contables-del-pgc/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Holded: cuadro de cuentas del PGC para pymes",
        "url": "https://www.holded.com/es/blog/cuadro-de-cuentas-del-plan-general-contable-pymes",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de Cantabria: Real Decreto 1514/2007",
        "url": "https://ocw.unican.es/pluginfile.php/990/course/section/555/Real%20Decreto%201514-2007%20%28Plan%20General%20de%20Contabilidad%29.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cuadro de cuentas del PGC (Papelea)",
        "url": "https://papelea.com/es/leyes/plan-general-de-contabilidad/cuarta-parte_grupo-1",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.2-1",
        "lessonId": "x3-2",
        "kind": "number",
        "prompt": "¿Cuántos grupos tiene el cuadro de cuentas del PGC?",
        "answer": 9,
        "explain": "Del 1 al 9.",
        "unit": "grupos"
      },
      {
        "id": "c3.2-2",
        "lessonId": "x3-2",
        "kind": "choice",
        "prompt": "¿A qué grupo pertenece la cuenta 700 Ventas de mercaderías?",
        "answer": 0,
        "explain": "Los ingresos están en el grupo 7.",
        "options": [
          "Grupo 7, ventas e ingresos",
          "Grupo 6, compras y gastos",
          "Grupo 4, acreedores y deudores",
          "Grupo 3, existencias"
        ]
      },
      {
        "id": "c3.2-3",
        "lessonId": "x3-2",
        "kind": "choice",
        "prompt": "¿A qué grupo pertenece la cuenta 572 Bancos?",
        "answer": 0,
        "explain": "Caja y bancos son cuentas financieras.",
        "options": [
          "Grupo 5, cuentas financieras",
          "Grupo 1, financiación básica",
          "Grupo 2, activo no corriente",
          "Grupo 8"
        ]
      },
      {
        "id": "c3.2-4",
        "lessonId": "x3-2",
        "kind": "tf",
        "prompt": "El uso del cuadro de cuentas del PGC es obligatorio.",
        "answer": false,
        "explain": "No son obligatorios ni el cuadro de cuentas ni las definiciones y relaciones contables."
      }
    ]
  },
  "x3-3": {
    "intro": "Marta registra una compra de mercaderías a crédito. ¿En qué cuenta anota el aumento de las existencias y en cuál la deuda? La partida doble responde a eso con una regla sencilla: cada operación se anota dos veces, en el debe de unas cuentas y en el haber de otras, y los totales coinciden.",
    "steps": [
      {
        "title": "La regla",
        "body": [
          "Cada operación afecta al menos a dos cuentas. En cada asiento, la suma del debe coincide con la suma del haber.",
          "Es la forma de mantener la ecuación Activo = Pasivo + Patrimonio neto."
        ]
      },
      {
        "title": "Cómo se anotan los aumentos y las disminuciones",
        "body": [
          "Activo: aumenta por el debe y disminuye por el haber.",
          "Pasivo y patrimonio neto: aumentan por el haber y disminuyen por el debe.",
          "Gastos: aumentan por el debe. Ingresos: aumentan por el haber."
        ]
      },
      {
        "title": "Saldo deudor y saldo acreedor",
        "body": [
          "El saldo de una cuenta es la diferencia entre la suma de su debe y la de su haber.",
          "Si el debe es mayor, el saldo es deudor; si el haber es mayor, es acreedor.",
          "Las cuentas de activo y de gasto suelen tener saldo deudor; las de pasivo, patrimonio neto e ingresos, acreedor."
        ]
      },
      {
        "title": "Los elementos de un asiento",
        "body": [
          "Un asiento tiene un número correlativo, la fecha, las cuentas con su código y nombre, los importes y un concepto.",
          "Antes de aceptarlo, comprueba que el total del debe es igual al del haber."
        ]
      }
    ],
    "example": {
      "title": "Tres asientos sin IVA (cifras ilustrativas)",
      "body": [
        "1. Compra de mercaderías por 1.000 € a crédito. Debe: 600 Compras de mercaderías, 1.000. Haber: 400 Proveedores, 1.000.",
        "2. Venta de mercaderías por 2.000 € cobrada en caja. Debe: 570 Caja, 2.000. Haber: 700 Ventas de mercaderías, 2.000.",
        "3. Pago al proveedor de 1.000 € por banco. Debe: 400 Proveedores, 1.000. Haber: 572 Bancos, 1.000.",
        "La cuenta 400 tiene un haber de 1.000 y un debe de 1.000: su saldo es cero, porque la deuda se ha saldado."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Intentar recordar si «debe» significa aumentar o disminuir. Depende del tipo de cuenta: mira si es activo, pasivo, gasto o ingreso."
      },
      {
        "kind": "consejo",
        "text": "Antes de anotar, pregúntate qué cuentas cambian y si aumentan o disminuyen. El resto sale de la regla."
      },
      {
        "kind": "clave",
        "text": "Total debe = total haber. Activo y gasto crecen por el debe; pasivo, patrimonio neto e ingreso, por el haber."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "Finom: debe y haber en contabilidad",
        "url": "https://finom.co/es-es/blog/debe-y-haber/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Billin: qué es el debe y el haber",
        "url": "https://www.billin.net/?p=37682",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economipedia: definición de debe",
        "url": "https://economipedia.com/definiciones/debe.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economipedia: definición de haber",
        "url": "https://economipedia.com/definiciones/haber.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Stelorder: partida doble",
        "url": "https://www.stelorder.com/blog/partida-doble",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.3-1",
        "lessonId": "x3-3",
        "kind": "tf",
        "prompt": "En cada asiento, la suma del debe debe ser igual a la suma del haber.",
        "answer": true,
        "explain": "Es la regla fundamental de la partida doble."
      },
      {
        "id": "c3.3-2",
        "lessonId": "x3-3",
        "kind": "choice",
        "prompt": "Una cuenta de activo aumenta por:",
        "answer": 0,
        "explain": "Disminuye por el haber.",
        "options": [
          "El debe",
          "El haber",
          "El saldo acreedor",
          "La fecha"
        ]
      },
      {
        "id": "c3.3-3",
        "lessonId": "x3-3",
        "kind": "choice",
        "prompt": "Una cuenta de ingresos aumenta por:",
        "answer": 0,
        "explain": "Los ingresos funcionan como las cuentas de pasivo.",
        "options": [
          "El haber",
          "El debe",
          "El saldo deudor",
          "El IVA"
        ]
      },
      {
        "id": "c3.3-4",
        "lessonId": "x3-3",
        "kind": "number",
        "prompt": "Una cuenta tiene anotaciones de 100, 300 y 250 en el debe y de 50 en el haber. ¿Cuál es su saldo deudor?",
        "answer": 600,
        "explain": "650 − 50 = 600.",
        "unit": "€"
      }
    ]
  },
  "x3-4": {
    "intro": "Marta ya sabe anotar una operación. Ahora toca saber dónde se guarda: en el libro diario, por orden cronológico, y en el libro mayor, cuenta por cuenta. Esta lección une las dos ideas y recoge lo que la ley exige de los libros.",
    "steps": [
      {
        "title": "Los libros obligatorios",
        "body": [
          "El Código de Comercio (art. 25) exige llevar un libro de Inventarios y Cuentas anuales y otro Diario.",
          "El libro de Inventarios y Cuentas anuales se abre con el balance inicial detallado de la empresa. En él se transcriben también el inventario de cierre y las cuentas anuales.",
          "El libro Diario registra día a día todas las operaciones relativas a la actividad de la empresa."
        ]
      },
      {
        "title": "El libro Diario",
        "body": [
          "Cada operación se anota con un asiento. Es el registro cronológico.",
          "Según las fuentes consultadas, el art. 28.2 permite anotar conjuntamente los totales de operaciones por períodos no superiores a un mes. Comprueba el texto vigente antes de usar esta opción."
        ]
      },
      {
        "title": "El libro Mayor",
        "body": [
          "Reúne los movimientos de cada cuenta. Cada cuenta se representa como una T: el debe a la izquierda y el haber a la derecha.",
          "Se obtiene el saldo restando. Su legalización en el Registro Mercantil no es estrictamente obligatoria, aunque es un registro indispensable para la gestión."
        ]
      },
      {
        "title": "Legalización y conservación",
        "body": [
          "Los libros obligatorios se presentan en el Registro Mercantil del domicilio. Se pueden hacer los asientos por cualquier procedimiento idóneo sobre hojas que después se encuadernen correlativamente, y los libros se legalizan antes de que pasen cuatro meses desde el cierre del ejercicio.",
          "Según las fuentes consultadas, el Código de Comercio exige conservar los libros y justificantes seis años; a efectos fiscales debe tenerse presente además el plazo de prescripción de cuatro años."
        ]
      },
      {
        "title": "Cuentas anuales",
        "body": [
          "Al cierre del ejercicio, el empresario formula las cuentas anuales: balance, cuenta de pérdidas y ganancias, estado de cambios en el patrimonio neto, estado de flujos de efectivo y memoria."
        ]
      }
    ],
    "example": {
      "title": "Del diario al mayor (cifras de la lección anterior)",
      "body": [
        "Diario: asiento 1, compra (600 y 400); asiento 2, venta al contado (570 y 700); asiento 3, pago al proveedor (400 y 572).",
        "Mayor de 570 Caja: debe 2.000, haber 0. Saldo deudor de 2.000 €.",
        "Mayor de 400 Proveedores: haber 1.000 (compra) y debe 1.000 (pago). Saldo cero.",
        "Mayor de 600 Compras: debe 1.000. Saldo deudor de 1.000 €."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Creer que el diario y el mayor guardan información distinta. Tienen los mismos datos, ordenados de forma diferente."
      },
      {
        "kind": "consejo",
        "text": "Antes del cierre, revisa que el mayor de cada cuenta coincide con la suma de sus asientos en el diario."
      },
      {
        "kind": "clave",
        "text": "Diario: cronológico, día a día. Mayor: por cuenta. Legalización de los obligatorios antes de cuatro meses desde el cierre."
      }
    ],
    "law": [
      "Código de Comercio, arts. 25, 27, 28 y 34"
    ],
    "sources": [
      {
        "title": "AEAT: obligaciones contables y registrales, libros obligatorios",
        "url": "https://sede.agenciatributaria.gob.es/Sede/impuesto-sobre-sociedades/gestion-impuesto-sobre-sociedades/obligaciones-contables-registrales/libros-obligatorios.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Civil-Mercantil: título III del Código de Comercio, arts. 25 a 49",
        "url": "https://www.civil-mercantil.com/libro-primero-titulo-iii-codigo-comercio-contabilidad-empresarios.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de León: libros contables obligatorios",
        "url": "https://blogs.unileon.es/mercantil/?pdf=1290",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cegid: el libro diario",
        "url": "https://www.cegid.com/ib/es/glosario-empresarial/libro-diario/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Dialnet: libros y cuentas anuales en el Código de Comercio",
        "url": "https://dialnet.unirioja.es/descarga/articulo/4730428.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.4-1",
        "lessonId": "x3-4",
        "kind": "choice",
        "prompt": "¿Qué libros exige el art. 25 del Código de Comercio?",
        "answer": 0,
        "explain": "El Mayor no es de legalización obligatoria.",
        "options": [
          "Inventarios y Cuentas anuales, y Diario",
          "Mayor y Caja",
          "Compras y Ventas",
          "Actas y Diario únicamente"
        ]
      },
      {
        "id": "c3.4-2",
        "lessonId": "x3-4",
        "kind": "number",
        "prompt": "¿En cuántos meses desde el cierre del ejercicio deben legalizarse los libros obligatorios?",
        "answer": 4,
        "explain": "Antes de que transcurran los cuatro meses siguientes.",
        "unit": "meses"
      },
      {
        "id": "c3.4-3",
        "lessonId": "x3-4",
        "kind": "tf",
        "prompt": "El libro Diario registra las operaciones por orden cronológico, día a día.",
        "answer": true,
        "explain": "Es su finalidad según el art. 28."
      },
      {
        "id": "c3.4-4",
        "lessonId": "x3-4",
        "kind": "tf",
        "prompt": "El libro Mayor registra los movimientos agrupados por cuenta.",
        "answer": true,
        "explain": "Cada cuenta se representa como una T con su debe y su haber."
      }
    ]
  },
  "x3-5": {
    "intro": "Marta compra mercaderías a un proveedor y las vende a sus clientes. Esas dos operaciones, con su IVA y sus descuentos, son las más frecuentes de cualquier comercio. En esta lección ves qué cuentas se usan para las compras, las ventas, las devoluciones, los descuentos y las existencias. El tipo del 21 % de los ejemplos es ilustrativo; el tipo aplicable depende de la operación.",
    "steps": [
      {
        "title": "Compras",
        "body": [
          "Las compras de mercaderías se anotan en la cuenta 600, con el IVA deducible en la 472 Hacienda Pública, IVA soportado.",
          "Si el IVA soportado no es recuperable de la Hacienda Pública, forma parte del importe de la adquisición.",
          "La contrapartida es 400 Proveedores si se paga más adelante, o una cuenta de tesorería (570 o 572) si se paga al contado."
        ]
      },
      {
        "title": "Ventas",
        "body": [
          "Las ventas de mercaderías se anotan en la cuenta 700 y las prestaciones de servicios en la 705. El IVA cobrado al cliente va a la 477 Hacienda Pública, IVA repercutido.",
          "La contrapartida es 430 Clientes si se cobra más adelante, o una cuenta de tesorería si se cobra al contado."
        ]
      },
      {
        "title": "Descuentos y devoluciones",
        "body": [
          "Descuentos sobre compras por pronto pago: cuenta 606. Devoluciones de compras y operaciones similares: cuenta 608. Rappels por compras: cuenta 609.",
          "Descuentos sobre ventas por pronto pago: cuenta 706. Devoluciones de ventas y operaciones similares: cuenta 708."
        ]
      },
      {
        "title": "Existencias y variación de existencias",
        "body": [
          "Las mercaderías que quedan en el almacén están en la cuenta 300 Mercaderías, del grupo 3.",
          "La cuenta 610 Variación de existencias de mercaderías refleja la diferencia entre las existencias iniciales y finales. Cuando las existencias iniciales son mayores que las finales, tiene saldo deudor y funciona como un gasto.",
          "Al cerrar el ejercicio se regulariza: se da de baja la existencia inicial y se da de alta la final, con la cuenta 610 como contrapartida."
        ]
      }
    ],
    "example": {
      "title": "Compra, venta, devolución y existencias (cifras ilustrativas)",
      "body": [
        "Compra de 2.000 € más un 21 % de IVA, a pagar en 30 días. Debe: 600 Compras de mercaderías 2.000 y 472 IVA soportado 420. Haber: 400 Proveedores 2.420.",
        "Venta de 3.000 € más un 21 % de IVA, a cobrar en 30 días. Debe: 430 Clientes 3.630. Haber: 700 Ventas de mercaderías 3.000 y 477 IVA repercutido 630.",
        "Devolución al proveedor de mercaderías por 500 € más 105 € de IVA. Debe: 400 Proveedores 605. Haber: 608 Devoluciones de compras 500 y 472 IVA soportado 105.",
        "Existencias iniciales de 4.000 € y finales de 3.200 €. La variación de existencias es un gasto de 800 €: debe 610 por 800 y haber 300 por 800."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Registrar el importe total de la factura, con IVA, en la cuenta de compras o de ventas. El IVA va a su cuenta propia, la 472 o la 477."
      },
      {
        "kind": "consejo",
        "text": "Antes de anotar, descompón la factura en base, IVA y total. La base va a la cuenta de compras o de ventas, el IVA a su cuenta y el total a proveedores o clientes."
      },
      {
        "kind": "clave",
        "text": "Compras 600, ventas 700, IVA soportado 472, IVA repercutido 477, proveedores 400, clientes 430, existencias 300."
      }
    ],
    "law": [
      "Plan General de Contabilidad (RD 1514/2007), cuadro de cuentas y normas de registro"
    ],
    "sources": [
      {
        "title": "Holded: asientos contables, ejemplos de compra y venta con IVA",
        "url": "https://www.holded.com/es/blog/asientos-contables",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Quipu: cómo contabilizar facturas de compra y de venta",
        "url": "https://getquipu.com/blog/como-contabilizar-facturas/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de Cantabria: casos prácticos de registro y valoración de existencias",
        "url": "https://ocw.unican.es/pluginfile.php/990/course/section/554/Casos%20Practicos%20de%20Registro%20y%20Valoracion%20de%20Existencias%2C%20Ing.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de Cantabria: examen parcial, naturaleza de las cuentas",
        "url": "https://ocw.unican.es/pluginfile.php/990/course/section/554/Casos%20Practicos%203%20Examen%20Parcial.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Macmillan Education: las compras y las ventas en el PGC de pymes",
        "url": "https://www.macmillaneducation.es/wp-content/uploads/2021/02/TDC21CAST_03_DEMO.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.5-1",
        "lessonId": "x3-5",
        "kind": "choice",
        "prompt": "¿En qué cuenta se anotan las compras de mercaderías?",
        "answer": 0,
        "explain": "La 700 es para ventas de mercaderías.",
        "options": [
          "600",
          "700",
          "430",
          "472"
        ]
      },
      {
        "id": "c3.5-2",
        "lessonId": "x3-5",
        "kind": "choice",
        "prompt": "El IVA repercutido en una venta se anota en:",
        "answer": 0,
        "explain": "La 472 es el IVA soportado en compras.",
        "options": [
          "477",
          "472",
          "4700",
          "400"
        ]
      },
      {
        "id": "c3.5-3",
        "lessonId": "x3-5",
        "kind": "number",
        "prompt": "Compra de 2.000 € más un 21 % de IVA a crédito. ¿Qué importe se anota en el haber de 400 Proveedores?",
        "answer": 2420,
        "explain": "2.000 + 420 de IVA.",
        "unit": "€"
      },
      {
        "id": "c3.5-4",
        "lessonId": "x3-5",
        "kind": "number",
        "prompt": "Existencias iniciales de 4.000 € y existencias finales de 3.200 €. ¿Cuál es el importe de la variación de existencias como gasto?",
        "answer": 800,
        "explain": "4.000 − 3.200 = 800 €.",
        "unit": "€"
      }
    ]
  },
  "x3-6": {
    "intro": "En las lecciones anteriores el IVA ha ido apareciendo en dos cuentas, la 472 y la 477. Esta lección cierra el círculo: cómo se compensan, cómo se registra el resultado de la liquidación y cómo se anotan los cobros y los pagos. No estudias aquí el impuesto, que verás en el módulo de IVA, sino su reflejo contable.",
    "steps": [
      {
        "title": "Las cuatro cuentas del IVA",
        "body": [
          "472 Hacienda Pública, IVA soportado. 477 Hacienda Pública, IVA repercutido.",
          "4700 Hacienda Pública, deudora por IVA. 4750 Hacienda Pública, acreedora por IVA.",
          "El fin último del IVA en contabilidad es la liquidación: compensar el IVA soportado con el repercutido para saber si hay un crédito contra la Hacienda Pública o una deuda con ella."
        ]
      },
      {
        "title": "La liquidación contable",
        "body": [
          "Si el IVA repercutido es mayor que el soportado, hay una cantidad a ingresar. Se salda la 477 y la 472 y la diferencia queda en la 4750.",
          "Si el IVA soportado es mayor que el repercutido, Hacienda debe la diferencia. Se salda la 477, y la diferencia queda en la 4700, deudora por IVA.",
          "Cuando se ingresa, se salda la 4750 contra tesorería."
        ]
      },
      {
        "title": "Cobros y pagos",
        "body": [
          "Cobrar a un cliente: debe 570 o 572 y haber 430 Clientes.",
          "Pagar a un proveedor: debe 400 Proveedores y haber 570 o 572.",
          "La factura y el cobro o pago son dos hechos distintos y pueden ocurrir en fechas diferentes; cada uno tiene su asiento."
        ]
      }
    ],
    "example": {
      "title": "Liquidación de un trimestre (cifras ilustrativas)",
      "body": [
        "Caso A: IVA repercutido 1.260 € e IVA soportado 840 €. Se salda: debe 477 por 1.260; haber 472 por 840 y haber 4750 por 420. Hay 420 € a ingresar.",
        "Ingreso por banco: debe 4750 por 420; haber 572 por 420.",
        "Caso B: IVA repercutido 500 € e IVA soportado 800 €. Debe 477 por 500 y debe 4700 por 300; haber 472 por 800. Hacienda debe 300 €.",
        "Cobro de una factura de cliente de 3.630 € por banco: debe 572 por 3.630; haber 430 por 3.630."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Registrar la liquidación del IVA como un gasto. El IVA no es un gasto ni un ingreso: se compensa y la diferencia es una deuda o un crédito con Hacienda."
      },
      {
        "kind": "consejo",
        "text": "Comprueba que el saldo de la 477 menos el de la 472 coincide con la cuota que te sale en la declaración."
      },
      {
        "kind": "clave",
        "text": "Repercutido mayor que soportado: 4750. Soportado mayor que repercutido: 4700."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "INEAF: contabilidad e IVA",
        "url": "https://www.ineaf.es/divulgativo/contabilidad/contabilidad-e-iva",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Universidad de Cantabria: existencias, compras, ventas e IVA",
        "url": "https://ocw.unican.es/pluginfile.php/1460/course/section/982/PPT%20tema%207_GADE-GE.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Holded: asientos contables, ejemplos de compra y venta con IVA",
        "url": "https://www.holded.com/es/blog/asientos-contables",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Quipu: cómo contabilizar facturas de compra y de venta",
        "url": "https://getquipu.com/blog/como-contabilizar-facturas/",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.6-1",
        "lessonId": "x3-6",
        "kind": "choice",
        "prompt": "Si el IVA repercutido es mayor que el soportado, la diferencia queda en:",
        "answer": 0,
        "explain": "Es una cantidad a ingresar.",
        "options": [
          "4750 Hacienda Pública, acreedora por IVA",
          "4700 Hacienda Pública, deudora por IVA",
          "472",
          "600"
        ]
      },
      {
        "id": "c3.6-2",
        "lessonId": "x3-6",
        "kind": "choice",
        "prompt": "Si el IVA soportado es mayor que el repercutido, la diferencia queda en:",
        "answer": 0,
        "explain": "Hacienda debe la diferencia.",
        "options": [
          "4700 Hacienda Pública, deudora por IVA",
          "4750 Hacienda Pública, acreedora por IVA",
          "477",
          "700"
        ]
      },
      {
        "id": "c3.6-3",
        "lessonId": "x3-6",
        "kind": "number",
        "prompt": "IVA repercutido 1.260 € e IVA soportado 840 €. ¿Cuánto hay que ingresar?",
        "answer": 420,
        "explain": "1.260 − 840 = 420 €.",
        "unit": "€"
      },
      {
        "id": "c3.6-4",
        "lessonId": "x3-6",
        "kind": "tf",
        "prompt": "El IVA es un gasto de la empresa.",
        "answer": false,
        "explain": "Se compensa; la diferencia es una deuda o un crédito frente a Hacienda."
      }
    ]
  },
  "x3-7": {
    "intro": "Después de anotar cientos de asientos, ¿cómo saber que no hay errores de cuadre? Marta lo comprueba con el balance de sumas y saldos: una tabla con los totales de cada cuenta que debe cumplir dos igualdades. Es la herramienta de control previa al cierre contable.",
    "steps": [
      {
        "title": "Qué es",
        "body": [
          "Es una tabla que recoge, para cada cuenta del mayor, la suma de su debe, la suma de su haber y su saldo. Forma parte de los contenidos oficiales de contabilidad del ciclo de Administración y Finanzas.",
          "El saldo es la diferencia entre el debe y el haber. Es deudor si el debe es mayor y acreedor si el haber es mayor."
        ]
      },
      {
        "title": "Las dos comprobaciones",
        "body": [
          "La suma de todos los debes debe coincidir con la suma de todos los haberes.",
          "La suma de todos los saldos deudores debe coincidir con la suma de todos los saldos acreedores.",
          "Ambas igualdades se derivan de la partida doble: si algún asiento no estuviera cuadrado, o se hubiera pasado mal al mayor, dejarían de cumplirse."
        ]
      },
      {
        "title": "Qué no detecta",
        "body": [
          "Que cuadre no garantiza que esté bien. No detecta anotar el importe correcto en una cuenta equivocada, ni omitir un asiento entero, ni anotar dos veces el mismo error compensado.",
          "Por eso después se revisan los saldos con extractos, facturas y recuentos."
        ]
      }
    ],
    "example": {
      "title": "Una tabla con seis cuentas (cifras ilustrativas)",
      "body": [
        "100 Capital social: debe 0, haber 10.000. Saldo acreedor 10.000.",
        "570 Caja: debe 2.000, haber 0. Saldo deudor 2.000.",
        "572 Bancos: debe 10.000, haber 1.000. Saldo deudor 9.000.",
        "400 Proveedores: debe 1.000, haber 1.000. Saldo cero.",
        "600 Compras: debe 1.000, haber 0. Saldo deudor 1.000.",
        "700 Ventas: debe 0, haber 2.000. Saldo acreedor 2.000.",
        "Sumas: debe 14.000 y haber 14.000. Saldos deudores 12.000 y acreedores 12.000. Las dos igualdades se cumplen."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Dar la contabilidad por buena porque el balance de sumas y saldos cuadra. Los errores de cuenta o de omisión no se ven."
      },
      {
        "kind": "consejo",
        "text": "Si no cuadra, busca primero un asiento descuadrado, después un error de traspaso al mayor y por último un error de suma."
      },
      {
        "kind": "clave",
        "text": "Total debe = total haber, y saldos deudores = saldos acreedores."
      }
    ],
    "law": [],
    "sources": [
      {
        "title": "Programación didáctica de Contabilidad y fiscalidad (módulo 0654, RD 1584/2011)",
        "url": "https://portal.edu.gva.es/iesramonmuntaner/wp-content/uploads/sites/1215/2024/11/PD_CYF_2CFGS_24_25.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Economipedia: definición de debe y saldo deudor",
        "url": "https://economipedia.com/definiciones/debe.html",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Economipedia: definición de haber y saldo acreedor",
        "url": "https://economipedia.com/definiciones/haber.html",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c3.7-1",
        "lessonId": "x3-7",
        "kind": "tf",
        "prompt": "En un balance de sumas y saldos, el total del debe debe coincidir con el total del haber.",
        "answer": true,
        "explain": "Es consecuencia de la partida doble."
      },
      {
        "id": "c3.7-2",
        "lessonId": "x3-7",
        "kind": "number",
        "prompt": "Una cuenta tiene un debe de 10.000 € y un haber de 1.000 €. ¿Cuál es su saldo deudor?",
        "answer": 9000,
        "explain": "10.000 − 1.000 = 9.000 €.",
        "unit": "€"
      },
      {
        "id": "c3.7-3",
        "lessonId": "x3-7",
        "kind": "tf",
        "prompt": "Si el balance de sumas y saldos cuadra, la contabilidad está libre de errores.",
        "answer": false,
        "explain": "No detecta errores de cuenta, ni omisiones de un asiento completo."
      },
      {
        "id": "c3.7-4",
        "lessonId": "x3-7",
        "kind": "choice",
        "prompt": "La suma de los saldos deudores debe coincidir con:",
        "answer": 0,
        "explain": "Es la segunda comprobación.",
        "options": [
          "La suma de los saldos acreedores",
          "El total del activo exclusivamente",
          "El resultado del ejercicio",
          "El importe del IVA"
        ]
      }
    ]
  },
};

export const m3Bank: Question[] = [
  {
    "id": "e3-01",
    "lessonId": "x3-1",
    "kind": "choice",
    "prompt": "¿Qué exige el art. 25 del Código de Comercio a todo empresario?",
    "answer": 0,
    "explain": "Debe permitir seguimiento cronológico y elaborar balances e inventarios.",
    "options": [
      "Llevar una contabilidad ordenada, adecuada a la actividad de su empresa",
      "Presentar el IVA mensual",
      "Tener un auditor",
      "Legalizar sus facturas"
    ],
    "law": "Código de Comercio, art. 25"
  },
  {
    "id": "e3-02",
    "lessonId": "x3-1",
    "kind": "tf",
    "prompt": "Las cuentas anuales deben mostrar la imagen fiel del patrimonio, de la situación financiera y de los resultados.",
    "answer": true,
    "explain": "Es el objetivo de las cuentas anuales."
  },
  {
    "id": "e3-03",
    "lessonId": "x3-1",
    "kind": "number",
    "prompt": "Pasivo 30.000 € y patrimonio neto 20.000 €. ¿Cuál es el activo total?",
    "answer": 50000,
    "explain": "Activo = pasivo + patrimonio neto.",
    "unit": "€"
  },
  {
    "id": "e3-04",
    "lessonId": "x3-1",
    "kind": "number",
    "prompt": "Activo 90.000 € y patrimonio neto 35.000 €. ¿Cuál es el pasivo?",
    "answer": 55000,
    "explain": "Pasivo = activo − patrimonio neto.",
    "unit": "€"
  },
  {
    "id": "e3-05",
    "lessonId": "x3-1",
    "kind": "tf",
    "prompt": "El balance debe cuadrar siempre: el activo coincide con la suma del patrimonio neto y el pasivo.",
    "answer": true,
    "explain": "Es la ecuación fundamental."
  },
  {
    "id": "e3-06",
    "lessonId": "x3-1",
    "kind": "choice",
    "prompt": "Un préstamo recibido de 5.000 € ingresado en el banco produce:",
    "answer": 0,
    "explain": "El banco sube y nace una deuda.",
    "options": [
      "Aumento de activo y de pasivo",
      "Aumento de patrimonio neto",
      "Disminución de activo",
      "Ningún cambio en el balance"
    ]
  },
  {
    "id": "e3-07",
    "lessonId": "x3-1",
    "kind": "tf",
    "prompt": "Toda operación afecta al menos a dos elementos del balance.",
    "answer": true,
    "explain": "Por eso el balance sigue cuadrando."
  },
  {
    "id": "e3-08",
    "lessonId": "x3-2",
    "kind": "choice",
    "prompt": "¿Qué real decreto aprueba el Plan General de Contabilidad?",
    "answer": 0,
    "explain": "Aprobado el 16 de noviembre de 2007.",
    "options": [
      "Real Decreto 1514/2007",
      "Real Decreto 84/1996",
      "Ley 58/2003",
      "Real Decreto 1424/2002"
    ]
  },
  {
    "id": "e3-09",
    "lessonId": "x3-2",
    "kind": "tf",
    "prompt": "El PGC se estructura en cinco partes.",
    "answer": true,
    "explain": "Marco conceptual, normas de registro y valoración, cuentas anuales, cuadro de cuentas, y definiciones y relaciones contables."
  },
  {
    "id": "e3-10",
    "lessonId": "x3-2",
    "kind": "choice",
    "prompt": "En la cuenta 430, ¿qué indica el primer dígito?",
    "answer": 0,
    "explain": "Un dígito el grupo, dos el subgrupo, tres la cuenta.",
    "options": [
      "El grupo",
      "El tipo de IVA",
      "El año",
      "El importe"
    ]
  },
  {
    "id": "e3-11",
    "lessonId": "x3-2",
    "kind": "choice",
    "prompt": "La cuenta 477 es:",
    "answer": 0,
    "explain": "La 472 es el IVA soportado.",
    "options": [
      "Hacienda Pública, IVA repercutido",
      "Hacienda Pública, IVA soportado",
      "Proveedores",
      "Bancos"
    ]
  },
  {
    "id": "e3-12",
    "lessonId": "x3-2",
    "kind": "choice",
    "prompt": "El grupo 6 recoge:",
    "answer": 0,
    "explain": "El grupo 7, ventas e ingresos.",
    "options": [
      "Compras y gastos",
      "Ventas e ingresos",
      "Existencias",
      "Cuentas financieras"
    ]
  },
  {
    "id": "e3-13",
    "lessonId": "x3-2",
    "kind": "tf",
    "prompt": "Los grupos 8 y 9 recogen los gastos e ingresos imputados al patrimonio neto.",
    "answer": true,
    "explain": "Son los grupos de imputación directa al patrimonio neto."
  },
  {
    "id": "e3-14",
    "lessonId": "x3-2",
    "kind": "choice",
    "prompt": "¿Qué cuenta corresponde a «Hacienda Pública, deudora por IVA»?",
    "answer": 0,
    "explain": "La 4750 es la acreedora por IVA.",
    "options": [
      "4700",
      "4750",
      "477",
      "430"
    ]
  },
  {
    "id": "e3-15",
    "lessonId": "x3-3",
    "kind": "choice",
    "prompt": "Una compra de mercaderías a crédito por 1.000 € (sin IVA) se anota:",
    "answer": 0,
    "explain": "Aumenta un gasto (debe) y una deuda (haber).",
    "options": [
      "Debe 600 Compras, Haber 400 Proveedores",
      "Debe 400 Proveedores, Haber 600 Compras",
      "Debe 700 Ventas, Haber 430 Clientes",
      "Debe 572 Bancos, Haber 600 Compras"
    ]
  },
  {
    "id": "e3-16",
    "lessonId": "x3-3",
    "kind": "choice",
    "prompt": "Una venta cobrada en caja por 2.000 € (sin IVA) se anota:",
    "answer": 0,
    "explain": "Aumenta el activo (debe) y un ingreso (haber).",
    "options": [
      "Debe 570 Caja, Haber 700 Ventas",
      "Debe 700 Ventas, Haber 570 Caja",
      "Debe 430 Clientes, Haber 570 Caja",
      "Debe 477 IVA, Haber 570 Caja"
    ]
  },
  {
    "id": "e3-17",
    "lessonId": "x3-3",
    "kind": "choice",
    "prompt": "El pago a un proveedor de 1.000 € por banco se anota:",
    "answer": 0,
    "explain": "Disminuye una deuda (debe) y el banco (haber).",
    "options": [
      "Debe 400 Proveedores, Haber 572 Bancos",
      "Debe 572 Bancos, Haber 400 Proveedores",
      "Debe 600 Compras, Haber 572 Bancos",
      "Debe 430 Clientes, Haber 400 Proveedores"
    ]
  },
  {
    "id": "e3-18",
    "lessonId": "x3-3",
    "kind": "tf",
    "prompt": "Las cuentas de gastos aumentan por el haber.",
    "answer": false,
    "explain": "Aumentan por el debe."
  },
  {
    "id": "e3-19",
    "lessonId": "x3-3",
    "kind": "tf",
    "prompt": "Si el debe de una cuenta es mayor que su haber, el saldo es deudor.",
    "answer": true,
    "explain": "El saldo es la diferencia entre ambos."
  },
  {
    "id": "e3-20",
    "lessonId": "x3-3",
    "kind": "number",
    "prompt": "Una cuenta tiene un debe de 2.000 € y un haber de 500 €. ¿Cuál es su saldo?",
    "answer": 1500,
    "explain": "Saldo deudor de 1.500 €.",
    "unit": "€"
  },
  {
    "id": "e3-21",
    "lessonId": "x3-3",
    "kind": "tf",
    "prompt": "Un asiento puede afectar a más de dos cuentas.",
    "answer": true,
    "explain": "Debe afectar al menos a dos y los totales deben coincidir."
  },
  {
    "id": "e3-22",
    "lessonId": "x3-4",
    "kind": "choice",
    "prompt": "El libro de Inventarios y Cuentas anuales se abre con:",
    "answer": 0,
    "explain": "Después se transcriben el inventario de cierre y las cuentas anuales.",
    "options": [
      "El balance inicial detallado de la empresa",
      "El libro Mayor",
      "El primer asiento de venta",
      "El IVA del primer trimestre"
    ],
    "law": "Código de Comercio, art. 28"
  },
  {
    "id": "e3-23",
    "lessonId": "x3-4",
    "kind": "choice",
    "prompt": "¿Qué comprenden las cuentas anuales?",
    "answer": 0,
    "explain": "Es la formulación de cierre del art. 34.",
    "options": [
      "Balance, pérdidas y ganancias, estado de cambios en el patrimonio neto, estado de flujos de efectivo y memoria",
      "Solo balance y caja",
      "Solo balance y memoria",
      "Solo la cuenta de pérdidas y ganancias"
    ]
  },
  {
    "id": "e3-24",
    "lessonId": "x3-4",
    "kind": "tf",
    "prompt": "Los asientos pueden hacerse por cualquier procedimiento idóneo sobre hojas que después se encuadernan correlativamente.",
    "answer": true,
    "explain": "Los libros se legalizan antes de cuatro meses desde el cierre."
  },
  {
    "id": "e3-25",
    "lessonId": "x3-4",
    "kind": "choice",
    "prompt": "Una cuenta del mayor tiene debe de 2.000 € y haber de 500 €. Su saldo es:",
    "answer": 0,
    "explain": "El debe es mayor que el haber.",
    "options": [
      "Deudor de 1.500 €",
      "Acreedor de 1.500 €",
      "Deudor de 2.500 €",
      "Cero"
    ]
  },
  {
    "id": "e3-26",
    "lessonId": "x3-4",
    "kind": "tf",
    "prompt": "La legalización del libro Mayor en el Registro Mercantil es obligatoria.",
    "answer": false,
    "explain": "Según las fuentes consultadas, no lo es estrictamente."
  },
  {
    "id": "e3-27",
    "lessonId": "x3-4",
    "kind": "number",
    "prompt": "¿Cuántos años exige conservar los libros y justificantes el Código de Comercio, según las fuentes consultadas?",
    "answer": 6,
    "explain": "A efectos fiscales debe tenerse presente además la prescripción de cuatro años.",
    "unit": "años"
  },
  {
    "id": "e3-28",
    "lessonId": "x3-4",
    "kind": "tf",
    "prompt": "Diario y mayor recogen la misma información ordenada de forma distinta.",
    "answer": true,
    "explain": "Cronológica en el diario, por cuenta en el mayor."
  },
  {
    "id": "e3-29",
    "lessonId": "x3-5",
    "kind": "choice",
    "prompt": "El IVA soportado deducible en una compra se anota en:",
    "answer": 0,
    "explain": "El repercutido va en la 477.",
    "options": [
      "472 Hacienda Pública, IVA soportado",
      "477 Hacienda Pública, IVA repercutido",
      "400 Proveedores",
      "700 Ventas"
    ]
  },
  {
    "id": "e3-30",
    "lessonId": "x3-5",
    "kind": "choice",
    "prompt": "Una prestación de servicios se anota, normalmente, en:",
    "answer": 0,
    "explain": "Las ventas de mercaderías van en la 700.",
    "options": [
      "705 Prestaciones de servicios",
      "600 Compras",
      "300 Mercaderías",
      "570 Caja"
    ]
  },
  {
    "id": "e3-31",
    "lessonId": "x3-5",
    "kind": "choice",
    "prompt": "Un descuento por pronto pago obtenido de un proveedor se anota en:",
    "answer": 0,
    "explain": "La 706 es el descuento por pronto pago concedido a clientes.",
    "options": [
      "606",
      "706",
      "608",
      "708"
    ]
  },
  {
    "id": "e3-32",
    "lessonId": "x3-5",
    "kind": "choice",
    "prompt": "Una devolución de ventas se anota en:",
    "answer": 0,
    "explain": "La 608 recoge las devoluciones de compras.",
    "options": [
      "708 Devoluciones de ventas y operaciones similares",
      "608 Devoluciones de compras",
      "700 Ventas",
      "430 Clientes"
    ]
  },
  {
    "id": "e3-33",
    "lessonId": "x3-5",
    "kind": "number",
    "prompt": "Venta de 3.000 € más un 21 % de IVA a crédito. ¿Qué importe se anota en el debe de 430 Clientes?",
    "answer": 3630,
    "explain": "3.000 + 630.",
    "unit": "€"
  },
  {
    "id": "e3-34",
    "lessonId": "x3-5",
    "kind": "tf",
    "prompt": "Cuando las existencias iniciales son mayores que las finales, la variación de existencias tiene saldo deudor.",
    "answer": true,
    "explain": "Funciona como un gasto."
  },
  {
    "id": "e3-35",
    "lessonId": "x3-5",
    "kind": "tf",
    "prompt": "El IVA soportado no recuperable de la Hacienda Pública forma parte del importe de la adquisición.",
    "answer": true,
    "explain": "Así se registra cuando no puede deducirse."
  },
  {
    "id": "e3-36",
    "lessonId": "x3-6",
    "kind": "choice",
    "prompt": "¿Cuál es la finalidad contable del IVA?",
    "answer": 0,
    "explain": "Se determina si hay crédito o deuda con Hacienda.",
    "options": [
      "Liquidar el impuesto compensando soportado y repercutido",
      "Registrar un ingreso adicional",
      "Anotar un gasto de explotación",
      "Calcular el resultado del ejercicio"
    ]
  },
  {
    "id": "e3-37",
    "lessonId": "x3-6",
    "kind": "choice",
    "prompt": "Para cobrar una factura de un cliente por banco se anota:",
    "answer": 0,
    "explain": "El banco aumenta y el cliente deja de deber.",
    "options": [
      "Debe 572 Bancos, Haber 430 Clientes",
      "Debe 430 Clientes, Haber 572 Bancos",
      "Debe 700 Ventas, Haber 572 Bancos",
      "Debe 477 IVA, Haber 572 Bancos"
    ]
  },
  {
    "id": "e3-38",
    "lessonId": "x3-6",
    "kind": "choice",
    "prompt": "Para pagar a un proveedor por banco se anota:",
    "answer": 0,
    "explain": "La deuda disminuye y el banco también.",
    "options": [
      "Debe 400 Proveedores, Haber 572 Bancos",
      "Debe 572 Bancos, Haber 400 Proveedores",
      "Debe 600 Compras, Haber 572 Bancos",
      "Debe 472 IVA, Haber 572 Bancos"
    ]
  },
  {
    "id": "e3-39",
    "lessonId": "x3-6",
    "kind": "number",
    "prompt": "IVA repercutido 500 € e IVA soportado 800 €. ¿Cuánto debe Hacienda?",
    "answer": 300,
    "explain": "800 − 500 = 300 €, en la 4700.",
    "unit": "€"
  },
  {
    "id": "e3-40",
    "lessonId": "x3-6",
    "kind": "tf",
    "prompt": "El ingreso de la deuda por IVA se anota con debe 4750 y haber en una cuenta de tesorería.",
    "answer": true,
    "explain": "La deuda con Hacienda desaparece al pagar."
  },
  {
    "id": "e3-41",
    "lessonId": "x3-6",
    "kind": "tf",
    "prompt": "La factura y su cobro son hechos distintos que pueden anotarse en fechas diferentes.",
    "answer": true,
    "explain": "Cada uno tiene su propio asiento."
  },
  {
    "id": "e3-42",
    "lessonId": "x3-6",
    "kind": "choice",
    "prompt": "¿Qué cuenta corresponde a Hacienda Pública, IVA repercutido?",
    "answer": 0,
    "explain": "La 472 es el IVA soportado.",
    "options": [
      "477",
      "472",
      "4750",
      "4700"
    ]
  },
  {
    "id": "e3-43",
    "lessonId": "x3-7",
    "kind": "choice",
    "prompt": "El saldo de una cuenta es:",
    "answer": 0,
    "explain": "Es deudor si el debe es mayor.",
    "options": [
      "La diferencia entre su debe y su haber",
      "La suma de su debe y su haber",
      "Su último asiento",
      "El importe del IVA"
    ]
  },
  {
    "id": "e3-44",
    "lessonId": "x3-7",
    "kind": "tf",
    "prompt": "Una cuenta con haber mayor que debe tiene saldo acreedor.",
    "answer": true,
    "explain": "Es el caso de los ingresos y el patrimonio neto."
  },
  {
    "id": "e3-45",
    "lessonId": "x3-7",
    "kind": "number",
    "prompt": "Una cuenta tiene un debe de 1.000 € y un haber de 1.000 €. ¿Cuál es su saldo?",
    "answer": 0,
    "explain": "Está saldada.",
    "unit": "€"
  },
  {
    "id": "e3-46",
    "lessonId": "x3-7",
    "kind": "number",
    "prompt": "En la tabla del ejemplo, ¿cuánto suman los saldos deudores?",
    "answer": 12000,
    "explain": "2.000 + 9.000 + 1.000.",
    "unit": "€"
  },
  {
    "id": "e3-47",
    "lessonId": "x3-7",
    "kind": "choice",
    "prompt": "¿Qué error NO detecta el balance de sumas y saldos?",
    "answer": 0,
    "explain": "Cuadra aunque la cuenta sea incorrecta.",
    "options": [
      "Anotar el importe correcto en la cuenta equivocada",
      "Un asiento con debe distinto del haber",
      "Un error de suma de una columna",
      "Un traspaso incompleto de un importe"
    ]
  },
  {
    "id": "e3-48",
    "lessonId": "x3-7",
    "kind": "tf",
    "prompt": "Las dos igualdades del balance de sumas y saldos se derivan de la partida doble.",
    "answer": true,
    "explain": "Si un asiento no cuadra, dejan de cumplirse."
  },
  {
    "id": "e3-49",
    "lessonId": "x3-7",
    "kind": "choice",
    "prompt": "Si el balance no cuadra, ¿qué conviene revisar primero?",
    "answer": 0,
    "explain": "Después, el traspaso al mayor y las sumas.",
    "options": [
      "Los asientos descuadrados",
      "El tipo de IVA",
      "El convenio colectivo",
      "El domicilio fiscal"
    ]
  },
];
