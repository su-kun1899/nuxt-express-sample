import express from 'express'
import expressWs from 'express-ws'

expressWs(express())
const router = express.Router()

router.ws('/chat', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send('Server recieved message via WebSocket "' + msg + '"')
  })
})

export default router
