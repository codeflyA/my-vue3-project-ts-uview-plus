import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import uniRouter from "unplugin-uni-router/vite";
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniRouter(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
      // 如有用到eslint记得加上，没有用到可以忽略
      // eslintrc: {
      //   enabled: true,
      // },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
