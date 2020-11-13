'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init(
    {
      name: DataTypes.STRING
    },
    { sequelize }
  )

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Room, { through: models.RoomUser })
  }
  return User
}