const createChildProfile = require('../model/createChildProfile');

exports.create_child_profile = (req, res) => {

    createChildProfile.create_child_profile(req)
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
                })
            }

        })

}