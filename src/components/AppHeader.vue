<template>
  <div class="app-header">
    <div class="app-header__wrapper">
      <div class="head__logo" @click="handleGoIndex">
        <img src="@/assets/images/logo_showbay.png" class="logo" />
      </div>
      <div class="head__menu">
        <div class="menus">
          <router-link to="/product" :class="['menus__item', activeMenu === 'product' ? 'active' : '']">产品</router-link>
          <router-link to="/news" :class="['menus__item', activeMenu === 'news' ? 'active' : '']">新闻/评测</router-link>
          <router-link to="/service" :class="['menus__item', activeMenu === 'service' ? 'active' : '']">客户服务</router-link>
          <router-link to="/about-us" :class="['menus__item', activeMenu === 'aboutUs' ? 'active' : '']">关于我们</router-link>
          <router-link to="/contact" :class="['menus__item', activeMenu === 'contact' ? 'active' : '']">联系我们</router-link>
        </div>
        <div class="menu-mobile" @click="handleToggleMenu">
          <img src="@/assets/images/icon-menu.png" class="icon-menu" />
        </div>
      </div>
    </div>
    <div :class="['menus--mobile', showMenu ? 'is-active' : '' ]">
      <router-link to="/product" :class="['menus__item', activeMenu === 'product' ? 'active' : '']">产品</router-link>
      <router-link to="/news" :class="['menus__item', activeMenu === 'news' ? 'active' : '']">新闻/评测</router-link>
      <router-link to="/service" :class="['menus__item', activeMenu === 'service' ? 'active' : '']">客户服务</router-link>
      <router-link to="/about-us" :class="['menus__item', activeMenu === 'aboutUs' ? 'active' : '']">关于我们</router-link>
      <router-link to="/contact" :class="['menus__item', activeMenu === 'contact' ? 'active' : '']">联系我们</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        activeMenu: '',
        showMenu: false
      }
    },
    watch: {
      '$route' (to, from) {
        this.activeMenu = to.name
        this.showMenu = false
      }
    },
    methods: {
      /**
       * 回首页
       */
      handleGoIndex () {
        this.$router.push('/')
      },

      handleToggleMenu () {
        this.showMenu = !this.showMenu
      }
    },
    created () {
      console.log(this.activeMenu)
    }
  }
</script>

<style lang="scss" scoped>
  @-webkit-keyframes slideInUp {
    from {
      opacity: 0;
      height: 0px;
    }

    to {
      opacity: 1;
      height: 200px;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      height: 0px;
    }

    to {
      opacity: 1;
      height: 200px;
    }
  }

  @-webkit-keyframes slideInDown {
    from {
      opacity: 1;
      height: 200px;
    }

    to {
      opacity: 0;
      height: 0px;
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 1;
      height: 200px;
    }

    to {
      opacity: 0;
      height: 0px;
    }
  }

  .app-header {
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 4px 0px rgba(204,204,204,0.5);

    .app-header__wrapper {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;

      .head__logo {
        flex: 0 0 auto;

        .logo {
          width: 102px;
          height: 45px;
        }
      }
      .head__menu {
        flex: 1;
        text-align: right;

        .menus {
          .menus__item {
            display: inline-block;
            line-height: 80px;
            height: 80px;
            font-size:16px;
            font-weight:500;
            color:rgba(51,51,51,1);
            text-decoration: none;
            margin-left: 40px;
            border-bottom: 2px solid transparent;

            &.active {
              border-color: #E50113;
            }
          }
        }
        .menu-mobile {
          display: none;
        }
      }
    }

    .menus--mobile {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .app-header {
      min-width: 100%;
      height: auto;

      .app-header__wrapper {
        max-width: 100%;

        .head__logo {
          .logo {
            width: 82px;
            height: 36px;
            margin-top: 10px;
            margin-left: 30px;
            margin-bottom: 10px;
          }
        }
        .head__menu {
          margin-right: 30px;

          .menus {
            display: none;

            .menus__item  {
              font-size: 14px;
              margin-left: 20px;
              display: block;
              height: 30px;
              line-height: 30px;
            }
          }
          .menu-mobile {
            display: block;

            .icon-menu {
              width: 24px;
              height: 24px;
            }

          }
        }
      }
      .menus--mobile {
        background-color: rgba(0, 0, 0, 1.0);
        -webkit-animation: slideInDown .2s;
        animation: slideInDown .2s;

        .menus__item {
          font-size: 14px;
          display: block;
          height: 40px;
          color: #ffffff;
          line-height: 40px;
          text-decoration: none;

          &:hover {
            background-color: #333;
          }
        }

        &.is-active {
          display: block;
          -webkit-animation: slideInUp .2s;
          animation: slideInUp .2s;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .app-header {
      min-width: 1200px;

      .app-header__wrapper {
        max-width: 1200px;
      }
    }
  }

</style>
