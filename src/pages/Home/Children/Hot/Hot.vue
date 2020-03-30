<template>
    <div class="man">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in 4" :key="item">{{ item }}</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <HotNav />
    </div>
</template>

<script>
    // 1. 引入swiper相关
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'

    import HotNav from "./HotNav";
    export default {
        name: "Hot",
        data:()=>({

        }),
        components:{
            HotNav
        },
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        },
        methods:{},
        watch:{

        }

    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .man
        width 100%
        height 100%
        .swiper-container
            .swiper-wrapper
                .swiper-slide
                    width 100%
                    height 10rem
                    background-color aqua

</style>
