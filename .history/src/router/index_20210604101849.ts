import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: (resolve) => require(['../views/Home.vue'], resolve)
  },
  {
    path: '/layout',
    name: 'Layout',
    component: (resolve) => require(['../views/Layout/Index.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
