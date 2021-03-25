import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './scss/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
AOS.init();

new Vue({
  router,
  store,
  AOS,
  render: h => h(App)
}).$mount('#app')
