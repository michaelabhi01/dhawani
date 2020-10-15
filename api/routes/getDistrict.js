const express = require('express');
const router = express.Router();

const getDistrictController = require('../controllers/getDistrict');
const verifyToken = require('../middleware/verifyToken');
router.get('/', verifyToken.jwtVerify, getDistrictController.get_district);

module.exports = router;