const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const BusinessAccount = db.define('BusinessAccount', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
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
  isVerified: {
    type: DataTypes.TINYINT
  },
  lastLogin: {
    type: DataTypes.DATE
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'business_accounts',
  underscored: false
});

module.exports = BusinessAccount