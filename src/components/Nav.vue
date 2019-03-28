<template>
  <div id="Nav">
    <div class="header-container">
      <div class="header">
        <img src="../assets/images/tabler@1x.png">
        <p @click="msg=!msg"><a v-show="msg" @click="exit">登出</a></p>
        <a class="showData"><i></i><span>到期时间：{{showData}}</span></a>
        <a class="concurrent"><i></i>并发数：{{concurrent}}</a>
      </div>
    </div>
    <div class="nav-box">
      <div class="nav-container">
        <ul class="nav nav-pills">
          <li>
            <router-link to="/index"><i class="iconfont icon-shouye"></i>首页</router-link>
          </li>
          <li><router-link to="/route-set"><i class="iconfont icon-yingyong"></i>路由设置</router-link></li>
          <li><router-link to="/server-set"><i class="iconfont icon-yunfuwuqi"></i>服务器设置</router-link></li>
          <li><router-link to="/ip-set"><i class="iconfont icon-wangguan"></i>信任IP设置</router-link></li>
          <li><router-link to="/getway"><i class="iconfont icon-rili"></i>网关设置</router-link></li>
          <li><router-link to="/system"><i class="iconfont icon-xitong"></i>系统设置</router-link></li>
          <li><router-link to="/user"><i class="iconfont icon-yonghu1"></i>用户设置</router-link></li>
        </ul>
      </div>
    </div>
    <!--<router-view name="login"></router-view>-->
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg:false,
      showData:"",
      concurrent:""
    }
  },
  methods:{
    exit:function () {
      this.$router.push({path:"/"})
    },
    getLicense:function () {
      this.$http.get('/conf/rest/license/info').then((res)=>{
        this.showData=res.data.expirationDate;
        this.concurrent=res.data.concurrency;
      }).catch((res)=>{
        console.log("请求失败")
      })
    }
  },
  created(){
    this.getLicense()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background:#f5f7fb}
  .header{height:32px;width:1200px;margin:auto;}
  .header img{float:left;height:32px;}
  .header p{float:right;width:10px;height:32px;font-size:10px;line-height:32px;background:url("../assets/images/33.png")no-repeat left;padding-left:24px;background-size:55%;margin:0 0 0 20px;position:relative;cursor: pointer;color:#444;}
  .header p a{color:#444;text-decoration:none;position:absolute;left:0;top:30px;width:80px;line-height:34px;background:#fff;box-shadow:0 5px 20px rgba(153,153,153,0.6);cursor: pointer;text-align:center;}
  .header p a:hover{text-decoration:none;}
  .showData,.concurrent{float:right;margin-right:12px;color:#444;font-size:14px;line-height:32px;text-decoration:none;cursor: pointer;padding-left:10px;}
  .showData span,.concurrent span{letter-spacing:1px}
  .showData i,.concurrent i{display:block;float:left;width:20px;height:20px;background:url("../assets/images/data.png") no-repeat left center;background-size:100%;margin-top:6px;}
  .showData i{background:url("../assets/images/time.png") no-repeat left center;background-size:100%;}
  .header-container{border-bottom:solid 1px #cfd9d6;padding:16px;background:#fff;}
  .nav>li>a{color:#9aa0ac;padding:16px 14px;font-size:15px;}
  .nav>li>a i{display:block;width:12px;height:12px;margin-right:8px;float:left;margin-top:-1px;}
  /*.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{background:none;border-bottom:solid 1px #2196f3;color:#2196f3;border-radius:0;}*/
  .nav-container{width:1200px;margin:auto;}
  .nav-box{border-bottom:solid 1px #cfd9d6;background:#fff;}
  .nav>li>a.router-link-exact-active{background:none;border-bottom:solid 1px #2196f3;color:#2196f3;border-radius:0;}
</style>
