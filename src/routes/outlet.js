const express = require('express')
const Route = express.Router()
const { FindAll, Create } = require('../controllers/outlet')

Route
  .get('/', FindAll)
  .post('/', Create)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps