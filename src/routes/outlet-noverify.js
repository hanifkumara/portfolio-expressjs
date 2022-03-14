const express = require('express')
const Route = express.Router()
const { FindAll, FindAllByBusiness, FindById, Create, Update, PatchStatus, Delete } = require('../controllers/outlet')
const { uploadMulter } = require('../middleware/upload')

Route
  .get('/:id', FindById)

const routeProps = {
  Route,
  auth: true,
};

module.exports = routeProps