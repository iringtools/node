var mssql = require('mssql');
var connection = null;
var oraDatabaseManager = function() {

    function init(connAttrs) {
        connection = new mssql.Connection(connAttrs);
        return new Promise(function(resolve) { resolve(); });
    };

    function query(query) {
        return connection.connect()
            .then(function(){
                var request = connection.request();
                return request.query(query)
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