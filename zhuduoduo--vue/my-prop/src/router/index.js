import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin.vue'
import Home from '@/components/home/home.vue'  //首页
import knowApp from '@/components/grails/grails.vue'  //了解APP
import longrent from '@/components/longrent/longrent.vue'   //长租公寓
import recruitLandlord from '@/components/recruitLandlord/recruitLandlord.vue'  //招募房东
import shortRent from '@/components/shortRent/shortRent.vue'  //短租民宿
import register from '@/components/register/register.vue'   //品牌商入口


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: admin,
      children:[
         {path:'',redirect:'home',hidden:true},
         {path:'home',tab:'首页',component: Home,hidden:false},
         {path:'knowApp',tab:'了解APP',component:knowApp,hidden:false},
         {path:'longrent',tab:'长租公寓',component:longrent,hidden:false},
         {path:'shortRent',tab:'短租民宿',component:shortRent,hidden:false},
         {path:'recruitLandlord',tab:'招募房东',component:recruitLandlord,hidden:false},
         {path:'register',tab:'品牌商入口',component:register,hidden:false},
      ]
    }
  ]
})
