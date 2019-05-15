import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.less'

import axios from 'axios'
Vue.prototype.$http = axios

import XMessage from '@/components/XMessage'
Vue.use(XMessage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
