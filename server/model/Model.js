const Sequelize = require('sequelize')
const db = require('./_db');

const Model = db.define('Models', {
  data: Sequelize.STRING
})

module.exports = Model;
