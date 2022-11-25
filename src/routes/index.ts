import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> =[
    {
        path: "/",
        name: "index",
        component: () => import('../pages/Index.vue')
    },
    {
        path: "/boarding",
        name: "boarding",
        component: () => import('../pages/Boarding.vue')
    },
    {
        path: "/sign",
        name: "sign",
        component: () => import('../pages/Sign.vue')
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../pages/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;