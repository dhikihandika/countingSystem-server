/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

module.exports = function(app) {
    const datacount = require('../controller/controller.js');
    const datacountlast = require('../controller/more.controller');
    const { check } = require('express-validator');

    /*
    domain: monitor.parametrik.co.id
    port  : 3500
    */
    //===================================================================================//
    //====================================== RESTful APIs ===============================//
    //=== GET                 ==>  http://localhost:port/get/datacount                ===//
    //=== GET(Spesific)       ==>  http://localhost:port/get/datacount/{id}           ===//
    //=== GET(last rows)      ==>  http://localhost:port/get/datacount/last           ===//
    //=== POST                ==>  http://localhost:port/post/datacount               ===//
    //=== PUT                 ==>  http://localhost:port/put/datacount/{id}           ===//
    //=== DELETE              ==>  http://localhost:port/delete/datacount             ===//
    //===================================================================================//

    app.post('/post/datacount', [ 
        check('id_machine', 'No match data input').isLength({min:0, max:10}),        // Validate 'id_machine' its have Lenght {min:0 and max:10}
        check('count', 'No match data input').isInt(),                               // Validate 'count' its have Integer data type
        check('length', 'No match data input').isFloat(),                            // Validate 'length' its have Float data type
        ], datacount.create);
 
    // Retrieve all data
    app.get('/get/datacount', datacount.findAll);

    // Retrieve a Last rows data
    app.get('/get/datacount/last', datacountlast.findAll);
 
    // Retrieve a single data by Id
    app.get('/get/datacount/:datacountId', datacount.findByPk);

    // Update a data with Id
    app.put('/put/datacount/:datacountId', [ 
        check('id_machine', 'No match data input').isLength({min:0, max:10}),        // Validate 'id_machine' its have Lenght {min:0 and max:10}
        check('count', 'No match data input').isInt(),                               // Validate 'count' its have Integer data type
        check('length', 'No match data input').isFloat(),                            // Validate 'length' its have Float data type
        ], datacount.update);
 
    // Delete a data with Id
    app.delete('/delete/datacount/:datacountId', datacount.delete);

}