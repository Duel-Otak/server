'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soal = sequelize.define('Soal', {
    soal: DataTypes.STRING,
    jawab: DataTypes.BOOLEAN
  }, {});
  Soal.associate = function(models) {
    // associations can be defined here
  };
  return Soal;
};