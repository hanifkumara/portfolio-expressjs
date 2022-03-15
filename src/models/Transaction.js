const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const Product = require('./Product')
const IncomingStock = require('./IncomingStock')

const Transaction = db.define('Transaction', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  businessId: {
    type: DataTypes.UUID,
  },
  outletId: {
    type: DataTypes.UUID,
  },
  customerId: {
    type: DataTypes.UUID,
  },
  totalPayment: {
    type: DataTypes.DOUBLE,
  },
  receiptNumber: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.CHAR
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'transactions',
  underscored: false
});

module.exports = Transaction