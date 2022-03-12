const  { response } = require('../helpers/response')
const Product = require('../models/Product')
const Outlet = require('../models/Outlet')
const Stock = require('../models/Stock')
const IncomingStock = require('../models/IncomingStock')
const IncomingStockProduct = require('../models/IncomingStockProduct')
const fs = require('fs')


const FindAll = async (req, res, next) => {
  try {
  
    const resProduct = await Product.findAll()
    if(!resProduct) return response(res, 500, null, {message: "Product not Found"})
    
    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { businessId } = req
  
    console.log("businessId =====>", businessId)

    const resProduct = await Product.findAll({
      where: {businessId},
      include: [
        { model: Outlet}
      ]
    })
    if(!resProduct) return response(res, 500, null, {message: "Product not Found"})
    
    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

const InventoryByBusiness = async (req, res, next) => {
  try {
    const { businessId } = req
  
    console.log("businessId =====>", businessId)

    const resProduct = await Product.findAll({
      where: {businessId},
      include: [
        { model: Outlet},
        { 
          model: Stock,
          include: 
            {
              model: IncomingStock,
              include: {
                model: IncomingStockProduct
            }
          }
        }
      ]
    })
    if(!resProduct) return response(res, 500, null, {message: "Product not Found"})
    
    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

const FindById = async (req, res, next) => {
  try {
  
    const {id} = req.params

    const resProduct = await Product.findOne({
      where: { id }
    })
    if(!resProduct) return response(res, 500, null, {message: `Product with id ${id} not found`})
    
    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const { 
      outletId,
      name,
      productCategoryId,
      price,
      description,
      stock,
      status,
      expiredDate
    } = req.body

    const { businessId } = req

    const outletIds = outletId ? JSON.parse(outletId) : [] 

    if(outletIds) {
      for(const outletId of outletIds) {
        const dataSendProduct = {
          businessId,
          outletId,
          name,
          productCategoryId,
          price,
          description,
          stock,
          stockStarting: stock,
          status
        }
        if(expiredDate) dataSendProduct.expiredDate = expiredDate
        if (req.file) {
          dataSendProduct.image = req.file.filename;
        }
        const resProduct = await Product.create(dataSendProduct)
        
        const dataSendStock = {
          businessId,
          outletId,
          productId: resProduct.id,
          stock,
          isInitial: true,
        }
        if(expiredDate) dataSendStock.expiredDate = expiredDate
        await Stock.create(dataSendStock)
      }
    }

    return response(res, 200, null, null)
  } catch (error) {
    return next(error)
  }
}

const Update = async (req, res, next) => {
  try {
  
    const { 
      outletId,
      name,
      productCategoryId,
      price,
      description,
      status,
      stock,
      expiredDate
    } = req.body

    const { id } = req.params

    const resProduct = await Product.findOne({
      where: { id }
    })
    if(!resProduct) return response(res, 500, null, {message: `Product with id ${id} not found`})

    if (req.file && resProduct.image) {
      fs.unlinkSync('images/' + resProduct.image);
    }
    
    if (req.file) {
      console.log('req.file =====>', req.file)
      resProduct.image = req.file.filename;
    }

    resProduct.outletId = outletId
    resProduct.name = name
    resProduct.productCategoryId = productCategoryId
    resProduct.price = price
    resProduct.description = description
    resProduct.status = status

    if(stock) resProduct.stock = stock
    if(expiredDate) resProduct.expiredDate = expiredDate

    await resProduct.save()

    const resStock = await Stock.findOne({
      where: {
        productId: id,
        isInitial: 1
      }
    })
    if(!resStock) return response(res, 500, null, {message: `Stock initial with product id ${id} not found`})

    if(stock) resStock.stock = stock
    if(expiredDate) resStock.expiredDate = expiredDate
    await resStock.save()

    return response(res, 200, {result: resProduct}, null)
  } catch (error) {
    return next(error)
  }
}
const PatchStatus = async (req, res, next) => {
  try {
  
    const {id} = req.params
    const {
      status
    } = req.body

    const resProduct = await Product.findOne({
      where: { id }
    })
    if(!resProduct) return response(res, 500, null, {message: `Product with id ${id} not found`})
    
    resProduct.status = status
    await resProduct.save()

    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

const Delete = async (req, res, next) => {
  try {
  
    const {id} = req.params

    const resProduct = await Product.findOne({
      where: { id }
    })
    if(!resProduct) return response(res, 500, null, {message: `Product with id ${id} not found`})
    
    await resProduct.destroy()
    await IncomingStockProduct.destroy({
      where: {
        productId: id
      }
    })
    await Stock.destroy({
      where: {
        productId: id
      }
    })

    return response(res, 200, {message: 'Delete product success'}, null)

  } catch (error) {
    return next(error)
  }
}

module.exports = {
  FindAll,
  FindAllByBusiness,
  FindById,
  InventoryByBusiness,
  Create,
  Update,
  PatchStatus,
  Delete
}