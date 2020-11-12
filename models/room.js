'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Room extends Model {}
  Room.init(
    {
      roomname: {
        type: DataTypes.STRING,
        validate: {
          isUnique(value) {
            Room.findOne({ where: { roomname: value } }).then((adaRoom) => {
              if (adaRoom) {
                throw new Error('Oops! Room already exists')
              }
            })
          },
          notNull: { msg: 'Yikes! Please insert name!' },
          notEmpty: { msg: 'Oops! Please insert room!' }
        },
        allowNull: false
      }
    },
    { sequelize }
  )

  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsToMany(models.User, { through: models.RoomUser })
  }
  return Room
}
