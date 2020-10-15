const getChildProfile = require('../model/getChildProfile');

exports.get_child = (req, res) => {

    getChildProfile.get_child(req)
        .then(response => {
            var states = JSON.stringify(response)
            res.json({
                "success": true,
                "status": 200,
                "message": "Child Profile Detail",
                "timestamp": new Date().getTime(),
                "district": response
            })
        })

}