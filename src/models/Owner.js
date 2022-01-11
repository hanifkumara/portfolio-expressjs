const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Owner = db.define('Owner', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
  },
  businessId: {
    type: DataTypes.UUID,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  verify: {
    type: DataTypes.TINYINT
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'owners',
  underscored: false
});

module.exports = Owner