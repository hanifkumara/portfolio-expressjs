const express = require('express')
const Route = express.Router()
const { FindAll, FindAllByBusiness, FindById, Create, Update, Delete } = require('../controllers/outlet')
const { uploadMulter } = require('../middleware/upload')

Route
  .get('/', FindAll)
  .get('/by-business', FindAllByBusiness)
  .get('/:id', FindById)
  .post('/', uploadMulter.single('image'), Create)
  .put('/:id', Update)
  .delete('/:id', Delete)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps