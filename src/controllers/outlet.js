const { response } = require('../helpers/response')
const User = require("../models/User.js")
const Business = require("../models/Business.js")
const Outlet = require("../models/Outlet.js")
const fs = require('fs')
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const IncomingStock = require('../models/IncomingStock')
const OutcomingStock = require('../models/OutcomingStock')
const { Sequelize } = require('sequelize')

const FindAll = async (req, res, next) => {
  try {
    const resOutlet = await Outlet.findAll()

    if(!resOutlet) return response(res, 500, null, {message: "Outlet not Found"})

    return response(res, 201, {result: resOutlet}, null)
  } catch (error) {
    return next(error)
  }
}

const FindAllByBusiness = async (req, res, next) => {
  try {

    const { name } = req.query
    const { businessId } = req

    const where = {}
    name ? (where.name = { [Sequelize.Op.like]: `%${name}%` }) : '';
    businessId ? (where.businessId = { [Sequelize.Op.like]: `%${businessId}%` }) : '';

    const resOutlet = await Outlet.findAll({
      where
    })

    if(!resOutlet) return response(res, 500, null, {message: "Outlet not Found"})

    return response(res, 200, {result: resOutlet}, null)
  } catch (error) {
    return next(error)
  }
}

const FindById = async (req, res, next) => {
  try {
    const { id } = req.params
    const resOutlet = await Outlet.findOne({
      where: {id}
    })

    if(!resOutlet) return response(res, 500, null, {message: `Outlet with id ${id} not found`})

    return response(res, 201, resOutlet, null)
  } catch (error) {
    return next(error)
  }
}

const Create = async (req, res, next) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      status
    } = req.body
    const { businessId } = req

    const dataSend = {
      businessId,
      name,
      address,
      phoneNumber,
      status
    }

    if (req.file) {
      dataSend.image = req.file.filename;
    }

    const resOutlet = await Outlet.create(dataSend)
    // const resOutlet = 'Testing'

    return response(res, 201, {result: resOutlet}, null)
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

    const resOutlet = await Outlet.findOne({
      where: { id }
    })
    if(!resOutlet) return response(res, 500, null, {message: `Outlet with id ${id} not found`})
    
    resOutlet.status = status
    await resOutlet.save()

    return response(res, 200, {result: resOutlet}, null)

  } catch (error) {
    return next(error)
  }
}

const Update = async (req, res, next) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      status
    } = req.body
    const { id } = req.params

    const resOutlet = await Outlet.findOne({
      where: {id}
    })

    if(!resOutlet) return response(res, 500, null, {message: `Outlet with id ${id} not found`})


    if (req.file && resOutlet.image) {
      fs.unlinkSync('images/' + resOutlet.image);
    }
    
    if (req.file) {
      resOutlet.image = req.file.filename;
    }

    resOutlet.name = name
    resOutlet.address = address
    resOutlet.phoneNumber = phoneNumber
    resOutlet.status = status

    await resOutlet.save()

    // Business
    return response(res, 201, {result: resOutlet}, null)
  } catch (error) {
    return next(error)
  }
}

const Delete = async (req, res, next) => {
  try {
    const { id } = req.params
    const resOutlet = await Outlet.findOne({
      where: {id}
    })

    if(!resOutlet) return response(res, 500, null, {message: `Outlet with id ${id} not found`})

    await resOutlet.destroy()
    await Product.destroy({
      where: {
        outletId: id
      }
    })
    await Stock.destroy({
      where: {
        outletId: id
      }
    })
    await IncomingStock.destroy({
      where: {
        outletId: id
      }
    })
    await OutcomingStock.destroy({
      where: {
        outletId: id
      }
    })

    return response(res, 201, {result: resOutlet}, null)
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