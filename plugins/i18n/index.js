import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: {
      test: '国际化'
    }
  }
})
Vue.prototype.$nation = i18n