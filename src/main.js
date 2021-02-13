import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './Routes/routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

export const bus =  new Vue();

const Router = new VueRouter({
     routes:Routes,
     mode:'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router
})
