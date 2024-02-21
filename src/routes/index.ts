import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { IUserInfo } from "@/types/utilities";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home/Home.vue"),
    meta: {
      NavBar: true,
    },
  },
  {
    path: "/cover",
    name: "cover",
    component: () => import("../pages/Cover/Cover.vue"),
  },
  {
    path: "/boarding",
    name: "boarding",
    component: () => import("../pages/Boarding/Boarding.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/Login.vue"),
  },
  {
    path: "/notification",
    name: "notificationView",
    component: () => import("../pages/Notification/NotificationView.vue"),
    meta: {
      NavBar: true,
    },
  },
  {
    path: "/notification/:id",
    name: "notification",
    props: true,
    component: () => import("../pages/Notification/Notification.vue"),
    meta: {
      NavBar: true,
    },
  },
  {
    path: "/bitcon",
    name: "bitcon",
    component: () => import("../pages/NavBar/Bitcon.vue"),
    meta: {
      NavBar: true,
      title: "Bitcon"
    },
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("../pages/NavBar/Chart.vue"),
    meta: {
      NavBar: true,
      title: "Chart-Month"
    },
  },
  {
    path: "/extract",
    name: "extract",
    component: () => import("../pages/NavBar/Extract.vue"),
    meta: {
      NavBar: true,
      title: "Extract"
    },
  },
  {
    path: "/investiment",
    name: "investiment",
    component: () => import("../pages/NavBar/Investiment.vue"),
    meta: {
      NavBar: true,
      title: "Investiment"
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../pages/NavBar/User.vue"),
    meta: {
      NavBar: true,
      title: "User"
    },
  },
  {
    path: "/service",
    name: "service",
    component: () => import("../pages/Service/Service.vue"),
    meta: {
      NavBar: true,
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
      let login: IUserInfo = JSON.parse(local);

      !login ? next({ name: "cover" }) : next();
    }
  }
});

export default router;
