// 1. 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级的路由版块
const Home  = () => import('./../pages/Home/Home')
const Recommend = () =>  import('./../pages/Recommend/Recommend')
const Cart = () =>  import( './../pages/Cart/Cart')
const Search = () =>  import( './../pages/Search/Search')
const Me = () =>  import( './../pages/Me/Me')
const Login = () =>  import( './../pages/Login/Login')

// 引入二级的路由版块
const Hot = () =>  import( '../pages/Home/Children/Hot/Hot')
const Box = () =>  import( './../pages/Home/Children/Box')
const Dress = () =>  import( './../pages/Home/Children/Dress')
const Ele = () =>  import( './../pages/Home/Children/Ele')
const Food = () =>  import( './../pages/Home/Children/Food')
const General = () =>  import( './../pages/Home/Children/General')
const Man = () =>  import( './../pages/Home/Children/Man')
const Mbaby = () =>  import( './../pages/Home/Children/Mbaby')
const Shirt  = () =>  import( './../pages/Home/Children/Shirt')

// const Hot = ()=> import('./../pages/Home/Children/Hot/Hot');

// 2. 声明使用
Vue.use(VueRouter);

// 3. 输入路由对象
export default new VueRouter({
  // 3.1 配置一级路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'hot', component: Hot, meta: {showBottomTabBar: true}},
        {path: 'box', component: Box, meta: {showBottomTabBar: true}},
        {path: 'dress', component: Dress, meta: {showBottomTabBar: true}},
        {path: 'ele', component: Ele},
        {path: 'food', component: Food},
        {path: 'general', component: General},
        {path: 'man', component: Man},
        {path: 'mbaby', component: Mbaby},
        {path: 'shirt', component: Shirt},
        {path: '/home', redirect: '/home/hot'}
      ]
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {showBottomTabBar: true}
    },
    {path: '/cart', component: Cart, meta: {showBottomTabBar: true}},
    {path: '/search', component: Search, meta: {showBottomTabBar: true}},
    {path: '/me', component: Me, meta: {showBottomTabBar: true}},
    {path: '/login', component: Login},
    {path: '/', redirect: '/home'}
  ]
});
