import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // use relative directory
  publicDir: "public",
  build: {
    target: "es2015",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  plugins: [vue(), vueJsx()],
});
