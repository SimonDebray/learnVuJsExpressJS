import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import About from '@/components/About'
import Pricing from '@/components/Pricing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/apropos',
      component: About
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/reserver',
      component: Pricing
    }
  ]
})
