<template>
  <div class="edit-box" id="EditPop">
    <div class="edit">
      <i class="close1" v-on:click="back"></i>
      <h1>呼叫路由设置</h1>
      <div class="edit-body">
        <div class="edit-info">
          <label>号码模式</label>
          <input type="text" v-model="numPattern">
        </div>
        <div class="edit-info">
          <label>域名</label>
          <input type="text" v-model="domain">
        </div>
        <div class="edit-info">
          <label>路由处理类型</label>
          <select v-model="myValue">
            <option value="0">分机</option>
            <option value="1">外部路由</option>
            <option value="2">网关</option>
            <option value="3">自定义路由</option>
            <option value="4">语音留言</option>
            <option value="5">组内待接</option>
            <option value="6">满意度</option>
            <option value="7"></option>
          </select>
        </div>
        <div class="edit-info">
          <label>路由内容</label>
          <textarea v-model="destContent"></textarea>
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
            numPattern:'',
            domain:'',
            myValue:'',
            destContent:''
          }
      },
      methods:{
        back:function () {
          this.$router.go(-1)
        },
        put:function () {
          this.$http.post('/conf/rest/routepattern/create',{
            destContent:this.destContent,
            destType:this.myValue,
            domain:this.domain,
            numPattern:this.numPattern,
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
