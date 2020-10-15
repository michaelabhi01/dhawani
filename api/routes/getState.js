const express = require('express');
const router = express.Router();

const getStateController = require('../controllers/getState');
const verifyToken = require('../middleware/verifyToken');
router.get('/', verifyToken.jwtVerify, getStateController.get_state);

module.exports = router;