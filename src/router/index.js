import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "../components/LandingPage.vue";
import ContactUs from "../components/ContactUs";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
