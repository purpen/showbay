// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueProgressBar from 'vue-progressbar'
import VideoPlayer from 'vue-video-player'

import defaultLogo from '@/assets/images/default-logo.png'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(VueProgressBar, {
  color: '#00a65a',
  failedColor: '#fc5449',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
})
Vue.use(VueLazyload, {
  loading: defaultLogo
})
Vue.use(VideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
