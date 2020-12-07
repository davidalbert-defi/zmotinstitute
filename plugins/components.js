import Vue from 'vue'
import VueAgile from 'vue-agile'
import VueTelInput from 'vue-tel-input'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.component('Loading', Loading)
Vue.use(VueAgile)
Vue.use(VueTelInput)
