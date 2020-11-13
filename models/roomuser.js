'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class RoomUser extends Model {}
  RoomUser.init(
    {
      UserId: DataTypes.INTEGER,
      RoomId: DataTypes.INTEGER,
      name: DataTypes.STRING
    },
    { sequelize }
  )

  RoomUser.associate = function(models) {
    // associations can be defined here
    RoomUser.belongsTo(models.User)
    RoomUser.belongsTo(models.Room)
  }
  return RoomUser
}
