// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import axios from 'axios'
import Mock from 'mockjs'
// 倒入 http 文件夹下的 index.js
import api from './http/index'


Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueLazyload);
Vue.use(ElementUI);
Vue.use(axios);
Vue.use(api);
// 此时可以直接在 Vue 原型上调用 $api 了
Vue.use(Mock);
Vue.config.productionTip = false;
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
