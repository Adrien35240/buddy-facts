const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Dummy extends Model { }

Dummy.init({
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'dummy',
});

module.exports = Dummy;
