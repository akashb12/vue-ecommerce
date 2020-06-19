import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss'
import jQuery from 'jquery';
window.$=window.jQuery=jQuery;
import 'popper.js';
Vue.component('Navbar',require('./components/navbar.vue').default);
Vue.component('Hero',require('./components/hero.vue').default);
Vue.component('Products',require('./sections/products.vue').default);
Vue.component('Footer',require('./sections/footer.vue').default);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
