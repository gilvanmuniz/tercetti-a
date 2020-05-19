import Vue from 'vue'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
