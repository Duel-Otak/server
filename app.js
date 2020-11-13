require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.on('createRoom', function(roomname) {
    socket.join(roomname)
    // console.log('emit fethroomUland dr server')
    // aasda
    io.emit('fetchRoomUlang')
  })
  socket.on('joinRoom', function(roomname) {
    socket.join(roomname)
    io.emit('joined', roomname)
  })
  socket.on('randomIndex', function(index) {
    socket.broadcast.emit('changeIndex', index)
  })
  socket.on('leaveRoom', function(roomname) {
    socket.leave(roomname)
  })
  socket.on('adayangmenang', function(obj) {
    // io.emit("gameover")
    socket.broadcast.to(obj.roomname).emit('gameover', obj.winner)
  })
  socket.on('ayomulai', function(roomname) {
    socket.broadcast.to(roomname).emit('letsgo')
  })
})

http.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})