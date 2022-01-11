const express = require('express')
const Route = express.Router()
const { Create } = require('../controllers/owner')

Route
  .post('/', Create)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps