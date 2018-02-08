<template>
  <div>
    <textarea />
    <p v-cloak>socket: {{testField}}</p>
    <button v-on:click="send">送信</button>
  </div>
</template>

<script>
const W3CWebSocket = require('websocket').w3cwebsocket

export default {
  data: function() {
    return {
      socket: new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol'),
      testField: 'aaa'
    }
  },
  created: function() {
    const self = this
    self.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'")
        self.testField = e.data
      }
    }
  },
  methods: {
    send: function() {
      console.log(this.socket)
      this.socket.send('hello')
    }
  }
}
</script>
