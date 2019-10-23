import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: { template: "" }
    },
    {
      path: '/explore',
      component: () => import('./components/Explore')
    },
    {
      path: '/signin',
      
    }
  ]
})
