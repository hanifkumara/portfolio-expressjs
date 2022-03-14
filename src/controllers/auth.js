const { response } = require('../helpers/response')
const User = require("../models/User.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BusinessAccount = require('../models/BusinessAccount');
const Business = require('../models/Business');

const registerUser = async (req, res, next) => {
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

const loginUser = async (req, res, next) => {
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

const registerBusinessAccount = async (req, res, next) => {
  try {
    const {name, email, password, phoneNumber} = req.body

    const existingBusinessAccount = await BusinessAccount.findOne({
      where: {
        email
      }
    })

    if(existingBusinessAccount) return response(res, 401, null, {message: `Email ${email} already in use`})

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const resCreateBusinessAccount = await BusinessAccount.create({
      email,
      password: hash,
      isVerified: 1
    })

    const resCreateBusiness = await Business.create({
      id: resCreateBusinessAccount.id,
      name,
      phoneNumber,
      businessAccountId: resCreateBusinessAccount.id
    })

    resCreateBusinessAccount.businessId = resCreateBusiness.id
    await resCreateBusinessAccount.save()
    delete resCreateBusinessAccount.dataValues.password

    return response(res, 201, resCreateBusinessAccount, null)
  } catch (error) {
    return next(error)
  }
}

const loginBusinessAccount = async (req, res, next) => {
  try {
    const {email, password} = req.body
    const businessAccount = await BusinessAccount.findOne({
      where: {
        email
      }
    })

    if(!businessAccount) return response(res, 401, null, { message: 'Email not Found!!' })

    bcrypt.compare(password, businessAccount.password, function (err, resCheck) {
      if (!resCheck) return response(res, 401, null, { message: 'Password Wrong!!' })

      const payload = {
        businessId: businessAccount.id,
        email: businessAccount.email
      }

      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' });
      // jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' }, function (err, token) {
      //   if(err) {
      //     console.log("err jwt sign =====>", err)
      //   } else {
      //     businessAccount.token = token
      //   }
      // })

      if(!token) return response(res, 401, null, { message: "Something wen't wrong at JWT Signature" })

      delete businessAccount.dataValues.password
      businessAccount.dataValues.token = token

      return response(res, 200, businessAccount, null)
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

const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
          return response(res, 401, null, { message: 'Invalid Token' })
        } else if (err.name === 'TokenExpiredError') {
          return response(res, 401, null, { message: 'Token Expired' })
        }
      }
      const dataBusinessAccount = await BusinessAccount.findOne({
        where: {
          businessId: decoded.businessId
        }
      })
      dataBusinessAccount.isVerified = true
      await dataBusinessAccount.save()
      console.log("decoded ======>", decoded)
    })
    return response(res, 200, null, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  registerUser,
  loginUser,
  registerBusinessAccount,
  loginBusinessAccount,
  findAll,
  verifyEmail
}