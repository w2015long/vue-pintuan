<template>
    <div class="home">
        <ly-tab
            class="fix"
            v-model="selectedId"
            :items="items"
            @change="swithSubRouter"
        />
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Home",
        data:()=>({
            selectedId: 0,
            items: [
                {label: '热门'},
                {label: '服饰'},
                {label: '鞋包'},
                {label: '母婴'},
                {label: '百货'},
                {label: '食品'},
                {label: '内衣'},
                {label: '男装'},
                {label: '电器'}
            ],
            // 二级路由的路径
            subRouteUrl: ['/home/hot','/home/dress','/home/box','/home/mbaby','/home/general','/home/food','/home/shirt','/home/man','/home/ele']
        }),
        methods:{
            swithSubRouter(item,index) {
                this.$router.replace(this.subRouteUrl[index])
            }
        }
    }
</script>

<style scoped lang="stylus">
    .home
        width 100%
        height 100%
        padding-top 46px
        .fix
            position fixed
            left 0
            top 0
            width 100%
            z-index 999
</style>