import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component:Login

    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/interfaceManage',
      name: 'interfaceManage',
      component: () => import('../views/interfaceManagePage/index.vue')
    },
    {
      path:'/',
      name:'/mypage',
      component:()=>import('../views/Mypage.vue')
    }
  ]
})

export default router
