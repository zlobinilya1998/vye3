import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name:'home',
    path:'/',
    component:() => import('@/components/Home')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
