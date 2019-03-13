<template>
    <div id="set">
      <div class="page-section">
        <div class="search">
          <input type="text">
          <input type="button" value="搜索">
        </div>
        <input type="button" value="添加">
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
    export default {
        name: "set",
      data(){
          return {
            opt:false
          }
      },
    }
</script>

<style scoped>

</style>
