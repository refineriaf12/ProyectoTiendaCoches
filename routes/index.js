const express = require('express')
const router = express.Router()
const input = require('../data/input.json')
const {getCars}=require("../controllers/carSale/carFunctions");
const {getAllCars}=require("../controllers/leasing/carControllerFunctions");
const {listAllCars}=require("../controllers/usedCars/carControllerFunctions");


router.get("/", async(req, res) => {
    res.render("templates/home/home",{sliderItemSale:await getCars(), sliderItemLeasing:await getAllCars(), sliderItemUsed:await listAllCars()});
});

router.get("/login", (req, res) => {
    res.render("templates/home/login", {atomList:input.formLogin});
});
router.get("/register", (req, res) => {
    res.render("templates/home/register", {atomList:input.formRegister});
});





module.exports = router;