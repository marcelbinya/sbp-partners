import "./tailwind.css";
import "vue-material-design-icons/styles.css";

import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import { routes } from "./routes.js";
import storeDefinition from "./storeDefinition";

//
// setup vue app
//

let app = createApp(App);
let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

if (import.meta.hot) {
  let removeRoutes = [];

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

  import.meta.hot.acceptDeps("./routes.js", ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute();
    removeRoutes = [];
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace("");
  });
}

// Create a new store instance.
const store = new Vuex.Store(storeDefinition);

app.use(Vuex);

app.use(router);
app.use(store);

app.mount("#app");
