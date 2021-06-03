import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: (resolve) => require(['../views/Home.vue'], resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
