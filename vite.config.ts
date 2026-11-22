import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves it under /portfolio/; Vercel (dk09.vercel.app) serves it at the root.
  // Vercel sets VERCEL=1 during its build.
  base: process.env.VERCEL ? "/" : "/portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
