const  { response } = require('../helpers/response')
const OutcomingStock = require('../models/OutcomingStock')
const OutcomingStockProduct = require('../models/OutcomingStockProduct')
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const randomstring = require("randomstring");

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { businessId } = req
    const resOutcomingStock = await OutcomingStock.findAll({
      where: {
        businessId
      }
    })

    if(!resOutcomingStock) return response(res, 500, null, {message: `Outcoming Stock with business id ${businessId} not found`})

    return response(res, 200, resOutcomingStock, null)

  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const {
      outletId,
      stocks,
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

    const resStock = await OutcomingStock.create(dataSend)
    const code = 'OUT_' + randomstring.generate(4);
    resStock.code = code;
    await resStock.save();


    const parseStock = stocks ? JSON.parse(stocks) : null
    if(parseStock) {
      for (const stock of parseStock) {

        const dataSendOutcomingProduct = {
          stockId: stock.id,
          outcomingStockId: resStock.id,
          quantity: stock.quantity
        }
        await OutcomingStockProduct.create(dataSendOutcomingProduct)

        const resOutcomingStock = await Stock.findOne({
          where: {id: stock.id, outletId, businessId}
        })

        if(!resOutcomingStock) return response(res, 500, null, {message: `Stock with id ${stock.id} not found`})

        resOutcomingStock.stock -= parseInt(stock.quantity)
        await resOutcomingStock.save()

        if(resOutcomingStock.productId) {
          const resProduct = await Product.findOne({
            where: {id: resOutcomingStock.productId}
          })
          if(!resProduct) return response(res, 500, null, {message: `Product with id ${resOutcomingStock.productId} not found`})
          resProduct.stock -= parseInt(stock.quantity)
          await resProduct.save()
        }
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