const login = require("../model/login");
const token = require("../middleware/jwtToken");
const bcrypt = require('bcrypt');


exports.login_post = (req, res) => {

    var { username, password } = req.body;

    login.login_verify(req)
        .then(response => {

            bcrypt.compare(password, response.password, function(err, result) {
                if (err) throw err;
                if (result) {
                    const jwtToken = token.generateAccessToken(response.username)
                    res.status(200).json({
                        "accessToken": jwtToken,
                        "id": response.id,
                        "username": response.username
                    })
                } else {
                    res.status(400).json({
                        "success": false,
                        "status": 400,
                        "message": "Invalid Parameters"
                    });
                }
            });
        })

}