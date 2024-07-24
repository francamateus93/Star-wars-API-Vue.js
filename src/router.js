import Home from "./views/Home.vue";
import Film from "./views/Film.vue"
import NotFound from "./views/NotFound.vue";
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/film/:id", name: "film", component: Film, props: true},
  { path: "/:path(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
