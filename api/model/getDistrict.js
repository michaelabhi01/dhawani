const mysql = require('mysql');
const settings = require('../../settings');

exports.get_district = (req, res) => {

    var stateId = req.query.state_id

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);

        conn.connect(function(err) {
            if (err) throw err;
            var query = "SELECT id,district_name from district where state_id = " + stateId;
            conn.query(query, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                conn.destroy();
            })
        })
    })
}