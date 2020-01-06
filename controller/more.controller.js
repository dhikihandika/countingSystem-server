const db = require('../config/config.js');
const DataCount = db.dataMachine1;                                   // "db.vawt" take from ./models/vawt.js

// ---------------------------------------------------------- Find one last in the row -----------------------------------------------------------------//
exports.findAll = (req, res) => [
  DataCount.findAll({
      limit: 1,                                                                 
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [ [ 'createdAt', 'DESC' ]]                                         // Limit from DESC
    }).then(datacountlast => {
      res.send(datacountlast);
    })
  ]