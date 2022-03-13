const express = require('express')
const Route = express.Router()
const { FindAll, FindById, FindAllByBusiness, Create } = require('../controllers/transaction') 

Route
  .get('/', FindAll)
  .get('/by-business', FindAllByBusiness)
  .get('/:id', FindById)
  .post('/', Create)


const routeProps = {
  Route,
  auth: false,
};

module.exports = routeProps