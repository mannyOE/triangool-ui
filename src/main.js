// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mdbvue/build/css/mdb.css';
import App from './App'
import router from './router'
import {API} from './config'
import store from './store'
import VeeValidate from 'vee-validate';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './globals'

// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(ElementUI);

// import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'



// Vue.use(VueMaterial)


Vue.use(VeeValidate);
require ('./assets/class/css/main.css')
require ('./assets/class/fonts/font-awesome.min.css')
require ('./assets/class/css/bootstrap.min.css')




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
