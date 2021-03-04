'use strict'

const { Router } = require('express');
const router = Router();
const userController = require ('../../controllers/user/userController');


router.get('/login', userController.userLogin);
router.post('/login', userController.signin);
// router.post('/login', usersController.loginSignUp);

router.get('/register', userController.showLoginSignup);
router.post('/register', userController.createNewUser);

router.get('/logout', userController.logout);

module.exports = router;