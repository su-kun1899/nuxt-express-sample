<template>
  <div>
    <textarea />
    <button v-on:click="send">送信</button>
  </div>
</template>

<script>
import WebSocket from 'ws'
const socket = new WebSocket('ws://localhost:3000/api/chat')

export default {
  data: function() {
    return {
      ws: socket
    }
  },
  methods: {
    send: function() {
      console.log('送信')
      this.ws.send('hello')
    }
  }
}
</script>
