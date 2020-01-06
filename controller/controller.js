/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

const db = require('../config/config.js');
const DataCount = db.dataCountMachine;                                   // "db.dataCountMachine" take from ../models/model.js
const { validationResult } = require('express-validator');  

//==============================================================================================================================================//
//---------------------------------------------------- POST a datacount to database ------------------------------------------------------------//
//==============================================================================================================================================//
exports.create = (req, res) => {  
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
 }
  // Save to MySQL database 
  DataCount.create({ 
    id_machine: req.body.id_machine,
    count: req.body.count,
    length: req.body.length
  }).then(datacount => {    
    // Send created datacount to client
    // res.json({
    //   "Message" : "Created data success",
    //   "item" : datacount
    // });
    res.send(datacount);
    return;
  });
  //catch error here
};
 

//==============================================================================================================================================//
// -------------------------------------------------------- GET all datacount ------------------------------------------------------------------//
//==============================================================================================================================================//
exports.findAll = (req, res) => {
  DataCount.findAll().then(datacount => {
    //Send all datacount to Client
    //let name="data";
    //let tick=JSON.stringify(name);
    //let tack=JSON.stringify(datacount)
    //res.send("{" + tick + ":" + tack + "}");
    res.send(datacount);
  });
};
 

//==============================================================================================================================================//
// ------------------------------------------------- GET spesific a datacount by Id ------------------------------------------------------------//
//==============================================================================================================================================//
exports.findByPk = (req, res) => {  
  DataCount.findByPk(req.params.datacountId).then(datacount => {
    res.send(datacount);
  })
};
 

//==============================================================================================================================================//
//-------------------------------------------------------- UPDATE a datacount ------------------------------------------------------------------//
//==============================================================================================================================================//
exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
  }
  const id = req.params.datacountId;
  DataCount.update( {
    id_machine: req.body.id_machine,
    count: req.body.count,
    length: req.body.length
   }, 
        { where: {id: req.params.datacountId} }
           ).then(() => {
           res.status(200).send("updated successfully a datacount  with id = " + id);
    });
};
 

//==============================================================================================================================================//
//--------------------------------------------------- Delete a datacount by Id -----------------------------------------------------------------//
//==============================================================================================================================================//
exports.delete = (req, res) => {
  const id = req.params.datacountId;
  DataCount.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a datacount with id = ' + id);
  });
};