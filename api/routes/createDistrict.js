const express = require('express');
const router = express.Router();

const createDistrictController = require('../controllers/createDistrict');
const verifyToken = require('../middleware/verifyToken');
router.post('/', verifyToken.jwtVerify, createDistrictController.create_district);

module.exports = router;