const express = require('express');
const router = express.Router();

const createChildProfileController = require('../controllers/createChildProfile');
const verifyToken = require('../middleware/verifyToken');
router.post('/', verifyToken.jwtVerify, createChildProfileController.create_child_profile);

module.exports = router;