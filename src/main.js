import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

import App from '@/App.vue'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
