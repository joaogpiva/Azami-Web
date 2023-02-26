import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SessionRedirector from '../views/SessionRedirectorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'session-redirector',
    component: SessionRedirector
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/azami-app',
    name: 'azami-app',
    component: () => import('../views/AzamiAppView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
