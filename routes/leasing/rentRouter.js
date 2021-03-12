'use strict'

const { Router } = require ('express');
const router = Router();
const RentController = require('../../controllers/leasing/rentController');

router.post("/rentalCars/leaseCar/:id", RentController.leaseCar);

router.get("/rentalCars/transactions", RentController.showAllRents);

// router.get("/rentalCars/rentDetail/:id", RentController.showOneRent);


module.exports = router;