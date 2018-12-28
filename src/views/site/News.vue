<template>
  <div class="app-container">
    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="sy-news">
        <router-link class="sy-news__item" to="/" target="_blank">
          <img src="https://static.moebeast.com/showbay/img/pic_news_001.jpg" class="cover" />
          <div class="content">
            <h3 class="title">showbay The Toaster</h3>
            <p class="summary">BALMUDA The Toaster的开发故事从1991年的西班牙南部的镇上开始</p>
          </div>
        </router-link>

        <router-link class="sy-news__item" to="/" target="_blank">
          <img src="https://static.moebeast.com/showbay/img/pic_news_001.jpg" class="cover" />
          <div class="content">
            <h3 class="title">showbay The Toaster</h3>
            <p class="summary">BALMUDA The Toaster的开发故事从1991年的西班牙南部的镇上开始</p>
          </div>
        </router-link>

        <router-link class="sy-news__item" to="/" target="_blank">
          <img src="https://static.moebeast.com/showbay/img/pic_news_001.jpg" class="cover" />
          <div class="content">
            <h3 class="title">showbay The Toaster</h3>
            <p class="summary">BALMUDA The Toaster的开发故事从1991年的西班牙南部的镇上开始</p>
          </div>
        </router-link>

      </div>

    </div>

  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'News',
    data () {
      return {

      }
    },
    created () {
      this.$store.commit(types.ACTIVE_MENU, 'news')
    }
  }
</script>

<style lang="scss" scoped>
  .sy-news {
    width: 1200px;
    margin: 0 auto 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .sy-news__item {
      width: 380px;
      overflow: hidden;
      box-shadow: 0px 0px 1px #ccc;
      margin-bottom: 30px;
      text-decoration: none;

      &:hover {
        box-shadow: 0px 0px 10px #ddd;
      }

      .cover {
        width: 380px;
        height: 300px;
      }
      .content {
        padding: 30px;

        .title {
          font-size:16px;
          font-weight:bold;
          color:rgba(34,34,34,1);
          margin-bottom: 10px;
        }
        .summary {
          font-size:14px;
          color: #666;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .app-container {
      .main-wrapper {
        padding-top: 40px;

        .sy-news {
          width: 100%;
          flex-flow: column nowrap;

          .sy-news__item {
            width: 100%;

            .cover {
              width: 100%;
              height: auto;
            }
          }
        }
      }

    }
  }
</style>
