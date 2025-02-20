import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
          @use "@/styles/global.scss" as *;
        `,
      },
    },
  },

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        devtools: path.resolve(__dirname, "src/scripts/devtools.ts"),
        contentScript: path.resolve(__dirname, "src/scripts/contentScript.ts"),
        main: path.resolve(__dirname, "src/main.tsx"),
      },
      output: {
        assetFileNames: () => {
          return "assets/[name][extname]";
        },
        entryFileNames: "[name].js",
        format: "esm",
      },
    },
  },
});

