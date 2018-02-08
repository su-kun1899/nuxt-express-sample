<template>
  <div>
    <textarea v-model="message"></textarea>
    <br/>
    <button v-on:click="send">送信</button>
    <p>You recieved message: <b>{{answer}}</b></p>
  </div>
</template>

<script>
const W3CWebSocket = require('websocket').w3cwebsocket

export default {
  data: function() {
    return {
      socket: new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol'),
      message: '',
      answer: ''
    }
  },
  created: function() {
    const self = this
    self.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        self.answer = e.data
      }
    }
  },
  methods: {
    send: function() {
      this.socket.send(this.message)
    }
  }
}
</script>
