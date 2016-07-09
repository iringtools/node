var oraAttrs = {
    provider      : "ora",
    user          : "dbkr_25111_317",
    password      : "dbkr_25111_317",
    connectString : "(description = (address_list = (address = (protocol = tcp)(host = ASHS91133.amers.ibechtel.com)(port = 1521)))(CONNECT_DATA = (SID = ASHDBKRO)(SERVER=DEDICATED)))"
  }

var oraQuery = "SELECT * FROM T_METADATA";

var sqlAttrs = {
    provider      : "sql",
    user          : "node",
    password      : "node",
    server        : "localhost\\SQLEXPRESS",
    database      : "node"
  }

var db = require('./sqldatabase.js');

var sqlQuery = "SELECT * FROM dbo.Test"

db.init(sqlAttrs)
.then(function() {
    db.connect()
    .then(function() {
        db.query(sqlQuery)
        .then(function(recordset) {
            console.dir(recordset);
        }).catch(function(err) {
            if (err) { console.error(err) }
        });
    })
}).catch(function(err) {
    if (err) { console.error(err) }
});

/*
var Database = require("./sqldatabase.js");

var db = new Database(sqlAttrs);

var initTask = db.init(sqlAttrs);

var queryTask = initTask.then(function() {
    db.query(sqlQuery);
})
.then(function(result) {
    console.dir(result);
});
*/

/*
var connAttrs = [ 
    { "attrs" : oraAttrs, "query" : oraQuery },
    { "attrs" : sqlAttrs, "query" : sqlQuery }
];

connAttrs.forEach( function(item) {
    var attrs = item["attrs"];
    var query = item["query"]
    var dbManager = require("./DatabaseManager.js")(attrs);

    var initTask = dbManager.init(attrs);
    
    var queryTask = initTask.then(
        dbManager.query(query)
    );

    queryTask.then(function(rows) {
        if (rows) {
            console.dir(rows);
        }
    });
});
*/