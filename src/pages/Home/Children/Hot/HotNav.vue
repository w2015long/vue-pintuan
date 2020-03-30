<template>
    <div class="main">
        <div class="nav-container">
            <div class="nav-wrapper">
                <div class="nav-item" v-for="item in 20" :key="item">{{ item }} </div>
            </div>
            <div class="nav-progress">
                <div class="progress-item"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotNav"
    }
</script>

<style scoped lang="stylus">
    .main
        position relative
        width 100%
        height 180px
        .nav-container
            margin-top 1.5rem
            width 100%
            height 180px
            overflow-x scroll
            &::-webkit-scrollbar
                display:none
            .nav-wrapper
                display flex
                flex-wrap wrap
                width 750px
                height 180px
                .nav-item
                    width 90px
                    height 90px
                    background-color blueviolet
                    margin-right 10px
                    text-align center
            .nav-progress
                position absolute
                left 50%
                transform translateX(-50%)
                bottom 5px
                width 150px
                height 4px
                background-color aquamarine
                .progress-item
                    width 15px
                    height 3px
                    background-color red




</style>