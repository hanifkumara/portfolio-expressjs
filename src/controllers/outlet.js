const { response } = require('../helpers/response')
const User = require("../models/User.js")
const Business = require("../models/Business.js")
const Outlet = require("../models/Outlet.js")

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

    const { businessId } = req
    const resOutlet = await Outlet.findAll({
      where: {businessId}
    })

    if(!resOutlet) return response(res, 500, null, {message: "Outlet not Found"})

    return response(res, 201, {result: resOutlet}, null)
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

    return response(res, 201, {result: resOutlet}, null)
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
      image,
      status
    } = req.body
    const { businessId } = req

    const dataSend = {
      businessId,
      name,
      address,
      phoneNumber,
      image,
      status
    }

    const resOutlet = await Outlet.create(dataSend)

    // Business
    return response(res, 201, {result: resOutlet}, null)
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
      image,
      status
    } = req.body
    const { id } = req.params

    const resOutlet = await Outlet.findOne({
      where: {id}
    })

    if(!resOutlet) return response(res, 500, null, {message: `Outlet with id ${id} not found`})
    
    const dataSend = {
      name,
      address,
      phoneNumber,
      image,
      status
    }

    resOutlet.name = name
    resOutlet.address = address
    resOutlet.phoneNumber = phoneNumber
    resOutlet.image = image
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
  Delete
}