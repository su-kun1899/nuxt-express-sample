<template>
  <div>
    <textarea />
    <button v-on:click="send">送信</button>
  </div>
</template>

<script>
var W3CWebSocket = require('websocket').w3cwebsocket
const socket = new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol')

export default {
  data: function() {
    return {
      ws: socket
    }
  },
  methods: {
    send: function() {
      this.ws.send('hello')
    }
  }
}
</script>
