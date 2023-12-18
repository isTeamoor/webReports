import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/sections/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/analysis/raisedWO",
    name: "analysis-raisedWO",
    component: () => import("@/sections/Analysis/raisedWO.vue"),
  },
  {
    path: "/report",
    name: "report",
    component: () => import("@/sections/report.vue"),
  },
  {
    path: "/workOrders",
    name: "work-orders",
    component: () => import("@/sections/workOrders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
