const jwt = require("jsonwebtoken");
const settings = require("../../settings");

exports.generateAccessToken = (username, res) => {

    return jwt.sign(username, process.env.JWT_SECRET, { algorithm: "HS256" });

}