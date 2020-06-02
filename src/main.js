import Purecss from 'purecss'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { Purecss }
}).$mount('#app')
