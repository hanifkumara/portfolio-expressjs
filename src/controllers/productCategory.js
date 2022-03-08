const  { response } = require('../helpers/response')
const ProductCategory = require('../models/ProductCategory')

const FindAll = async (req, res, next) => {
  try {
  
    const resProductCategory = await ProductCategory.findAll()
    if(!resProductCategory) return response(res, 500, null, {message: "ProductCategory not Found"})
    
    return response(res, 200, {result: resProductCategory}, null)

  } catch (error) {
    return next(error)
  }
}

const FindAllByOutlet = async (req, res, next) => {
  try {
    const { businessId } = req
    const { outletId } = req.body
  
    const resProductCategory = await ProductCategory.findAll({
      where: {outletId, businessId}
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with outletId ${outletId} not Found`})
    
    return response(res, 200, {result: resProductCategory}, null)

  } catch (error) {
    return next(error)
  }
}

const FindAllByBusiness = async (req, res, next) => {
  try {
    const { businessId } = req
  
    const resProductCategory = await ProductCategory.findAll({
      where: {businessId}
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with outletId ${businessId} not Found`})
    
    return response(res, 200, {result: resProductCategory}, null)

  } catch (error) {
    return next(error)
  }
}

const FindById = async (req, res, next) => {
  try {
  
    const {id} = req.params

    const resProductCategory = await ProductCategory.findOne({
      where: { id }
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with id ${id} not found`})
    
    return response(res, 200, {result: resProductCategory}, null)

  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
  
    const { 
      outletId,
      name,
      status
    } = req.body


    const { businessId } = req

    const dataSend = {
      businessId,
      outletId,
      name,
      status
    }

    // const resProductCategory = 'Bismillah, testing'
    const resProductCategory = await ProductCategory.create(dataSend)
    return response(res, 200, {result: resProductCategory}, null)
  } catch (error) {
    return next(error)
  }
}

const Update = async (req, res, next) => {
  try {
  
    const { 
      name
    } = req.body

    const { id } = req.params

    const resProductCategory = await ProductCategory.findOne({
      where: { id }
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with id ${id} not found`})

    resProductCategory.name = name

    await resProductCategory.save()

    return response(res, 200, {result: resProductCategory}, null)
  } catch (error) {
    return next(error)
  }
}

const PatchStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const resProductCategory = await ProductCategory.findOne({
      where: { id }
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with id ${id} not found`})

    resProductCategory.status = status

    await resProductCategory.save()

    return response(res, 200, {result: resProductCategory}, null)
  } catch (error) {
    return next(error)
  }
}

const Delete = async (req, res, next) => {
  try {
  
    const {id} = req.params

    const resProductCategory = await ProductCategory.findOne({
      where: { id }
    })
    if(!resProductCategory) return response(res, 500, null, {message: `ProductCategory with id ${id} not found`})
    
    await resProductCategory.destroy()

    return response(res, 200, {result: resProductCategory}, null)

  } catch (error) {
    return next(error)
  }
}

module.exports = {
  FindAll,
  FindAllByOutlet,
  FindAllByBusiness,
  FindById,
  Create,
  Update,
  PatchStatus,
  Delete
}