const dotenv = require('dotenv')
dotenv.config()

const database = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: false,
    //   charset: 'utf8mb4',
    // },
    // define: {
    //   charset: 'utf8mb4',
    //   collate: 'utf8_general_ci',
    // },
    pool: {
      max: 10000,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: (sql, queryObject) => {
      console.log(sql)
    },
  },
  production: {
    username: null,
    password: null,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    replication: {
      read: [
        {
          host: '8.8.8.8',
          username: 'read-1-username',
          password: process.env.READ_DB_1_PW,
        },
        {
          host: '9.9.9.9',
          username: 'read-2-username',
          password: process.env.READ_DB_2_PW,
        },
      ],
      write: {
        host: '1.1.1.1',
        username: 'write-username',
        password: process.env.WRITE_DB_PW,
      },
    },
    // dialectOptions: {
    //   bigNumberStrings: false,
    //   charset: 'utf8mb4',
    // },
    // define: {
    //   charset: 'utf8mb4',
    //   collate: 'utf8_general_ci',
    // },
    pool: {
      max: 10000,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // logging: console.log,
  },
}

module.exports = database
