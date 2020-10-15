const createState = require('../model/createState');

exports.create_state = (req, res) => {

    createState.create_state(req)
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
                    "ERROR": "This State already exist"
                })
            }

        })

}