import { defineStore } from "pinia"
import { local } from "./storage"

export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            userInfo: {
                token: '',
            }
        }
    },
    getters: {
        getToken(state) {
            return state.userInfo.token || local.get('token') || ''
        }
    },
    actions: {
        setUserInfo(userinfo: any) {
            this.userInfo = userinfo
            local.set('token', userinfo.token)
        },
        delUserInfo() {
            local.removeItem(this.userInfo.token)
            this.userInfo = {
                token: ''
            }
        }
    }
})