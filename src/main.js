// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeuResource from 'vue-resource'
import VeuRouter from 'vue-router'



Vue.config.productionTip = false
Vue.use(VeuResource)
Vue.use(VeuRouter)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
