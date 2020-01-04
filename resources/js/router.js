import VueRouter from 'vue-router'
// Pages
import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'
import Materials from './views/Materials'
import Exams from './views/Exams'

import ppdbRouter from './routerPpdb'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/materials',
    name: 'materials',
    component: Materials
  },
  {
    path: '/exams',
    name: 'exams',
    component: Exams
  },
  ppdbRouter
]

const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})

export default router
