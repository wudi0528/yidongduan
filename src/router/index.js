import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/qq.vue'
import xiang from '@/xiangqing/xiang'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'list',
      component: list
    },
    {
    	path:'/xiang/:id',
    	name:'xiang',
    	component:xiang
    }
  ]
})
