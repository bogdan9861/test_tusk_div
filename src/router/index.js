import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Results from "@/views/Results.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/results",
    name: "results",
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
