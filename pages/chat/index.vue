<template>
  <div>
    <textarea />
    <p>{{ws.socket.testField}}</p>
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

class WebsocketClient {
  constructor() {
    this.socket = new W3CWebSocket(
      'ws://localhost:3000/api/chat',
      'echo-protocol'
    )
    this.socket.message = 'hoge'

    this.testField = 'aaa'

    this.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        console.log('message recieved:' + e.data)
        this.testField = e.data
        // this.message = e.data
      }
    }
  }

  send() {
    this.socket.send('hello')
  }

  // setMessage(msg) {
  //   this.message = msg
  // }
}

const ws = new WebsocketClient()

export default {
  data: function() {
    return {
      message: 'Hi',
      ws: ws
    }
  },
  methods: {
    send: function() {
      console.log(this.ws)
      this.ws.send('hello')
    }
  }
}
</script>
