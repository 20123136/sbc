import Vue from 'vue'
import Router from 'vue-router'
import RouteSet from '../components/RouteSet'
import Index from '../components/index'
import IpSet from '../components/IpSet'
import GetwaySet from '../components/GetwaySet'
import SystemSet from '../components/SystemSet'
import UserSet from '../components/UserSet'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:"/",
      name:"Index",
      component:Index
    },{
      path:"/route-set",
      name:"RouteSet",
      component:RouteSet
    },{
      path:"/ip-set",
      component:IpSet
    },{
      path:"/getway",
      component:GetwaySet
    },{
      path:"/system",
      component:SystemSet
    },{
      path:"/user",
      component:UserSet
    }
  ]
})
