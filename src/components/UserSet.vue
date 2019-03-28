<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text" v-model="search" placeholder="请输入用户名搜索">
          <input type="button" value="搜索" @click="filterList">
        </div>
        <router-link to="/user/add"><input type="button" value="添加"></router-link>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>用户名</th>
            <th>姓名</th>
            <th>Email</th>
            <th>角色</th>
            <th>密码</th>
            <th class="opt-w">操作</th>
          </tr>
          <tr v-for="(item,index) in user" :key="index">
            <td>{{item.userName}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.role}}</td>
            <td>{{item.pwd}}</td>
            <td class="opt" v-on:click="isShow(index,item)">
              <span>
                <div class="opt-main" v-show="item.opt">
                  <router-link :to="{name:'userEdit',query:user[index]}">编辑</router-link>
                  <router-link :to="{name:'deleteuser',query:user[index]}">删除</router-link>
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
        user:[],
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
        this.user.splice(index,item);
      },
      fetchMonitor:function(){
        this.$http.get('/conf/rest/user/num').then((res)=>{
          this.num = res.data.num;
        }).catch((res)=>{
          console.log(res,"请求失败")
        })
        this.$http.post('/conf/rest/user/list',{ startPage:this.page-1, pageNum:this.pageNum }).then((res)=>{
          this.user=[];
          if(res.data.user instanceof Array){
            this.user=res.data.user;
          }else{
            this.user.push(res.data.user);
          }
          for(var key in this.user){
            if(this.user[key].role=="是"){
              this.user[key].role="管理员"
            }else if(this.user[key].role=="否"){
              this.user[key].role="普通用户"
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
        this.$http.post('/conf/rest/user/query',{keywords:this.search}).then((res)=>{
          this.user=[];
          if(res.data.user instanceof Array){
            this.user=res.data.user;
          }else{
            this.user.push(res.data.user);
          }
          for(var key in this.user){
            if(this.user[key].role=="是"){
              this.user[key].role="管理员"
            }else if(this.user[key].role=="否"){
              this.user[key].role="普通用户"
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
        if("/user"==newV.path){
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
