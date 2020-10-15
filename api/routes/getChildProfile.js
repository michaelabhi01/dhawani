const express = require('express');
const router = express.Router();

const getChildProfileController = require('../controllers/getChildProfile');
const verifyToken = require('../middleware/verifyToken');
router.get('/', verifyToken.jwtVerify, getChildProfileController.get_child);

module.exports = router;