import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
    },
  },
  css: {
    postcss: resolve(__dirname, "postcss.config.js"),
  },
  server: {
    proxy: {
      "/users": "http://localhost:3000",
      "/todolists": "http://localhost:3000",
      "/todos": "http://localhost:3000",
    },
  },
});
