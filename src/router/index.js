import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('@/App')
  },
  {
    path: '/messenger',
    name: 'messenger',
    component: () => import('@/components/Messenger')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
