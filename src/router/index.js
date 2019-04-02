import Vue from 'vue'
//主页面
import Router from 'vue-router'
import RouteSet from '../components/RouteSet'
import Index from '../components/index'
import IpSet from '../components/IpSet'
import GetwaySet from '../components/GetwaySet'
import SystemSet from '../components/SystemSet'
import UserSet from '../components/UserSet'
import ServerSet from '../components/ServerSet'
import Login from '../components/Login'
//编辑
import EditPop from '../components/popUp/EditPop'
import systemEdit from '../components/popUp/systemEdit'
import ipEdit from '../components/popUp/ipEdit'
import getWayEdit from '../components/popUp/getWayEdit'
import userEdit from '../components/popUp/userEdit'
import serverEdit from '../components/popUp/serverEdit'
//添加
import addRouter from '../components/popUp/addPop/addRouter'
import addIp from '../components/popUp/addPop/addIp'
import addGetWay from '../components/popUp/addPop/addGetWay'
import addUser from '../components/popUp/addPop/addUser'
import addServer from '../components/popUp/addPop/addServer'
//删除
import deleteRouter from '../components/popUp/deletePop/routerDelete'
import deleteIp from '../components/popUp/deletePop/ipDelete'
import deleteGetWay from '../components/popUp/deletePop/getWayDelete'
import deleteUser from '../components/popUp/deletePop/userDelete'
import deleteServer from '../components/popUp/deletePop/serverDelete'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path:"/index",
      name:"Index",
      component:Index,
      children:[{path:'/edit',component:EditPop}
      // ,{ path:"/login",
      //   component:Login}
        ]
    },{
      path:"/route-set",
      name:"RouteSet",
      component:RouteSet,
      // children:[{path:'/route-set/edit/:idf',component:EditPop}]
      children:[{path:'/route-set/edit/:name',name:'edit',component:EditPop},
        {path:'/route-set/delete/:name',name:'deleterouter',component:deleteRouter},
        {path:'/route-set/add',name:'add',component:addRouter}
      ]
    },{
      path:"/server-set",
      name:"ServerSet",
      component:ServerSet,
      children:[{path:'/server-set/edit/:name',name:'serverEdit',component:serverEdit},
        {path:'/server-set/delete/:name',name:'deleteServer',component:deleteServer},
        {path:'/server-set/add',component:addServer}
      ]
    },{
      path:"/ip-set",
      component:IpSet,
      children:[{path:'/ip-set/edit/:name',name:'ipEdit',component:ipEdit},
        {path:'/ip-set/delete/:name',name:'deleteip',component:deleteIp},
        {path:'/ip-set/add',component:addIp}]
    },{
      path:"/getway",
      component:GetwaySet,
      children:[{path:'/getway/edit/:name',name:'getWayEdit',component:getWayEdit},
        {path:'/getway/delete/:name',name:'deletegetway',component:deleteGetWay},
        {path:'/getway/add',component:addGetWay}]
    },{
      path:"/system",
      component:SystemSet,
      children:[{path:'/system/edit/:name',name:'System',component:systemEdit}]
    },{
      path:"/user",
      component:UserSet,
      children:[{path:'/user/edit/:name',name:'userEdit',component:userEdit},
        {path:'/user/delete/:name',name:'deleteuser',component:deleteUser},
        {path:'/user/add',component:addUser}]
    }
  ]
})
