/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

module.exports = (sequelize, Sequelize) => {
    const dbModel = sequelize.define('data_counts', {                         //  "data_couunts" its tabel in database is be define
      id_machine: {
      type: Sequelize.STRING
      },
      count: {
      type: Sequelize.INTEGER
      },
      length: {
      type: Sequelize.FLOAT
      },
    },
    {
      createdAt: false,
      updatedAt: false
    });
    
    //return data
    return dbModel;
  }