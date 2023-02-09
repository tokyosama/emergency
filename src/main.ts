import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AMapResource } from './plugin/AMapResource'
await AMapResource.Instance.Run()

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
