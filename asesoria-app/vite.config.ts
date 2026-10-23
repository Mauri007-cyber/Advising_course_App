import { loadEnv, type Plugin } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const csp = (api: string) => [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  `connect-src 'self'${api ? ` ${api}` : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const cspPlugin = (api: string): Plugin => ({
  name: "csp",
  apply: "build",
  transformIndexHtml: (html) =>
    html.replace("<head>", `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp(api)}" />`),
});

export default defineConfig(({ mode }) => {
  const url = loadEnv(mode, ".", "VITE_").VITE_SUPABASE_URL;
  return { base: "./", plugins: [react(), cspPlugin(url ? new URL(url).origin : "")], test: { environment: "node" } };
});
