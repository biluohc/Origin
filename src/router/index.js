import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'

Vue.use(Router)

const Editor = () => import(/* webpackChunkName: "editor" */ './Editor.vue')
const NotFound = () => import(/* webpackChunkName: "404" */ './NotFound.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
