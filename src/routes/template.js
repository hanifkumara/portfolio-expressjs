const express = require('express')
const Route = express.Router()
const { AuthEmail } = require('../controllers/template') 

Route
  .get('/auth-email', AuthEmail)

const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps