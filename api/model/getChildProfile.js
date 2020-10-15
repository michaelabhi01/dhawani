const mysql = require('mysql');
const settings = require('../../settings');

exports.get_child = (req, res) => {

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "SELECT * from child_profile ";
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