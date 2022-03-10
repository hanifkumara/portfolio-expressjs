const { response } = require('../helpers/response')
const Customer = require("../models/Customer.js")
const fs = require('fs')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const FindAll = async (req, res, next) => {
  try {
    const resCustomer = await Customer.findAll()

    if(!resCustomer) return response(res, 500, null, {message: "Customer not Found"})

    return response(res, 201, {result: resCustomer}, null)
  } catch (error) {
    return next(error)
  }
}

const FindById = async (req, res, next) => {
  try {
    const { id } = req.params
    const resCustomer = await Customer.findOne({
      where: {id}
    })

    if(!resCustomer) return response(res, 500, null, {message: `Customer with id ${id} not found`})

    return response(res, 201, {result: resCustomer}, null)
  } catch (error) {
    return next(error)
  }
}

const Login = async (req, res, next) => {
  try {
    const {username, password} = req.body

    console.log('username =====>', username)
    console.log('password =====>', password)

    const customer = await Customer.findOne({
      where: {
        username
      }
    })

    if(!customer) return response(res, 401, null, { message: 'Username not Found!!' })

    bcrypt.compare(password, customer.password, function (err, resCheck) {
      if (!resCheck) return response(res, 401, null, { message: 'Password Wrong!!' })

      const payload = {
        customerId: customer.id,
        username: customer.username
      }

      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' });

      if(!token) return response(res, 401, null, { message: "Something wen't wrong at JWT Signature" })

      delete customer.dataValues.password
      customer.dataValues.token = token

      return response(res, 200, customer, null)
    })
  } catch (error) {
    return next(error)
  }
}

const Register = async (req, res, next) => {
  try {
    const {
      username,
      phoneNumber,
      password
    } = req.body

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const dataSend = {
      username,
      phoneNumber,
      password: hash
    }

    const resCustomer = await Customer.create(dataSend)
    return response(res, 201, {result: resCustomer}, null)
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

    const resCustomer = await Customer.findOne({
      where: {id}
    })

    if(!resCustomer) return response(res, 500, null, {message: `Customer with id ${id} not found`})

    resCustomer.name = name
    resCustomer.address = address
    resCustomer.phoneNumber = phoneNumber
    resCustomer.status = status

    await resCustomer.save()

    return response(res, 201, {result: resCustomer}, null)
  } catch (error) {
    return next(error)
  }
}

const Delete = async (req, res, next) => {
  try {
    const { id } = req.params
    const resCustomer = await Customer.findOne({
      where: {id}
    })

    if(!resCustomer) return response(res, 500, null, {message: `Customer with id ${id} not found`})

    await resCustomer.destroy()

    return response(res, 201, {result: resCustomer}, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  FindAll,
  FindById,
  Login,
  Register,
  Update,
  Delete
}