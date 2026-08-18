const express = require('express');
const router = express.Router();

const { login, logout } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

router.post('/auth/login', login);
router.post('/auth/logout', authenticate, logout);

module.exports = router;