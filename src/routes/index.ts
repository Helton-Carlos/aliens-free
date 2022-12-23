import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),  },
  {
    path: "/cover",
    name: "cover",
    component: () => import("../pages/Cover.vue"),
  },
  {
    path: "/boarding",
    name: "boarding",
    component: () => import("../pages/Boarding.vue"),
  },
  {
    path: "/sign",
    name: "sign",
    component: () => import("../pages/Sing/Sign.vue"),
  },
  {
    path: "/notification/:id",
    name: "notification",
    props: true,
    component: () => import("../pages/Notification.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

 router.beforeEach((to, from, next) => {
  let login = JSON.parse(localStorage.getItem("localStorage"));
  if (to.fullPath === "/") {
    if (!login) {
      next({ name: "cover" });
    }
  }
  next();
});

export default router;
