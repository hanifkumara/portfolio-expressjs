const  { response } = require('../helpers/response')
const Product = require('../models/Product')
const Outlet = require('../models/Outlet')
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
      include: [{ model: Outlet}]
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
      status
    } = req.body

    console.log("req =====>", req)

    const { businessId } = req

    const outletIds = outletId ? JSON.parse(outletId) : null

    for(const outletId of outletIds) {
      const dataSend = {
        businessId,
        outletId,
        name,
        productCategoryId,
        price,
        description,
        status
      }
      if (req.file) {
        dataSend.image = req.file.filename;
      }
      console.log('dataSend =====>', dataSend)
      await Product.create(dataSend)
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
      image,
      description,
      status
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

    await resProduct.save()

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

    return response(res, 200, {result: resProduct}, null)

  } catch (error) {
    return next(error)
  }
}

module.exports = {
  FindAll,
  FindAllByBusiness,
  FindById,
  Create,
  Update,
  PatchStatus,
  Delete
}