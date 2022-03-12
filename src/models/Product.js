const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')
const Outlet = require('./Outlet')

const Product = db.define('Product', {
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
  productCategoryId: {
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  stock: {
    type: DataTypes.INTEGER
  },
  stockStarting: {
    type: DataTypes.INTEGER
  },
  image: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  expiredDate: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.BOOLEAN
  }
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'products',
  underscored: false
});

Product.belongsTo(Outlet, { foreignKey: 'outletId' });

module.exports = Product