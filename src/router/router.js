// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import AboutPage from '../components/pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
