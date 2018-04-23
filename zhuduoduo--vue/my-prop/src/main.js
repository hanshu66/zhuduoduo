// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import footer from './components/footer/footer.vue'
import Vuex from "vuex"
Vue.component(footer.name,footer);

import cont from './components/cont/cont.vue'
Vue.component(cont.name,cont);

//引入axios
import axios from "axios"
Vue.prototype.$http = axios;
Vue.config.productionTip = false 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
