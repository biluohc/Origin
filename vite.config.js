import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2015",
    outDir: "dist",
  },
  plugins: [vue(), vueJsx()],
});
