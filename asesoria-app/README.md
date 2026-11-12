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

## Cuenta y sincronización (Supabase, opcional)

Sin configuración, todo funciona en el dispositivo (localStorage). Para guardar el progreso en la nube con usuario y contraseña, sin correo:

1. Crea un proyecto en Supabase.
2. En SQL Editor, ejecuta `supabase/schema.sql` (tabla `progress` con seguridad por filas).
3. En Authentication, Providers, Email: desactiva **Confirm email**. Sin esto el registro no devuelve sesión.
4. Copia `.env.example` a `.env` y rellena la URL y la clave anónima. Esa clave es pública por diseño; la protección está en las políticas RLS.
5. Cuando hayas creado tu usuario, desactiva el registro de usuarios nuevos en los ajustes de Auth para que nadie más pueda crear cuentas.

Cómo funciona: el nombre de usuario se convierte en un correo interno (`usuario@VITE_AUTH_EMAIL_DOMAIN`, por defecto `gmail.com`). No se envía ningún correo. Supabase rechaza los dominios de prueba (`example.com`, `test.com`…) y los que no tienen registros MX, así que usa uno real; lo ideal es un dominio propio. Consecuencia: no hay recuperación de contraseña. Exporta copias del progreso desde Ajustes.

## Si no ves los cambios

Es una PWA y guarda una copia para funcionar sin conexión. En Ajustes, «Acerca de esta versión» muestra la versión, la fecha de compilación, la fase de contenido publicada y si la nube está configurada. El botón «Buscar actualización y recargar» borra la copia guardada de la aplicación (no el progreso). Las claves de Supabase se leen al compilar: tras cambiar `.env` hay que volver a ejecutar `npm run build`.

## Despliegue en Vercel desde GitHub

1. Sube el proyecto a GitHub, incluido `package-lock.json`. No subas `.env`: está en `.gitignore`.
2. En Vercel, importa el repositorio. Vercel detecta Vite: comando `npm run build` y carpeta de salida `dist`.
3. En Settings, Environment Variables, crea `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` y, si quieres, `VITE_AUTH_EMAIL_DOMAIN`, para Production y Preview.
4. Las variables `VITE_` se incorporan al compilar: tras crearlas o cambiarlas hay que hacer un nuevo despliegue (Deployments, Redeploy).
5. `vercel.json` añade cabeceras de seguridad y evita que se guarde en caché el service worker.
6. `npm run build` ejecuta también los tests: si alguno falla, el despliegue se detiene antes de publicar.
