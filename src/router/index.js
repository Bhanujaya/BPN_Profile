import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profile from '../views/profile.vue'
import Form from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
        layout: "Main"
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: profile,
      meta : {
        layout: "Main"
      }
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta : {
        layout : "Main"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
