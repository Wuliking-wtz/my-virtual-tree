import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import VirtualTree from '@/components/virtual-tree/VirtualTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VirtualTree',
      component: VirtualTree
    }
  ]
})
