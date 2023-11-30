require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOSTNAME,
    port: process.env.DEV_DB_PORT || 1433,
    logging: console.log,
    dialect: "mssql",
    dialectOptions: {
      options: {
        requestTimeout: 300000,
        connectTimeout: 60000,
        useUTC: false,
        timezone: "-5:00",
      },
    },
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOSTNAME,
    port: process.env.TEST_DB_PORT || 1433,
    logging: console.log,
    dialect: "mssql",
    dialectOptions: {
      options: {
        requestTimeout: 300000,
        connectTimeout: 60000,
        useUTC: false,
        timezone: "-5:00",
      },
    },
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT || 1433,
    logging: console.log,
    dialect: "mssql",
    dialectOptions: {
      options: {
        requestTimeout: 300000,
        connectTimeout: 60000,
        useUTC: false,
        timezone: "-5:00",
      },
    },
  },
};
