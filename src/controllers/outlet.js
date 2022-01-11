const { response } = require('../helpers/response')
const User = require("../models/User.js")
const Business = require("../models/Business.js")

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
  Create
}