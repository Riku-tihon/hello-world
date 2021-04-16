import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import FavoriteCars from '../views/FavoriteCars.vue'
const routes = [
  {
    path: '/:id',
    name: 'Home',
    component: Home,
    props:true,
  },
  {
    path: '/car/:id',
    name: 'Car',
    component: Car,
    props:true,
  },
  {
    path: '/favoritecars',
    name: 'Favorite Cars',
    component: FavoriteCars,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router