const { response } = require('../helpers/response')
const { sendEmail } = require('../config/sendEmail')
const ejs = require('ejs')
const jwt = require('jsonwebtoken')

const SendText = async (req, res, next) => {
  try {
    const { to, businessId } = req.body
    const file = process.cwd() + '/src/templates/template-verify-email.ejs'

    const token = jwt.sign({businessId}, process.env.SECRET_KEY, { expiresIn: '5h' });

    console.log("token =====>", token)

    const dataHtml = await ejs.renderFile(file, {
      thic_image: 'https://www.freeiconspng.com/uploads/success-icon-10.png',
      header: false,
      footer: false,
      url_verify: `${process.env.FRONTEND_URL}/verify-email/${token}`
    })

    const data = {
      from: process.env.SMTP_EMAIL,  // sender address
      to,   // list of receivers
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      html: dataHtml
    }
    await sendEmail(data)
    return response(res, 200, {message: 'Bismillah, send email'}, null)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  SendText
}