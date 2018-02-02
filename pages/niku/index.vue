<template>
<el-container>
  <el-header>Hello Element UI</el-header>
  <el-main>{{message}}</el-main>
</el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: 'Hello element'
    }
  }
}
</script>
