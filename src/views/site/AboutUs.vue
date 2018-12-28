<template>
  <div class="app-container">
    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="page-title">
        <h1>About 秀倍技研</h1>
        <div class="line"></div>
      </div>

      <div class="about-container">
        <div class="sy-block">
          <p class="desc">秀倍技研为米选科技旗下的品质生活原创设计品牌，专注于个人护理小家电领域。 创立于 2017 年 6 月，位于中国深圳，秉承着“让科技更具美感“的理念，致力 于自主设计研发高品质、高体验的个人护理电子用品，旨在以最有美感的科技， 创造自然舒适的产品服务于全球用户。 </p>
          <p class="desc">通过科技创新产品设计，通过设计提升生活品质，通过产品高亮中国创新力，秀倍一直在路上。</p>
          <p class="desc">秀倍坚信:追求设计，是对生活最好的热爱。</p>
        </div>
      </div>

      <div class="page-title">
        <h1>设计理念</h1>
        <div class="line"></div>
      </div>

      <div class="about-container">
        <div class="sy-block">
          <p class="desc">化繁为简，将科技与美感以平衡的方式完美结合，融入现代设计语言，追求呈现 生活本质的极简设计。 大巧不工，每个细节都是必不可少，每种材质都是举足轻重，每处设计都是别具 匠心，缺一不可。</p>
        </div>
      </div>

      <div class="page-title">
        <h1>产品理念</h1>
        <div class="line"></div>
      </div>

      <div class="about-container">
        <div class="sy-block">
          <p class="desc">Showbay/秀倍吹风机，创始团队用智能手机的设计理念，去打造一款传统的个护小白电。</p>
          <p class="desc">{{ contents[0] }}</p>
          <p class="desc">{{ contents[1] }}</p>
          <p class="desc">{{ contents[2] }}</p>
          <p class="desc">4.都是发热，但我们有更恒定的风温: 将人工智能芯片加入吹风机，不是为了高大上，只是为了控制风温的稳定输出。无论是环境温度变化，或是季节温度变化，风温都会自动调节，一如既往的恒定。当然，这不仅仅是一个芯片就能解决的，我们还使用了育儿箱级的温度传感器，以及抗干扰的线板。</p>
          <p class="desc">5.把空间利用到极致: 将众多的主板元器件，放入吹风机的手柄内部，这是一 个大胆的想法。我们不仅将它隐藏了起来，更在模具设计时采用了无缝的圆柱壳 体，以确保手持时更加安全。</p>
          <p class="desc">6.创新使用玻璃纤维材质: 不仅耐高温，防止出风口烫伤，同时环保无异味，呵护家人健康。更多设计细节，等待你的发现。</p>
        </div>
      </div>

      <div class="about-container">
        <img src="https://static.moebeast.com/showbay/img/pic_about_QRcode.png" class="bg-qrcode" />
      </div>

      <div class="sy-space"></div>
    </div>
  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'AboutUs',
    data () {
      return {
        contents: [
          '1.人机工学再设计:针对传统吹风机​的手持重心问题，特别是女性用户的长时间持握，对称的T形设计更符合人机工学。',
          '2.​风道再设计:传统吹风机顶部太长，无论是使用还是收纳，都不方便。秀倍团队和航天空气动力学专家一起设计研发的超短焦风道，不到传统吹风机一半的风道长度，却获得更大的风量。',
          '3.对无刷电机的大胆尝试: 第一次被运用在个护小白电产品上。使用这项技术的产品有特斯拉汽车，​大疆无人机等高科技产品。传统的吹风机电机使用寿命通常是200小时左右，而秀倍无刷电机的工作寿命是2万小时以上。当然，这项技术也让吹风机变得更安静。'
        ]
      }
    },
    created () {
      this.$store.commit(types.ACTIVE_MENU, 'about-us')
    }
  }
</script>

<style lang="scss" scoped>
  .about-container {
    width: 800px;
    margin: 0 auto;
    text-align: left;

    .sy-block {
      margin-bottom: 50px;

      .desc {
        font-size:14px;
        font-weight:300;
        color:rgba(34,34,34,1);
        line-height:24px;
      }
    }

    .bg-qrcode {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 768px) {
    .app-container {
      .main-wrapper {
        padding-top: 40px;

        .about-container {
          width: 100%;

          .sy-block {
            padding: 0 30px;
          }
        }
      }

    }
  }
</style>
