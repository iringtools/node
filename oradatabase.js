module.exports = (function () {

    var oracledb = require("oracledb");
    var _pool = null;
    var _connection = null;

    function init(config) {

        return new oracledb.createPool(config)
            .then(function(pool){
                _pool = pool;
            });  
    }

    function connect() {
        return _pool.getConnection()
            .then(function(connection){
                _connection = connection;
            })
    }

    function query(q) {
        return new mssql.Request(_pool)
            .query(q);
    }

    return {
        init: init,
        connect: connect,
        query: query
    }
})();