import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from './router/index'
// 引入vuex对象
import store from './store'
// 引入顶部的tab
import LyTab from 'ly-tab'
// 引入字体图标
import '../src/common/css/style.css'
import "../src/common/stylus/mixins.styl"
// 配置图片的懒加载
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.jpg'
Vue.use(VueLazyLoad, {
  loading
});

Vue.use(LyTab)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
