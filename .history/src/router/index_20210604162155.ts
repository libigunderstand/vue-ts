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
    path: '/layout/:id',
    name: 'Layout',
    component: (resolve) => require(['../views/Layout/Index.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
