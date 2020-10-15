const getState = require('../model/getDistrict');

exports.get_district = (req, res) => {

    getState.get_district(req)
        .then(response => {
            var states = JSON.stringify(response)
            res.json({
                "success": true,
                "status": 200,
                "message": "District Detail",
                "timestamp": new Date().getTime(),
                "district": response
            })
        })

}