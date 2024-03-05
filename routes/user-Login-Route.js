// IMPORTS
const express = require('express');

// Create Express Router
const router = express.Router();

// Get login
const { login } = require('./../controllers/auth-controller');

// POST login
router.route('/login').post(login);

// EXPORTS
module.exports = router;

