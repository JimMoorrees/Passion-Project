import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import Services from '../views/Services.vue';
import Cv from '../views/Cv.vue';

// All pagina met routes op deze pagina toevoegen zodat ik de links kan gebruiken op andere paginas: zie 'navigation.js'.

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/Cv',
    name: 'Cv',
    component: Cv,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
