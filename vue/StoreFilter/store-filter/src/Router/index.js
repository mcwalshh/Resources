import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '../Components/Items.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Shop',
      component: ItemList
      }
  ]
})

export default router
