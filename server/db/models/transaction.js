const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  action: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Transaction
