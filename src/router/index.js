import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Provedor from '../views/Provedor.vue'
import Producto from '../views/Productos.vue'
import Salida_entrada from '../views/Salida_Entrada.vue'
import Consultar_mov from '../views/Consultar_Mov.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/provedor',
    name: 'Provedor',
    component: Provedor
  },
  {
    path: '/producto',
    name: 'Producto',
    component: Producto
  },
  {
    path: '/salida_entrada',
    name: 'Salida_entrada',
    component: Salida_entrada
  },
  {
    path: '/consultar_mov',
    name: 'Consultar_mov',
    component: Consultar_mov
  },
]

const router = new VueRouter({
  routes
})

export default router
