const { response } = require('../helpers/response')
const ejs = require('ejs')
const path = require('path')
const jwt = require('jsonwebtoken')

const AuthEmail = async (req, res, next) => {
  try {
    const file = process.cwd() + '/src/templates/template-verify-email.ejs'
    res.render(file, {
      thic_image: '/images/output-onlinepngtools.png',
      header: false,
      footer: false,
      url_verify: `${process.env.FRONTEND_URL}`
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  AuthEmail
}