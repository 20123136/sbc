<template>
  <div class="edit-box" id="EditPop">
    <div class="edit">
      <i class="close1" v-on:click="back"></i>
      <h1>网关设置</h1>
      <div class="edit-body">
        <div class="edit-info">
          <label>记录ID</label>
          <input type="text" v-model="receiveData.id" disabled>
        </div>
        <div class="edit-info">
          <label>代理地址</label>
          <input type="text" v-model="receiveData.proxy">
        </div>
        <div class="edit-info">
          <label>域名</label>
          <input type="text" v-model="receiveData.realm">
        </div>
        <div class="edit-info">
          <label>用户名</label>
          <input type="text" v-model="receiveData.username">
        </div>
        <div class="edit-info">
          <label>密码</label>
          <input type="text" v-model="receiveData.password">
        </div>
        <div class="edit-info">
          <label>是否注册</label>
          <select v-model="receiveData.register">
            <option value="是">是</option>
            <option value="否">否</option>
          </select>
        </div>
        <div class="edit-info">
          <label>超时时长</label>
          <input type="text" v-model="receiveData.expire_seconds">
        </div>
        <div class="edit-info">
          <label>重试时长</label>
          <input type="text" v-model="receiveData.retry_seconds">
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
    name: "EditPop",
    data(){
      return {
        receiveData:this.$route.query,
        myValue:'',
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      fetchMonitor:function(){
        if(this.receiveData.register="是"){
          this.myValue='true'
        }else if(this.receiveData.register="否"){
          this.myValue='false'
        }
      },
      put:function () {
        this.$http.post('/conf/rest/gateway/update',{
          expire_seconds:this.receiveData.expire_seconds,
          gwname:this.receiveData.gwname,
          id:this.receiveData.id,
          password:this.receiveData.password,
          proxy:this.receiveData.proxy,
          realm:this.receiveData.realm,
          register:this.receiveData.myValue,
          retry_seconds:this.receiveData.retry_seconds,
          success:this.receiveData.success,
          switchId:this.receiveData.switchId,
          username:this.receiveData.username,
        }).then((data)=>{
          // this.$router.push({path:"/route-set"})
          this.back()
        })
      }
    },
    created(){
      this.fetchMonitor();
    }
  }
</script>

<style scoped>
  .edit-box{background:rgba(0,0,0,0.6);width:100%;height:100%;position:fixed;left:0;top:0;z-index:2; overflow-y:scroll;}
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
  .close1{display:block;width:10px;height:10px;background:url("../../assets/images/cha.jpg");position:absolute;right:24px;top:22px;cursor:pointer;}
</style>
