import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.config.productionTip = false
//axios.defaults.baseURL="https://script.google.com/macros/s/AKfycbx_7Y4LN95exHiq7mgPgKhzzes5EhbyUVST7INH7DCC9JTKMyH3EwHikTYMjh31vQuP5w"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
$(function() {

  $("body").mousewheel(function(event, delta) {

     this.scrollLeft -= (delta * 30);
   
     event.preventDefault();

  });

});