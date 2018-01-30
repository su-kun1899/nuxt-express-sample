<template>
<div id="sushi-list">
  <ul>
    <li v-for="(item) in sushiList" v-bind:key="item.name">
      {{item.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      sushiList: [{ name: 'まぐろ' }, { name: 'かじき' }]
    }
  }
}
</script>
