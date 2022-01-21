const { response } = require('../helpers/response')
const  Business = require("../models/Business")
const bcrypt = require("bcryptjs")

const Create = async (req, res, next) => {
  try {
    const { ownerId, name, type, address, phoneNumber, status } = req.body
    // const {myId} = req

    const dataBusiness = await Business.create({
      // userId: myId,
      ownerId,
      name,
      type,
      address,
      phoneNumber,
      status
    })

    return response(res, 201, {
      data: dataBusiness,
      message: "successfully created a POS account"
    }, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  Create
}