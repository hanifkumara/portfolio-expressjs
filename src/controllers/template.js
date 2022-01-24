const { response } = require('../helpers/response')
const ejs = require('ejs')
const path = require('path')

const AuthEmail = async (req, res, next) => {
  try {
    const file = process.cwd() + '/src/templates/template-auth-email.ejs'
    res.render(file, {
      thic_image: '/images/output-onlinepngtools.png',
      header: false,
      footer: false
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  AuthEmail
}