<template>
  <div class="app-container">
    <!--大图轮换区-->
    <div class="banner-slides">
      <div class="content">精致，是对生活最好的热爱</div>
      <div class="arrow">
        <img src="@/assets/images/icon_arrow-down.png" class="icon-arrow" />
      </div>
    </div>

    <!--主内容区域-->
    <div class="main-wrapper">
      <div class="product-images">
        <img src="https://static.moebeast.com/showbay/img/pic_home_product01.jpg" class="image" />
        <img src="https://static.moebeast.com/showbay/img/pic_home_product02.jpg" class="image" />
        <img src="https://static.moebeast.com/showbay/img/pic_home_product03.jpg" class="image" />
      </div>

      <div class="product-images hg">
        <img src="https://static.moebeast.com/showbay/img/pic_home_product04.jpg" class="image" />
        <img src="https://static.moebeast.com/showbay/img/pic_home_product05.jpg" class="image" />
        <img src="https://static.moebeast.com/showbay/img/pic_home_product06.jpg" class="image" />
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style lang="scss" scoped>
  @-webkit-keyframes downArrow
  {
    from
    {
      transform: translateY(50px);
      opacity: 0;
    }
    to
    {
      transform: translateY(20px);
      opacity: 1;
    }
  }
  @keyframes downArrow
  {
    from
    {
      transform: translateY(50px);
      opacity: 0;
    }
    to
    {
      transform: translateY(20px);
      opacity: 1;
    }
  }
  .app-container {
    .banner-slides {
      position: relative;
      height: 800px;
      background: url("https://static.moebeast.com/showbay/img/pic_home.jpg") center center;
      background-size: cover;
      display: flex;
      flex-direction: column;

      .content {
        flex: 1;
        padding-top: 322px;
        font-size:54px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:75px;
      }

      .arrow {
        flex: 0 0 auto;
        margin-bottom: 50px;

        .icon-arrow {
          height: 20px;
          width: 32px;
          -webkit-animation: downArrow 1s infinite;
          -webkit-animation-fill-mode: both;
          animation: downArrow 1s infinite;
        }
      }
    }
    .main-wrapper {
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
      padding-bottom: 200px;

      .product-images {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image {
          width: 380px;
          height: 240px;
          margin-bottom: 30px;
        }

        &.hg {
          .image {
            width: 380px;
            height: 570px;
          }
        }

      }
    }
  }

  @media (max-width: 768px) {
    .app-container {
      .banner-slides {
        height: 500px;

        .content {
          padding-top: 142px;
          font-size: 28px;
          width: 70%;
          margin: 0 auto;
        }
      }

      .main-wrapper {
        width: 100%;
        padding-bottom: 40px;

        .product-images {
          flex-direction: column;

          .image {
            width: 100%;
            height: auto;
            display: block;
          }

          &.hg {
            .image {
              width: 100%;
              height: auto;
              display: block;
            }
          }
        }
      }
    }
  }
</style>
