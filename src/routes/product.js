const express = require('express')
const Route = express.Router()
const { FindAll, FindAllByBusiness, FindById, InventoryByBusiness, Create, Update, PatchStatus, Delete } = require('../controllers/product')
const { uploadMulter } = require('../middleware/upload')

Route
  .get('/', FindAll)
  .get('/by-business', FindAllByBusiness)
  .get('/inventory/by-business', InventoryByBusiness)
  .get('/:id', FindById)
  .post('/', uploadMulter.single('image'), Create)
  .put('/:id', uploadMulter.single('image'), Update)
  .patch('/status/:id', PatchStatus)
  .delete('/:id', Delete)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps