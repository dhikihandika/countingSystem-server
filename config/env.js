/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

const env = {
    database: 'db_countsys',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;