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
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let arr = JSON.parse(localStorage.getItem('steps')) || []
  if(to.path === '/' || to.path === '/register'){
    next()
  }else if (to.path === "/apply" && arr.includes(1)) {
    next();
  } else if (to.path === "/product" && arr.includes(2)) {
    next();
  } else if (to.path === "/pass" && arr.includes(3)) {
    next();
  } else if (to.path === "/result" && arr.includes(4)) {
    next();
  } else {
    next({path:'/'});
  }
});

export default router
