const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const Product = require('./Product')
const IncomingStock = require('./IncomingStock')

const Stock = db.define('Stock', {
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
  productId: {
    type: DataTypes.UUID,
  },
  incomingStockId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  stock: {
    type: DataTypes.INTEGER
  },
  isInitial: {
    type: DataTypes.BOOLEAN
  },
  expiredDate: {
    type: DataTypes.DATE
  },
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'stocks',
  underscored: false
});

Product.hasMany(Stock, {foreignKey: 'productId'})
Stock.belongsTo(Product, {foreignKey: 'productId'})
Stock.belongsTo(IncomingStock, {foreignKey: 'incomingStockId'})

module.exports = Stock