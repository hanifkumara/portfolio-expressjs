const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Customer = db.define('Customer', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'customers',
  underscored: false
});

module.exports = Customer