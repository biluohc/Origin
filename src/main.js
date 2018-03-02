// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import http from "axios";
import FileSaver from "file-saver";

import App from './App'
import router from './router/index'
import store from './store.js'

Vue.config.productionTip = false

Vue.prototype.http = http
Vue.prototype.store = store
Vue.prototype.FileSaver = FileSaver

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
