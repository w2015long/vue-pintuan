import Vue from 'vue'
import App from './App.vue'
import ajax from './api/ajax'

import router from './router'

import LyTab from 'ly-tab'

Vue.use(LyTab)

// Object.defineProperty(Vue.prototype,"ajax",ajax);
Vue.prototype.ajax = ajax;


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
