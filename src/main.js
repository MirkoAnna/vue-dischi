import Vue from 'vue'
import App from './App.vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpotify } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faSpotify)
// Vue.component('fa-brands fa-spotify', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
