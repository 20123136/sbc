<template>
  <div id="set">
    <div>
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入域名搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
        <router-link to="/route-set/add"><input type="button" value="添加"></router-link>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>路由ID</th>
            <th>Profile</th>
            <th>号码模式</th>
            <th>域名</th>
            <th>路由处理类型</th>
            <th>路由处理内容</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in routePattern" :key="index">
            <td>{{item.recordId}}</td>
            <td>{{item.profile}}</td>
            <td>{{item.numPattern}}</td>
            <td>{{item.domain}}</td>
            <td>{{item.typeR}}</td>
            <td style="width:400px;">{{item.destContent}}</td>
            <td class="opt" @click="isShow(index,item)">
              <span><div class="opt-main" v-show="item.opt">
                <router-link :to="{name:'edit',query:routePattern[index]}">编辑</router-link>
                <router-link :to="{name:'deleterouter',query:routePattern[index]}">删除</router-link>
              </div></span>

              </td>
          </tr>
        </table>
      </div>
      <pager :total-page="totalPage"
      :init-page="page"
      @go-page="goPage"></pager>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import pager from './vue-pager.vue'
  export default {
    name: "set",
    data(){
      return {
        page:1,
        num:0,
        pageNum:25,
        routePattern:[],
        search:'',
      }
    },
    computed: {
      totalPage(){
        return Math.ceil(this.num / this.pageNum);
      }
    },
    methods:{
      isShow:function (index,item) {
        item.opt=!item.opt;
        this.routePattern.splice(index,item);
      },
      fetchMonitor:function(){
        this.$http.get('/conf/rest/routepattern/num').then((res)=>{
          this.num = res.data.num;
        }).catch((res)=>{
          console.log(res,"请求失败")
        })
        this.$http.post('/conf/rest/routepattern/list',{ startPage:this.page-1, pageNum:this.pageNum }).then((res)=>{
         this.routePattern=res.data.routePattern;
          for(var key in this.routePattern){
            var typeN=this.routePattern[key].destType;
            this.routePattern[key].opt=false;
            if(typeN==0){
              this.routePattern[key].typeR='分机';
            }else if(typeN==1){
              this.routePattern[key].typeR='外部路由'
            }else if(typeN==2){
              this.routePattern[key].typeR='网关'
            }else if(typeN==3){
              this.routePattern[key].typeR='自定义路由'
            }else if(typeN==4){
              this.routePattern[key].typeR='语音留言'
            }else if(typeN==5){
              this.routePattern[key].typeR='组内代接'
            }else if(typeN==6){
              this.routePattern[key].typeR='满意度'
            }else if(typeN==7){
              this.routePattern[key].typeR='内置IVR'
            }
          }
        }).catch((res)=>{
          console.log(res,"请求失败")
        })

      },
      goPage (data) {
        this.page = data.page;
      },
      filterList:function () {
        this.$http.post('/conf/rest/routepattern/query',{ keywords:this.search}).then((res)=>{
          this.routePattern=res.data.routePattern;
          for(var key in this.routePattern){
            var typeN=this.routePattern[key].destType;
            this.routePattern[key].opt=false;
            if(typeN==0){
              this.routePattern[key].typeR='分机';
            }else if(typeN==1){
              this.routePattern[key].typeR='外部路由'
            }else if(typeN==2){
              this.routePattern[key].typeR='网关'
            }else if(typeN==3){
              this.routePattern[key].typeR='自定义路由'
            }else if(typeN==4){
              this.routePattern[key].typeR='语音留言'
            }else if(typeN==5){
              this.routePattern[key].typeR='组内代接'
            }else if(typeN==6){
              this.routePattern[key].typeR='满意度'
            }else if(typeN==7){
              this.routePattern[key].typeR='内置IVR'
            }
          }
        }).catch((res)=>{
        })
      }
    },
    watch:{
      page:function () {
        this.fetchMonitor()
      },
      '$route'(newV,oldV){
        if("/route-set"==newV.path){
          this.fetchMonitor()
        }
      }
    },
    created(){
      this.fetchMonitor()
    },
    components:{
      pager
    },
    created(){
      this.fetchMonitor()
    },

  }
</script>

<style scoped>

</style>
