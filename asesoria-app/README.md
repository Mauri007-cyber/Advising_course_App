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

Cómo funciona: el nombre de usuario se convierte en un correo interno (`usuario@VITE_AUTH_EMAIL_DOMAIN`, por defecto `example.com`) que nunca recibe mensajes. Consecuencia: no hay recuperación de contraseña. Exporta copias del progreso desde Ajustes.

## Si no ves los cambios

Es una PWA y guarda una copia para funcionar sin conexión. En Ajustes, «Acerca de esta versión» muestra la versión, la fecha de compilación, la fase de contenido publicada y si la nube está configurada. El botón «Buscar actualización y recargar» borra la copia guardada de la aplicación (no el progreso). Las claves de Supabase se leen al compilar: tras cambiar `.env` hay que volver a ejecutar `npm run build`.
