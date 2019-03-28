<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入id搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>路由ID</th>
            <th>外部IP</th>
            <th>外部端口</th>
            <th>内部IP</th>
            <th>内部端口</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in routePattern" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.externalIp}}</td>
            <td>{{item.externalPort}}</td>
            <td>{{item.internalIp}}</td>
            <td>{{item.internalPort}}</td>
            <td class="opt" @click="isShow(index,item)">
              <span><div class="opt-main" v-show="item.opt">
                <router-link :to="{name:'System',query:item}">编辑</router-link>
              </div></span>
            </td>
          </tr>
        </table>
      </div>
      <!--<pager :total-page="totalPage"-->
             <!--:init-page="page"-->
             <!--@go-page="goPage"></pager>-->
      <router-view></router-view>
    </div>
</template>

<script>
  // import pager from './vue-pager.vue'
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
      methods:{
        isShow:function (index,item) {
          item.opt=!item.opt;
          this.routePattern.splice(index,item);
        },
        filterList:function () {
          this.routePattern=this.routePattern.filter((list)=>{
            return list.id.match(this.search)
          })
        },
        fetchMonitor:function(){
          this.$http.get('/conf/rest/systemConf/list').then((res)=>{
            var monitorData=res.data.systemConf;
            this.routePattern = [];
            for(var key in this.routePattern){
              this.routePattern[key].opt=false;
            }
            if(monitorData instanceof Array){
              this.routePattern=res.data.systemConf;
            }else{
              this.routePattern.push(res.data.systemConf);
            }
          }).catch((res)=>{
            console.log(res,"请求失败")
          })
        },
      },
      computed:{
      },
      watch:{
        '$route'(newV,oldV){
          if("/system"==newV.path){
            this.fetchMonitor()
          }
        }
      },
      created(){
      this.fetchMonitor()
    }
    }
</script>

<style scoped>

</style>
