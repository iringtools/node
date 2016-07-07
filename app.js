var oraAttrs = {
    provider      : "ora",
    user          : "dbkr_25111_317",
    password      : "dbkr_25111_317",
    connectString : "(description = (address_list = (address = (protocol = tcp)(host = ASHS91133.amers.ibechtel.com)(port = 1521)))(CONNECT_DATA = (SID = ASHDBKRO)(SERVER=DEDICATED)))"
  }

var oraQuery = "SELECT * FROM T_METADATA";

var sqlAttrs = {
    provider      : "sql",
    user          : "iRINGLAB2Config",
    password      : "iRINGLAB2Config",
    server        : "CHISD91058\\MULTAPP",
    database      : "iRINGLAB2Config"
  }

var sqlQuery = "SELECT * FROM dbo.Sites"

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