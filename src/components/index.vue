<template>
    <div id="set">
      <div class="page-section">
        <div class="page">
          <h1 class="text-center">{{serviceMonitor.length}}</h1>
          <p class="text-center">交换机数量</p>
        </div>
        <div class="page">
          <h1 class="text-center">{{totalCall}}</h1>
          <p class="text-center">呼叫总量</p>
        </div>
        <div class="page">
          <h1 class="text-center">{{totalLoadMax}}/S</h1>
          <p class="text-center">负载最大量</p>
        </div>
        <div class="page">
          <h1 class="text-center">{{totalCurrentNum}}</h1>
          <p class="text-center">当前呼叫量</p>
        </div>
        <div class="page">
          <h1 class="text-center">{{totalLoadNum}}/S</h1>
          <p class="text-center">当前负载大小</p>
        </div>
      </div>
      <div class="table-box">
        <table class="table">
          <tr>
            <th>交换机名</th>
            <th>交换机IP</th>
            <th>CPU</th>
            <th>STACK</th>
            <th>呼叫总量</th>
            <th>负载最大量</th>
            <th>当前呼叫数目</th>
            <th>负载大小</th>
            <th>运行时间</th>
            <th>运行状态</th>
          </tr>
          <tr v-for="item in serviceMonitor">
            <td>{{item.switchName}}</td>
            <td>{{item.switchIp}}</td>
            <td>{{item.cpu}}</td>
            <td>{{item.stack}}</td>
            <td>{{item.totalNum}}</td>
            <td>{{item.loadMaxNum}}</td>
            <td>{{item.currentNum}}</td>
            <td>{{item.loadNum}}</td>
            <td>{{item.timeStr}}</td>
            <td :class="item.state==1?'ing':'stop'">{{item.state==1?'运行中':'已停止'}}</td>
          </tr>
        </table>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
  export default {
        name: "set",
        data(){
          return {
            opt:false,
            serviceMonitor:[],
            totalCall:0,
            totalLoadMax:0,
            totalCurrentNum:0,
            totalLoadNum:0,
          }
        },
      mounted(){
        var that=this;
        document.addEventListener('click',function () {
          that.opt=false;
        })
      },
      methods:{
        fetchMonitor1:function(){
            this.$http.get('/conf/rest/switch/monitor').then((res)=>{
              this.serviceMonitor=[];
              this.totalCall=0;
              this.totalLoadMax=0;
              this.totalCurrentNum=0;
              this.totalLoadNum=0;
              var monitorData=res.data.switchMonitor;
              if(monitorData instanceof Array){
                this.serviceMonitor=res.data.switchMonitor
              }else{
                this.serviceMonitor.push(res.data.switchMonitor);
              }
              for(var key in this.serviceMonitor){
                this.totalCall+= parseInt(this.serviceMonitor[key].totalNum);
                this.totalLoadMax+= parseInt(this.serviceMonitor[key].loadMaxNum);
                this.totalCurrentNum+= parseInt(this.serviceMonitor[key].currentNum);
                this.totalLoadNum+= parseInt(this.serviceMonitor[key].loadNum);
              }
            }).catch((res)=>{
              console.log(res,"请求失败")
            })

        },
      },
      created(){
        this.fetchMonitor1()
        const timer=setInterval(this.fetchMonitor1,3000)
        //解决定时器在其他组件还在运行的问题
        this.$once('hook:beforeDestroy', () => {
          clearInterval(timer);
        })
      },
    watch:{
      '$route'(newV,oldV){
        if("/index"==newV.path){
          this.fetchMonitor1()
        }
      }
    },

  }
</script>

<style scoped>

</style>
