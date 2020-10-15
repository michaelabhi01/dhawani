const mysql = require("mysql");
const settings = require("../../settings");

exports.login_verify = (req, res) => {
    var { username, password } = req.body;

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "SELECT * from users WHERE username = '" + username + "'";
            conn.query(query, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
                conn.destroy();
            })
        })
    })

}