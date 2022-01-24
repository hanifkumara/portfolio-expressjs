const express = require('express')
const Route = express.Router()
const { registerUser, loginUser, findAll, registerBusinessAccount, loginBusinessAccount, verifyEmail } = require('../controllers/auth')

Route
  .get('/', findAll)
  .post('/register-business-account', registerBusinessAccount)
  .post('/login-business-account', loginBusinessAccount)
  .post('/register-user', registerUser)
  .post('/login-user', loginUser)
  .post('/verify-email', verifyEmail)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps