<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入CIDR搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
        <router-link to="/ip-set/add"><input type="button" value="添加"></router-link>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>节点类型</th>
            <th>操作类型</th>
            <th>CIDR</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in acl" :key="index">
            <td>{{item.node_type}}</td>
            <td>{{item.type}}</td>
            <td>{{item.cidr}}</td>
            <td class="opt" @click="isShow(index,item)">
              <span>
                <div class="opt-main" v-show="item.opt">
                <router-link :to="{name:'ipEdit',query:acl[index]}">编辑</router-link>
                <router-link :to="{name:'deleteip',query:acl[index]}">删除</router-link>
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
            acl:[],
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
          this.acl.splice(index,item);
        },
        fetchMonitor:function(){
          this.$http.get('/conf/rest/acl/num').then((res)=>{
            this.num = res.data.num;
          }).catch((res)=>{
            console.log(res,"请求失败")
          })
          this.$http.post('/conf/rest/acl/list',{ startPage:this.page-1, pageNum:this.pageNum }).then((res)=>{
            this.acl=res.data.acl;
            for(var key in this.acl){
              this.acl[key].opt=false;
              if(this.acl[key].type=='allow'){
                this.acl[key].type="允许"
              }else if(this.acl[key].type=='deny'){
                this.acl[key].type="拒绝"
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
          this.acl=this.acl.filter((list)=>{
            return list.cidr.match(this.search)
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
        if("/ip-set"==newV.path){
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
