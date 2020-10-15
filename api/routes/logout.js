const express = require('express');
const router = express.Router();

const logoutController = require('../controllers/logout');
const verifyToken = require('../middleware/verifyToken');
router.get('/', verifyToken.jwtVerify, logoutController.logout);

module.exports = router;