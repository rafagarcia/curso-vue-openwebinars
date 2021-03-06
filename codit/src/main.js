// Dependencies
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

// Components
import App from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#codit',
  router,
  store,
  template: '<App/>',
  components: { App }
})
