import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Partner from '../views/Partner.vue'
import Cart from '../views/CartView.vue'
import Card from '../views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/partner',
      name: 'partner',
      component: Partner
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product/:id',
      name: 'card',
      component: Card
    }
  ]
})

export default router
