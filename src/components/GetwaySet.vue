<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入网关名搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
        <router-link to="/getway/add"><input type="button" value="添加"></router-link>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>网关名</th>
            <th>代理</th>
            <th>域名</th>
            <th>用户名</th>
            <th>密码</th>
            <th>是否注册</th>
            <th>超长时长</th>
            <th>重试时长</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in gateway" :key="index">
            <td>{{item.gwname}}</td>
            <td>{{item.proxy}}</td>
            <td>{{item.realm}}</td>
            <td>{{item.username}}</td>
            <td>{{item.password}}</td>
            <td>{{item.register}}</td>
            <td>{{item.expire_seconds}}</td>
            <td>{{item.retry_seconds}}</td>
            <td class="opt" @click="isShow(index,item)">
              <span>
                <div class="opt-main" v-show="item.opt">
                <router-link :to="{name:'getWayEdit',query:gateway[index]}">编辑</router-link>
                <router-link :to="{name:'deletegetway',query:gateway[index]}">删除</router-link>
              </div>
              </span>
            </td>
          </tr>
        </table>
      </div>
      <pager :total-page="totalPage"
             :init-page="page"
             @go-page="goPage"></pager>
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
        gateway:[],
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
        this.gateway.splice(index,item);
      },
      fetchMonitor:function(){
        this.$http.get('/conf/rest/gateway/num').then((res)=>{
          this.num = res.data.num;
        }).catch((res)=>{
          console.log(res,"请求失败")
        })
        this.$http.post('/conf/rest/gateway/list',{ startPage:this.page-1, pageNum:this.pageNum }).then((res)=>{
          this.gateway=[];
          var monitorData=res.data.gateway;
          if(monitorData instanceof Array){
            this.gateway=res.data.gateway;
          }else{
            this.gateway.push(res.data.gateway);
          }
          for (var key in this.gateway){
            this.gateway[key].opt=false;
            if(this.gateway[key].register=="true"){
              this.gateway[key].register="是"
            }else{
              this.gateway[key].register="否"
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
        this.$http.post('/conf/rest/gateway/query',{keywords:this.search}).then((res)=>{
          this.gateway=[];
          var monitorData=res.data.gateway;
          if(monitorData instanceof Array){
            this.gateway=res.data.gateway;
          }else{
            this.gateway.push(res.data.gateway);
          }
          for(var key in this.gateway){
            this.gateway[key].opt=false;
            if(this.gateway[key].register=="true"){
              this.gateway[key].register="是"
            }else{
              this.gateway[key].register="否"
            }
          }
        }).catch((res)=>{
        })
      }
    },
    created(){
      this.fetchMonitor()
    },
    watch:{
      page:function () {
        this.fetchMonitor()
      },
      '$route'(newV,oldV){
        if("/getway"==newV.path){
          this.fetchMonitor()
        }
      }
    },

    components:{
      pager
    }
  }
</script>

<style scoped>

</style>
