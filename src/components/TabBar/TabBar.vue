<template>
    <div class="bottom-tab">
        <router-link to="/home" class="tab-item">
            <img src="../../assets/img/icon_home.png" alt="">
            <span>首页</span>
        </router-link>
        <router-link to="/recommend" class="tab-item">
            <img src="../../assets/img/icon_intro.png" alt="">
            <span>推荐</span>
        </router-link>
        <router-link to="/search" class="tab-item">
            <img src="../../assets/img/icon_search.png" alt="">
            <span>搜索</span>
        </router-link>
        <router-link to="/chat" class="tab-item">
            <img src="../../assets/img/icon_chat.png" alt="">
            <span>聊天</span>
        </router-link>
        <router-link to="me" class="tab-item">
            <img src="../../assets/img/icon_mine.png" alt="">
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data:()=>({
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