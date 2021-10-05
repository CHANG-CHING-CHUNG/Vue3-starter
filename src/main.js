import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import axios from 'axios'

const projectName = createApp(App)
projectName.use(store)
projectName.use(router,axios)
projectName.use(ElementPlus)
projectName.mount('#app')
