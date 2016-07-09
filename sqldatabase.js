module.exports = (function () {

    var mssql = require("mssql");
    var _pool = null;

    function init(config) {
        //implement promise to match oracle
        return new Promise(function(resolve, reject) {
                _pool = new mssql.Connection(config);
                resolve(_pool);
            }
        );       
    }

    //mimic connect to match oracle
    function connect() {
        return _pool.connect();
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