/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

module.exports = (sequelize, Sequelize) => {
    const dbModel = sequelize.define('data_counts', {                         //  "data_counts" its tabel in database is be define
      id_controller: {
      type: Sequelize.STRING
      },
      id_machine: {
      type: Sequelize.STRING
      },
      clock: {
      type: Sequelize.INTEGER
      },
      count: {
      type: Sequelize.INTEGER
      },
      length: {
      type: Sequelize.FLOAT
      },
      status: {
      type: Sequelize.INTEGER
      }
    },
    {
      timestamp: false,
      createdAt: false,
      updatedAt: false
    });
    
    //return data
    return dbModel;
  }