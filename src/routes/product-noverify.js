const express = require('express')
const Route = express.Router()
const { FindAllOnlineStore, FindProductId } = require('../controllers/product')

Route
  .get('/online-store', FindAllOnlineStore)
  .get('/find-product/:id', FindProductId)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps