const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const IncomingStock = require('./IncomingStock');
const Product = require('./Product');

const IncomingStockProduct = db.define('IncomingStockProduct', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  productId: {
    type: DataTypes.UUID
  },
  incomingStockId: {
    type: DataTypes.UUID
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  expiredDate: {
    type: DataTypes.DATE
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'incoming_stock_products',
  underscored: false
});

IncomingStock.hasMany(IncomingStockProduct, {foreignKey: 'incomingStockId'})
IncomingStockProduct.belongsTo(Product, {foreignKey: 'productId'})

module.exports = IncomingStockProduct