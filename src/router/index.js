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
    path: '/cadastro',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (cadastro.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cadastro" */ '../views/Cadastro.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    // route level code-splitting
    // this generates a separate chunk (clientes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
