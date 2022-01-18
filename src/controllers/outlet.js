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

const Create = async (req, res, next) => {
  try {
    // const {
    //   name,
    //   type,
    //   address,
    //   phoneNumber,
    //   status
    // }
    // const {myId} = req

    // const business = await Business.findOne({
    //   where: {

    //   }
    // })

    // Business
    return response(res, 201, {result: {message: "Hebat Menn"}}, null)
  } catch (error) {
    return next(error)
  }
}
module.exports = {
  FindAll,
  Create
}