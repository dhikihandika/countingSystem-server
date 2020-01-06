/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {         
  host: env.host,
  dialect: env.dialect,
  //operatorsAliases:false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

sequelize.authenticate().then(()=>{
  console.log('Connection to database sucessfully!');
}).catch(err => {
  console.error('Unable connection to the database: ', err);
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.dataCountMachine = require('../models/model.js')(sequelize, Sequelize);               // "db.vawt" send to ./controller/vawtData.controller.js
 
module.exports = db;