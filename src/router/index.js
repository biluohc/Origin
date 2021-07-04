import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home/index.vue";

import Editor from "./Editor/index.vue";
import Upload from "./Upload/index.vue";
import NotFound from "./NotFound.vue";
// const Editor = () => import(/* webpackChunkName: "editor" */ './Editor/index.vue')
// const Upload = () => import(/* webpackChunkName: "editor" */ './Upload/index.vue')
// const NotFound = () => import(/* webpackChunkName: "404" */ './NotFound.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      alias: "/home",
    },
    {
      path: "/editor",
      name: "Editor",
      component: Editor,
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
    },
    {
      path: "/.*",
      name: "404",
      component: NotFound,
    },
  ],
});

export default router;
