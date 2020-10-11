import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrderList from '../views/OrderList.vue'
import ProductList from '../views/ProductList.vue'
import ImportarDatos from '../views/ImportarDatos.vue'
import Reportes from '../views/Reportes.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
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
    path: '/orderlist',
    name: 'OrderList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OrderList
  },
  {
    path: '/productlist',
    name: 'ProductList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductList
  },
  {
    path: '/importardatos',
    name: 'ImportarDatos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ImportarDatos
  },
  {
    path: '/reportes',
    name: 'Reportes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Reportes
  },

]

const router = new VueRouter({
  routes
})

export default router
