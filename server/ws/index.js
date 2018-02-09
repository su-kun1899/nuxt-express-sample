import express from 'express'
import expressWs from 'express-ws'

expressWs(express())
const router = express.Router()

let connects = []

router.ws('/chat', function(ws, req) {
  connects.push(ws)

  ws.on('message', function(msg) {
    connects.forEach(socket => {
      socket.send(msg)
    })
  })

  ws.on('close', () => {
    connects = connects.filter(conn => {
      return conn === ws ? false : true
    })
  })
})

export default router
