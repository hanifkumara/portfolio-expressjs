const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Stock = db.define('Stock', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  productId: {
    type: DataTypes.UUID,
  },
  stock: {
    type: DataTypes.INTEGER
  },
  startingStock: {
    type: DataTypes.INTEGER
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'stocks',
  underscored: false
});

module.exports = Stock