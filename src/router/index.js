import { createRouter, createWebHistory } from "vue-router";

import StartPage from "@/sections/Start Page.vue";
//import WorkOrders from "@/sections/Work Orders.vue";

const routes = [
  {
    path: "/report",
    name: "report",
    component: () => import("@/sections/report.vue"),
  },
  {
    path: "/studyd3",
    name: "studyd3",
    component: () => import("@/sections/studyd3.vue"),
  },
  {
    path: "/s-Curve",
    name: "s-Curve",
    component: () => import("@/sections/sCurve.vue"),
  },
  {
    path: "/workOrders",
    name: "work-orders",
    component: () => import("@/sections/workOrders.vue"),
  },

  {
    path: "/startPage",
    name: "start-page",
    component: StartPage,
  },
  /*{
    path: "/plan-fact/:id/:section",
    name: "plan-fact",
    component: () => import("@/sections/Work Orders/PlanFact.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
