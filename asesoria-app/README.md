# Asesoría

PWA de autoaprendizaje de asesoría fiscal, laboral y contable. Uso personal; código público como portfolio.

## Comandos

```
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

- `src/data/modules.ts`: temario (módulos y lecciones).
- `src/data/params/AAAA.json`: parámetros anuales (SMI, bases, tipos). Nunca en código.
- `src/lib/store.ts`: progreso y ajustes (localStorage, exportar/importar).
- `public/sw.js`: service worker (offline + actualizaciones).

## Seguridad

- CSP estricta en build. Sin scripts ni estilos inline.
- Sin claves API en el repo.
- Datos solo en el dispositivo.
