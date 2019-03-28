<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入实例名搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
        <router-link to="/server-set/add"><input type="button" value="添加"></router-link>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>实例ID</th>
            <th>实例名</th>
            <th>内部IP</th>
            <th>外部IP</th>
            <th>实例地点</th>
            <th>端口</th>
            <th>密码</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in server" :key="index">
            <td>{{item.switchId}}</td>
            <td>{{item.switchName}}</td>
            <td>{{item.switchIp}}</td>
            <td>{{item.switchPublicIp}}</td>
            <td>{{item.switchPlace}}</td>
            <td>{{item.switchConnectPort}}</td>
            <td>{{item.switchConnectPwd}}</td>
            <td class="opt" @click="isShow(index,item)">
              <span>
                <div class="opt-main" v-show="item.opt">
                <router-link :to="{name:'serverEdit',query:item}">编辑</router-link>
                <router-link :to="{name:'deleteServer',query:item}">删除</router-link>
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
            server:[],
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
          this.server.splice(index,item);
        },
        fetchMonitor:function(){
          this.$http.get('/conf/rest/switch/num').then((res)=>{
            this.num = res.data.num;
          }).catch((res)=>{
            console.log(res,"请求失败")
          })
          this.$http.post('/conf/rest/switch/listByPage',{ startPage:this.page-1, pageNum:this.pageNum }).then((res)=>{
            this.server=[]
            var monitorData=res.data.switchInstance;
            if(monitorData instanceof Array){
              this.server=res.data.switchInstance;
            }else{
              this.server.push(res.data.switchInstance);
            }
            for(var key in this.server){
              this.server[key].opt=false;
            }
          }).catch((res)=>{
            console.log(res,"请求失败")
          })
        },
        goPage (data) {
          this.page = data.page;
        },
        filterList:function () {
          this.$http.post('/conf/rest/switch/query',{keywords:this.search}).then((res)=>{
            this.server=[]
            var monitorData=res.data.switchInstance;
            if(monitorData instanceof Array){
              this.server=res.data.switchInstance;
            }else{
              this.server.push(res.data.switchInstance);
            }
            for(var key in this.server){
              this.server[key].opt=false;
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
        if("/server-set"==newV.path){
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
