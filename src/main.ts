import { createApp } from 'vue'
import App from './App.vue'
import element_plus from 'element-plus'
import naive_ui from 'naive-ui'
import 'element-plus/dist/index.css'
import * as element_plus_icon from '@element-plus/icons-vue'
import router from './router/index'
import { pinia } from './store/pinia'

const app = createApp(App)

app
.use(element_plus)
.use(naive_ui)
.use(router)
.use(pinia)
.mount('#app')

for (const [key, component] of Object.entries(element_plus_icon)) {
    app.component(key, component)
}