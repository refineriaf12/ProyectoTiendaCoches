'use strict'

const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

router.get("/rentalUsers/add", userController.formCreateUser);

router.post("/rentalUsers/createUser", userController.createNewUser);

router.get("/rentalUsers/detail/:id", userController.showOneUser);
router.get("/rentalUsers/all", userController.showAllUsers);

router.get("/rentalUsers/updateUser/:id", userController.formEditUser);
router.post("/rentalUsers/updateUser/:id", userController.updateUser);

router.get("/rentalUsers/deleteUser/:id", userController.deleteUser);

module.exports = router;