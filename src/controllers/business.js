const { response } = require('../helpers/response')
const  Business = require("../models/Business")
const bcrypt = require("bcryptjs")
const Outlet = require('../models/Outlet')
const BusinessAccount = require('../models/BusinessAccount')

const MyBusiness = async (req, res, next) => {
  try {
    const { businessId } = req

    const resBusiness = await Business.findOne({
      where: {
        id: businessId
      },
      include:[
        {
          model: BusinessAccount
        }
      ]
    })

    return response(res, 200, {data: resBusiness}, null)
  } catch (error) {
    return next(error)
  }
}

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

const AllOutlets = async (req, res, next) => {
  try {

    const resBusiness = await Business.findAll({
      include: [
        {model: Outlet}
      ]
    })

    console.log('resBusiness =====>', resBusiness)

    const resBusinessOutlet = []

    resBusiness.map(value => {
      if(value.Outlets) {
        value.Outlets.map(value2 => {
          if (value2.status) {
            resBusinessOutlet.push(
              { 
                businessId: value.id, 
                businessName: value.name, 
                outletId: value2.id, 
                outletName: value2.name, 
                phoneNumber: value2.phone_number, 
                address: value2.address, 
                image: value.image, 
                imageOutlet: value2.image
                // openDays: value2?.open_days, 
                // openHour: value2?.open_hour, 
                // closeHour: value2?.close_hour, 
                // vacation: value2.vacation 
              }
            )
          }
        })
      }
    })

    return response(res, 201, {data: resBusinessOutlet}, null)
  } catch (error) {
    return next(error)
  }
}


const UpdateBusiness = async (req, res, next) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      nameOnKtp,
      noKtp
    } = req.body
    const { businessId } = req

    const resBusiness = await Business.findOne({
      where: {id: businessId}
    })

    if(!resBusiness) return response(res, 500, null, {message: `Business with id ${businessId} not found`})

    resBusiness.name = name
    resBusiness.address = address
    resBusiness.phoneNumber = phoneNumber
    resBusiness.nameOnKtp = nameOnKtp
    resBusiness.noKtp = noKtp
    
    await resBusiness.save()

    // Business
    return response(res, 201, {result: resBusiness}, null)
  } catch (error) {
    return next(error)
  }
}
const UpdateBusinessAccount = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body
    const { businessId } = req

    console.log('req.body ====>', req.body)

    const existingBusinessAccount = await BusinessAccount.findOne({
      where: {
        email
      }
    })

    if(existingBusinessAccount && existingBusinessAccount.id !== businessId) return response(res, 401, null, {message: `Email ${email} already in use`})

    const resBusinessAccount = await BusinessAccount.findOne({
      where: {id: businessId}
    })

    if(!resBusinessAccount) return response(res, 500, null, {message: `Business Account with id ${businessId} not found`})

    resBusinessAccount.email = email

    if(password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      resBusinessAccount.password = hash
    }

    await resBusinessAccount.save()

    // Business
    return response(res, 201, {result: resBusinessAccount}, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  UpdateBusiness,
  UpdateBusinessAccount,
  MyBusiness,
  Create,
  AllOutlets
}