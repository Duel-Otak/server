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


const soal = require('./questions.json')
console.log(soal)
const rooms = [
  // {
  //   id: 1,
  //   name: "roomName",
  //   host: "hostUsername",
  //   start: true,
  //   players: [{
  //     username: "username",
  //     correctAnswer: 5
  //     }]
  // }
]

const players = [
  // {
  //   username: 'Dumy',
  //   room: 
  // }
]

const winners = []
winners.sort((a,b) => (a.correctAnswer, b.correctAnswer))

console.log(process.env.NODE_ENV)

io.on('connection', (socket) => {
  console.log('a user connected')
  
  socket.on('userLogin', (username) => {
    players.push({ username, room: '' })
    io.emit('USER_LOGIN', players)
    console.log(players)
  })

  socket.on('getUser',  () => {
    console.log('get user')
    socket.emit('USER_LOGIN', players) 
  })

  socket.on('getRooms',  () => {
    console.log('get Rooms')
    socket.emit('LIST_ROOMS', rooms) 
  })

  // rooms = {host, name}
  socket.on('createRoom', (hostname) => {
    const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let roomname = ''
    for (let i = 0; i < 10; i++) {
      roomname += kamus[Math.floor(Math.random() * 62)]
    }
    rooms.push({
      id: rooms.length + 1,
      name: roomname,
      host: hostname,
      start: false,
      players: []
    })
    // username: "username",
    // correctAnswer: 5
    // }

    io.emit('LIST_ROOMS', rooms)
  })

  socket.on('getSoal', () => {
    const soalAcak = []
    for (let i = 0; i < 11; i++) {
      soalAcak.push(soal[Math.floor(Math.random() * soal.length )])
    }
    console.log(soal)
    console.log("soalAcak")
    io.emit('LIST_SOAL', soalAcak)
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
})

console.log(players)

http.listen(PORT, () => {
  console.log(`app is running on port http://localhost:${PORT}`)
})