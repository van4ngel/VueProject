import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from './components/PaginaInicial.vue'
import MeuComponent from './components/MeuComponent.vue'
import TelaLivros from './components/TelaLivros.vue'  

const routes = [
  { path: '/', component: PaginaInicial },
  { path: '/MeuComponent', component: MeuComponent },
  { path: '/TelaLivros', component: TelaLivros }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
