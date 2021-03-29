import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

import router from '@/router'
import i18n from '@/i18n'
import store from '@/store'

import { ElCol, ElRow } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(store)
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.mount('#app')
