<template>
  <div id="Nav">
    <div class="header-container">
      <div class="header">
        <img src="../assets/images/tabler@1x.png">
        <p><router-link to="/login" exact>名字</router-link></p>
      </div>
    </div>

    <div class="nav-box">
      <div class="nav-container">
        <ul class="nav nav-pills">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li><router-link to="/route-set">路由设置</router-link></li>
          <li><router-link to="/ip-set">信任IP设置</router-link></li>
          <li><router-link to="/getway">网关设置</router-link></li>
          <li><router-link to="/system">系统设置</router-link></li>
          <li><router-link to="/user">用户设置</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{background:#f5f7fb}
  .header{overflow:hidden;width:1200px;margin:auto;}
  .header img{float:left;height:32px;}
  .header p{float:right;font-size:10px;line-height:32px;background:url("../assets/images/33.png")no-repeat left;padding-left:20px;background-size:40%;margin:0;}
  .header p a{color:#444;text-decoration:none;}
  .header p a:hover{text-decoration:none;}
  .header-container{border-bottom:solid 1px #cfd9d6;padding:16px;}
  .nav>li>a{color:#9aa0ac;}
  /*.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{background:none;border-bottom:solid 1px #467fcf;color:#467fcf;border-radius:0;}*/
  .nav-container{width:1200px;margin:auto;}
  .nav-box{border-bottom:solid 1px #cfd9d6;}
  .nav>li>a.router-link-exact-active{background:none;border-bottom:solid 1px #467fcf;color:#467fcf;border-radius:0;}
</style>
