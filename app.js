require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http, { origins: '*:*'})
const routes = require('./routes')

app.use(cors())
app.options('*', cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

const rooms = [
  {
    id: 1,
    name: "roomName",
    host: "hostUsername",
    start: true,
    players: [{
      username: "username",
      correctAnswer: 5
      }]
  }
]

const players = [
  {
    username: 'Dumy',
    room: "roomId"
  }
]
console.log(process.env.NODE_ENV)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('createRoom', (roomname) => {
    socket.join(roomname)

    io.emit('fetchRoomUlang')
  })
  socket.on('joinRoom', (roomname) => {
    socket.join(roomname)
    io.emit('joined', roomname)
  })
  socket.on('randomIndex', (index) => {
    socket.broadcast.emit('changeIndex', index)
  })
  socket.on('leaveRoom', (roomname) => {
    socket.leave(roomname)
  })
  socket.on('adayangmenang', (obj) => {
    // io.emit("gameover")
    socket.broadcast.to(obj.roomname).emit('gameover', obj.winner)
  })
  socket.on('ayomulai', (roomname) => {
    socket.broadcast.to(roomname).emit('letsgo')
  })
  socket.on('userLogin', (username) => {
    players.push({ username, room: '' })
    io.emit('USER_LOGIN', players)
    console.log(players)
  })
})
console.log(players)

http.listen(PORT, () => {
  console.log(`app is running on port http://localhost:${PORT}`)
})