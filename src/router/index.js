import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeAgain.vue'
import Contact from '../views/Contact.vue'
import Project from '../views/Project.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/projets',
      name: 'projet',
      component: Project
    },{
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router
