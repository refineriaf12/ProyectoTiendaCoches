 'use strict'

const { Router } = require ('express');
const router = Router();
const CarController = require('../../controllers/leasing/carController');

router.get("/rentalCars/add", CarController.formCreateCar);

router.post("/rentalCars/createCar", CarController.createNewCar);

router.get("/rentalCars/detail/:id", CarController.showOneCar);

router.get("/rentalCars/all", CarController.showAllCars);

router.get("/rentalCars/updateCar/:id", CarController.formEditCar)

router.post("/rentalCars/updateCar/:id",CarController.updateCar);

router.get("/rentalCars/deleteCar/:id",CarController.deleteCar);

router.post('/rentalcars/search', CarController.searchCar);

router.get("/rentalCars/leasingForm/:id", CarController.renderDateForm);


module.exports = router;