import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: "",
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: "users",
          name: 'users',
          component: () => import('@/modules/user/views/index.vue')
        }
      ]
    }
  ],
})

export default router
