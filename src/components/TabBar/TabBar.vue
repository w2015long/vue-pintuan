<template>
    <div class="bottom-tab">
        <div class="tab-item" @click="swithTabbar('/home')">
            <img :src="$route.path.includes('/home') ? tabBarImgs[0].selected : tabBarImgs[0].nomal" alt="首页">
            <span :class="{on:$route.path.includes('/home')}">首页</span>
        </div>
        <div  class="tab-item" @click="swithTabbar('/recommend')">
            <img :src="$route.path.includes('/recommend') ? tabBarImgs[1].selected : tabBarImgs[1].nomal" alt="推荐">
            <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
        </div>
        <div  class="tab-item" @click="swithTabbar('/search')">
            <img :src="$route.path.includes('/search') ? tabBarImgs[2].selected : tabBarImgs[2].nomal" alt="搜索">
            <span :class="{on:$route.path.includes('/search')}">搜索</span>
        </div>
        <div  class="tab-item" @click="swithTabbar('/chat')">
            <img :src="$route.path.includes('/chat') ? tabBarImgs[3].selected : tabBarImgs[3].nomal" alt="聊天">
            <span :class="{on:$route.path.includes('/chat')}">聊天</span>
        </div>
        <div class="tab-item" @click="swithTabbar('/me')">
            <img :src="$route.path.includes('/me') ? tabBarImgs[4].selected : tabBarImgs[4].nomal" alt="我的">
            <span :class="{on:$route.path.includes('/me')}">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data:()=>({
            activeTabItem:0,
            tabBarImgs:[
                {
                    nomal: require("../../assets/img/icon_home.png"),
                    selected: require("../../assets/img/icon_home_selected.png")
                },
                {
                    nomal: require("../../assets/img/icon_intro.png"),
                    selected: require("../../assets/img/icon_intro_selected.png")
                },
                {
                    nomal: require("../../assets/img/icon_search.png"),
                    selected: require("../../assets/img/icon_search_selected.png")
                },
                {
                    nomal: require("../../assets/img/icon_chat.png"),
                    selected: require("../../assets/img/icon_chat_selected.png")
                },
                {
                    nomal: require("../../assets/img/icon_mine.png"),
                    selected: require("../../assets/img/icon_mine_selected.png")
                }
            ]
        }),
        methods: {
            swithTabbar(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .bottom-tab
        width 100%
        height 5rem
        background-color #fff
        position fixed
        left 0
        bottom 0
        z-index 99
        box-shadow 0 -0.2rem 1rem #ccc
        display flex
        .tab-item
            display flex
            flex-direction column
            justify-content center
            align-items center
            font-size 1.2rem
            img
                width 35%
                margin-bottom 0.3rem
            .on
                color red
</style>