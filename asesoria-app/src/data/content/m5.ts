import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const m5Lessons: Record<string, LessonContent> = {
  "x5-1": {
    "intro": "Empieza el bloque de IRPF. Antes de calcular un solo euro hay que responder a dos preguntas: ¿esta persona es contribuyente del IRPF en España? y ¿tiene obligación de presentar declaración? La primera depende de la residencia habitual; la segunda, de cuánto y de quién ha cobrado. Los límites cambian por ejercicio: aquí se usan los de la campaña de Renta 2025 y se indica siempre dónde confirmarlos.",
    "steps": [
      {
        "title": "Quién es contribuyente",
        "body": [
          "Son contribuyentes del IRPF las personas físicas que tengan su residencia habitual en territorio español. Tributan en España por su renta mundial.",
          "Existen también supuestos en que personas de nacionalidad española que residen en el extranjero por su condición de miembros del cuerpo diplomático o asimilados siguen siendo contribuyentes del IRPF (art. 10 de la Ley del IRPF)."
        ]
      },
      {
        "title": "Cuándo se tiene residencia habitual (art. 9)",
        "body": [
          "Primer criterio: permanecer más de 183 días durante el año natural en territorio español. Para el cómputo se incluyen las ausencias esporádicas, salvo que el contribuyente acredite su residencia fiscal en otro país. Si el otro país es un paraíso fiscal calificado reglamentariamente, la Administración puede exigir que se pruebe la permanencia en él durante 183 días.",
          "Segundo criterio: que radique en España el núcleo principal o la base de sus actividades o intereses económicos, de forma directa o indirecta.",
          "Presunción: salvo prueba en contrario, se presume que tiene su residencia habitual en España quien, conforme a los criterios anteriores, tenga residiendo habitualmente en España a su cónyuge no separado legalmente y a los hijos menores de edad que dependan de él.",
          "Basta con que se cumpla uno de los dos criterios. Tener los hijos y el cónyuge residiendo en España no es un criterio independiente, sino una presunción que admite prueba en contrario."
        ]
      },
      {
        "title": "Residencia en una comunidad autónoma",
        "body": [
          "Como principio general, los residentes en España lo son del territorio de una comunidad autónoma o ciudad con estatuto. El contribuyente reside en aquella en la que haya permanecido mayor número de días del periodo impositivo, que generalmente es el año natural. Salvo prueba en contrario, se presume que permanece donde radica su vivienda habitual.",
          "Si no permanece más de 183 días en España, reside en la comunidad donde radique su principal centro de intereses.",
          "Si es residente por la presunción del cónyuge y los hijos menores, se considera residente en la comunidad donde estos residan habitualmente."
        ]
      },
      {
        "title": "Cambios de residencia a efectos censales",
        "body": [
          "En el modelo censal, si el cambio de residente a no residente, o al revés, se produce en el primer semestre del año, antes de que transcurran 183 días, la fecha de efectos suele ser el 1 de enero de ese año y se mantiene durante todo el ejercicio fiscal."
        ]
      },
      {
        "title": "Quién debe presentar declaración (Renta 2025)",
        "body": [
          "Los contribuyentes con rendimientos íntegros del trabajo superiores a 22.000 € anuales de un único pagador. El mismo límite se aplica si hay más de un pagador y lo percibido del segundo y restantes, por orden de cuantía, no supera 1.500 € anuales en su conjunto.",
          "El límite baja a 15.876 € anuales cuando los rendimientos proceden de más de un pagador y lo percibido del segundo y restantes supera ese importe de 1.500 €, o en supuestos como pensiones compensatorias del cónyuge o pagador no obligado a retener.",
          "La AEAT recoge además un incremento de 1.500 a 2.500 € del importe del segundo y siguientes pagadores en determinados casos del ejercicio 2025. Confirma el supuesto en el manual vigente.",
          "Otros tipos de renta y pequeñas cuantías tienen sus propios límites: consulta siempre el cuadro oficial de la campaña.",
          "Existe la declaración individual y la conjunta. Con declaración conjunta, si cada cónyuge percibe sus ingresos de un único pagador, el límite es de 22.000 €."
        ]
      }
    ],
    "example": {
      "title": "Tres personas, tres respuestas (supuestos ilustrativos)",
      "body": [
        "Lucía vive en Madrid todo el año. Ha permanecido más de 183 días en España: es contribuyente del IRPF y su comunidad es la de su vivienda habitual.",
        "Pedro trabaja seis meses fuera, pero su familia vive en España y su núcleo principal de intereses está aquí. Aunque no alcanzara los 183 días, puede ser residente por el segundo criterio, y su cónyuge e hijos menores refuerzan la presunción.",
        "Carlos cobra en un año 18.000 € de un único pagador: no supera 22.000 €, no está obligado a declarar por ese motivo. Si hubiese cobrado 17.000 € del primero y 3.000 € de un segundo pagador, el segundo supera 1.500 € y el límite baja a 15.876 €: tendría que declarar."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Pensar que se es residente solo por contar los días. El núcleo de intereses económicos y la presunción por cónyuge e hijos menores también cuentan."
      },
      {
        "kind": "consejo",
        "text": "Cuando haya movimientos entre países, pide fechas de entrada y salida, certificado de residencia fiscal del otro país y datos de la familia."
      },
      {
        "kind": "clave",
        "text": "Residente si: más de 183 días, o núcleo de intereses en España, o presunción de cónyuge e hijos. Límites de declarar para el trabajo: 22.000 € y 15.876 € en la campaña 2025."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, arts. 9 y 10"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico de Renta 2024, residencia habitual en territorio español",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c02-irpf-cuestiones-generales/sujecion-irpf-aspectos-personales/residencia-habitual-territorio-espanol.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: Manual de Renta 2025, contribuyentes del IRPF",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/3-cuestiones-generales/3_1-cuestiones-generales/3_1_1-contribuyentes-irpf.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: residencia en una comunidad autónoma a efectos del IRPF",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c02-irpf-cuestiones-generales/sujecion-irpf-aspectos-personales/residencia-habitual-territorio-comunidad-autonoma.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: obligación de declarar, Renta 2025",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c01-campana-declaracion-renta/quienes-estan-obligados-presentar-declaracion-irpf/delimitacion-obligacion-declarar-irpf.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: folleto de obligación de declarar, Renta 2025",
        "url": "https://sede.agenciatributaria.gob.es/static_files/Sede/Biblioteca/Folleto/Renta_2025/Obligacion_declarar_Renta_2025.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: guía del modelo 036, residente fiscal en España",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/guia-practica-cumplimentacion-modelo-censal-036/capitulo-02-identificacion/modelo-036/pagina-2a-identificacion-personas-fisicas/residente-fiscal-espana.html",
        "accessed": "2026-10-25",
        "official": true
      }
    ],
    "check": [
      {
        "id": "c5.1-1",
        "lessonId": "x5-1",
        "kind": "number",
        "prompt": "¿Cuántos días de permanencia en España, durante el año natural, hace falta superar para ser residente por el criterio de permanencia?",
        "answer": 183,
        "explain": "Se cuentan también las ausencias esporádicas, salvo prueba de residencia fiscal en otro país.",
        "unit": "días"
      },
      {
        "id": "c5.1-2",
        "lessonId": "x5-1",
        "kind": "choice",
        "prompt": "¿Cuál es el segundo criterio de residencia habitual en España?",
        "answer": 0,
        "explain": "Basta con que se cumpla uno de los dos criterios.",
        "options": [
          "Que radique en España el núcleo principal o la base de sus actividades o intereses económicos",
          "Tener nacionalidad española",
          "Estar empadronado",
          "Tener cuenta bancaria en España"
        ]
      },
      {
        "id": "c5.1-3",
        "lessonId": "x5-1",
        "kind": "tf",
        "prompt": "Se presume, salvo prueba en contrario, residente en España a quien tiene allí al cónyuge no separado y a hijos menores que dependen de él.",
        "answer": true,
        "explain": "Es una presunción, no un criterio independiente."
      },
      {
        "id": "c5.1-4",
        "lessonId": "x5-1",
        "kind": "number",
        "prompt": "En la campaña de Renta 2025, ¿a partir de qué rendimientos íntegros del trabajo de un único pagador hay obligación de declarar, en euros?",
        "answer": 22000,
        "explain": "Con más de un pagador y el segundo y siguientes por encima de 1.500 €, el límite baja a 15.876 €.",
        "unit": "€"
      }
    ]
  },
  "x5-2": {
    "intro": "Carlos cobra una nómina y quiere saber qué parte de ese dinero tributa realmente en su Renta. La respuesta es el rendimiento neto del trabajo: el bruto menos unos gastos que la ley enumera de forma cerrada. Esta lección explica cómo se calcula y qué gastos se pueden restar. Las cifras de reducciones y tarifas cambian por ejercicio, así que aquí se usan solo las que están confirmadas.",
    "steps": [
      {
        "title": "Qué son los rendimientos íntegros del trabajo",
        "body": [
          "A efectos del IRPF, son todas las contraprestaciones o utilidades, dinerarias o en especie, que derivan directa o indirectamente del trabajo personal o de la relación laboral o estatutaria y no tienen el carácter de rendimientos de actividades económicas.",
          "Las retribuciones en especie se computan por su valor, más el ingreso a cuenta no repercutido al perceptor."
        ]
      },
      {
        "title": "El cálculo",
        "body": [
          "Rendimiento neto del trabajo = rendimiento íntegro − gastos deducibles (art. 19 de la Ley del IRPF).",
          "Después, en su caso, se aplica la reducción por obtención de rendimientos del trabajo, prevista en el art. 20, y se llega al rendimiento neto reducido.",
          "La reducción depende del importe del rendimiento neto y de otras rentas del contribuyente. Sus umbrales han cambiado en los últimos ejercicios: consulta los del año de la declaración."
        ]
      },
      {
        "title": "Los gastos deducibles: lista cerrada",
        "body": [
          "Tendrán la consideración de gastos deducibles exclusivamente los que enumera la ley.",
          "Entre ellos: las cotizaciones a la Seguridad Social o a mutualidades generales obligatorias de funcionarios, las detracciones por derechos pasivos, las cuotas satisfechas a sindicatos, las cuotas a colegios profesionales con un límite anual y los gastos de defensa jurídica con un límite de 300 € anuales.",
          "Las cotizaciones deben estar vinculadas a los rendimientos íntegros del trabajo declarados.",
          "En concepto de otros gastos, 2.000 € anuales. Esta cifra genérica sirve para incluir gastos de difícil especificación, cuantificación o justificación. Tiene como límite el rendimiento íntegro minorado por el resto de gastos.",
          "Los desempleados inscritos que acepten un trabajo que exija el traslado de su residencia a otro municipio pueden incrementar el importe de otros gastos en 2.000 € adicionales."
        ]
      },
      {
        "title": "Qué no se puede deducir",
        "body": [
          "Lo que no está en la lista no es deducible. Por ejemplo, según una consulta de la DGT, los suministros de la vivienda no son gasto deducible del rendimiento neto del trabajo.",
          "Tampoco se admiten los gastos de internet que el trabajador soporta cuando teletrabaja en su domicilio, según las fuentes consultadas."
        ]
      },
      {
        "title": "Dónde acaba el cálculo",
        "body": [
          "El rendimiento neto reducido se integra en la base imponible general del contribuyente junto con las demás rentas. Esa mecánica se completa en la lección sobre base, cuota y declaración."
        ]
      }
    ],
    "example": {
      "title": "De la nómina al rendimiento neto (cifras ilustrativas)",
      "body": [
        "Retribuciones íntegras del año: 24.000 €.",
        "Gastos deducibles: cotizaciones del trabajador a la Seguridad Social 1.600 €, cuotas sindicales 100 € y otros gastos 2.000 €.",
        "Rendimiento neto: 24.000 − 1.600 − 100 − 2.000 = 20.300 €.",
        "Con ese rendimiento neto, y en un caso así, la reducción por obtención de rendimientos del trabajo puede no corresponder: depende de los umbrales del ejercicio. Si corresponde, se resta a continuación para llegar al rendimiento neto reducido."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Restar gastos que parecen razonables pero no están en la lista, como los suministros del hogar o el teléfono. Solo valen los que enumera la ley."
      },
      {
        "kind": "consejo",
        "text": "Antes de aplicar los 2.000 € de otros gastos, comprueba que no excedan el rendimiento íntegro menos el resto de gastos."
      },
      {
        "kind": "clave",
        "text": "Neto = íntegro − gastos. Gastos: lista cerrada, y 2.000 € de otros gastos. La reducción por rendimientos del trabajo depende de umbrales del ejercicio."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, arts. 17 a 20"
    ],
    "sources": [
      {
        "title": "DGT: consulta vinculante V2214/2024, gastos deducibles del trabajo",
        "url": "https://fiscal-impuestos.com/sites/fiscal-impuestos.com/files/V2214-2024.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Fiscal Impuestos: rendimientos del trabajo, gastos deducibles",
        "url": "https://www.fiscal-impuestos.com/node/16613",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Fiscal Impuestos: gastos deducibles del trabajo y otros gastos",
        "url": "https://www.fiscal-impuestos.com/sites/fiscal-impuestos.com/files/NFC079814.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "INEAF: rendimientos del trabajo en el IRPF",
        "url": "https://www.ineaf.es/tribuna/rendimientos-del-trabajo-en-el-irpf/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Ayuda T Pymes: rendimientos del trabajo",
        "url": "https://ayudatpymes.com/gestron/rendimientos-del-trabajo",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.2-1",
        "lessonId": "x5-2",
        "kind": "choice",
        "prompt": "El rendimiento neto del trabajo es:",
        "answer": 0,
        "explain": "Art. 19 de la Ley del IRPF.",
        "options": [
          "El rendimiento íntegro menos los gastos deducibles",
          "El importe de la nómina líquida",
          "El bruto más las cotizaciones",
          "El rendimiento íntegro por el tipo"
        ]
      },
      {
        "id": "c5.2-2",
        "lessonId": "x5-2",
        "kind": "number",
        "prompt": "¿Cuántos euros anuales se pueden deducir como «otros gastos» con carácter general?",
        "answer": 2000,
        "explain": "Con el límite del rendimiento íntegro menos el resto de gastos.",
        "unit": "€"
      },
      {
        "id": "c5.2-3",
        "lessonId": "x5-2",
        "kind": "tf",
        "prompt": "Los gastos deducibles del rendimiento del trabajo son una lista abierta: se puede restar cualquier gasto razonable.",
        "answer": false,
        "explain": "La lista es cerrada: solo los que enumera la ley."
      },
      {
        "id": "c5.2-4",
        "lessonId": "x5-2",
        "kind": "number",
        "prompt": "Rendimiento íntegro de 24.000 €, cotizaciones de 1.600 €, cuotas sindicales de 100 € y 2.000 € de otros gastos. ¿Cuál es el rendimiento neto?",
        "answer": 20300,
        "explain": "24.000 − 1.600 − 100 − 2.000 = 20.300 €.",
        "unit": "€"
      }
    ]
  },
  "x5-3": {
    "intro": "Marta alquila un piso que heredó y además cobra intereses de un depósito y dividendos de unas acciones. ¿Cómo tributa cada cosa en el IRPF? Son rendimientos del capital: inmobiliario el alquiler, mobiliario los intereses y dividendos. Cada uno tiene reglas de cálculo propias y se integra en una base distinta. Los porcentajes y reducciones son los de la campaña de Renta 2025 y se indica siempre dónde confirmarlos.",
    "steps": [
      {
        "title": "Capital inmobiliario: el alquiler",
        "body": [
          "Los rendimientos derivados del arrendamiento de una vivienda son rendimientos del capital inmobiliario, salvo que el arrendamiento constituya una actividad económica. Para que lo sea se necesita, en general, una persona empleada con contrato laboral y a jornada completa dedicada a la actividad (art. 27.2).",
          "Rendimiento neto previo = ingresos íntegros − gastos deducibles. Los gastos deducibles y la amortización se regulan en el art. 23.1 de la Ley del IRPF y en los arts. 13 y 14 de su Reglamento."
        ]
      },
      {
        "title": "Reducciones por alquiler de vivienda (art. 23.2)",
        "body": [
          "La Ley 12/2023, por el derecho a la vivienda, introdujo para contratos de arrendamiento de vivienda celebrados a partir del 26 de mayo de 2023 un sistema de reducciones sobre el rendimiento neto positivo: 90 %, 70 %, 60 % o 50 %.",
          "El 90 % se aplica, con los requisitos de la ley, al celebrar un nuevo contrato en una zona de mercado residencial tensionado. Según una consulta de la DGT, puede mantenerse durante la vigencia del contrato mientras se cumplan los requisitos.",
          "El 70 % se reserva a supuestos como el alquiler a jóvenes en determinadas condiciones o el alquiler social. El 60 % incluye las viviendas rehabilitadas en los dos años anteriores a la celebración del contrato.",
          "El 50 % es la reducción residual para los contratos posteriores al 26 de mayo de 2023 que no cumplan los requisitos de las anteriores. Para contratos anteriores a esa fecha se mantiene la reducción del 60 % de la normativa anterior.",
          "Si el rendimiento neto es negativo, no hay reducción, pero la pérdida se compensa con otros rendimientos del capital inmobiliario del mismo ejercicio."
        ]
      },
      {
        "title": "Inmuebles que no se alquilan",
        "body": [
          "Si el inmueble no está alquilado ni es la vivienda habitual, existe una imputación de rentas inmobiliarias. Esta imputación no cabe cuando el inmueble es la vivienda habitual (art. 85)."
        ]
      },
      {
        "title": "Capital mobiliario: intereses y dividendos",
        "body": [
          "Son rendimientos del capital mobiliario los que se obtienen por bienes y derechos que no son inmuebles: intereses de cuentas, depósitos y bonos, dividendos, seguros de vida de ahorro y otros.",
          "Los intereses y dividendos tributan en la base imponible del ahorro. Normalmente el pagador practica una retención del 19 %.",
          "Los gastos deducibles en este caso se limitan a los de administración y depósito de valores negociables."
        ]
      },
      {
        "title": "La escala de la base del ahorro (Renta 2025)",
        "body": [
          "19 % hasta 6.000 €. 21 % de 6.000 a 50.000 €. 23 % de 50.000 a 200.000 €. 27 % de 200.000 a 300.000 €. 30 % por encima de 300.000 €.",
          "El tipo del 30 % es nuevo para 2025: hasta 2024 el último tramo era del 28 %.",
          "Cada tipo se aplica solo a la parte de la base que cae en su tramo. Por ejemplo, con 10.000 € se aplica un 19 % a los primeros 6.000 € y un 21 % a los 4.000 € restantes."
        ]
      }
    ],
    "example": {
      "title": "El alquiler y el ahorro de Marta (cifras ilustrativas)",
      "body": [
        "Alquiler: ingresos de 14.400 € y gastos deducibles de 4.200 €. Rendimiento neto previo: 10.200 €.",
        "Si el contrato entra en el supuesto general del 50 %: reducción de 5.100 € y rendimiento neto reducido de 5.100 €. Si cumpliera los requisitos del 90 %: reducción de 9.180 € y rendimiento neto reducido de 1.020 €.",
        "Ahorro: intereses de 3.000 € y dividendos de 4.000 €, sin otros gastos. Base del ahorro: 7.000 €.",
        "Cuota: 6.000 × 19 % = 1.140 € más 1.000 × 21 % = 210 €. Total: 1.350 €, antes de descontar las retenciones ya practicadas."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar automáticamente una reducción alta al alquiler. Hay que comprobar la fecha del contrato y los requisitos de cada porcentaje."
      },
      {
        "kind": "consejo",
        "text": "Antes de calcular el alquiler, pide el contrato, las fechas y el listado de gastos. Los requisitos de la reducción dependen de datos del contrato."
      },
      {
        "kind": "clave",
        "text": "Alquiler: reducciones del 90, 70, 60 y 50 % según el caso. Ahorro 2025: 19, 21, 23, 27 y 30 %."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, arts. 22 a 27 y 85",
      "Ley 12/2023, de 24 de mayo, por el derecho a la vivienda"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico de Renta 2025, rendimiento neto reducido del capital inmobiliario",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c04-rendimientos-capital-inmobiliario/rendimiento-neto-reducido.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "DGT: consulta vinculante V0412/2025, reducción del 50 %",
        "url": "https://www.fiscal-impuestos.com/sites/fiscal-impuestos.com/files/V0412-2025.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Primera Lectura: la reducción del 90 % puede mantenerse más allá del primer año (consulta V1828-25)",
        "url": "https://primeralecturaediciones.com/consultas/archivo/la-reduccion-del-90-por-alquiler-en-zona-tensionada-puede-mantenerse-mas-alla-del-primer-ano/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Primera Lectura: reducciones en el IRPF de los arrendamientos según fecha del contrato",
        "url": "https://primeralecturaediciones.com/documentos_diana/boletines/2024/ENERO/MONOGRAFICO_Reducciones_IRPF_arrendamientos_seg%C3%BAn_fecha.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "CNMV: guía de fiscalidad de los fondos de inversión 2026",
        "url": "https://internet.cnmv.es/DocPortal/Publicaciones/Guias/GuiaFiscalidadFondosInversion2026.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "BBVA Mi Jubilación: escala de la base del ahorro 2025",
        "url": "https://www.bbvamijubilacion.es/blog/cuidado-con-los-gastos-hormiga-y-con-los-gastos-vampiro/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Taxdown: rendimientos del capital mobiliario",
        "url": "https://taxdown.es/taxductor/rendimientos-capital-mobiliario",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Fiscal Impuestos: rendimientos del capital mobiliario",
        "url": "https://www.fiscal-impuestos.com/node/16617",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.3-1",
        "lessonId": "x5-3",
        "kind": "number",
        "prompt": "Ingresos de alquiler de 14.400 € y gastos de 4.200 €. ¿Cuál es el rendimiento neto previo?",
        "answer": 10200,
        "explain": "14.400 − 4.200 = 10.200 €.",
        "unit": "€"
      },
      {
        "id": "c5.3-2",
        "lessonId": "x5-3",
        "kind": "number",
        "prompt": "Un rendimiento neto de 10.200 € con reducción del 50 %. ¿Cuál es el rendimiento neto reducido?",
        "answer": 5100,
        "explain": "10.200 × 50 % = 5.100 €.",
        "unit": "€"
      },
      {
        "id": "c5.3-3",
        "lessonId": "x5-3",
        "kind": "choice",
        "prompt": "Intereses y dividendos tributan en el IRPF en:",
        "answer": 0,
        "explain": "Normalmente con una retención del 19 %.",
        "options": [
          "La base imponible del ahorro",
          "La base imponible general exclusivamente",
          "El Impuesto sobre Sociedades",
          "No tributan"
        ]
      },
      {
        "id": "c5.3-4",
        "lessonId": "x5-3",
        "kind": "number",
        "prompt": "Base del ahorro de 7.000 €: 6.000 € al 19 % y el resto al 21 %. ¿Cuál es la cuota?",
        "answer": 1350,
        "explain": "1.140 + 210 = 1.350 €.",
        "unit": "€"
      }
    ]
  },
  "x5-4": {
    "intro": "Marta es autónoma y quiere saber cómo se calcula el beneficio sobre el que paga IRPF. No es el dinero cobrado, ni el beneficio contable: es el rendimiento neto de su actividad económica, que se determina por uno de tres métodos. Esta lección presenta los tres, sus umbrales de acceso y el cálculo de la estimación directa simplificada, que es la más habitual. Los porcentajes y límites son los de la campaña de Renta 2025 y se confirman cada año.",
    "steps": [
      {
        "title": "Tres métodos de determinación",
        "body": [
          "Estimación directa, en su modalidad normal o simplificada, y estimación objetiva, conocida como módulos.",
          "En la directa, el rendimiento se calcula restando los gastos deducibles a los ingresos íntegros. En la objetiva, se calcula con signos, índices y módulos fijados por orden ministerial."
        ]
      },
      {
        "title": "Estimación directa simplificada",
        "body": [
          "Se aplica a las actividades cuyo importe neto de la cifra de negocios, para el conjunto de las actividades del contribuyente, no supere los 600.000 € en el año inmediato anterior, salvo que se haya renunciado a ella.",
          "Si se supera esa cifra, o si se renuncia, se tributa en estimación directa normal.",
          "Esquema de cálculo: ingresos íntegros − gastos deducibles (excepto provisiones y amortizaciones) − amortizaciones según tabla simplificada = diferencia. Después, provisiones deducibles y gastos de difícil justificación: 5 % de la diferencia, con un límite de 2.000 €. El resultado es el rendimiento neto.",
          "Cuando se aplica la reducción prevista para autónomos con un único cliente, no se aplica el 5 % de provisiones y gastos de difícil justificación.",
          "En la campaña de Renta 2024 el porcentaje fue del 7 % con el mismo límite de 2.000 €: comprueba siempre el del ejercicio."
        ]
      },
      {
        "title": "Estimación directa normal",
        "body": [
          "Es obligatoria para quienes superan los 600.000 € de cifra de negocios o renuncian a la simplificada. Exige llevar contabilidad ajustada al Código de Comercio y no permite el 5 % de gastos de difícil justificación."
        ]
      },
      {
        "title": "Estimación objetiva (módulos)",
        "body": [
          "Solo está disponible para las actividades que lista la orden anual. Para aplicarla, el volumen de rendimientos íntegros del año anterior no puede superar 250.000 € para el conjunto de actividades, ni 125.000 € por operaciones con obligación de expedir factura a empresarios o profesionales. Las compras de bienes y servicios no pueden superar 250.000 €.",
          "La renuncia a la estimación objetiva del IRPF implica la renuncia al régimen simplificado del IVA (lección [[x4-7]])."
        ]
      },
      {
        "title": "Reducciones sobre el rendimiento neto",
        "body": [
          "Tras el rendimiento neto se pueden aplicar reducciones previstas por la ley. La Agencia Tributaria recoge, entre otras: la del 30 % por rendimientos con periodo de generación superior a dos años, la de autónomos económicamente dependientes o con un único cliente, la de contribuyentes con rentas no exentas inferiores a 12.000 €, y la de inicio de actividad.",
          "Cada una tiene sus requisitos y límites, y han cambiado en los últimos ejercicios. Consulta el manual del año."
        ]
      },
      {
        "title": "Pagos a cuenta durante el año",
        "body": [
          "Los autónomos en estimación directa presentan trimestralmente pagos fraccionados con el modelo 130, salvo que una parte relevante de sus ingresos esté sujeta a retención. En estimación objetiva se usa el modelo 131."
        ]
      }
    ],
    "example": {
      "title": "El beneficio fiscal de Marta (cifras ilustrativas)",
      "body": [
        "Ingresos íntegros del año: 60.000 €.",
        "Gastos deducibles, sin contar amortizaciones: 18.000 €. Amortizaciones según la tabla simplificada: 2.000 €.",
        "Diferencia: 60.000 − 18.000 − 2.000 = 40.000 €.",
        "Provisiones y gastos de difícil justificación al 5 %: 2.000 € (alcanza justo el límite).",
        "Rendimiento neto: 40.000 − 2.000 = 38.000 €. Es la cifra que, antes de reducciones, se integra en la base general del IRPF."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Pensar que el rendimiento neto es el dinero cobrado menos el pagado. Las amortizaciones y los gastos de difícil justificación se calculan con reglas propias."
      },
      {
        "kind": "consejo",
        "text": "Guarda las facturas de gasto y el libro registro de ingresos y gastos al día: la estimación directa depende de ellos."
      },
      {
        "kind": "clave",
        "text": "Simplificada: hasta 600.000 € de cifra de negocios, 5 % con tope 2.000 € de difícil justificación. Módulos: 250.000 / 125.000 / 250.000 €."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, régimen de estimación directa y objetiva",
      "Reglamento del IRPF, arts. 28 y siguientes"
    ],
    "sources": [
      {
        "title": "AEAT: Modelo 100 de Renta 2025, estimación directa normal y simplificada",
        "url": "https://sede.agenciatributaria.gob.es/Sede/Ayuda/25Presentacion/100/7_4_2.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: ámbito de aplicación de la modalidad normal (Manual de Renta 2025)",
        "url": "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c07-rendimientos-actividades-economicas-estimacion-directa/concepto-ambito-aplicacion-metodo-estimacion-directa/ambito-aplicacion-modalidad-normal.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: ponencia sobre fiscalidad de autónomos, esquema de la simplificada",
        "url": "https://redpac.es/sites/default/files/documents/Ponencia_de_la_AEAT_sobre_entidades_de_TCS.pdf.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "UC3M: guía sobre la fiscalidad para el autónomo",
        "url": "https://www.uc3m.es/uc3m/media/uc3m/doc/archivo/doc_guia-sobre-la-fiscalidad-del-autonomo/guia-sobre-la-fiscalidad-para-el-autonomo-1.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Invoo: estimación directa frente a objetiva",
        "url": "https://invoo.es/es/blog/formacion/estimacion-directa-vs-objetiva-modulos/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "UATAE: novedades fiscales 2024, prórroga de módulos y gastos de difícil justificación",
        "url": "https://www.nuevatribuna.es/media/nuevatribuna/files/2024/04/05/NovedadesFiscales.pdf",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.4-1",
        "lessonId": "x5-4",
        "kind": "number",
        "prompt": "¿Cuál es el límite de cifra de negocios del año anterior, en euros, para la estimación directa simplificada?",
        "answer": 600000,
        "explain": "Por encima, o con renuncia, se aplica la estimación directa normal.",
        "unit": "€"
      },
      {
        "id": "c5.4-2",
        "lessonId": "x5-4",
        "kind": "number",
        "prompt": "En la campaña de Renta 2025, ¿qué porcentaje de provisiones y gastos de difícil justificación se aplica en estimación directa simplificada?",
        "answer": 5,
        "explain": "Con un límite de 2.000 €.",
        "unit": "%"
      },
      {
        "id": "c5.4-3",
        "lessonId": "x5-4",
        "kind": "number",
        "prompt": "Diferencia de 40.000 € en estimación directa simplificada. ¿Cuál es el rendimiento neto tras el 5 % de gastos de difícil justificación con tope de 2.000 €?",
        "answer": 38000,
        "explain": "5 % de 40.000 = 2.000 €, justo el límite.",
        "unit": "€"
      },
      {
        "id": "c5.4-4",
        "lessonId": "x5-4",
        "kind": "tf",
        "prompt": "La estimación objetiva está disponible para cualquier actividad económica.",
        "answer": false,
        "explain": "Solo para las actividades que lista la orden anual."
      }
    ]
  },
  "x5-5": {
    "intro": "Marta vende unas acciones con beneficio y otras con pérdida, y piensa vender su piso. Todo eso son ganancias y pérdidas patrimoniales: variaciones en el valor del patrimonio que se ponen de manifiesto con una alteración patrimonial, como una venta. Esta lección explica cómo se calculan, dónde se integran, cómo se compensan y qué ventas de la vivienda habitual pueden quedar exentas. Los tipos y límites son los de la Renta 2025.",
    "steps": [
      {
        "title": "El cálculo básico",
        "body": [
          "Ganancia o pérdida = valor de transmisión − valor de adquisición.",
          "El valor de adquisición incorpora el importe real de la compra, el coste de las inversiones y mejoras y los gastos y tributos inherentes a la adquisición satisfechos por el adquirente.",
          "Las ganancias y pérdidas derivadas de la transmisión de elementos patrimoniales, como un inmueble o acciones, se integran en la base imponible del ahorro y tributan con la escala del ahorro de 19 % a 30 % (lección [[x5-3]])."
        ]
      },
      {
        "title": "Compensación de pérdidas",
        "body": [
          "Las pérdidas patrimoniales por transmisiones en la base del ahorro se compensan con las ganancias del mismo ejercicio. Si queda un saldo negativo, puede compensarse en los cuatro ejercicios siguientes.",
          "El saldo negativo de ganancias y pérdidas puede compensarse además con los rendimientos del capital mobiliario con el límite del 25 % del saldo positivo, y viceversa.",
          "Para que una pérdida sea válida debe haber una transmisión real y no estar afectada por reglas especiales, como la norma antiaplicación: si recompras valores homogéneos antes de dos meses, la pérdida no se computa en ese momento."
        ]
      },
      {
        "title": "Exenciones sobre la vivienda habitual",
        "body": [
          "Exención por reinversión: la ganancia obtenida en la venta de la vivienda habitual queda exenta si el importe total obtenido se reinvierte en la adquisición de una nueva vivienda habitual en el plazo de dos años (art. 38).",
          "Exención por edad: la ganancia derivada de la transmisión de la vivienda habitual por mayores de 65 años está exenta sin necesidad de reinvertir. También existe para personas en situación de dependencia severa o gran dependencia.",
          "Renta vitalicia: la ganancia por la venta de otros elementos patrimoniales por mayores de 65 años puede quedar exenta si se reinvierte en una renta vitalicia asegurada en el plazo de seis meses, con un máximo de 240.000 €."
        ]
      },
      {
        "title": "Dónde se declara",
        "body": [
          "Las ganancias y pérdidas por transmisiones de elementos patrimoniales, como inmuebles y acciones, se declaran en subapartados específicos del modelo 100, y si hay una vivienda con reinversión se necesitan datos adicionales: fechas, importes y gastos."
        ]
      },
      {
        "title": "Errores habituales",
        "body": [
          "No incluir en el valor de adquisición las mejoras y los gastos inherentes. No aplicar una exención que procede. Confundir la base del ahorro con la base general, pues las ganancias por transmisión van a la del ahorro."
        ]
      }
    ],
    "example": {
      "title": "Dos ventas de Marta (cifras ilustrativas)",
      "body": [
        "Vende unas acciones por 14.000 €. Su valor de adquisición, con los gastos inherentes, es de 10.050 €. Ganancia: 3.950 €.",
        "Vende otras acciones con una pérdida de 2.000 €. Saldo neto de la base del ahorro: 3.950 − 2.000 = 1.950 €.",
        "Cuota al 19 % (el primer tramo de la escala): 1.950 × 19 % = 370,50 €.",
        "Vende su vivienda habitual con una ganancia. Si reinvierte el importe total obtenido en otra vivienda habitual en el plazo de dos años, la ganancia queda exenta. Si tuviese más de 65 años, estaría exenta aunque no reinvirtiese."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Contar solo el precio de compra como valor de adquisición. Las mejoras y los gastos inherentes también cuentan."
      },
      {
        "kind": "consejo",
        "text": "Antes de vender una vivienda habitual, comprueba si se cumple una exención y reúne escrituras, gastos y fechas. Ahorras tiempo al declarar."
      },
      {
        "kind": "clave",
        "text": "Ganancia = transmisión − adquisición. Base del ahorro, 19 a 30 %. Compensación en cuatro años. Exención de vivienda: reinversión en dos años o mayor de 65 años."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, arts. 33 a 39 y 49",
      "Ley 7/2024 (escala del ahorro)"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico de Renta 2025, ganancias y pérdidas patrimoniales, caso práctico",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c11-ganancias-perdidas-patrimoniales/caso-practico.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: Manual práctico de Renta 2023, exención por reinversión en vivienda habitual",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2023/c11-ganancias-perdidas-patrimoniales/ganancias-excluidas-gravamen-supuestos-reinversion/transmision-vivienda-habitual-reinversion-importe/exencion.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: Manual práctico de Patrimonio 2025, compensación de saldos de la base del ahorro",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/patrimonio-2025/c-5-determinacion-cuota-ingresar/limite-cuota-integra-cuota-minima-patrimonio/reglas.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "AEAT: modelo de datos para transmisión de inmuebles, Renta 2025",
        "url": "https://sede.agenciatributaria.gob.es/static_files/Sede/Renta_ejercicios_anteriores/2025/Cita_previa/Modelo_datos_transmision_inmuebles_2025.pdf",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "DGT: consulta vinculante V2215/2024, exención por reinversión",
        "url": "https://fiscal-impuestos.com/sites/fiscal-impuestos.com/files/V2215-2024_0.pdf",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "OCU: cómo tributa la venta de una vivienda",
        "url": "https://www.ocu.org/fincas-y-casas/gestion/fiscalidad/analisis/2021/04/irpf-venta-de-vivienda",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Finect: compensar pérdidas con ganancias en la Renta 2025",
        "url": "https://www.finect.com/usuario/Josetrecet/articulos/compensar-perdidas-ganancias-declaracion-renta-que-puedes-que",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Guía Fiscal: glosario de ganancia patrimonial",
        "url": "https://guiafiscal.es/glosario/ganancia-patrimonial/",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.5-1",
        "lessonId": "x5-5",
        "kind": "number",
        "prompt": "Valor de transmisión de 14.000 € y valor de adquisición de 10.050 €. ¿Cuál es la ganancia?",
        "answer": 3950,
        "explain": "14.000 − 10.050 = 3.950 €.",
        "unit": "€"
      },
      {
        "id": "c5.5-2",
        "lessonId": "x5-5",
        "kind": "number",
        "prompt": "Un saldo neto de 1.950 € en la base del ahorro, con un tipo del 19 % en su primer tramo. ¿Cuál es la cuota?",
        "answer": 370.5,
        "explain": "1.950 × 0,19 = 370,50 €.",
        "unit": "€",
        "tolerance": 0.01
      },
      {
        "id": "c5.5-3",
        "lessonId": "x5-5",
        "kind": "tf",
        "prompt": "La venta de la vivienda habitual por una persona mayor de 65 años queda exenta, sin necesidad de reinvertir.",
        "answer": true,
        "explain": "Es una exención del art. 33.4.b de la Ley del IRPF."
      },
      {
        "id": "c5.5-4",
        "lessonId": "x5-5",
        "kind": "number",
        "prompt": "¿En cuántos años, desde la transmisión, debe reinvertirse el importe total obtenido de la vivienda habitual en otra vivienda habitual para la exención por reinversión?",
        "answer": 2,
        "explain": "Es el plazo previsto en el art. 38.",
        "unit": "años"
      }
    ]
  },
  "x5-6": {
    "intro": "Ya sabes calcular cada tipo de renta. Falta unirlas: ¿cómo se pasa de todas las rentas del año a la cantidad que Marta paga o le devuelven? Esta lección recorre el camino completo del IRPF: bases, reducciones, mínimo personal y familiar, escala, cuota y resultado. Los importes son los de la campaña de Renta 2025, presentada en 2026.",
    "steps": [
      {
        "title": "Dos bases",
        "body": [
          "En la base imponible general se integran, entre otras, los rendimientos del trabajo, los de actividades económicas, el alquiler y las ganancias que no deriven de transmisiones.",
          "En la base imponible del ahorro se integran los intereses, los dividendos y las ganancias y pérdidas por transmisiones (lecciones [[x5-3]] y [[x5-5]]).",
          "Las reducciones por circunstancias personales, como las aportaciones a sistemas de previsión social, minoran las bases y tienen sus propios límites. Consulta el manual de Renta del año."
        ]
      },
      {
        "title": "El mínimo personal y familiar",
        "body": [
          "Es la parte de la renta que no se grava porque se considera necesaria para cubrir necesidades básicas. Se aplica sobre la cuota: se calcula el impuesto de la base completa y se resta el impuesto que correspondería al mínimo.",
          "Mínimo del contribuyente: 5.550 € anuales, que aumentan en 1.150 € para mayores de 65 años y en otros 1.400 € para mayores de 75.",
          "Por descendientes: 2.400 € por el primero, 2.700 € por el segundo, 4.000 € por el tercero y 4.500 € por el cuarto y siguientes. Se añaden 2.800 € por cada hijo menor de 3 años.",
          "Para aplicarlo, los descendientes deben ser menores de 25 años, convivir con el contribuyente y no tener rentas anuales superiores a 8.000 €. Existen también mínimos por ascendientes y por discapacidad."
        ]
      },
      {
        "title": "La escala general",
        "body": [
          "La escala estatal y la autonómica se suman. Con la escala de referencia, los tipos combinados de la base general son: 19 % hasta 12.450 €, 24 % hasta 20.200 €, 30 % hasta 35.200 €, 37 % hasta 60.000 €, 45 % hasta 300.000 € y 47 % por encima.",
          "La parte estatal es 9,5 %, 12 %, 15 %, 18,5 %, 22,5 % y 24,5 %. Cada comunidad autónoma puede aprobar su propia escala, de modo que el resultado real depende de dónde se resida.",
          "Cada tipo se aplica solo a la parte de la base que cae dentro de su tramo."
        ]
      },
      {
        "title": "La escala del ahorro",
        "body": [
          "Desde 2025 la escala estatal del ahorro es 19 %, 21 %, 23 %, 27 % y 30 %, según la lección [[x5-3]]. Se aplica a la base liquidable del ahorro."
        ]
      },
      {
        "title": "De la cuota íntegra al resultado",
        "body": [
          "Cuota íntegra: la suma de las cuotas de las dos bases. Menos el mínimo personal y familiar y las deducciones estatales y autonómicas, queda la cuota líquida.",
          "Cuota diferencial = cuota líquida − retenciones y pagos a cuenta ya realizados. Si es positiva, se ingresa; si es negativa, se devuelve.",
          "El resultado a ingresar se puede dividir: el 60 % al presentar y el 40 % restante hasta el 5 de noviembre (el 2 de noviembre si se domicilia)."
        ]
      },
      {
        "title": "El modelo 100 y el calendario de Renta 2025",
        "body": [
          "La declaración se presenta con el modelo 100, por internet con Renta WEB, entre el 8 de abril y el 30 de junio de 2026. También hay presentación por teléfono y presencial en fechas posteriores.",
          "Si el resultado es a ingresar y se domicilia, hay que presentar hasta el 25 de junio y el cargo es el 30 de junio.",
          "La AEAT ha ampliado el servicio de presentación inmediata «Renta Directa» y ha añadido casillas para la regularización de la cuota de autónomos."
        ]
      }
    ],
    "example": {
      "title": "Una declaración sencilla (cifras ilustrativas)",
      "body": [
        "Una contribuyente soltera, sin hijos, tiene una base liquidable general de 50.000 €.",
        "Cuota íntegra con la escala combinada de referencia: 12.450 × 19 % = 2.365,50; 7.750 × 24 % = 1.860; 15.000 × 30 % = 4.500; 14.800 × 37 % = 5.476. Total: 14.201,50 €.",
        "Cuota del mínimo personal: 5.550 × 19 % = 1.054,50 €.",
        "Cuota líquida: 14.201,50 − 1.054,50 = 13.147 €. Si le retuvieron 12.000 €, la cuota diferencial es 1.147 € a ingresar."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Aplicar el tipo del último tramo a toda la base. Cada tipo solo grava la parte de la base que está dentro de su tramo."
      },
      {
        "kind": "consejo",
        "text": "Antes de calcular, confirma la comunidad autónoma de residencia: su escala puede diferir de la de referencia."
      },
      {
        "kind": "clave",
        "text": "Mínimo personal 5.550 €. Descendientes: 2.400, 2.700, 4.000 y 4.500 €. Plazo de Renta 2025: 8 de abril al 30 de junio de 2026."
      }
    ],
    "law": [
      "Ley 35/2006, del IRPF, arts. 56 a 66 y 76",
      "Ley 7/2024 (escala del ahorro)"
    ],
    "sources": [
      {
        "title": "AEAT: Manual práctico de Renta 2025, mínimo del contribuyente",
        "url": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-contribuyente.html",
        "accessed": "2026-10-25",
        "official": true
      },
      {
        "title": "Fiscal Impuestos: mínimo personal y familiar",
        "url": "https://www.fiscal-impuestos.com/guia-fiscal-capitulo-3-irpf-minimo-personal-familiar",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Gestoría 247: declaración de la Renta 2025, fechas y novedades según la AEAT",
        "url": "https://gestoria247.com/blog/declaracion-de-la-renta-2025",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Raisin: tramos del IRPF 2025-2026",
        "url": "https://www.raisin.com/es-es/tributacion/declaracion-de-la-renta/tramos-irpf/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Taxdown: tabla y tramos del IRPF actualizados",
        "url": "https://taxdown.es/irpf/tabla-tramos",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Bankinter: mínimo familiar y personal, Renta 2025",
        "url": "https://www.bankinter.com/blog/lo-ultimo/renta-minimo-familiar-personal",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Menorca.info: mínimo por descendientes, Renta 2025",
        "url": "https://www.menorca.info/actualidad/dudas-respuestas/2026/05/02/2616161/renta-2025-tienes-hijos-menores-anos-puedes-desgravar-hasta-4500-euros.html",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.6-1",
        "lessonId": "x5-6",
        "kind": "number",
        "prompt": "¿Cuál es el mínimo del contribuyente, en euros anuales, con carácter general?",
        "answer": 5550,
        "explain": "Aumenta en 1.150 € para mayores de 65 años y en otros 1.400 € para mayores de 75.",
        "unit": "€"
      },
      {
        "id": "c5.6-2",
        "lessonId": "x5-6",
        "kind": "number",
        "prompt": "¿Cuánto es el mínimo por el segundo descendiente, en euros?",
        "answer": 2700,
        "explain": "El primero es 2.400 €, el tercero 4.000 € y el cuarto y siguientes 4.500 €.",
        "unit": "€"
      },
      {
        "id": "c5.6-3",
        "lessonId": "x5-6",
        "kind": "number",
        "prompt": "Con la escala de referencia, ¿qué tipo combinado se aplica a los primeros 12.450 € de la base general?",
        "answer": 19,
        "explain": "Se compone de un 9,5 % estatal y un 9,5 % autonómico.",
        "unit": "%"
      },
      {
        "id": "c5.6-4",
        "lessonId": "x5-6",
        "kind": "number",
        "prompt": "Cuota líquida de 13.147 € y retenciones de 12.000 €. ¿Cuál es la cuota diferencial a ingresar?",
        "answer": 1147,
        "explain": "13.147 − 12.000 = 1.147 €.",
        "unit": "€"
      }
    ]
  },
  "x5-7": {
    "intro": "Marta paga a un abogado una factura de asesoría y alquila un local para su taller. En ambos casos no debe pagar el total al proveedor: retiene una parte y la ingresa en Hacienda como pago a cuenta del IRPF de quien cobra. En esta lección ves quién retiene, a qué tipo, y qué modelos se presentan: el 111, el 115 y sus resúmenes anuales, el 190 y el 180.",
    "steps": [
      {
        "title": "Qué es una retención",
        "body": [
          "Es un pago a cuenta del IRPF de quien cobra, que ingresa el pagador. El pagador es un obligado a realizar pagos a cuenta, un retenedor (lección [[x4-3]]).",
          "Se calcula sobre la base de la factura, sin incluir el IVA, y se descuenta de lo que se paga al perceptor."
        ]
      },
      {
        "title": "Modelo 111: trabajo y profesionales",
        "body": [
          "Recoge las retenciones e ingresos a cuenta sobre rendimientos del trabajo, actividades profesionales y otras rentas, como determinados premios.",
          "Plazos trimestrales: del 1 al 20 de abril, julio y octubre, y del 1 al 20 de enero para el cuarto trimestre. Si el pago se domicilia, el plazo termina el día 15.",
          "Algunos obligados, por ejemplo grandes empresas, presentan mensualmente, entre el 1 y el 20 del mes siguiente.",
          "Tipo habitual en actividades profesionales: 15 %. Se reduce al 7 % para determinadas actividades profesionales y para quienes inician una actividad profesional, en el año de inicio y los dos siguientes. Para las nóminas, el tipo sale del cálculo del trabajador (lección [[2.11]])."
        ]
      },
      {
        "title": "Modelo 115: alquileres",
        "body": [
          "Recoge las retenciones por arrendamiento o subarrendamiento de inmuebles urbanos, como locales, oficinas y naves, en los que se desarrolla una actividad.",
          "Se presenta en los mismos plazos que el 111. El tipo general es el 19 %."
        ]
      },
      {
        "title": "Modelos 190 y 180: los resúmenes anuales",
        "body": [
          "El modelo 190 es el resumen anual de las retenciones declaradas en el 111, con el detalle por perceptor: NIF, datos personales, importes y retenciones.",
          "El modelo 180 es el resumen anual de las retenciones declaradas en el 115.",
          "Ambos se presentan del 1 al 31 de enero del año siguiente. Son informativos: no llevan pago, pero su presentación fuera de plazo se sanciona."
        ]
      },
      {
        "title": "Errores habituales",
        "body": [
          "Aplicar el porcentaje sobre el total de la factura en lugar de sobre la base sin IVA.",
          "Mezclar las claves de rendimientos del trabajo con las de actividades profesionales en el modelo 111.",
          "Olvidar la retención del alquiler del local y su modelo 115."
        ]
      }
    ],
    "example": {
      "title": "Dos pagos de Marta (cifras ilustrativas)",
      "body": [
        "Un abogado le factura 1.000 € de base más 210 € de IVA. Retención del 15 % sobre la base: 150 €. Marta paga al abogado 1.210 − 150 = 1.060 € e ingresa 150 € con el modelo 111.",
        "Marta paga el alquiler del local: 1.000 € al mes. En el trimestre, la base de retenciones es 3.000 €. Retención del 19 %: 570 € a ingresar con el modelo 115.",
        "En enero presenta el 190 con el detalle del abogado y el 180 con el del arrendador."
      ]
    },
    "tips": [
      {
        "kind": "error",
        "text": "Retener sobre el total de la factura, con IVA. La base de la retención es el importe sin IVA."
      },
      {
        "kind": "consejo",
        "text": "Guarda por perceptor las facturas y el certificado de retenciones. El 190 y el 180 deben cuadrar con los 111 y 115 del año."
      },
      {
        "kind": "clave",
        "text": "111 y 115: 1 al 20 de abril, julio, octubre y enero. 190 y 180: 1 al 31 de enero. Profesionales: 15 % (7 % al inicio). Alquileres: 19 %."
      }
    ],
    "law": [
      "Ley 35/2006 y Reglamento del IRPF, retenciones e ingresos a cuenta",
      "Orden de aprobación del modelo 111, del modelo 115, del modelo 190 y del modelo 180"
    ],
    "sources": [
      {
        "title": "Guía Fiscal: modelo 111 paso a paso 2026",
        "url": "https://guiafiscal.es/irpf/modelo-111-paso-a-paso/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Cegid: qué es el modelo 111",
        "url": "https://www.cegid.com/ib/es/blog/que-es-modelo-111/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Infoautónomos: modelo 115, retenciones de alquileres",
        "url": "https://www.infoautonomos.com/fiscalidad/modelo-115-irpf-alquileres/",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "INEAF: calendario del contribuyente",
        "url": "https://www.ineaf.es/glosario-juridico/calendario-del-contribuyente",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Legalitas: calendario fiscal",
        "url": "https://www.legalitas.com/actualidad/calendario-fiscal",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Billeo: modelo 190, resumen anual de retenciones",
        "url": "https://www.billeo.es/blog/modelo-190",
        "accessed": "2026-10-25",
        "official": false
      },
      {
        "title": "Asest: guía sobre las retenciones para empresarios y profesionales",
        "url": "https://asest.es/story/aeat-retener-empresario/",
        "accessed": "2026-10-25",
        "official": false
      }
    ],
    "check": [
      {
        "id": "c5.7-1",
        "lessonId": "x5-7",
        "kind": "choice",
        "prompt": "¿Qué modelo presenta las retenciones por alquileres de inmuebles urbanos?",
        "answer": 0,
        "explain": "Su resumen anual es el modelo 180.",
        "options": [
          "Modelo 115",
          "Modelo 111",
          "Modelo 190",
          "Modelo 303"
        ]
      },
      {
        "id": "c5.7-2",
        "lessonId": "x5-7",
        "kind": "number",
        "prompt": "Factura profesional de base 1.000 €. ¿Cuánto se retiene con un tipo del 15 %, en euros?",
        "answer": 150,
        "explain": "15 % de 1.000 € sin IVA.",
        "unit": "€"
      },
      {
        "id": "c5.7-3",
        "lessonId": "x5-7",
        "kind": "choice",
        "prompt": "¿Entre qué fechas se presenta el modelo 190 del año anterior?",
        "answer": 0,
        "explain": "El 180 se presenta en las mismas fechas.",
        "options": [
          "Del 1 al 31 de enero",
          "Del 1 al 20 de abril",
          "Del 1 al 30 de junio",
          "Del 1 al 28 de febrero"
        ]
      },
      {
        "id": "c5.7-4",
        "lessonId": "x5-7",
        "kind": "tf",
        "prompt": "La retención se calcula sobre el importe total de la factura, incluyendo el IVA.",
        "answer": false,
        "explain": "Se calcula sobre la base sin IVA."
      }
    ]
  },
};

export const m5Bank: Question[] = [
  {
    "id": "e5-01",
    "lessonId": "x5-1",
    "kind": "choice",
    "prompt": "¿Quiénes son contribuyentes del IRPF?",
    "answer": 0,
    "explain": "Tributan por su renta mundial.",
    "options": [
      "Las personas físicas con residencia habitual en territorio español",
      "Cualquier persona con cuenta en España",
      "Solo los españoles",
      "Solo los autónomos"
    ]
  },
  {
    "id": "e5-02",
    "lessonId": "x5-1",
    "kind": "tf",
    "prompt": "Las ausencias esporádicas se computan como días de permanencia en España, salvo que se acredite la residencia fiscal en otro país.",
    "answer": true,
    "explain": "Art. 9 de la Ley del IRPF."
  },
  {
    "id": "e5-03",
    "lessonId": "x5-1",
    "kind": "choice",
    "prompt": "¿En qué comunidad autónoma reside, como principio general, un contribuyente?",
    "answer": 0,
    "explain": "Se presume donde radica su vivienda habitual.",
    "options": [
      "En la que haya permanecido más días del periodo impositivo",
      "En la de nacimiento",
      "En la de su empleador",
      "En la que elija libremente"
    ]
  },
  {
    "id": "e5-04",
    "lessonId": "x5-1",
    "kind": "number",
    "prompt": "¿Cuál es el límite de rendimientos del trabajo para obligar a declarar a quien tiene más de un pagador y el segundo y restantes superan 1.500 €?",
    "answer": 15876,
    "explain": "Es el límite reducido de la campaña 2025.",
    "unit": "€"
  },
  {
    "id": "e5-05",
    "lessonId": "x5-1",
    "kind": "tf",
    "prompt": "Con un único pagador y 18.000 € de rendimientos del trabajo, existe obligación de declarar por ese motivo.",
    "answer": false,
    "explain": "No supera 22.000 €."
  },
  {
    "id": "e5-06",
    "lessonId": "x5-1",
    "kind": "tf",
    "prompt": "En una declaración conjunta, si cada cónyuge percibe sus ingresos de un único pagador, el límite es de 22.000 €.",
    "answer": true,
    "explain": "Así lo recoge la información oficial de la campaña."
  },
  {
    "id": "e5-07",
    "lessonId": "x5-1",
    "kind": "choice",
    "prompt": "Si el cambio de residente a no residente ocurre en el primer semestre, la fecha de efectos a efectos censales suele ser:",
    "answer": 0,
    "explain": "Y se mantiene durante todo el ejercicio fiscal.",
    "options": [
      "El 1 de enero de ese año",
      "El 1 de enero del año siguiente",
      "El 31 de diciembre",
      "La fecha del cambio exacto"
    ]
  },
  {
    "id": "e5-08",
    "lessonId": "x5-2",
    "kind": "choice",
    "prompt": "¿Qué incluyen los rendimientos íntegros del trabajo?",
    "answer": 0,
    "explain": "Excluyen lo que sean rendimientos de actividades económicas.",
    "options": [
      "Contraprestaciones dinerarias o en especie derivadas del trabajo personal o de la relación laboral",
      "Solo el salario base",
      "Solo las pagas extraordinarias",
      "Solo las horas extra"
    ]
  },
  {
    "id": "e5-09",
    "lessonId": "x5-2",
    "kind": "tf",
    "prompt": "Las retribuciones en especie se computan por su valor más el ingreso a cuenta no repercutido al perceptor.",
    "answer": true,
    "explain": "Así lo establece la normativa."
  },
  {
    "id": "e5-10",
    "lessonId": "x5-2",
    "kind": "tf",
    "prompt": "Las cotizaciones a la Seguridad Social son un gasto deducible del rendimiento del trabajo.",
    "answer": true,
    "explain": "Deben estar vinculadas a los rendimientos declarados."
  },
  {
    "id": "e5-11",
    "lessonId": "x5-2",
    "kind": "tf",
    "prompt": "Las cuotas satisfechas a sindicatos son un gasto deducible del rendimiento del trabajo.",
    "answer": true,
    "explain": "Forman parte de la lista de gastos del art. 19."
  },
  {
    "id": "e5-12",
    "lessonId": "x5-2",
    "kind": "number",
    "prompt": "¿Con qué importe adicional, en euros, pueden incrementar los otros gastos los desempleados que aceptan un trabajo en otro municipio con traslado de residencia?",
    "answer": 2000,
    "explain": "Se suma a los 2.000 € generales.",
    "unit": "€"
  },
  {
    "id": "e5-13",
    "lessonId": "x5-2",
    "kind": "tf",
    "prompt": "Los suministros de la vivienda son gasto deducible del rendimiento neto del trabajo.",
    "answer": false,
    "explain": "No están en la lista del art. 19."
  },
  {
    "id": "e5-14",
    "lessonId": "x5-2",
    "kind": "number",
    "prompt": "Rendimiento íntegro de 30.000 €, cotizaciones de 1.900 € y otros gastos de 2.000 €. ¿Cuál es el rendimiento neto?",
    "answer": 26100,
    "explain": "30.000 − 1.900 − 2.000 = 26.100 €.",
    "unit": "€"
  },
  {
    "id": "e5-15",
    "lessonId": "x5-3",
    "kind": "choice",
    "prompt": "¿Qué ley introdujo las reducciones del 90, 70, 60 y 50 % en el alquiler de vivienda para contratos desde el 26 de mayo de 2023?",
    "answer": 0,
    "explain": "Modificó el art. 23.2 de la Ley del IRPF.",
    "options": [
      "Ley 12/2023, por el derecho a la vivienda",
      "Ley 37/1992",
      "Ley 58/2003",
      "Ley 18/2022"
    ]
  },
  {
    "id": "e5-16",
    "lessonId": "x5-3",
    "kind": "tf",
    "prompt": "Si el rendimiento neto del alquiler es negativo, se aplica igualmente la reducción.",
    "answer": false,
    "explain": "No hay reducción; la pérdida se compensa con otros rendimientos del capital inmobiliario del ejercicio."
  },
  {
    "id": "e5-17",
    "lessonId": "x5-3",
    "kind": "choice",
    "prompt": "La reducción residual para contratos de vivienda posteriores al 26 de mayo de 2023 que no cumplen otros requisitos es del:",
    "answer": 0,
    "explain": "Los contratos anteriores mantienen el 60 % de la normativa previa.",
    "options": [
      "50 %",
      "60 %",
      "90 %",
      "70 %"
    ]
  },
  {
    "id": "e5-18",
    "lessonId": "x5-3",
    "kind": "tf",
    "prompt": "La reducción del 90 % se aplica a nuevos contratos en zonas de mercado residencial tensionado, con requisitos.",
    "answer": true,
    "explain": "Según la DGT, puede mantenerse durante la vigencia del contrato si se cumplen."
  },
  {
    "id": "e5-19",
    "lessonId": "x5-3",
    "kind": "choice",
    "prompt": "El tipo máximo de la escala del ahorro en Renta 2025 es:",
    "answer": 0,
    "explain": "Se aplica a la parte de la base del ahorro superior a 300.000 €.",
    "options": [
      "30 %",
      "28 %",
      "27 %",
      "21 %"
    ]
  },
  {
    "id": "e5-20",
    "lessonId": "x5-3",
    "kind": "number",
    "prompt": "Con 10.000 € de base del ahorro, aplicando 19 % a 6.000 € y 21 % al resto, ¿cuál es la cuota?",
    "answer": 1980,
    "explain": "1.140 + 840 = 1.980 €.",
    "unit": "€"
  },
  {
    "id": "e5-21",
    "lessonId": "x5-3",
    "kind": "tf",
    "prompt": "La imputación de rentas inmobiliarias no cabe cuando el inmueble es la vivienda habitual.",
    "answer": true,
    "explain": "Art. 85 de la Ley del IRPF."
  },
  {
    "id": "e5-22",
    "lessonId": "x5-4",
    "kind": "choice",
    "prompt": "¿Qué métodos de determinación del rendimiento de actividades económicas existen en el IRPF?",
    "answer": 0,
    "explain": "La directa admite dos modalidades.",
    "options": [
      "Estimación directa (normal o simplificada) y estimación objetiva",
      "Solo estimación directa",
      "Solo módulos",
      "Estimación indirecta únicamente"
    ]
  },
  {
    "id": "e5-23",
    "lessonId": "x5-4",
    "kind": "tf",
    "prompt": "En estimación directa normal se aplica el 5 % de gastos de difícil justificación.",
    "answer": false,
    "explain": "Solo se aplica en la modalidad simplificada."
  },
  {
    "id": "e5-24",
    "lessonId": "x5-4",
    "kind": "number",
    "prompt": "¿Qué límite de operaciones con obligación de factura a empresarios o profesionales, en euros, aplica a los módulos?",
    "answer": 125000,
    "explain": "El límite general de ingresos es de 250.000 €.",
    "unit": "€"
  },
  {
    "id": "e5-25",
    "lessonId": "x5-4",
    "kind": "number",
    "prompt": "¿Cuál es el límite máximo de compras de bienes y servicios, en euros, para aplicar módulos?",
    "answer": 250000,
    "explain": "Es uno de los requisitos de acceso.",
    "unit": "€"
  },
  {
    "id": "e5-26",
    "lessonId": "x5-4",
    "kind": "tf",
    "prompt": "Un autónomo en estimación directa presenta el modelo 130 trimestral, salvo que concurran ciertos supuestos.",
    "answer": true,
    "explain": "En objetiva se usa el modelo 131."
  },
  {
    "id": "e5-27",
    "lessonId": "x5-4",
    "kind": "number",
    "prompt": "Ingresos de 60.000 €, gastos de 18.000 € y amortizaciones de 2.000 €. ¿Cuál es la diferencia previa al 5 %?",
    "answer": 40000,
    "explain": "60.000 − 18.000 − 2.000 = 40.000 €.",
    "unit": "€"
  },
  {
    "id": "e5-28",
    "lessonId": "x5-4",
    "kind": "tf",
    "prompt": "Al aplicar la reducción para autónomos con un único cliente no se aplica el 5 % de provisiones y gastos de difícil justificación.",
    "answer": true,
    "explain": "Así lo recoge la información de la Agencia Tributaria."
  },
  {
    "id": "e5-29",
    "lessonId": "x5-5",
    "kind": "choice",
    "prompt": "¿Dónde se integran las ganancias y pérdidas derivadas de la transmisión de acciones o de un inmueble?",
    "answer": 0,
    "explain": "Tributan con la escala del ahorro.",
    "options": [
      "En la base imponible del ahorro",
      "En la base general exclusivamente",
      "No tributan",
      "En el Impuesto sobre Sociedades"
    ]
  },
  {
    "id": "e5-30",
    "lessonId": "x5-5",
    "kind": "number",
    "prompt": "¿Durante cuántos ejercicios siguientes puede compensarse un saldo negativo de ganancias y pérdidas de la base del ahorro?",
    "answer": 4,
    "explain": "Los saldos pendientes de 2021 a 2024 aparecen como compensables en la Renta 2025.",
    "unit": "años"
  },
  {
    "id": "e5-31",
    "lessonId": "x5-5",
    "kind": "number",
    "prompt": "¿Qué límite porcentual del saldo positivo se aplica a la compensación de saldos negativos de capital mobiliario con ganancias patrimoniales?",
    "answer": 25,
    "explain": "Y viceversa.",
    "unit": "%"
  },
  {
    "id": "e5-32",
    "lessonId": "x5-5",
    "kind": "tf",
    "prompt": "Si recompras valores homogéneos antes de dos meses, la pérdida de la venta se computa siempre en el ejercicio de la venta.",
    "answer": false,
    "explain": "La norma antiaplicación impide computarla en ese momento."
  },
  {
    "id": "e5-33",
    "lessonId": "x5-5",
    "kind": "number",
    "prompt": "¿Cuál es el importe máximo, en euros, que puede reinvertirse en una renta vitalicia asegurada para la exención de mayores de 65 años?",
    "answer": 240000,
    "explain": "El plazo de reinversión es de seis meses.",
    "unit": "€"
  },
  {
    "id": "e5-34",
    "lessonId": "x5-5",
    "kind": "tf",
    "prompt": "El valor de adquisición incluye el coste de las inversiones y mejoras y los gastos inherentes a la compra.",
    "answer": true,
    "explain": "Así lo resume el manual de la AEAT."
  },
  {
    "id": "e5-35",
    "lessonId": "x5-5",
    "kind": "number",
    "prompt": "Ganancia de 3.950 € y pérdida de 2.000 € en la base del ahorro. ¿Cuál es el saldo neto?",
    "answer": 1950,
    "explain": "3.950 − 2.000 = 1.950 €.",
    "unit": "€"
  },
  {
    "id": "e5-36",
    "lessonId": "x5-6",
    "kind": "choice",
    "prompt": "¿Cómo se aplica el mínimo personal y familiar?",
    "answer": 0,
    "explain": "Se calcula el impuesto del mínimo y se resta de la cuota.",
    "options": [
      "Reduce la cuota: se resta el impuesto que correspondería al mínimo",
      "Se resta de las retenciones",
      "Se suma a la base del ahorro",
      "No se aplica en el IRPF"
    ]
  },
  {
    "id": "e5-37",
    "lessonId": "x5-6",
    "kind": "tf",
    "prompt": "El mínimo por descendientes añade 2.800 € por cada hijo menor de tres años.",
    "answer": true,
    "explain": "Es un incremento sobre el mínimo por descendientes."
  },
  {
    "id": "e5-38",
    "lessonId": "x5-6",
    "kind": "number",
    "prompt": "¿Hasta qué edad, en años, el descendiente debe ser menor para generar mínimo, cuando convive y tiene rentas bajas?",
    "answer": 25,
    "explain": "Y no puede tener rentas anuales superiores a 8.000 €.",
    "unit": "años"
  },
  {
    "id": "e5-39",
    "lessonId": "x5-6",
    "kind": "tf",
    "prompt": "La escala estatal y la autonómica se suman, y cada comunidad puede aprobar la suya.",
    "answer": true,
    "explain": "La escala de referencia combinada es 19, 24, 30, 37, 45 y 47 %."
  },
  {
    "id": "e5-40",
    "lessonId": "x5-6",
    "kind": "choice",
    "prompt": "¿Qué tipo combinado se aplica a la parte de la base general que supera 300.000 €?",
    "answer": 0,
    "explain": "El tipo estatal es 24,5 %.",
    "options": [
      "47 %",
      "45 %",
      "37 %",
      "30 %"
    ]
  },
  {
    "id": "e5-41",
    "lessonId": "x5-6",
    "kind": "number",
    "prompt": "Cuota íntegra de 14.201,50 € y cuota del mínimo de 1.054,50 €. ¿Cuál es la cuota líquida?",
    "answer": 13147,
    "explain": "14.201,50 − 1.054,50 = 13.147 €.",
    "unit": "€"
  },
  {
    "id": "e5-42",
    "lessonId": "x5-6",
    "kind": "choice",
    "prompt": "Un resultado de la declaración a ingresar puede fraccionarse en:",
    "answer": 0,
    "explain": "Si se domicilia el segundo plazo, el límite es el 2 de noviembre.",
    "options": [
      "60 % al presentar y 40 % hasta el 5 de noviembre",
      "50 % y 50 % sin fecha",
      "Cuatro plazos trimestrales",
      "No puede fraccionarse"
    ]
  },
  {
    "id": "e5-43",
    "lessonId": "x5-7",
    "kind": "choice",
    "prompt": "El modelo 111 recoge:",
    "answer": 0,
    "explain": "Su resumen anual es el 190.",
    "options": [
      "Retenciones sobre rendimientos del trabajo y actividades profesionales",
      "Solo las retenciones de alquileres",
      "El IVA trimestral",
      "El impuesto de sociedades"
    ]
  },
  {
    "id": "e5-44",
    "lessonId": "x5-7",
    "kind": "choice",
    "prompt": "El modelo 180 es:",
    "answer": 0,
    "explain": "El 190 resume los 111.",
    "options": [
      "El resumen anual de los modelos 115",
      "El resumen anual de los modelos 111",
      "La declaración del IVA",
      "El pago fraccionado de autónomos"
    ]
  },
  {
    "id": "e5-45",
    "lessonId": "x5-7",
    "kind": "number",
    "prompt": "¿Hasta qué día de abril se presenta el modelo 111 del primer trimestre sin domiciliar el pago?",
    "answer": 20,
    "explain": "Con domiciliación, hasta el día 15.",
    "unit": "de abril"
  },
  {
    "id": "e5-46",
    "lessonId": "x5-7",
    "kind": "number",
    "prompt": "Alquiler de 1.000 € al mes durante un trimestre y retención del 19 %. ¿Cuánto se ingresa con el modelo 115, en euros?",
    "answer": 570,
    "explain": "3.000 × 19 % = 570 €.",
    "unit": "€"
  },
  {
    "id": "e5-47",
    "lessonId": "x5-7",
    "kind": "number",
    "prompt": "¿Qué tipo de retención profesional general se aplica, en porcentaje?",
    "answer": 15,
    "explain": "Se reduce al 7 % para el inicio de actividad en determinados casos.",
    "unit": "%"
  },
  {
    "id": "e5-48",
    "lessonId": "x5-7",
    "kind": "tf",
    "prompt": "El modelo 190 incluye el detalle por perceptor de las retenciones del año.",
    "answer": true,
    "explain": "Con NIF, datos, importes y retenciones."
  },
  {
    "id": "e5-49",
    "lessonId": "x5-7",
    "kind": "tf",
    "prompt": "Los modelos 190 y 180 son informativos y no llevan pago.",
    "answer": true,
    "explain": "Su presentación fuera de plazo puede sancionarse."
  },
];
