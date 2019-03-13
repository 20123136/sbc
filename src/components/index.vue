<template>
    <div id="set">
      <div class="page-section">
        <div class="page">
          <h1 class="text-center">10</h1>
          <p class="text-center">交换机数量</p>
        </div>
        <div class="page">
          <h1 class="text-center">10</h1>
          <p class="text-center">呼叫总量</p>
        </div>
        <div class="page">
          <h1 class="text-center">4/S</h1>
          <p class="text-center">负载最大量</p>
        </div>
        <div class="page">
          <h1 class="text-center">10K</h1>
          <p class="text-center">当前呼叫量</p>
        </div>
        <div class="page">
          <h1 class="text-center">4/S</h1>
          <p class="text-center">交换机数量</p>
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
            <th></th>
          </tr>
          <tr>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td>111</td>
            <td class="opt">
              <span v-on:click="opt=!opt">...</span>
              <div class="opt-main" v-show="opt">
                <a>开始</a>
                <a>暂停</a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios';
    export default {
        name: "set",
        data(){
          return {
            opt:false
          }
        },
      created(){
        Axios.get('/conf/rest/switch/monitor').then(res=>{
          console.log(res)
        }).catch(error=>{

        })
      }
    }
</script>

<style scoped>

</style>
