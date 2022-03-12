const express = require('express')
const Route = express.Router()
const { Create, MyBusiness, UpdateBusiness, UpdateBusinessAccount } = require('../controllers/business')

Route
  .get('/my-business', MyBusiness)
  .put('/update-business', UpdateBusiness)
  .patch('/update-business-account', UpdateBusinessAccount)
  .post('/', Create)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps