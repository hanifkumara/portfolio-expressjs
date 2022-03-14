const express = require('express')
const Route = express.Router()
const { FindById, Create, AllOutlets } = require('../controllers/business');

Route
  .get('/all-outlets', AllOutlets)
  .get('/:id', FindById)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps