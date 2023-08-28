import path from "path";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000/",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
