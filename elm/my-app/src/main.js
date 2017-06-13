// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from '../router/index';

const goods = r => require.ensure([], () => r(require('./components/googs/googs.vue')), 'group-goods');
const seller = r => require.ensure([], () => r(require('./components/seller/seller.vue')), 'group-seller');
const ratings = r => require.ensure([], () => r(require('./components/ratings/ratings.vue')), 'group-ratings');

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.prototype.$http = axios;

const routers = [
  {
    name: 'goods',
    path: '/goods',
    component: goods
  }, {
    path: '/seller',
    component: seller
  }, {
    path: '/rathings',
    component: ratings
  }
];
const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: routers
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
