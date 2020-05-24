import Vue from 'vue'
import VueRouter from 'vue-router'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import config from './aws-exports';

import App from './App'
import router from './router'

Amplify.configure(config)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')