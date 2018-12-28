<template>
  <transition name="fade-transform" mode="out-in">
    <router-view :key="key"></router-view>
  </transition>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key () {
        return this.$route.fullPath
      }
    }
  }
</script>

<style scoped>

</style>
