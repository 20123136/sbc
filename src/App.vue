<template>
  <div>
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  export default {
  name: 'App',
    data(){
      return{
        // loginShow:false
      }
    },
    methods:{
    },
  components:{Nav}
}
</script>

<style>
  @import 'assets/css/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body{background:#f5f7fb}
.page-section{width:1200px;margin:24px auto 24px auto;overflow:hidden;}
.page{width:174px;height:110px;padding:0 12px 12px 12px;box-sizing: border-box;float:left;background:#fff;box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);border:solid 1px rgba(0, 40, 100, 0.12);margin-right:24px;border-radius:5px;}
.page p{color:#9aa0ac;}
.page h1{font-size:32px;}
.table-box{width:1200px;margin:auto;}
.table-box td{border-top:1px solid #ddd;padding:12px;color:#495057}
.table-box td.ing{color:#009900}
.table-box td.stop{color:red}
.table-box th{color:#9aa0ac;padding:8px 12px;border-top:1px solid #ddd;font-weight:normal;}
.opt-w{width:58px;}
.opt{position:relative;cursor:pointer;}
.opt span{position:absolute;left:26px;top:14px;width:3px;height:11px;background:url("./assets/images/opt.jpg") no-repeat;}
.opt-main{position:absolute;right:-2px;bottom:-20px;width:120px;padding:12px;box-sizing:border-box;border:solid 1px rgba(0, 40, 100, 0.12);background:#fff;z-index:1}
.opt-main a{display:block;color:#9aa0ac;cursor:pointer;padding:4px 0;}
.opt-main a:hover{text-decoration:none;}
.table{border:solid 1px #ddd;background:#fff}
.page-section input{float:left;font-size:12px;}
.search{float:left;}
.search input[type=text]{width:182px;height:34px;border:1px solid rgba(33, 150, 243, 0.12);padding:0 10px;}
.page-section input[type=button]{width:52px;height:34px;border:solid 1px #2196f3;background:#2196f3;color:#fff;}
.page-section input[value=添加]{border-radius:4px;margin-left:5px;}

</style>
