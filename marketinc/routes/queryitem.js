var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://sanjay:sanjay@marketinc.qu9xr.mongodb.net/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Sales");
        /*Return only the documents with the address "Park Lane 38":*/
        var query = {month:"january"};
        dbo.collection("sales report").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result)
          db.close();
        })
    });
});

module.exports = router;
