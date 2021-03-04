'use strict'

const { Router } = require('express');
const router = Router();
const {signin} = require ('../../controllers/user/userController');

const usersController = require ('../../controllers/user/userController');

// router.get('/login', usersController.showLoginSignup);
// router.post('/usersSave',usersController.createNewUser);

// router.get('/users/signin', usersController.userLogin);
// router.post('/users/signin', usersController.signin);

// router.post('/users/signup', usersController.loginSignUp);

// router.get('/users/logout', usersController.logout);

router.get('/login', usersController.userLogin);
router.post('/login', function(req,res){signin});

router.get('/register', usersController.showLoginSignup);
router.post('/register', usersController.createNewUser);

router.get('/logout', usersController.logout);

module.exports = router;