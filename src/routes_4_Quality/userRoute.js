'use strict'

const { Router } = require('express');
const router = Router();

const usersController = require ('../controllers_4_Quality/userController');

router.get('/users/newUser', usersController.showLoginSignup);
router.post('/usersSave',usersController.createNewUser);
router.get('/users/signin', usersController.userLogin);
router.post('/users/signin', usersController.signin);
router.post('/users/signup', usersController.loginSignUp);
router.get('/users/logout', usersController.logout);

module.exports = router;