import Vue from 'vue'
import Router from 'vue-router'
import Productos from '@/components/Productos'
import Estadisticas from '@/components/Estadisticas'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Productos',
      name: 'Productos',
      component: Productos
    },
    {
      path: '/Estadisticas',
      name: 'Estadisticas',
      component: Estadisticas
    }
    
    
  ]
})
