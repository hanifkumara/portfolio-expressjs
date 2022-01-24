const express = require('express')
const Route = express.Router()
const { SendText } = require('../controllers/sendEmail')

Route
  .post('/', SendText)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps