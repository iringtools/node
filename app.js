var oraAttrs = {
    provider      : "ora",
    user          : "node",
    password      : "node",
    connectString : "localhost/xe"
  }

var oraQuery = "SELECT * FROM Test";

var sqlAttrs = {
    provider      : "sql",
    user          : "node",
    password      : "node",
    server        : "localhost\\SQLEXPRESS",
    database      : "node"
  }
var sqlQuery = "SELECT * FROM dbo.Test"

var db = require('./oradatabase.js');
var config = oraAttrs;
var q = oraQuery;

db.init(config)
.then(function() {
    db.connect()
    .then(function() {
        db.query(q)
        .then(function(recordset) {
            console.dir(recordset);
        }).catch(function(err) {
            if (err) { console.error(err) }
        });
    }).catch(function(err) {
        if (err) { console.error(err) }
    });
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