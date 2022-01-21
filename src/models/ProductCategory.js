const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const ProductCategory = db.define('ProductCategory', {
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
  name: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.TINYINT
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'product_categories',
  underscored: false
});

module.exports = ProductCategory