module.exports = (function () {

    var mssql = require("mssql");

    function connect(sqlAttrs) {
        return mssql.connect(sqlAttrs);
    }

    function query(sqlQuery) {
        return new mssql.Request()
            .query(sqlQuery);
    }

    return {
        connect: connect,
        query: query
    }
})();