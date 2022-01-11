const express = require('express')
const Route = express.Router()
const { register, login, findAll } = require('../controllers/auth')

Route
  .get('/', findAll)
  .post('/register', register)
  .post('/login', login)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps