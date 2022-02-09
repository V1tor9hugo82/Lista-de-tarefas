const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Task = db.define('Task', {
  title: {
    Type: DataTypes.STRING,
    required: true
  },
  description: {
    Type: DataTypes.STRING,
    required: true
  },
  done: {
    Type: DataTypes.BOOLEAN,
    required: true
  },
})

module.exports = Task