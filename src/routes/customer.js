const express = require('express')
const Route = express.Router()
const { Register, Login } = require('../controllers/customer')

Route
  .post('/register', Register)
  .post('/login', Login)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps