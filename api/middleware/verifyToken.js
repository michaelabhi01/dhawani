const jwt = require("jsonwebtoken");

exports.jwtVerify = (req, res, next) => {

    var jwtToken = req.headers.token;
    var payload;
    try {
        payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    } catch (e) {
        return res.status(400).json({
            "error_message": "Unauthenticated.",
            "status": 400
        })
    }

    next()
}