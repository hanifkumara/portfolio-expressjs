const express = require('express')
const Route = express.Router()
const { registerUser, loginUser, findAll, registerBusinessAccount } = require('../controllers/auth')

Route
  .get('/', findAll)
  .post('/register-business-account', registerBusinessAccount)
  .post('/register-user', registerUser)
  .post('/login-user', loginUser)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps