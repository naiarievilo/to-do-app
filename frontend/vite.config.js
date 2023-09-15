import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@features": resolve(__dirname, "src/features"),
      "@layout": resolve(__dirname, "src/layout"),
      "@lib": resolve(__dirname, "src/lib"),
      "@routes": resolve(__dirname, "src/routes"),
      "@shared": resolve(__dirname, "src/shared")
    },
  },
  css: {
    postcss: resolve(__dirname, "postcss.config.js")
  }
});
