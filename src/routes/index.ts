import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
    path: "/sign",
    name: "sign",
    component: () => import("../pages/sing/Sign.vue"),
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
    name: "Bitcon",
    component: () => import("../pages/navBar/Bitcon.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../pages/navBar/Chart.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/extract",
    name: "Extract",
    component: () => import("../pages/navBar/Extract.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/investiment",
    name: "Investiment",
    component: () => import("../pages/navBar/investiment.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../pages/navBar/User.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/service",
    name: "Service",
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
  interface ILogin {
    email: string;
    id: number;
    password: string;
    token: string;
  }
  
  let local = localStorage.getItem("localStorage");

  if (typeof local === "string") {
    let login: ILogin = JSON.parse(local);

    if (to.fullPath === "/" || to.fullPath === "/notification") {
      if (!login) {
        next({ name: "cover" });
      }
    }
    next();
  }
});

export default router;
