<template>
  <div class="login-body">
    <img src="../assets/images/tabler@1x.png">
    <div class="login">
      <h1>欢迎登录SBC</h1>
      <div class="login-info">
        <label>用户名</label>
        <input type="text">
      </div>
      <div class="login-info">
        <label>密码</label>
        <input type="text">
      </div>
      <div class="remember">
        <input type="checkbox">
        <label>记住我</label>
      </div>
      <input type="button" value="登录">
    </div>
  </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  .login-body{width:358px;position:absolute;left:50%;margin-left:-179px;top:100px;}
  .login{padding:32px;background:#fff;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);border:1px solid rgba(0, 40, 100, 0.12);}
  .login-body img{width:78px;height:32px;margin:0 auto 32px 140px}
  .login-body h1{font-size:20px;font-weight: 400;margin:0 0 24px 0;}
  .login-info{margin-bottom:16px;}
  .login-info label{display:block;margin-bottom:6px;font-weight: 600;font-size:14px;}
  .login-info input{display: block;width: 100%;padding:6px 12px;font-size:14px;height:38px;line-height:38px;color: #495057;border: 1px solid rgba(0, 40, 100, 0.12);}
  .login input[value=登录]{width:100%;height:38px;background:#467fcf;color:#fff;border:none;}
  .remember{display:flex;justify-content: left;margin-bottom:16px;}
  .remember label{font-weight:normal;margin:0 0 0 5px;}
  .remember input{width:16px;height:16px;}
</style>
