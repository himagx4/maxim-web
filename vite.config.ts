import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // GitHub Pages repo URL: https://himagx4.github.io/maxim-web/
  base: "/maxim-web/",

  // Tailwind/PostCSS için
  css: { transformer: "postcss" },

  // Pages artifact’in aradığı klasör
  build: { outDir: "dist" },

  plugins: [reactRouter(), tsconfigPaths(), babel()],

  resolve: {
    alias: [
      // ✅ Node-only importu browserda kırılmasın diye shim
      {
        find: "node:async_hooks",
        replacement: path.resolve(__dirname, "./src/shims/async_hooks.ts"),
      },

      // ✅ React Router template'in aradığı virtual module -> gerçek dosyaya yönlendir
      {
        find: "virtual:load-fonts.jsx",
        replacement: path.resolve(__dirname, "./src/load-fonts.ts"),
      },

      // ✅ @auth/create/react içinden SessionProvider bekleniyor (Pages için no-op shim)
      //    Bu satır regex'ten ÖNCE gelmeli!
      {
        find: "@auth/create/react",
        replacement: path.resolve(__dirname, "./src/shims/auth-create-react.tsx"),
      },

      // ✅ @auth/create ve alt path'leri (örn: @auth/create/xyz) yakalar
      {
        find: /^@auth\/create(\/.*)?$/,
        replacement: path.resolve(__dirname, "./src/__create/@auth/create"),
      },

      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
