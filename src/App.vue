<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  export default {
  name: 'App',
  components:{Nav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.page-section{width:1200px;margin:24px auto 24px auto;overflow:hidden;}
.page{width:174px;height:110px;padding:0 12px 12px 12px;box-sizing: border-box;float:left;background:#fff;box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);border:solid 1px rgba(0, 40, 100, 0.12);margin-right:24px;border-radius:5px;}
.page p{color:#9aa0ac;}
.table-box{width:1200px;margin:auto;}
.table-box td,.table-box th{padding:8px;border-top:1px solid #ddd}
.opt{position:relative}
.opt span{color:#9aa0ac;cursor:pointer;}
.opt-main{position:absolute;right:0;bottom:-55px;width:54px;padding:12px;box-sizing:border-box;border:solid 1px rgba(0, 40, 100, 0.12);background:#fff;}
.opt-main a{display:block;color:#9aa0ac;cursor:pointer}
.opt-main a:hover{text-decoration:none;}
.table{border:solid 1px #ddd;}
.page-section input{float:left;}
.search{float:left;}
.search input[type=text]{width:182px;height:38px;border:1px solid rgba(0, 40, 100, 0.12)}
.page-section input[type=button]{width:52px;height:38px;border:solid 1px #467fcf;background:#467fcf;color:#fff;}
.page-section input[value=添加]{border-radius:4px;margin-left:5px;}

</style>
