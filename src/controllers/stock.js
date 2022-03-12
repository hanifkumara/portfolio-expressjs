const  { response } = require('../helpers/response')
const Stock = require('../models/Stock')
const Product = require('../models/Product')
const Sequelize = require('sequelize')

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { outletId } = req.query
    const { businessId } = req

    const where = {}

    outletId ? (where.outletId = { [Sequelize.Op.eq]: outletId }) : '';
    businessId ? (where.businessId = { [Sequelize.Op.eq]: businessId }) : '';

    const resStock = await Stock.findAll({
      where,
      include: [
        {
          model: Product
        }
      ]
    })
    if(!resStock) return response(res, 500, null, {message: `Stock with business id ${id} not found`})
    return response(res, 200, resStock, null)
  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const {
      outletId,
      incomingStockId,
      outcomingStockId,
      productId,
      stock
    } = req.body

    const { businessId } = req

    const dataSend = {
      businessId,
      outletId,
      incomingStockId,
      outcomingStockId,
      productId,
      stock
    }

    const resStock = await Stock.create(dataSend)

    return response(res, 201, resStock, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  Create,
  FindAllByBusiness
}