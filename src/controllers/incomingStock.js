const  { response } = require('../helpers/response')
const IncomingStock = require('../models/IncomingStock')
const IncomingStockProduct = require('../models/IncomingStockProduct')
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const randomstring = require('randomstring')
const Outlet = require('../models/Outlet')

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { businessId } = req
    const resIncomingStock = await IncomingStock.findAll({
      where: {
        businessId
      },
      include: [
        {
          model: Outlet
        }
      ]
    })

    if(!resIncomingStock) return response(res, 500, null, {message: `Incoming Stock with business id ${businessId} not found`})

    return response(res, 200, resIncomingStock, null)

  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const {
      outletId,
      products,
      notes,
      date
    } = req.body

    const { businessId } = req

    const dataSend = {
      businessId,
      outletId,
      notes,
      date
    }

    const resStock = await IncomingStock.create(dataSend)
    const code = 'INC_' + randomstring.generate(4);
    resStock.code = code;
    await resStock.save();

    const parseProducts = products ? JSON.parse(products) : null
    if(parseProducts) {
      for (const product of parseProducts) {

        const dataSendIncomingProduct = {
          productId: product.id,
          incomingStockId: resStock.id,
          quantity: product.quantity
        }
        if(product.expiredDate) dataSendIncomingProduct.expiredDate = product.expiredDate
        await IncomingStockProduct.create(dataSendIncomingProduct)

        const dataSendStock = {
          businessId,
          outletId,
          productId: product.id,
          incomingStockId: resStock.id,
          stock: product.quantity
        }
        if(product.expiredDate) dataSendStock.expiredDate = product.expiredDate
        await Stock.create(dataSendStock)
        
        const resProduct = await Product.findOne({
          where: {id: product.id}
        })
        if(!resProduct) return response(res, 500, null, {message: `Product with id ${product.id} not found`})
        resProduct.stock += parseInt(product.quantity)
        await resProduct.save()
      }
    }

    return response(res, 201, resStock || null, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  FindAllByBusiness,
  Create
}