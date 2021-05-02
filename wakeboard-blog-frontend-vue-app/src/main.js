import Vue from 'vue'
import App from './App.vue'
import router from './router'

// plugins bootstrap
import BootstrapVue from 'bootstrap-vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
