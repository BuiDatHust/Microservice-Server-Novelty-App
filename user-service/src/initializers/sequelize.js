const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')
const database = require('../configs/database')
const fs = require('fs')
const path = require('path')
dotenv.config()

const env = process.env.NODE_ENV
const config = database[env]

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config)

const createAssociation = () => {
  const db = {}
  const modelDir = path.join(__dirname, '../models')
  fs.readdirSync(modelDir)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== 'index.js' &&
        file.slice(-3) === '.js'
      )
    })
    .forEach((file) => {
      const modelExport = require(path.join(modelDir, file))
      let model
      if (modelExport) {
        model = Object.values(modelExport)[0]
        db[Object.keys(modelExport)[0]] = model
      }
    })

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      console.log(11)
      db[modelName].associate(db)
    }
  })
}

const connectToMysql = () => {
  sequelize
    .authenticate()
    .then(async () => {
      console.log('Connection mysql has been established successfully.')
    })
    .catch((error) => {
      console.error('Unable to connect to the database: ', error)
    })
}

module.exports = {
  connectToMysql,
  createAssociation,
  sequelize,
}
