const { response } = require('../helpers/response')
const  Business = require("../models/Business")
const bcrypt = require("bcryptjs")
const Outlet = require('../models/Outlet')

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

    const { outletName } = req.query

    const whereOutlet = {}
    outletName ? (whereOutlet.name = { [Sequelize.Op.like]: `%${outletName}%` }) : '';

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

module.exports = {
  Create,
  AllOutlets
}