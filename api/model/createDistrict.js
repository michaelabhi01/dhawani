const mysql = require('mysql');
const settings = require('../../settings');

exports.create_district = (req, res) => {

    var values = []
    values.push([req.body.district_name, req.body.state_id]);

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "INSERT INTO district (district_name,state_id) VALUES ? ON DUPLICATE KEY UPDATE district_name = district_name";
            conn.query(query, [values], function(err, result) {
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