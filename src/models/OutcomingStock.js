const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Outlet = require('./Outlet');

const OutcomingStock = db.define('OutcomingStock', {
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
  tableName: 'outcoming_stocks',
  underscored: false
});

OutcomingStock.belongsTo(Outlet, {foreignKey: 'outletId'})

module.exports = OutcomingStock