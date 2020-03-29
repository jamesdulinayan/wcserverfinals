import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueRouter from 'vue-router'
import Bootstrapvue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//require (! /node_modules/bootstrap/dist/css/Bootstrap.css)

Vue.use(Bootstrapvue)
Vue.use(VueRouter)
Vue.use(axios)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
