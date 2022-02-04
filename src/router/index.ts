import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return {
        path: '/home',
      }
    },
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
