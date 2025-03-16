const express = require('express');
const { userSignup, userLogin } = require('../controller/user.controller'); // Destructure the import
const router = express.Router();

router.post('/signup', userSignup);  // This should handle POST requests at /user/signup
router.post('/login', userLogin);    // This will handle POST requests at /user/login

module.exports = router;
