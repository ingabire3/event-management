const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST register a new user
router.post('/register', authController.registerUser);

// POST login user
router.post('/login', authController.loginUser);

module.exports = router;
