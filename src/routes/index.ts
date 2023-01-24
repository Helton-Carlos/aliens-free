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
    component: () => import("../pages/Sign.vue"),
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
    },
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("../pages/navBar/Chart.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/extract",
    name: "extract",
    component: () => import("../pages/navBar/Extract.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/investiment",
    name: "investiment",
    component: () => import("../pages/navBar/Investiment.vue"),
    meta: {
      navBar: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../pages/navBar/User.vue"),
    meta: {
      navBar: true,
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
  interface ILogin {
    email: string;
    id: number;
    password: string;
    token: string;
  }

  if (
    from &&
    to.fullPath === "/cover" ||
    to.fullPath === "/boarding" ||
    to.fullPath === "/sign"
  ) {
    next();
  } else {
    let local = localStorage.getItem("localStorage");
    if (!local) {
      next({ name: "cover" });
    }
    if (typeof local === "string") {
      let login: ILogin = JSON.parse(local);
      if (!login) {
        next({ name: "cover" });
      } else {
        next();
      }
    }
  }
});

export default router;
