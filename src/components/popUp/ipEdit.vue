<template>
  <div class="edit-box" id="EditPop">
    <div class="edit">
      <i class="close1" v-on:click="back"></i>
      <h1>信任IP设置</h1>
      <div class="edit-body">
        <div class="edit-info">
          <label>记录ID</label>
          <input type="text" v-model="receiveData.id" disabled>
        </div>
        <div class="edit-info">
          <label>节点类型</label>
          <select v-model="receiveData.node_type">
            <option value="domains">domains</option>
            <option value="lan">lan</option>
          </select>
        </div>
        <div class="edit-info">
          <label>操作类型</label>
          <select v-model="receiveData.type">
            <option value="允许">允许</option>
            <option value="拒绝">拒绝</option>
          </select>
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
        if(this.receiveData.type="允许"){
          this.myValue='allow'
        }else if(this.receiveData.type="拒绝"){
          this.myValue='deny'
        }
      },
      put:function () {
        this.$http.post('/conf/rest/acl/update',{
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
    },
    created(){
      this.fetchMonitor();
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
  .close1{display:block;width:10px;height:10px;background:url("../../assets/images/cha.jpg");position:absolute;right:24px;top:22px;cursor:pointer;}

</style>
