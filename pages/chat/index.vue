<template>
  <div>
    <textarea />
    <!-- <p v-cloak>hogehoge: {{hogehoge}}</p> -->
    <!-- <p>hoge: {{hoge}}</p> -->
    <!-- <input type="text" v-bind:value="socket.testField" /> -->
    <!-- <p v-cloak>socket: {{socket.testField}}</p> -->
    <p v-cloak>socket: {{testField}}</p>
    <button v-on:click="send">送信</button>
    <button v-on:click="rerender">反映</button>
  </div>
</template>

<script>
// var W3CWebSocket = require('websocket').w3cwebsocket
// const socket = new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol')

// socket.onmessage = function(e) {
//   if (typeof e.data === 'string') {
//     console.log("Received: '" + e.data + "'")
//     this.testField = e.data
//   }
// }

// class WebsocketClient {
//   constructor(socket) {
//     this.socket = socket
//     this.socket.testField = 'abc'

//     this.socket.onmessage = function(e) {
//       if (typeof e.data === 'string') {
//         console.log('message recieved:' + e.data)
//         this.testField = e.data
//       }
//     }
//   }

//   send() {
//     this.socket.send('hello')
//   }
// }

// const ws = new WebsocketClient(socket)

const W3CWebSocket = require('websocket').w3cwebsocket

export default {
  data: function() {
    return {
      // message: 'Hi',
      // ws: new WebsocketClient(socket)
      // socket: this.ws.socket
      socket: new W3CWebSocket('ws://localhost:3000/api/chat', 'echo-protocol'),
      testField: 'aaa'
    }
  },
  // watch: {
  //   fuga: function(val) {
  //     console.log(val)
  //     this.hogehoge = val.testField
  //   }
  //   //   hoge: function() {
  //   //     console.log('computed: ' + this.ws.socket.testField)
  //   //     return this.ws.socket.testField
  //   //   }
  // },
  mounted: function() {
    const self = this
    this.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'")
        self.testField = e.data
        // self.$forceUpdate()
      }
    }
  },
  methods: {
    send: function() {
      console.log(this.socket)
      this.socket.send('hello')
      // this.$forceUpdate()
    },
    rerender: function() {
      this.$forceUpdate()
    }
  }
}
</script>
