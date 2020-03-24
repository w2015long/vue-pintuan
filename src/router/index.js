import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入一级的路由版块
import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Chat from './../pages/Chat/Chat'
import Search from './../pages/Search/Search'
import Me from './../pages/Me/Me'
import Login from './../pages/Login/Login'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {path: '/search', component: Search, meta: {showBottomTabBar: true}},
        {path: '/chat', component: Chat, meta: {showBottomTabBar: true}},
        {path: '/me', component: Me, meta: {showBottomTabBar: true}},
        {path: '/recommend', component: Recommend, meta: {showBottomTabBar: true}},
        {path: '/login', component: Login},
        {path: '/', redirect: '/home'}
    ],
    linkActiveClass:'on'
})