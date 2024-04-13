import uviewPlus from "uview-plus";
import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from "pinia";
import { createUnistorage } from "pinia-plugin-unistorage";
import router from "@/router/router";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  const store = Pinia.createPinia();
  // 关键代码 👇
  store.use(createUnistorage());
  app.use(store);
  app.use(router);
  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  };
}
