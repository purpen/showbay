<template>
  <div class="app-container">
    <div class="product-head">
      <div class="name">
        负离子智能吹风机
      </div>
      <div class="buttons">
        <router-link class="btn-buy" to="">立即购买</router-link>
      </div>
    </div>

    <div class="product-slide">
      <div class="content">
        <h3 class="name">秀倍负离子智能吹风机</h3>
        <h1 class="features">三分钟 柔顺快干</h1>
        <button class="btn-play" @click="handleShowVideo">
          播放视频
        </button>
      </div>
    </div>

    <div class="product-video" v-if="showVideo">
      <img src="@/assets/images/icon_cloes.png" class="icon-close" @click="handleShowVideo" />
      <div class="video-wrapper">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)">
        </video-player>
      </div>
    </div>

    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="product-detail">
        <img src="https://static.moebeast.com/static/img/sy-product_01.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_02.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_03.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_04.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_05.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_06.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_07.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_08.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_09.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_10.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_11.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_12.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_13.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_14.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_15.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_16.jpg" class="p-img" />
        <img src="https://static.moebeast.com/static/img/sy-product_17.jpg" class="p-img" />
      </div>
    </div>

  </div>
</template>

<script>
  import * as types from '@/vuex/types'
  import { videoPlayer } from 'vue-video-player'

  export default {
    name: 'Product',
    data () {
      return {
        showVideo: false,
        playerOptions: {
          // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src: 'https://static.moebeast.com/showbay/video/showbay.mp4' // 你的视频地址（必填）
          }],
          poster: 'https://static.moebeast.com/showbay/img/pic_product.jpg', // 你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          // controlBar: {
          //  timeDivider: true,
          //  durationDisplay: true,
          //  remainingTimeDisplay: false,
          //  fullscreenToggle: true  //全屏按钮
          // }
        }
      }
    },
    components: {
      videoPlayer
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      handleShowVideo () {
        this.showVideo = !this.showVideo
      },

      onPlayerPlay (player) {

      },

      onPlayerPause (player) {

      }
    },
    created () {
      this.$store.commit(types.ACTIVE_MENU, 'product')
    }
  }
</script>

<style lang="scss" scoped>
  .app-container {
    .product-head {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 60px;
      overflow: hidden;

      .name {
        flex: 1;
        font-size:18px;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:25px;
        text-align: left;
      }
      .buttons {
        flex: 0 0 auto;

        .btn-buy {
          width:92px;
          height:28px;
          background:rgba(75,165,58,1);
          border-radius:2px;
          font-size:14px;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:28px;
          padding: 4px 18px;
          text-decoration: none;
        }
      }
    }

    .product-slide {
      background: url("https://static.moebeast.com/showbay/img/pic_product.jpg") no-repeat center center;
      background-size: cover;
      height: 800px;

      .content {
        width: 1200px;
        margin: 0 auto;
        padding-top: 252px;
        text-align: left;

        .name {
          font-size:24px;
          font-weight:500;
          color:rgba(34,34,34,1);
          margin-bottom: 10px;
        }
        .features {
          font-size:56px;
          font-weight:bold;
          color:rgba(34,34,34,1);
          margin-bottom: 50px;
        }
        .btn-play {
          width:160px;
          height:48px;
          border-radius:4px;
          border:1px solid rgba(34,34,34,1);
          font-size:16px;
          font-weight:500;
          color:rgba(34,34,34,1);
          line-height:48px;
          background-color: transparent;
        }
      }
    }

    .product-video {
      background-color: black;
      position: relative;
      height: 1000px;
      padding-top: 140px;

      .icon-close {
        position: absolute;
        right: 40px;
        top: 40px;
        z-index: 9;
        width: 54px;
        height: 54px;
      }
      .video-wrapper {
        margin: 0 auto;
        width: 1280px;
        height: 720px;
        background-color: #fff;
      }
    }

    .main-wrapper {
      padding-top: 40px;

      .product-detail {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;

        .p-img {
          display: block;
          margin: 0;
          padding: 0;
          border: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .app-container {
      .product-head {
        width: 100%;

        .name {
          margin-left: 30px;
        }
        .buttons {
          margin-right: 30px;
        }
      }

      .product-video {
        width: 100%;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;

        .icon-close {
          right: 10px;
          top: 10px;
          z-index: 9;
          width: 27px;
          height: 27px;
        }

        .video-wrapper {
          width: 100%;
          height: auto;
        }
      }

      .product-slide {
        height: 400px;

        .content {
          width: 100%;
          padding-top: 50px;

          .name,
          .features,
          .btn-play {
            margin-left: 30px;
          }

          .name {
            font-size: 20px;
          }
          .features {
            color: #ffffff;
            font-size: 40px;
          }
        }
      }

      .main-wrapper {
        width: 100%;
        padding-top: 40px;

        .product-detail {
          max-width: 100%;

          .p-img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
