'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Room.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value) {
          Room.findOne({ where: { name: value } }).then((adaRoom) => {
            if (adaRoom) {
              throw new Error('Room already exists')
            }
          })
        },
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Room should not be empty' }
      },
      allowNull: false
    },
    host: DataTypes.STRING,
    start: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};