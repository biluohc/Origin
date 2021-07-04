// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp, reactive  } from "vue";
import http from "axios";
import FileSaver from "file-saver";

import App from "./App.vue";
import store from "./store.js";
import router from "./router/index.js";

window.http = http;
window.store = reactive(store);
window.FileSaver = FileSaver;

const app = createApp(App);
app.use(router);
app.mount("#app");
