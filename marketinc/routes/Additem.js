var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://sanjay:sanjay@marketinc.qu9xr.mongodb.net/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Sales");
      var myobj = {emailtime:req.body.emailtime,clientemail:req.body.clientemail,item:req.body.itemdescription,model:req.body.brand,quantity:req.body.quantity,unit:req.body.unit,month:req.body.month,client:req.body.clientrfq};
      dbo.collection("sales report").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
});

module.exports = router;
