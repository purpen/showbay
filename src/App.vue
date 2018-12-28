<template>
  <div id="app">
    <router-view/>
    <!-- Set Progressbar -->
    <vue-progress-bar/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {

      }
    },

    // 实例化之后
    beforeCreate () {

    },

    mounted () {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish()
    },
    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()

      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        // continue to next page
        next()
      })

      // hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        console.log('From:' + from)
        // finish the progress bar
        this.$Progress.finish()
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
  }
  button {
    padding: 0;
    margin: 0;
    outline: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .main-wrapper {
    padding-top: 80px;

    .page-title {
      margin-bottom: 44px;
      h1 {
        font-size:24px;
        font-weight:500;
        color:rgba(34,34,34,1);
        line-height:24px;
        margin-bottom: 10px;
      }
      .line {
        margin: 0 auto;
        width:20px;
        height:2px;
        background:rgba(229,1,19,1);
      }
    }
    .sy-space {
      height: 50px;
    }
  }

  @media (max-width: 768px) {
    #app {
      min-width: 100%;
    }
  }

  @media (min-width: 768px) {
    #app {
      min-width: 1200px;
    }
  }

</style>
