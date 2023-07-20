import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import ComponentView from "../views/ComponentView.vue";
import UploadView from "../views/UploadView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/components",
    name: "Components",
    component: ComponentView,
  },
  {
    path: "/upload",
    name: "Upload",
    component: UploadView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
