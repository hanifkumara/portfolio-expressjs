const express = require('express')
const Route = express.Router()
const { FindAll, FindAllByOutlet, FindAllByBusiness, FindById, Create, Update, Delete } = require('../controllers/productCategory')

Route
  .get('/', FindAll)
  .get('/by-outlet', FindAllByOutlet)
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