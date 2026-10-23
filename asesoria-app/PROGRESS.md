# PROGRESS (leer SIEMPRE al reanudar)

## Reglas del usuario
- Chat: estilo caveman, conciso. App: voz cercana y profesional, sin emojis (nunca).
- Codigo: pocos comentarios, consistente. No generar recursos innecesarios. Preguntar antes de acciones muy costosas (ya autorizado: "hazlo todo").
- Contenido: NADA inventado. Solo lo verificado en fuente oficial (BOE, AEAT, TGSS, SEPE). Parafrasear, citar fuente y fecha de consulta en cada leccion.
- Uso personal, open source solo como portfolio. Sin EDASE ni marcas.
- Supabase para guardar datos. Certificado PDF: DESCARTADO.
- Examenes: aprobado 70 %, preguntas falladas reaparecen, repaso obligatorio antes de repetir.

## Referente oficial investigado (consultado 2026-10-23)
Fuente: Programacion didactica Contabilidad y Fiscalidad (modulo 0654, RD 1584/2011, Tecnico Superior Administracion y Finanzas), portal.edu.gva.es/iesramonmuntaner PD_CYF_2CFGS_24_25.pdf. Contenidos del modulo:
1 Contabilizacion: PGC y grupos, fondos propios, financiacion ajena, inmovilizado, operaciones comerciales, personal y AAPP, financieras, tesoreria, balance de sumas y saldos.
2 Obligaciones fiscales: impuestos locales (IAE), Impuesto Sociedades (gestion, calculo, contabilidad y IS), IRPF (metodos base imponible, regimenes especiales, gestion), documentacion declaraciones.
3 Fin de ejercicio: regularizacion, amortizacion, deterioros, provisiones, periodificacion, IS contable, resultado, libros contables.
4 Cuentas anuales: balance, PyG, estado cambios patrimonio neto, estado flujos efectivo, memoria, deposito y publicacion.
5 Analisis economico-financiero: balance funcional, patrimonial, financiero, economico.
6 Auditoria de cuentas: concepto, obligatoriedad, fases, informe.
Otras unidades del ciclo (no investigadas aun): Gestion de recursos humanos, Gestion financiera, Gestion logistica y comercial.
=> Temas NUEVOS a anadir al marco: analisis economico-financiero, auditoria basica, estado de flujos de efectivo y cambios en patrimonio neto, antiblanqueo (Ley 10/2010), procedimiento tributario, acceso digital (certificado, Cl@ve), regimenes forales/Canarias, gestion del despacho.

## Estado de fases
- [x] v1 esqueleto, v2 gamificacion/examenes/repaso obligatorio
- [x] A1 tests Vitest (tests/*.test.ts; npm test; build los ejecuta)
- [x] A2 repaso espaciado Leitner (src/lib/srs.ts, pages/ReviewPage)
- [x] A3 fuentes por leccion (Source{title,url,accessed,official}); test exige >=1 fuente, >=2 consejos, >=4 mini-test
- [x] A4 Supabase: src/lib/cloud.ts, merge.ts, pages/AccountPage, supabase/schema.sql, .env.example. PENDIENTE del usuario: crear proyecto, ejecutar schema.sql, rellenar .env
- [~] B contenido: L1.1 y L1.2 verificadas (L1.2 con fuentes OFICIALES: AEAT instrucciones/ficha modelo 036, BOE Orden HAC/1526/2024). L1.1 verificada (Ley 18/2022, LSC art 4 y 274, CC 1911). Fuentes usadas son analisis profesional (Garrigues, PwC, Notarios y Registradores), NO BOE: pendiente contrastar con BOE consolidado cuando se pueda hacer fetch directo.
  - Examen M1 NO disponible: examReady exige banco >= 12 (MIN_BANK). Banco M1 tiene 8 (solo 1.1). Se completa al verificar 1.2 y 1.3.
  - Preguntas sobre 036/IAE/RETA/cuota por ingresos reales ELIMINADAS por no verificadas.
  - Siguiente: L1.2 (alta censal 036/037, IAE), L1.3 (RETA/Regimen General), luego M2...
  - Metodo: web_search -> web_fetch fuente oficial (text_content_token_limit bajo) -> parafrasear -> test.
- [ ] Reestructurar temario con temas nuevos (ver arriba) cuando se llegue a cada modulo.
- Certificado PDF: descartado.

## Notas tecnicas
- Estado local: src/lib/store.ts (v2 + srs + modified). Logica: game.ts, exam.ts, srs.ts, merge.ts, cloud.ts.
- Contenido: src/data/content/{types,index,m1}.ts. Un archivo por modulo (mN.ts) y registrar en index.ts (lessonContent y banks).
- CSP en vite.config.ts anade origen de Supabase en connect-src si VITE_SUPABASE_URL existe al hacer build.
- Entregable: zip en /mnt/user-data/outputs/asesoria-app.zip (regenerar tras cambios).

## Hallazgos que corrigen el marco original
- El modelo 037 esta SUPRIMIDO (Orden HAC/1526/2024, BOE 9-1-2025, efectos 3-2-2025). Marco decia "036 y 037": ya corregido en la app.
- examReady(modulo) exige banco >= 12 Y todas las lecciones del modulo con contenido. M1 banco=15; falta L1.3 para activar examen.
- Pendiente L1.2: IAE exenciones y modelo 840 (no verificado, no incluido).
- Siguiente: L1.3 (RETA vs Regimen General; cuota por ingresos reales) -> buscar TGSS / seg-social.es / BOE LGSS.

## Actualizacion L1.3
- L1.3 escrita (RETA vs Regimen General; art 305 LGSS; cotizacion por ingresos reales sin cifras). Fuentes NO oficiales (infoautonomos, supercontable, INAP, declarando). Pendiente contrastar con BOE consolidado LGSS art 305 y pagina seg-social.es. NO se incluyeron importes de cuotas/tramos/tipo (cambian y no hay fuente oficial leida).
- M1 completo en contenido (L1.1-1.3) => examen M1 activo (banco 20).
- Siguiente: L2.1 contratacion laboral (ET art 8,15; RDL 32/2021; SEPE/TGSS).

## Actualizacion L2.1
- L2.1 escrita en src/data/content/m2.ts (banco M2 = 7, falta hasta 12 y resto de lecciones M2). Fuentes: Gobierno Vasco (resumen, official:true), ICAB, Consejo Gestores, Andersen, Wolters Kluwer (NO el BOE). Pendiente contrastar con BOE: ET art 15, RDL 32/2021.
- Titulo de L2.1 cambiado: ya no incluye "alta en TGSS". PENDIENTE anadir leccion nueva en M2 sobre afiliacion/alta TGSS (Sistema RED / Import@ss) con fuente TGSS/BOE.
- No incluidos por falta de fuente leida: duraciones maximas, fijo-discontinuo detalle, sanciones, forma del contrato (ET art 8), periodo de prueba.
- Siguiente: L2.2 La nomina (devengos, deducciones, bases) -> buscar fuente oficial (ET art 26, TGSS/AEAT retenciones).

## Actualizacion L2.2
- L2.2 escrita (estructura legal del recibo de salarios) con fuente OFICIAL BOE (Orden 27-12-1994 consolidada, BOE-A-1995-912) + INEAF y Economist&Jurist para ESS/2098/2014. Banco M2 = 14.
- NO incluidos (sin fuente leida): tipos de cotizacion, limites de bases, calculo de retencion IRPF, pagas extra, complementos. Cifras del ejemplo son ilustrativas y asi se declaran.
- Siguiente: L2.3 seguros sociales (RLC/RNC/SILTRA) -> fuente TGSS/Seguridad Social. Luego L2.4 IT/permisos, L2.5 extincion, L2.6 empleabilidad. Anadir leccion de alta TGSS.
- Truco: web_fetch en URLs HTML de boe.es/eli/... SI respeta el limite de tokens; en PDFs NO (ahorrar contexto buscando version HTML).

## Actualizacion L2.3
- L2.3 escrita con fuentes OFICIALES seg-social.es (guias Sistema de Liquidacion Directa, PDF ids 196167/199912/142110) + secundarias. Banco M2 = 20.
- CORRECCION del marco: no existe "RNC" en la documentacion oficial; es RNT (Relacion Nominal de Trabajadores). SILTRA NO verificado: se retiro del titulo.
- Recargos 10/20/35 % incluidos con aviso (fuentes secundarias): contrastar con LGSS art 30 en BOE.
- Siguiente: L2.4 (IT, permisos, nacimiento), L2.5 (extincion), L2.6 (empleabilidad), + leccion nueva alta TGSS.

## Actualizacion L2.4
- L2.4 escrita: solo IT (porcentajes 0/60/75, contingencias profesionales 75, quien paga 4-15 empresa y desde 16 mutua/INSS, duracion 365+180 art 169.1.a LGSS). Fuentes secundarias + Servicio Salud CLM. Banco M2 = 27. Contrastar con LGSS arts 169-173 en BOE.
- Titulo 2.4 reducido a IT. Anadidas lecciones PENDIENTES en modules.ts: 2.7 afiliacion/alta TGSS, 2.8 permisos y licencias (ET art 37), 2.9 nacimiento y cuidado del menor. Bloquean examen M2 hasta tener contenido (examReady).
- Siguiente: L2.5 extincion (despido objetivo/disciplinario, finiquito, indemnizacion) -> ET arts 49-56 en BOE HTML (usar boe.es/buscar/act.php?id=BOE-A-2015-11430 si aparece en busqueda).
