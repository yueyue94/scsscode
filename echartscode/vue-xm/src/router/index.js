import Vue from 'vue'
import VueRouter from 'vue-router'
import mymain from '../views/Mymain.vue'
import Myfind from '../views/Myfind.vue'
import Myme from '../views/Myme.vue'
import mymessage from '../views/Mymessage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"mymain"
  },
  {
    path: '/mymain',
    name: 'mymain',
     component: () => import(/* webpackChunkName: "mymain" */ '../views/Mymain.vue')
  },
  {
    path: '/myfind',
    name: 'myfind',
     component: () => import(/* webpackChunkName: "myfind" */ '../views/Myfind.vue')
  },
  {
    path: '/mymessage',
    name: 'mymessage',
     component: () => import(/* webpackChunkName: "mymessage */ '../views/Mymessage.vue')
  },
  {
    path: '/myme',
    name: 'myme',
     component: () => import(/* webpackChunkName: "myme" */ '../views/Myme.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
