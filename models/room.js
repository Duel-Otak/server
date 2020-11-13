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
                throw new Error('room already exists')
              }
            })
          },
          notNull: { msg: 'name is required' },
          notEmpty: { msg: 'room should not be empty' }
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
