const createDistrict = require('../model/createDistrict');

exports.create_district = (req, res) => {

    createDistrict.create_district(req)
        .then(response => {
            if (response.insertId > 0) {
                res.json({
                    "success": true,
                    "status": 200,
                    "message": "Operation performed successfully"
                })
            } else {
                res.json({
                    "success": false,
                    "status": 200,
                    "message": "Got error while saving",
                    "ERROR": "This District already exist"
                })
            }

        })

}