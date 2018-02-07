<template>
  <div>
    <textarea />
    <p>{{message}}</p>
    <button v-on:click="send">送信</button>
  </div>
</template>

<script>
var W3CWebSocket = require('websocket').w3cwebsocket
const socket = new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol')

socket.onmessage = function(e) {
  if (typeof e.data === 'string') {
    console.log("Received: '" + e.data + "'")
  }
}

export default {
  data: function() {
    return {
      message: 'Hi',
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
