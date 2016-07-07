module.exports =  function (connAttrs) {

    var provider = connAttrs["provider"]
    var manager = require('./' + provider + 'DatabaseManager.js');

    function init() {
        return manager.init(connAttrs);
    }

    function query(query) {
        return manager.query(query)
            .then( function(result) {
                if (result && provider == "ora") {
                    return result.rows;
                } else {
                    return result;
                }
            })
    }

    //interface
    return {
        init: init,
        query: query
    };
};