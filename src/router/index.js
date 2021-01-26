import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/Apply.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/pass',
    name: 'Pass',
    component: () => import('../views/Pass.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
