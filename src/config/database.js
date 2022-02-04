const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2')

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const db = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2
})

module.exports = db