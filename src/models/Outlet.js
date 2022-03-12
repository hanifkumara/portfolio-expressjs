const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const Business = require('./Business');
const IncomingStock = require('./IncomingStock');

const Outlet = db.define('Outlet', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  businessId: {
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.TEXT
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'outlets',
  underscored: false
});

Business.hasMany(Outlet, { foreignKey: 'businessId' })

module.exports = Outlet