module.exports = (function () {

    var oracledb = require("oracledb");
    oracledb.outFormat = oracledb.OBJECT; 
    var _pool = null;
    var _connection = null;

    function init(config) {

        return oracledb.createPool(config)
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
        return _connection.execute(q)
            .then(function(result) {
                return result.rows;
            });
    }

    return {
        init: init,
        connect: connect,
        query: query
    }
})();