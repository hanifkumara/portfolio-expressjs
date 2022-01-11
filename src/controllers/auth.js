const { response } = require('../helpers/response')
const User = require("../models/User.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
  try {
    const {email, password} = req.body

    const existingUser = await User.findOne({
      where: {
        email
      }
    })

    if(existingUser) return response(res, 401, null, {message: `Email ${email} already in use`})

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    await User.create({
      email,
      password: hash
    })
    return response(res, 201, {result: {email}}, null)
  } catch (error) {
    return next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({
      where: {
        email
      }
    })

    if(!user) return response(res, 401, null, { message: 'Email not Found!!' })

    bcrypt.compare(password, user.password, function (err, resCheck) {
      if (!resCheck) return response(res, 401, null, { message: 'Password Wrong!!' })

      const payload = {
        userId: user.id,
        email: user.email
      }

      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' });
      // jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' }, function (err, token) {
      //   if(err) {
      //     console.log("err jwt sign =====>", err)
      //   } else {
      //     user.token = token
      //   }
      // })

      if(!token) return response(res, 401, null, { message: "Something wen't wrong at JWT Signature" })

      delete user.dataValues.password
      user.dataValues.token = token

      return response(res, 200, user, null)
    })
  } catch (error) {
    return next(error)
  }
}

const findAll = async (req, res, next) => {
  try {
    
  // const {}

  //   const where = {}


    const data = await User.findAll()
    return response(res, 200, data, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  register,
  login,
  findAll
}