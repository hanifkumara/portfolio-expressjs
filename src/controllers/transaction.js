const  { response } = require('../helpers/response')
const Outlet = require('../models/Outlet')
const Stock = require('../models/Stock')
const IncomingStock = require('../models/IncomingStock')
const IncomingStockProduct = require('../models/IncomingStockProduct')
const OutcomingStockProduct = require('../models/OutcomingStockProduct')
const Transaction = require('../models/transaction')
const dayjs = require('dayjs')
const Product = require('../models/Product')


const FindAll = async (req, res, next) => {
  try {
  
    const resTransaction = await Transaction.findAll()
    if(!resTransaction) return response(res, 500, null, {message: "Transaction not Found"})
    
    return response(res, 200, {result: resTransaction}, null)

  } catch (error) {
    return next(error)
  }
}

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { businessId } =req.query
  
    console.log("businessId =====>", businessId)

    const resTransaction = await Transaction.findAll({
      where: {businessId}
    })
    if(!resTransaction) return response(res, 500, null, {message: "Transaction not Found"})
    
    return response(res, 200, {result: resTransaction}, null)

  } catch (error) {
    return next(error)
  }
}

const FindById = async (req, res, next) => {
  try {
  
    const {id} = req.params

    const resTransaction = await Transaction.findOne({
      where: { id }
    })
    if(!resTransaction) return response(res, 500, null, {message: `Transaction with id ${id} not found`})
    
    return response(res, 200, {result: resTransaction}, null)

  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const { 
      businessId,
      outletId,
      customerId,
      items
    } = req.body

    const date = new Date()

    const dataSendTransaction = {
      businessId,
      outletId,
      customerId,
      receiptNumber: `${customerId}:${dayjs(date).format('DD/MM/YY:hh:mm:ss')}`,
      status: 'onprogress'
    }

    const resTransaction = await Transaction.create(dataSendTransaction)
    const parseItems = items
    if(parseItems) {
      for (const item of parseItems) {
        item.tempQuantity = item.quantity
        const currProduct = await Product.findOne({
          where: {
            id: item.productId,
            businessId,
            outletId
          }
        })

        const currStock = await Stock.findAll({
          where: {
            businessId,
            outletId,
            productId: item.productId
          }
        })
        if (currStock.length > 1) {
          const sortStock = currStock.sort(
            (a, b) => new Date(a.expiredDate) - new Date(b.expiredDate)
          );

          // sort biar yg ada expired dulu, baru yg nggak ada
          const groupWithExpired = sortStock
            .filter((item) => item.expiredDate)
            .filter((item) => item.stock > 0);
          const groupWithNoExpired = sortStock
            .filter((item) => !item.expiredDate)
            .filter((item) => item.stock > 0);

          const mergeGroup = [...groupWithExpired, ...groupWithNoExpired];

          for (let i = 0; i < mergeGroup.length; i++) {
            if(i === mergeGroup.length - 1) {
              console.log('mergeGroup terakhir')
              mergeGroup[i].stock -= item.tempQuantity
            } else {
              if(mergeGroup[i].stock >= item.tempQuantity) {
                console.log('')
                mergeGroup[i].stock -= item.tempQuantity
                break
              } else {
                item.tempQuantity -= mergeGroup[i].stock
                mergeGroup[i].stock = 0
                console.log('item.tempQuantity', item.tempQuantity)
              }
            }
          }
          for (const data of mergeGroup) {
            const resStock = await Stock.findOne({
              where: {id: data.id}
            })
            if(!resStock) return response(res, 500, null, {message: `Stock with id ${data.id} not found`})
            resStock.stock = data.stock
            await resStock.save()
          }
          console.log('temp quantity =====>', item.tempQuantity)
          console.log('quantity =====>', item.quantity)
          currProduct.stock -= item.quantity
          await currProduct.save()
        } else {
          console.log('Product tidak ada stocknye')
        }
      }
    }
    resTransaction.status = 'done'
    await resTransaction.save()
    return response(res, 200, null, null)
  } catch (error) {
    return next(error)
  }
}


module.exports = {
  FindAll,
  FindById,
  FindAllByBusiness,
  Create
}