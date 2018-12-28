<template>
  <div class="app-footer">
    <div class="footer__wrapper">
      <div class="foot-info">
        <div class="links">
          <router-link to="/" class="link__item">产品选购</router-link>
          <router-link to="/about-us" class="link__item">关于我们</router-link>
          <router-link to="/contact" class="link__item">联系我们</router-link>
        </div>
        <p class="copyright">Copyright © 米选科技 Inc. All rights reserved</p>
      </div>
      <div class="social">
        <div class="buttons">
          <img src="@/assets/images/icon_weixin.png" class="icon-wechat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter'
  }
</script>

<style lang="scss" scoped>
  .app-footer {
    height: 100px;
    background: rgba(248,248,248,1);

    .footer__wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      .foot-info {
        padding-top: 20px;
        flex: 1;
        text-align: left;

        .links {
          .link__item {
            font-size:14px;
            font-weight:bold;
            color:rgba(34,34,34,1);
            line-height:20px;
            text-decoration: none;
            margin-right: 30px;
          }
        }
        .copyright {
          font-size:14px;
          font-weight:bold;
          color:rgba(153,153,153,1);
          line-height:20px;
        }
      }
      .social {
        flex: 0 0 auto;
        .buttons {
          .icon-wechat {
            width: 27px;
            height: 22px;
          }
        }
      }
    }

  }

  @media (max-width: 768px) {
    .app-footer {
      min-width: 100%;

      .footer__wrapper {
        max-width: 100%;

        .foot-info {
          margin-left: 30px;
        }
        .social {
          margin-right: 30px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .app-footer {
      min-width: 1200px;
    }
  }
</style>
