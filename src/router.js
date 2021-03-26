import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Todos from "@/views/Todos.vue";
import Calculator from "@/views/Calculator.vue";
import Drops from "@/views/Drops.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/drops",
    name: "Drops",
    component: Drops,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
