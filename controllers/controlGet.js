const Soal = require('../models').Soal
const Room = require('../models').Room
const User = require('../models').User
const RoomUser = require('../models').RoomUser
class ControlAll {
  static getAllSoal(req, res, next) {
    Soal.findAll({
      where: {}
    })
      .then((soals) => {
        res.status(200).json(soals)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static createRoom(req, res) {
    let userid
    let roomnya
    User.findOne({ where: { name: req.body.name } })
      .then((userFound) => {
        userid = userFound.id
        return Room.create({
          roomname: req.body.roomname
        })
      })
      .then((roomCreated) => {
        roomnya = roomCreated
        return RoomUser.create({
          UserId: userid,
          RoomId: roomCreated.id,
          name: req.body.roomname
        })
      })
      .then((final) => {
        res.status(201).json({ roomUser: final, roomCreated: roomnya })
      })
      .catch((err) => {
        console.log(err, '<< ini error create room')
        res.status(500).json(err)
      })
  }

  static createUser(req, res) {
    User.findOne({ where: { name: req.body.name } })
      .then((usernya) => {
        if (usernya) {
          // throw({me})
          return usernya
        } else {
          return User.create({
            name: req.body.name
          })
        }
      })
      .then((userCreated) => {
        res.status(201).json(userCreated)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static joinRoom(req, res) {
    // console.log(req.body, "<<<<")

    RoomUser.findAll({ where: { name: req.body.roomname } })
      .then((roomUsers) => {
        for (let i of roomUsers) {
          if (i.UserId == req.body.userId) {
            // throw ({ message: "KAMU SUDAH MASUK" })
            return i
          }
        }
        if (roomUsers.length > 4) {
          // res.status(400).json({ message: "OOPS ROOM FULL" })
          throw { message: 'OOPS ROOM FULL' }
        } else {
          // console.log("masuk sini ")
          return Room.findOne({ where: { roomname: req.body.roomname } })
        }
      })
      .then((roomFound) => {
        // console.log(roomFound.UserId, "<<<<< ini room found")
        if (roomFound) {
          if (roomFound.UserId) {
            return roomFound
          } else {
            console.log('masuk sini')
            return RoomUser.create({
              RoomId: roomFound.id,
              UserId: req.body.userId,
              name: req.body.roomname
            })
          }
        } else {
          throw { message: 'Room not found' }
        }
      })
      .then((roomUserCreated) => {
        res.status(201).json(roomUserCreated)
      })
      .catch((err) => {
        // console.log(err, "<< ini error")
        res.status(500).json(err)
      })
  }
  static getAllRooms(req, res) {
    Room.findAll({ where: {} })
      .then((rooms) => {
        res.status(200).json(rooms)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static leaveRoom(req, res) {
    let roomUserToDelete
    RoomUser.findOne({
      where: { UserId: req.body.userId, name: req.body.roomname }
    })
      .then((roomFound) => {
        roomUserToDelete = roomFound
        return RoomUser.destroy({
          where: { UserId: req.body.userId, name: req.body.roomname }
        })
      })
      .then(() => {
        res.status(200).json({ message: `You left ${roomUserToDelete.name}` })
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static getDetailRoomByName(req, res) {
    console.log(req.body)
    RoomUser.findAll({
      where: { name: req.params.roomName },
      include: [User, Room]
    })
      .then((roomFound) => {
        res.status(200).json(roomFound)
      })
      .catch((err) => {
        console.log(err, '<<')
        res.status(500).json(err)
      })
  }

  static getAllUsers(req, res) {
    // console.log(req.params, 'parmas')
    Room.findOne({
      where: {
        roomname: req.params.name
      }
    })
      .then((result) => {
        console.log(result)
        return RoomUser.findAll({
          where: {
            RoomId: result.id
          },
          include: [User]
        })
      })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
}

module.exports = ControlAll