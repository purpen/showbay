import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/layout/Base'], resolve),
      children: [
        {
          path: '',
          name: 'index',
          component: resolve => require(['@/views/site/Index'], resolve)
        },
        {
          path: '/product',
          name: 'product',
          component: resolve => require(['@/views/site/Product'], resolve)
        },
        {
          path: '/news',
          name: 'news',
          component: resolve => require(['@/views/site/News'], resolve)
        },
        {
          path: '/about-us',
          name: 'aboutUs',
          component: resolve => require(['@/views/site/AboutUs'], resolve)
        },
        {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/views/site/Service'], resolve)
        },
        {
          path: '/contact',
          name: 'contact',
          component: resolve => require(['@/views/site/Contact'], resolve)
        }
      ]
    }
  ]
})
