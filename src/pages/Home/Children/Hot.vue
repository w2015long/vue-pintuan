<template>
    <div class="man">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    // 1. 引入swiper相关
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'



    export default {
        name: "Hot",
        data:()=>({

        }),
        mounted() {
            new Swiper ('.swiper-container', {
                direction: 'vertical', // 垂直切换选项
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
      /*background purple*/
      display flex
      justify-content center
      align-items center
</style>
