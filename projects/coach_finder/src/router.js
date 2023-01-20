import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./components/pages/MainPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";
import RequestsPage from "./components/pages/RequestsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "main",
      path: "/",
      component: MainPage,
    },
    {
      name: "coaches",
      path: "/coaches",
      redirect: "/",
    },
    {
      name: "coach",
      path: "/coaches/:coachId",
      component: ContactPage,
      props: true,
    },
    {
      name: "requests",
      path: "/requests",
      component: RequestsPage,
    },
  ],
});

export default router;
