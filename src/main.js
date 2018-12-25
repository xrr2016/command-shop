import Vue from 'vue'
import 'sanitize.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './lib/photon/css/photon.min.css'
import './main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
