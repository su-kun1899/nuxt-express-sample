<template>
<el-container>
  <el-header>Hello Element UI</el-header>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" style="width: 100%" align="left">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="price" label="Price"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-button type="primary" icon="el-icon-search">Oniku</el-button>
      </el-col>
    </el-row>
  </el-main>
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

.el-table {
  line-height: normal;
}
</style>

<script>
export default {
  data: function() {
    return {
      tableData: [
        {
          name: 'カルビ',
          price: '100円'
        },
        {
          name: '上カルビ',
          price: '200円'
        },
        {
          name: '特上カルビ',
          price: '300円'
        }
      ]
    }
  }
}
</script>
