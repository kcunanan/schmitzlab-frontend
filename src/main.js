// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueBlu from 'vue-blu'

import VueMasonry from 'vue-masonry-css'
import './../node_modules/vue-blu/dist/css/vue-blu.min.css'
import './mq.sass'

import { baseUrl } from './base.js'

/* Filters */
Vue.use(require('vue-moment'))

Vue.filter('src', function (value) {
  if (!value) return ''
  value = value.toString()
  if (value.includes('http://') || value.includes('https://')) {
    return value
  }
  return `${baseUrl}${value}`
})

Vue.config.productionTip = false

Vue.use(VueMasonry)
Vue.use(VueBlu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
