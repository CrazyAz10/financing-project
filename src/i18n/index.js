// import Vue from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './languages'
import defaultSettings from '@/settings'
const { languages } = defaultSettings
// 结合element-ui国际化动态切换语言包
// import locale from 'element-ui/lib/locale'

// 多语言支持
// Vue.use(VueI18n)

export default createI18n({
  locale: languages.locale, //zh_cn
  messages
})
// locale.i18n((key, value) => i18n.t(key, value))
