import Partners from './views/Partners.vue';
import Partner from './views/Partner.vue';

export let routes = [
  {
    name: 'home',
    path: '/',
    component: Partners,
  },
  {
    name: 'partners',
    path: '/partners',
    component: Partners,
  },
  {
    name: 'partner',
    component: Partner,
    path: '/partners/:name',
  }
]
