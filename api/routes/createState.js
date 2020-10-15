const express = require('express');
const router = express.Router();

const createStateController = require('../controllers/createState');
const verifyToken = require('../middleware/verifyToken');
router.post('/', verifyToken.jwtVerify, createStateController.create_state);

module.exports = router;