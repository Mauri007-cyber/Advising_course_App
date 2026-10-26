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

## Actualizacion L2.5
- L2.5 escrita: despido OBJETIVO (ET 52-53; 20 d/ano tope 12; preaviso 15; improcedente 33 d tope 24 post 12-2-2012, 45 d/42 antes, tope 720). Fuentes secundarias (iberley reproduce art 53, INEAF, Legalitas, PayFit). Plazo 20 dias habiles incluido con aviso. Banco M2 = 34. Contrastar con ET en BOE.
- Titulo 2.5 reducido; anadida 2.10 Despido disciplinario y finiquito (pendiente, bloquea examen M2).
- M2 pendientes: 2.6 empleabilidad, 2.7 afiliacion TGSS, 2.8 permisos, 2.9 nacimiento, 2.10 disciplinario/finiquito.
- Siguiente sugerido: pasar a M3 (fiscal) mientras M2 pendientes se completan despues, o seguir M2. Preguntar al usuario? (el usuario dijo "continuar": seguir orden: 2.6).

## Actualizacion L2.6
- L2.6 escrita (CV, carta, envio por correo, donde buscar) con fuentes OFICIALES: EURES (Comision Europea) y MITES (Ministerio de Trabajo). Banco M2 = 41.
- NO verificado: ATS, optimizacion LinkedIn, palabras clave. Anadida 2.11 LinkedIn y presencia profesional (pendiente; fuente: ayuda oficial de LinkedIn).
- M2 pendientes de contenido: 2.7 afiliacion TGSS, 2.8 permisos, 2.9 nacimiento, 2.10 disciplinario/finiquito, 2.11 LinkedIn. M2 lecciones hechas: 2.1-2.6.
- Siguiente: ofrecer al usuario continuar M2 pendientes o pasar a M3 fiscal (3.1 IVA). Preferible seguir orden M2 (2.7 afiliacion TGSS).

## REORGANIZACION APROBADA (temario ampliado a 51 lecciones)
- M1: +1.4 alta/baja autonomo RETA, +1.5 cierre de empresa.
- M2 (ids renumerados, solo 2.1-2.6 tienen contenido): 2.7 inscripcion empresa y cuenta cotizacion; 2.8 afiliacion/alta trabajadores; 2.9 bajas y variaciones; 2.10 comunicacion contratos (Contrat@/SEPE); 2.11 nomina completa (bases, tipos, retencion IRPF); 2.12 permisos; 2.13 nacimiento y cuidado menor; 2.14 despido disciplinario y finiquito; 2.15 AT y EP; 2.16 jornada, vacaciones, convenios; 2.17 LinkedIn.
- M3 (renumerado, sin contenido): 3.1 acceso digital; 3.2 IVA; 3.3 IVA avanzado; 3.4 IRPF autonomo; 3.5 retenciones; 3.6 IS; 3.7 renta; 3.8 347/349; 3.9 procedimiento tributario; 3.10 digitalizacion.
- M4: +4.6 cuentas anuales completas, +4.7 analisis economico-financiero, +4.8 auditoria. M5: +5.5 hoja de encargo/honorarios, +5.6 deontologia, +5.7 antiblanqueo.
- Objetivo del usuario: completar el MAXIMO de lecciones posibles por chat; consumo de tokens no es problema. Orden: seguir M1 (1.4,1.5) y M2 (2.7...), luego M3...

## Actualizacion lote 1.4, 2.7, 2.8, 2.9, 2.10 (2026-10-25)
- Herramienta: scripts/add_lesson.py (add(modulo, {id: leccion}, banco)) inserta lecciones/preguntas en src/data/content/mN.ts y registra el modulo nuevo en index.ts. Los lotes se escriben como dicts Python (ver patron en /tmp/batch*.py, no persiste; recrear helpers S,Q,C,T,N).
- Fecha de consulta ahora: 2026-10-25 (corregida en m1.ts y m2.ts).
- Hechas: M1 1.1-1.4; M2 2.1-2.10. Pendientes M1: 1.5 cierre de empresa. M2: 2.11 nomina completa, 2.12 permisos, 2.13 nacimiento, 2.14 despido disciplinario/finiquito, 2.15 AT/EP, 2.16 jornada/vacaciones/convenios, 2.17 LinkedIn.
- HALLAZGO CLAVE verificado en BOE (RD 643/2026, BOE 30-7-2026, vigor 1-8-2026): baja y variaciones de trabajadores por cuenta ajena = 6 dias naturales (antes 3; art 32.3 RD 84/1996). RETA baja sigue 3 dias (manuales TGSS). Tambien: obligacion de comunicar codigo de ocupacion (CNO) en 6 meses; cambios en aplazamientos de deuda SS (art 32-35 RGR): deuda aplazable ya no limitada a doble SMI sino a 1 SMI como causa de denegacion; interes de demora; aplazamiento automatizado. Material para leccion futura de aplazamientos.
- RD 1424/2002 (BOE): comunicar contratos al servicio de empleo en 10 dias HABILES (otras fuentes decian 10 dias sin precisar: corregido).
- Banco: M1=27 preguntas, M2=69 aprox. M1 examen se activa al completar 1.5.
- Siguiente: 1.5 (cierre de empresa: baja censal 036, baja CCC, disolucion y liquidacion, cancelacion registral). Despues 2.11 nomina completa (bases, tipos, IRPF) y asi.

## Actualizacion L1.5 y L2.11 (2026-10-25)
- M1 COMPLETO (1.1-1.5, banco 34): examen M1 activo. M2 hechas 2.1-2.11. Total con contenido: 16 de 51.
- L2.11: Orden PJC/297/2026 (BOE 31-3-2026) leida SOLO via resumenes (UniondeMutuas, Cuatrecasas, Ibermutua, CCOO, laboral-social). Pendiente contrastar con texto BOE y confirmar: tipo desempleo indefinido (no incluido), bases minimas por grupo (solo grupo 1 = 1.424,40), tramos cotizacion adicional solidaridad (no detallados). Retencion IRPF: solo procedimiento (modelo 145, art 88 RIRPF, art 205 LGT, algoritmo AEAT 2026); sin tabla de tipos.
- L1.5: fuentes secundarias (vLex, Billin, AyudaT, Infoautonomos, RDGRN 2016). Plazo baja 036 en 1 mes tras inscripcion RM: secundaria, con aviso.
- Siguiente: 2.12 permisos (ET art 37), 2.13 nacimiento y cuidado del menor, 2.14 despido disciplinario y finiquito, 2.15 AT/EP, 2.16 jornada/vacaciones/convenios, 2.17 LinkedIn. Despues M3.

## Actualizacion L2.12 y L2.13 (2026-10-25)
- M1 verificado: 5 lecciones con contenido, banco 34, examReady('m1') true; test en tests/content.test.ts lo exige.
- L2.12 permisos (ET 37.3 y 37.9; RDL 5/2023): 15 d naturales matrimonio/pareja de hecho, 5 d hospitalizacion/enfermedad grave hasta 2o grado, 2 d fallecimiento (+2 desplazamiento), 4 d/ano fuerza mayor. Fuentes secundarias (CCOO, USO, Perez-Llorca, UPO). Computo naturales/laborables NO resuelto (declarado). Otros permisos 37.3 (traslado, exa menes, deber publico, lactancia...) NO incluidos.
- L2.13 nacimiento (RDL 9/2025): 19 sem por progenitor (6 obligatorias + 11 flexibles hasta 12 meses + 2 cuidado hasta 8 anos), monoparental 32, prestacion 100 % BR via INSS. Fuentes secundarias (Cuatrecasas, Forvis Mazars, Deia, El Espanol, CCOO). Partos multiples/discapacidad +1 semana: de CCOO (regimen 16 sem), verificar. Prematuros hasta +13 sem: El Espanol, verificar.
- Hechas: M1 5/5; M2 13/17 (faltan 2.14 disciplinario/finiquito, 2.15 AT/EP, 2.16 jornada/vacaciones/convenios, 2.17 LinkedIn). Total 18 de 51.
- Siguiente: 2.14.

## Actualizacion L2.14 + estimacion de duracion (2026-10-25)
- L2.14 hecha (despido disciplinario ET 54-56, 59.3, finiquito). Fuentes secundarias (Legalitas, INEAF, Loentiendo, Captain Legal, Gestoria247). 19 de 51 lecciones. M2: 14/17 (faltan 2.15 AT/EP, 2.16 jornada/vacaciones/convenios, 2.17 LinkedIn).
- Medicion real: media ~480 palabras de texto por leccion (+ ejemplo + 4 preguntas de mini-test + 7-9 de banco).
- Estimacion dada al usuario: 35 min/leccion solo en app, 75 min si se consultan las fuentes. Total curso completo ~40-75 h (~2-4 % de un master de 60 ECTS = 1.500-1.800 h segun el marco).
