const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const User = db.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'users',
  underscored: false
});

module.exports = User