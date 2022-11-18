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
        path: "/sing",
        name: "sing",
        component: () => import('../pages/Sing.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;