const express = require('express')
const Route = express.Router()
const { Create, AllOutlets } = require('../controllers/business')

Route
  .get('/all-outlets', AllOutlets)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps