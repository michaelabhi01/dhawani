const mysql = require('mysql');
const settings = require('../../settings');

exports.create_child_profile = (req, res) => {

    var { name, sex, dob, father_name, mother_name, district_id, photo } = req.body;

    var values = []
    values.push([name, sex, dob, father_name, mother_name, district_id, photo]);

    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection(settings.dbConfig);
        conn.connect(function(err) {
            if (err) throw err;
            var query = "INSERT INTO child_profile (name, sex, dob, father_name, mother_name, district_id, photo) VALUES ?";
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