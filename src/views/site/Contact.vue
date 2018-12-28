<template>
  <div class="app-container">
    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="page-title">
        <h1>联系我们</h1>
        <div class="line"></div>
      </div>

      <div class="sy-block">
        <h1 class="title">媒体及品牌合作</h1>
        <p class="desc">若有关于媒体采访、品牌合作等事宜，请联系</p>
        <div class="mail">marketing@ishowbay.com</div>
      </div>

      <div class="sy-block">
        <h1 class="title">经销商和礼品采购</h1>
        <p class="desc">若有关于产品经销及采购等事宜，请联系</p>
        <div class="mail black">business@ishowbay.com</div>
      </div>

      <div class="sy-block">
        <h1 class="title">产品售后</h1>
        <p class="desc">若有关于产品使用和质保等事宜，请联系</p>
        <div class="mail">service@ishowbay.com</div>
        <div class="phone">或致电 400-037-5240</div>
      </div>

      <div class="sy-space"></div>
    </div>
  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'Contact',
    data () {
      return {

      }
    },
    created () {
      this.$store.commit(types.ACTIVE_MENU, 'contact')
    }
  }
</script>

<style lang="scss" scoped>
  .sy-block {
    margin-bottom: 36px;

    .title {
      font-size:24px;
      font-weight:500;
      color:rgba(34,34,34,1);
      margin-bottom: 20px;
    }
    .desc {
      font-size:14px;
      font-weight:300;
      color:rgba(34,34,34,1);
    }
    .mail {
      margin: 0 auto;
      width:200px;
      height:30px;
      border:1px solid rgba(34,34,34,1);
      font-size:14px;
      font-weight:300;
      line-height: 30px;
      color:rgba(34,34,34,1);

      &.black {
        background:rgba(34,34,34,1);
        color:rgba(255,255,255,1);
      }
    }
    .phone {
      margin-top: 12px;
      font-size:14px;
      font-weight:300;
      color:rgba(34,34,34,1);
    }
  }
</style>
