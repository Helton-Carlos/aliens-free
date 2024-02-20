import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ILogin } from "@/types/utilities";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: {
      navBar: true,
    },
  },
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
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/notification",
    name: "notificationView",
    component: () => import("../pages/NotificationView.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/notification/:id",
    name: "notification",
    props: true,
    component: () => import("../pages/Notification.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/bitcon",
    name: "bitcon",
    component: () => import("../pages/navBar/Bitcon.vue"),
    meta: {
      navBar: true,
      title: "Bitcon"
    },
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("../pages/navBar/Chart.vue"),
    meta: {
      navBar: true,
      title: "Chart-Month"
    },
  },
  {
    path: "/extract",
    name: "extract",
    component: () => import("../pages/navBar/Extract.vue"),
    meta: {
      navBar: true,
      title: "Extract"
    },
  },
  {
    path: "/investiment",
    name: "investiment",
    component: () => import("../pages/navBar/Investiment.vue"),
    meta: {
      navBar: true,
      title: "Investiment"
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../pages/navBar/User.vue"),
    meta: {
      navBar: true,
      title: "User"
    },
  },
  {
    path: "/service",
    name: "service",
    component: () => import("../pages/Service.vue"),
    meta: {
      navBar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    (from && to.fullPath === "/cover") ||
    to.fullPath === "/boarding" ||
    to.fullPath === "/login"
  ) {
    next();
  } else {
    let local = localStorage.getItem("localStorage");

    if (!local) return next({ name: "cover" });

    if (typeof local === "string") {
      let login: ILogin = JSON.parse(local);

      !login ? next({ name: "cover" }) : next();
    }
  }
});

export default router;
