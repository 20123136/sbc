<template>
  <div>
    <div class="edit-box">
      <div class="edit">
        <i class="close1" v-on:click="back"></i>
        <h1>删除</h1>
        <h2>确定删除信任ip设置{{receiveData.cidr}}</h2>
        <div class="pop-footer">
          <input type="button" value="取消" v-on:click="back">
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
            receiveData:this.$route.query
          }
      },
      methods:{
        back:function () {
          this.$router.go(-1)
        },
        put:function () {
          this.$http.post('/conf/rest/acl/delete/'+this.receiveData.id,{
            cidr:this.receiveData.cidr,
            id:this.receiveData.id,
            node_type:this.receiveData.node_type,
            switchId:this.receiveData.switchId,
            type:this.receiveData.type
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
  .edit{width:488px;background:#fff;position:absolute;left:50%;margin-left:-244px;top:100px;padding:0 16px 16px 16px;}
  .edit h1{font-size:18px;line-height:40px;padding:8px 24px;border-bottom:1px solid rgba(0, 40, 100, 0.12);margin:0;}
  .edit h2{font-size:14px;line-height:40px;padding:8px 24px;margin:0;}
  .pop-footer{display:flex;justify-content: flex-end;}
  .pop-footer input{width:52px;height:38px;line-height:36px;padding:0 12px;border:solid 1px rgba(0, 40, 100, 0.12);background:#fff;font-weight:bold;border-radius:4px;}
  .pop-footer input[value=确定]{background:#2196f3;border-color:#2196f3;margin-left:8px;color:#fff;}
  .close1{display:block;width:10px;height:10px;background:url("../../../assets/images/cha.jpg");position:absolute;right:24px;top:22px;cursor:pointer;}
</style>
