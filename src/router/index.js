import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import FavoriteCars from '../views/FavoriteCars.vue'
import NewCar from '../views/NewCar.vue'
import Calculator from '../views/Calculator.vue'
import Login from '../views/Login.vue'
import store from '../store/index.js'
import ToHome from "@/views/ToHome";
const routes = [
  {
    path: '/:id',
    name: 'Home',
    component: Home,
    props:true,
  },
  {
    path:'/',
    name: 'ToHome',
    component: ToHome,
  },
  {
    path: '/car/:id',
    name: 'Car',
    component: Car,
    props:true,
  },
  {
    path: '/favoritecars/:id',
    name: 'Favorite Cars',
    component: FavoriteCars,
    props:true,
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
  },
  {
    path:'/newcar',
    name:'NewCar',
    component: NewCar
  },
  {
    path:'/calculator',
    name:'Calculator',
    component:Calculator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  let authenticated = store.state.token;
  if (authenticated && to.name !== 'Login') {
    next({ name: 'Login' })
  } else next()
  });

export default router