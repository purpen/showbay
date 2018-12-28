<template>
  <div class="app-wrapper">
    <!-- 头部 -->
    <app-header></app-header>

    <!-- 坑 -->
    <app-main></app-main>

    <!-- 底部 -->
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { AppHeader, AppFooter, AppMain } from '@/components'

  export default {
    name: 'Base',
    components: {
      AppMain,
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="scss" scoped>

</style>
