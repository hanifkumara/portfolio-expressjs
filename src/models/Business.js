const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Business = db.define('Business', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
  },
  businessAccountId: {
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.INTEGER
  },
  address: {
    type: DataTypes.TEXT
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  registrationDate: {
    type: DataTypes.DATE
  },
  province: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  nameOnKtp: {
    type: DataTypes.STRING
  },
  noKtp: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.TINYINT
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'businesses',
  underscored: false
});

module.exports = Business