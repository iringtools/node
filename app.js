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

var db = require('./database.js');
var config = oraAttrs;
var q = oraQuery;

var sessions = [
    { sqlAttrs, sqlQuery},
    { oraAttrs, oraQuery}
];

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