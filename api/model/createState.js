const mysql = require('mysql');
const settings = require('../../settings');

exports.create_state = (req, res) => {

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "INSERT INTO states (state_name) VALUES ( '" + req.body.state_name + "') ON DUPLICATE KEY UPDATE state_name = state_name";
            conn.query(query, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
                conn.destroy();
            })
        })
    })

}