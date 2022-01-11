const express = require('express')
const Route = express.Router()
const { Create } = require('../controllers/business')

Route
  .post('/', Create)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps