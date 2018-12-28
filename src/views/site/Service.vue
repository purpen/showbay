<template>
  <div class="app-container">
    <div class="sy-banner"></div>
    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="page-title">
        <h1>保修和退换货</h1>
        <div class="line"></div>
      </div>

      <div class="service-container">
        <div class="sy-block">
          <h1 class="title">中国大陆地区</h1>
          <p class="desc">保修条例： <br>1. 保修期内出现非人为损坏造成的产品性能故障，享受保修服务； <br>2. 产品保修期为一年，自产品购买之日起计算； <br>3. 本保修服务仅适用于产品原始供应的硬件设备； <br>4.自购买之日15日内，本产品如出现产品质量问题，消费者可以选择更换同型号同规格的检测产品； <br>5. 免保期内，由于产品自身问题，更换或维修的消费者将享受免费延保3个月； <br>6. 此证不得涂改，否则视为无效凭证。</p>
        </div>
      </div>

      <div class="service-container">
        <div class="sy-block">
          <h1 class="title">非中国大陆地区</h1>
          <p class="desc">保修条例：非中国大陆地区销售的产品，退货、换货或修理等质保问题请联系所在地授权经销商代为解决。</p>
        </div>
      </div>

      <div class="service-container">
        <div class="sy-block">
          <h1 class="title">非保修条例</h1>
          <p class="desc">下列情况(包含但不仅限于)不在保修服务范围内 <br>1. 无保修卡(或者缺失发票/收据)或者产品维修标签已损坏的； <br>2. 擅自涂改/撕毁产品条形码的； <br>3. 超过保修服务有效期的； <br>4. 产品保修凭证上的产品序列号或型号与实物不符合的； <br>5. 由非本公司授权服务者,擅自改动产品固有设置或者拆修造成的故障或损坏； <br>6. 因不可抗力如地震/火灾等导致的产品故障或损坏； <br>7. 其他非产品本身设计/技术/制造/质量等问题而导致故障或损坏的。</p>
        </div>
      </div>

      <div class="sy-space"></div>
    </div>
  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'Service',
    data () {
      return {

      }
    },
    created () {
      this.$store.commit(types.ACTIVE_MENU, 'service')
    }
  }
</script>

<style lang="scss" scoped>
  .sy-banner {
    width: 100%;
    height: 300px;
    background: url("https://static.moebeast.com/showbay/img/pic_service.jpg") no-repeat center center;
    background-size: cover;
  }
  .service-container {
    width: 800px;
    margin: 0 auto;
    text-align: left;

    .sy-block {
      margin-bottom: 50px;

      .title {
        font-size:18px;
        font-weight:500;
        color:rgba(34,34,34,1);
        margin-bottom: 10px;
      }
      .desc {
        font-size:14px;
        font-weight:300;
        color:rgba(34,34,34,1);
        line-height:24px;
      }
    }
  }

  @media (max-width: 768px) {
    .app-container {
      .main-wrapper {
        padding-top: 40px;

        .service-container {
          width: 100%;

          .sy-block {
            padding: 0 30px;
          }
        }
      }

    }
  }
</style>
