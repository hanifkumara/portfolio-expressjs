const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const Product = require('./Product')
const IncomingStock = require('./IncomingStock')

const TransactionItem = db.define('TransactionItem', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  transactionId: {
    type: DataTypes.UUID,
  },
  productId: {
    type: DataTypes.UUID,
  },
  quantity: {
    type: DataTypes.STRING,
  },
  priceProduct: {
    type: DataTypes.DOUBLE
  },
  status: {
    type: DataTypes.CHAR
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'transaction_items',
  underscored: false
});

module.exports = TransactionItem