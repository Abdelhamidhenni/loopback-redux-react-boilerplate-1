/* This file overrides datasources.json with some environment variable */

require('dotenv').config();

module.exports = {
  db: {
    connector: 'mongodb',
    hostname: process.env.DB_HOST,
    port: 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'supportdb',
  },
};
