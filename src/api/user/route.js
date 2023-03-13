const express = require('express');
const router = express.Router();
const User = require('./index');
const { verifySession } = require("supertokens-node/recipe/session/framework/express");



// User Setting
router.post('/update', verifySession(), User.userController.update);


// User Info
router.post('/info', verifySession(), User.userController.info);






// User Role



// // User Registration
// router.post('/register/request-otp', User.userController.requestUserRegistrationOTP);
// router.post('/register/verify-otp', User.userController.verifyUserRegistrationOTP);


// // User Login
// router.post('/login/request-otp', User.userController.requestUserLoginOTP);
// router.post('/login/verify-otp', User.userController.verifyUserLoginOTP);




module.exports = router;
