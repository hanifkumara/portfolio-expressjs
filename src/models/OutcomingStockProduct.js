const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const OutcomingStock = require('./OutcomingStock');
const Product = require('./Product');
const Stock = require('./Stock')

const OutcomingStockProduct = db.define('OutcomingStockProduct', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  stockId: {
    type: DataTypes.UUID
  },
  outcomingStockId: {
    type: DataTypes.UUID
  },
  quantity: {
    type: DataTypes.INTEGER
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'outcoming_stock_products',
  underscored: false
});

OutcomingStock.hasMany(OutcomingStockProduct, {foreignKey: 'outcomingStockId'})
Stock.hasMany(OutcomingStockProduct, {foreignKey: 'stockId'})
OutcomingStockProduct.belongsTo(Stock, {foreignKey: 'stockId'})

module.exports = OutcomingStockProduct