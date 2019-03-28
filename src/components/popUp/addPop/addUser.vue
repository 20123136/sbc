<template>
  <div class="edit-box" id="EditPop">
    <div class="edit">
      <i class="close1" v-on:click="back"></i>
      <h1>添加用户</h1>
      <div class="edit-body">
        <div class="edit-info">
          <label>用户名</label>
          <input type="text" v-model="name">
        </div>
        <div class="edit-info">
          <label>姓名</label>
          <input type="text" v-model="userName">
        </div>
        <div class="edit-info">
          <label>Email</label>
          <input type="text" v-model="email">
        </div>
        <div class="edit-info">
          <label>角色</label>
          <select v-model="role">
            <option value="admin">管理员</option>
            <option value="normal">普通用户</option>
          </select>
        </div>
        <div class="edit-info">
          <label>用户密码</label>
          <input type="text" v-model="pwd">
        </div>
        <div class="pop-footer">
          <input type="button" value="取消">
          <input type="button" value="确定" @click="put">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "",
      data(){
          return{
            name:'',
            userName:'',
            email:'',
            role:'',
            pwd:'',
          }
      },
      methods:{
        back:function () {
          this.$router.go(-1)
        },
        put:function () {
          this.$http.post('/conf/rest/user/create',{
            name:this.name,
            userName:this.userName,
            email:this.email,
            role:this.role,
            pwd:this.pwd,
          }).then((data)=>{
            // this.$router.push({path:"/route-set"})
            this.back()
          })
        }
      }
    }
</script>

<style scoped>
  .edit-box{background:rgba(0,0,0,0.6);width:100%;height:100%;position:fixed;left:0;top:0;z-index:2;}
  .edit{width:488px;background:#fff;position:absolute;left:50%;margin-left:-244px;top:100px;}
  .edit-body{padding:16px;}
  .edit h1{font-size:18px;line-height:40px;padding:8px 24px;border-bottom:1px solid rgba(0, 40, 100, 0.12);margin:0;}
  .edit-info{margin-bottom:16px;}
  .edit-info label{display:block;font-size:14px;margin-bottom:6px;color:#495057}
  .edit-info input,.edit-info select{width:100%;height:38px;padding:0 12px;line-height:38px;border:1px solid rgba(0, 40, 100, 0.12);font-size:14px;}
  .edit-info textarea{width:100%;padding:6px 12px;line-height:20px;font-size:14px;border:1px solid rgba(0, 40, 100, 0.12);}
  .pop-footer{display:flex;justify-content: flex-end;}
  .pop-footer input{width:52px;height:38px;line-height:36px;padding:0 12px;border:solid 1px rgba(0, 40, 100, 0.12);background:#fff;font-weight:bold;border-radius:4px;}
  .pop-footer input[value=确定]{background:#2196f3;border-color:#2196f3;margin-left:8px;color:#fff;}
  .close1{display:block;width:10px;height:10px;background:url("../../../assets/images/cha.jpg");position:absolute;right:24px;top:22px;cursor:pointer;}

</style>
