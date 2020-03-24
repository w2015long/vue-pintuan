<template>
  <div id="app">
      <router-view></router-view>
      <TabBar />
  </div>
</template>

<script>

    import TabBar from "./components/TabBar/TabBar";

    export default {
        name: 'App',
        components: {
            TabBar
        }
    }
</script>

<style scoped lang="stylus">


</style>
