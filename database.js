module.exports = (function () {

    var db = null;

    function init(config) {
        var provider = config["provider"] 
        db = require('./' + provider + 'database.js');
        return db.init(config);   
    }

    function connect() {
        return db.connect();
    }

    function query(q) {
        return  db.query(q);
    }

    return {
        init: init,
        connect: connect,
        query: query
    }
})();