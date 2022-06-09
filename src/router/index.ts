import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"
import { userInfoStore } from "../store"
import { pinia } from "../store/pinia"
import { local } from "../store/storage"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/app',
    },
    {
        path: '/app',
        component: () => import("../App.vue"),
        redirect: '/concat',
        children: [
            {
                path: '/concat',
                component: () => import("../components/Concat.vue"),
                redirect: '/index',
                children: [
                    {
                        path: '/index',
                        component: () => import("../components/IndexPage.vue"),
                    },
                    {
                        path: '/simple/form',
                        component: () => import("../components/form/SimpleForm.vue"),
                    },
                    {
                        path: '/step/form',
                        component: () => import("../components/form/StepForm.vue"),
                    },
                ]
            }
        ]
    },
    {
        path: '/404',
        component: () => import("../components/status/NotFound.vue")
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router