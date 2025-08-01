const express = require('express')
const router = express.Router();
const authController = require('../controller/authController');

//user registration
router.post('/register', authController.register);
router.post('/otp-verification/:userId',authController.otpVerification);

//admin route smartlynk
router.post('/register-admin-smartlynk',authController.smartlynkRegistration);

//common routes
router.post('/user-login', authController.login);
router.post('/user-logout', authController.logout);

module.exports = router;