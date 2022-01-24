const express = require('express')
const Route = express.Router()
const { FindAll, FindAllByBusiness, FindById, Create, Update, Delete } = require('../controllers/outlet')

Route
  .get('/', FindAll)
  .get('/by-business', FindAllByBusiness)
  .get('/:id', FindById)
  .post('/', Create)
  .put('/:id', Update)
  .delete('/:id', Delete)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps