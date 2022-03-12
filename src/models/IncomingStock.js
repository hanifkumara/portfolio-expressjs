const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const IncomingStock = db.define('IncomingStock', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  businessId: {
    type: DataTypes.UUID
  },
  outletId: {
    type: DataTypes.UUID
  },
  code: {
    type: DataTypes.STRING
  },
  notes: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'incoming_stocks',
  underscored: false
});

module.exports = IncomingStock