import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import city from '@/city'
import Detail from '@/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
