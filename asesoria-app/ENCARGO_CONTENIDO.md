# Encargo de contenido para m6 (fase 3)

Documento de trabajo: qué pedirle a otra IA (Claude u otra) y cómo entregarlo para que se pueda
integrar sin retocar nada. El formato es el que ya usan `src/data/content/m*.ts` y lo que validan
los tests de `tests/content.test.ts`.

## Lo que hay que producir

Módulo 6 (Impuesto sobre Sociedades), 5 lecciones, ids estables:

| id | Etiqueta visible | Título |
|---|---|---|
| x6-1 | 6.1 | Impuesto sobre Sociedades I: sujetos y periodo impositivo |
| x6-2 | 6.2 | Impuesto sobre Sociedades II: del resultado contable a la base imponible |
| x6-3 | 6.3 | Impuesto sobre Sociedades III: cuota, deducciones y bonificaciones |
| x6-4 | 6.4 | Impuesto sobre Sociedades IV: modelos 200 y 202 |
| x6-6 | 6.5 | Modelos informativos: 347 y 349 |

Cada lección entrega 4 preguntas de mini-test y 7-8 de banco. Con 5 lecciones el banco del módulo
pasa de 12 y el examen se activa.

## Formato de entrega (JSON, una lección por bloque)

```json
{
  "lesson": {
    "id": "x6-1",
    "content": {
      "intro": "Uno o dos párrafos que sitúan el tema y avisan de qué cambia por ejercicio.",
      "steps": [
        { "title": "Título del paso", "body": ["Idea en una o dos frases.", "Otra idea."] }
      ],
      "example": { "title": "Caso resuelto: ...", "body": ["Planteamiento.", "Cálculo.", "Conclusión."] },
      "tips": [
        { "kind": "error", "text": "Error frecuente y por qué lo es." },
        { "kind": "consejo", "text": "Qué pedir o comprobar en la práctica." }
      ],
      "law": ["Norma y artículos, sin inventar numeración"],
      "sources": [
        {
          "title": "Organismo: documento",
          "url": "https://...",
          "accessed": "2026-11-12",
          "official": true
        }
      ],
      "reviewed": "2026-11-12"
    },
    "check": [
      {
        "id": "c6.1-1",
        "lessonId": "x6-1",
        "kind": "choice",
        "prompt": "Pregunta.",
        "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "answer": 0,
        "explain": "Por qué es correcta, con la base legal si existe.",
        "law": "Artículo, si aplica"
      },
      {
        "id": "c6.1-2",
        "lessonId": "x6-1",
        "kind": "tf",
        "prompt": "Afirmación.",
        "answer": true,
        "explain": "Explicación."
      }
    ],
    "bank": [
      {
        "id": "e6-01",
        "lessonId": "x6-1",
        "kind": "number",
        "prompt": "Pregunta de cálculo.",
        "scenario": "Datos del caso, opcional.",
        "answer": 2500,
        "tolerance": 0.01,
        "unit": "€",
        "explain": "Cómo se llega al resultado."
      }
    ]
  }
}
```

Tipos de pregunta admitidos: `choice` (4 opciones únicas, `answer` es el índice, 0-3), `tf`
(`answer` booleano) y `number` (respuesta numérica, `tolerance` opcional, `unit` opcional).
Todo el JSON usa comillas dobles y no lleva comentarios.

## Reglas duras

1. **Nada inventado.** Si no hay una fuente leída, no se escribe la cifra, el plazo ni el tipo.
   Es mejor una lección sin importes que una con un importe falso. Es la regla número uno del proyecto.
2. **Fuentes reales.** `official: true` solo para BOE, AEAT, Seguridad Social, ministerios y Unión
   Europea. Para análisis profesional (asesorías, despachos, prensa especializada), `official: false`.
   Nunca inventar una URL: si no se está seguro de la dirección exacta, usar la página índice del
   organismo y decirlo en el título.
3. `accessed` y `reviewed` siempre `"2026-11-12"`.
4. Mínimos por lección: 2 consejos (uno de ellos `error`), 4 preguntas de `check`, 7 de `bank`,
   4 pasos en `steps`, 2 fuentes.
5. Estilo: español de España, voz cercana y profesional, **sin emojis**, sin marcas comerciales,
   frases cortas. Parafrasear la norma, no copiar texto legal.
6. Las referencias a otras lecciones se escriben `[[id]]` (por ejemplo `[[x6-1]]`); se convierten
   solas en la etiqueta visible.
7. Ids: `check` = `c6.<n>-<1..4>`; banco = `e6-01`..`e6-08` (reinicia por lección si hace falta,
   pero **no repitas ids** entre lecciones).

## Qué no aceptar de vuelta

- Cifras sin fuente o con URL que no existe.
- Menos de 4 preguntas de check o menos de 7 de banco.
- Emojis, tablas markdown o texto fuera del JSON.
- Referencias `[[...]]` a lecciones que no existen.

## Cómo se pasa

Pega el JSON en el chat, una lección por mensaje. Yo compruebo que parsea, reviso cada URL,
lo convierto al archivo `src/data/content/m6.ts`, lo registro en `index.ts`, paso typecheck y tests,
y ajusto `CURRENT_RELEASE` cuando estén las cinco.

## Prompt listo para pegar (una lección por mensaje)

```text
Actúa como redactor de contenido de una app de formación en asesoría fiscal, laboral y contable
(España, uso personal). Devuelve SOLO un objeto JSON válido, sin markdown, sin comentarios y sin
texto antes o después.

Lección: x6-1, "Impuesto sobre Sociedades I: sujetos y periodo impositivo" (módulo 6, nivel 2 de 3).

Forma exacta:
{
  "lesson": {
    "id": "x6-1",
    "content": {
      "intro": "string",
      "steps": [{"title": "string", "body": ["string"]}],
      "example": {"title": "string", "body": ["string"]},
      "tips": [{"kind": "consejo|error|clave", "text": "string"}],
      "law": ["string"],
      "sources": [{"title": "string", "url": "https://...", "accessed": "2026-11-12", "official": true}],
      "reviewed": "2026-11-12"
    },
    "check": [preguntas],
    "bank": [preguntas]
  }
}

Pregunta, según tipo:
- choice: {"id":"c6.1-1","lessonId":"x6-1","kind":"choice","prompt":"...","options":["...","...","...","..."],"answer":0,"explain":"...","law":"..."}
- tf: {"id":"c6.1-2","lessonId":"x6-1","kind":"tf","prompt":"...","answer":true,"explain":"..."}
- number: {"id":"e6-01","lessonId":"x6-1","kind":"number","prompt":"...","scenario":"...","answer":12000,"tolerance":0.01,"unit":"€","explain":"..."}
`law` es opcional; `scenario` solo si aporta datos del caso.

Requisitos:
- 4 preguntas en "check" (ids c6.1-1 a c6.1-4) y 7 en "bank" (ids e6-01 a e6-07), sin ids repetidos.
- 4 o más pasos, 2 o más consejos (uno de tipo "error"), 2 o más fuentes.
- Nada inventado: si no tienes una fuente fiable para una cifra, plazo o tipo, no la incluyas.
  Es preferible explicar el procedimiento sin importes.
- Fuentes: solo BOE, AEAT, Seguridad Social o ministerios con "official": true. No inventes URLs;
  si dudas de la dirección exacta, usa la página índice oficial. "accessed": "2026-11-12".
- Español de España, cercano y profesional, sin emojis, sin marcas. Parafrasea la norma.
- Las referencias a otras lecciones se escriben [[id]].
```

Cambia solo las tres primeras líneas del encargo (id, título y número de lección) para las demás.
