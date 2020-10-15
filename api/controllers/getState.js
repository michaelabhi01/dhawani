const getState = require('../model/getState');

exports.get_state = (req, res) => {

    getState.get_state(req)
        .then(response => {
            var states = JSON.stringify(response)
            res.json({
                "success": true,
                "status": 200,
                "message": "State Detail",
                "timestamp": new Date().getTime(),
                "state": response
            })
        })

}