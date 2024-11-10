import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const routes = [
    {
      path: '/', name: 'Home', component: Home
    },

    
    
  {
    path: '/destination/:id',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue')
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active-link"
})

export default router;

