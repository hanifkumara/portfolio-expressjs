const express = require('express')
const Route = express.Router()
const { Create, FindAllByBusiness } = require('../controllers/stock')

Route
  .get('/', FindAllByBusiness)
  .post('/', Create)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps