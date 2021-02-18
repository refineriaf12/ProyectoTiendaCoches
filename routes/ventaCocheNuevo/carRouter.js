const express = require("express");
const router = express.Router();
const carController = require("../../controllers/ventaCocheNuevo/carController");

router.get("/", carController.showCarList);

router.get("/carForm", carController.renderFormCreation);

router.post("/carCreation", carController.newCarCreation);

router.get("/carDetail/:id", carController.showCarDetail);

router.get("/carDelete/:id", carController.carDelete);

router.get("/editForm/:id", carController.renderUpdateForm);

router.post("/updateCar/:id", carController.formUpdate);

router.post("/searchCar", carController.searchCar);

module.exports = router;