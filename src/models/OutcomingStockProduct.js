const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

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

module.exports = OutcomingStockProduct