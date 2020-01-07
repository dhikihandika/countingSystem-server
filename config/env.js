/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

const env = {
    // use database in remote server
    database: 'db_countsys',
    username: 'komatsu',
    password: 'komatsu123456789',
    host: 'monitor.parametrik.co.id',
    dialect: 'mysql',

    // Local database
    // database: 'db_countsys',
    // username: 'root',
    // password: '',
    // host: 'localhost',
    // dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;