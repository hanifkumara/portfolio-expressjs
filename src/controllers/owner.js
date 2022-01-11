const { response } = require('../helpers/response')
const  Owner = require("../models/Owner")
const bcrypt = require("bcryptjs")

const Create = async (req, res, next) => {
  try {
    const { businessId, email, password, verify } = req.body
    const {myId} = req

    const owner = await Owner.findOne({
      where: {
        email
      }
    })

    if (owner) return response(res, 201, null, {message: `Email ${email} already in use`})

    console.log("myId =====>", myId)

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const dataOwner = await Owner.create({
      userId: myId,
      businessId,
      email,
      password: hash,
      verify
    })

    return response(res, 201, {
      data: dataOwner,
      message: "successfully created a POS account"
    }, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  Create
}