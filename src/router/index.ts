import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"
import { userInfoStore } from "../store"
import { pinia } from "../store/pinia"
import { local } from "../store/storage"

const routes: Array<RouteRecordRaw> = [
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router