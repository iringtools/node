var oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;

var connectionPool = null;
var oraDatabaseManager = function() {

    function init(connAttrs) {
        return oracledb.createPool(connAttrs)
            .then( function(pool){
                connectionPool = pool;
            });
    };

    function query(query) {
        return connectionPool.getConnection()
            .then(function(connection){
                return  connection.execute(query, [], {})
                    .then(function(rows){
                        connection.close(function(err){
                            if (err) { console.error(err) }
                        });
                        return rows;
                    })
                    .catch(function(err){
                        if (err) { console.error(err) }
                        connection.close(function(err){
                            if (err) { console.error(err) }
                        });
                    });
            })
            .catch(function(err){
                if (err) { console.error(err) }
            });
    };

    //interface
    return {
        init: init,
        query: query
    };
};

module.exports = new oraDatabaseManager();