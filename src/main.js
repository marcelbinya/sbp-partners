import './tailwind.css';
import 'vue-material-design-icons/styles.css';

import { createApp } from 'vue';

import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import { routes } from './routes.js';

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.acceptDeps('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)

app.mount('#app')
