<template>
<el-container>
  <el-header>Hello Element UI</el-header>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-table :data="onikuMenu" style="width: 100%" align="left" v-show="onikuMenu.length > 0">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="price" label="Price"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-button type="primary" icon="el-icon-search" v-on:click="showOnikuMenu">Oniku</el-button>
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
import axios from '~/plugins/axios'

export default {
  data: function() {
    return {
      onikuMenu: []
    }
  },
  methods: {
    showOnikuMenu: async function() {
      const random = Math.floor(Math.random() * 2) + 1
      if (random % 2 === 0) {
        let { data } = await axios.get('/api/oniku')
        this.onikuMenu = data

        return
      }

      this.onikuMenu = [
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
