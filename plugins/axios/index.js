import Vue from 'vue'
import service from '~/assets/js/http.js'
import NtFilters from '~/assets/js/filters.js'

Vue.prototype.$http = service
for (let key in NtFilters) {
  Vue.filter(key, NtFilters[key])
}