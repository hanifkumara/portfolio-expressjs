const  { response } = require('../helpers/response')
const Product = require('../models/Product')

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
      where: {businessId}
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
      image,
      description,
      status
    } = req.body

    console.log("req =====>", req)

    const { businessId } = req

    const dataSend = {
      businessId,
      outletId,
      name,
      productCategoryId,
      price,
      image,
      description,
      status
    }

    console.log("dataSend =====>", dataSend)

    // const resProduct = 'Bismillah, testing'
    const resProduct = await Product.create(dataSend)
    return response(res, 200, {result: resProduct}, null)
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

    resProduct.outletId = outletId
    resProduct.name = name
    resProduct.productCategoryId = productCategoryId
    resProduct.price = price
    resProduct.image = image
    resProduct.description = description
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
  Delete
}