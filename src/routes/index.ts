import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;