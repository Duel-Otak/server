const routes = require('express').Router()
const controller = require('../controllers/controlGet')

routes.get('/soals', controller.getAllSoal)
routes.post('/rooms', controller.createRoom)
routes.post('/users', controller.createUser)
routes.post('/join', controller.joinRoom)
routes.get('/rooms', controller.getAllRooms)
routes.delete('/roomUser', controller.leaveRoom)
routes.get('/roomDetail/:roomName', controller.getDetailRoomByName)
routes.get('/rooms/:name/users', controller.getAllUsers)
module.exports = routes
