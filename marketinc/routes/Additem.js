var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://sanjay:sanjay@marketinc.qu9xr.mongodb.net/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Sales");
      var myobj = {
        emailtime:req.body.emailtime,
        clientemail:req.body.clientemail,
        item:req.body.itemdescription,
        model:req.body.model,
        brand:req.body.brand,
        quantity:req.body.quantity,
        unit:req.body.unit,
        month:req.body.month,
        client:req.body.clientrfq,
        commonsno:req.body.commonsno,
        commonenquirypouniqueid:req.body.commonenquirypouniqueid,
        commontotalitems:req.body.commontotalitems,
        commonitemno:req.body.commonitemno,
        salesselectcompany:req.body.salesselectcompany,
        salesemailreceipttime:req.body.salesemailreceipttime,
        salesclientemail:req.body.salesclientemail,
        commonitemdescription:req.body.commonitemdescription,
        commonspecsmodelno:req.body.commonspecsmodelno,
        commonbrand:req.body.commonbrand,
        commonqtyrequired:req.body.commonqtyrequired,
        salesclientrfqno:req.body.salesclientrfqno,
        salesemailstatus:req.body.salesemailstatus,
        salesquoteregretdate:req.body.salesquoteregretdate,
        salesenquiryregret:req.body.salesenquiryregret,
        salesstatus:req.body.salesstatus,
        modeofsalespowithoutenqnquiry:req.body.modeofsalespowithoutenqnquiry,
        authorizedbysalespowithoutenquiry:req.body.authorizedbysalespowithoutenquiry,
        statusformalsalesporecieved:req.body.statusformalsalesporecieved,
        salesformalponumber:req.body.salesformalponumber,
        salesformalpoissuedate:req.body.salesformalpoissuedate,
        salesmaterialdeliveryduedateonpo:req.body.salesmaterialdeliveryduedateonpo,
        salesmaterialdespatchBillingdate:req.body.salesmaterialdespatchBillingdate,
        quotationmanualrates:req.body.quotationmanualrates,
        quotationmanualpurchasetype:req.body.quotationmanualpurchasetype,
        quotationmanualdiscount:req.body.quotationmanualdiscount,
        quotationmanualgst:req.body.quotationmanualgst,
        quotationmanualstockstatus:req.body.quotationmanualstockstatus,
        salespaymentcreditnoofdays:req.body.salespaymentcreditnoofdays,
        purchaseratestatusornotavailableregretreason:req.body.purchaseratestatusornotavailableregretreason,
        salesstatuscheck:req.body.salesstatuscheck,
        modeofsalespowithoutenquiry:req.body.modeofsalespowithoutenquiry,
        authorizedbysalespowithoutenquiry:req.body.authorizedbysalespowithoutenquiry,
        statusformalsalesporecieved:req.body.statusformalsalesporecieved,
        salesformalponumber:req.body.salesformalponumber,
        salesformalpoissuedate:req.body.salesformalpoissuedate,
        salesmaterialdeliveryduedateonpo:req.body.salesmaterialdeliveryduedateonpo,
        salesmaterialdespatchbillingdate:req.body.salesmaterialdespatchbillingdate,
        quotationmanualpurchasetype:req.body.quotationmanualpurchasetype,
        quotationmanualrates:req.body.quotationmanualrates,
        quotationmanualdiscount:req.body.quotationmanualdiscount,
        quotationmanualgst:req.body.quotationmanualgst,
        quotationmanualstockstatus:req.body.quotationmanualstockstatus,
        salespaymentcreditnoofdays:req.body.salespaymentcreditnoofdays,
        purchaseratesstatus:req.body.purchaseratesstatus,
        salesformalpostatuscheck:req.body.salesformalpostatuscheck,
        salesregretnoofitemsfromtotalitems:req.body.salesregretnoofitemsfromtotalitems
      };
      dbo.collection("sales report").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
});

module.exports = router;
