import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as types from './types'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

// 定义状态State默认值
const state = {
  author: 'Mix',
  // 是否显示loading
  loading: false,
  title: '乐喜',
  token: null,
  activeMenu: '',
  // API参数
  api: {
    appKey: '',
    appSecret: ''
  },
  user: {
    // 用户资料
    profile: {}
  }
}

const mutations = {
  [types.LOGIN] (state, data) {
    state.token = data
    localStorage.token = data
  },
  [types.LOGOUT] (state) {
    state.token = null
    // 初始化默认值
    state.user = {
      profile: {}
    }
    state.api = {
      appKey: '',
      appSecret: ''
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user_profile')
    localStorage.removeItem('api')
  },
  [types.ACTIVE_MENU] (state, data) {
    state.activeMenu = data
  },
  demo (state, name) {
    state.author = name
  }
}

const persistedOptions = {
  key: 'sy_vuex'
}

const store = new Vuex.Store({
  state,
  mutations,
  strict: debug,
  plugins: [createPersistedState(persistedOptions)]
})

export default store
