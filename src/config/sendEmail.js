const nodemailer = require('nodemailer');

const sendEmail = async(data) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });

    const info = await transporter.sendMail(data)
    console.log("info =======================>", info)
    return {status: true, info}
  } catch (error) {
    console.log("error =======================>", error)
    return {status: false, error}
  }
}

module.exports = {
  sendEmail
}