import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { key, store } from "./store/index"

import { router } from './route'
import { $http } from './api/http'

import { addProp } from './mixins/addProp'

const app = createApp(App)
app.use(ElementPlus)
app.use(store, key)

app.use(router)
app.mixin(addProp)
app.mount('#app')
app.config.globalProperties.$http = $http
