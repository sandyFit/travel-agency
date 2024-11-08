import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const routes = [
    {
      path: '/', name: 'Home', component: Home
    },

    {
      path: '/brazil', name: 'Brazil', component: () => import('@/views/Brazil.vue')
    },
    {
      path: '/jamaica', name: 'Jamaica', component: () => import('@/views/Jamaica.vue')
    },
    {
      path: '/hawaii', name: 'Hawaii', component: () => import('@/views/Hawaii.vue')
    },
    {
      path: '/panama', name: 'Panama', component: () => import('@/views/Panama.vue')
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;

