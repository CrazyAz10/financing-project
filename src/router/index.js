
import { createRouter, createWebHistory } from 'vue-router'

const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/home')
  },
]

const routerHistory = createWebHistory()


export default createRouter({
  history: routerHistory,
  scrollBehavior: (to, from, savedPosition) => { 
    return { y: 0 }
  },
  routes: constantRoutes
})