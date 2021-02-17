const express = require('express')
const router = express.Router()
const input = require('../data/input.json')


router.get("/", (req, res) => {
    res.render("templates/home");
});

router.get("/login", (req, res) => {
    res.render("templates/login", {atomList:input.formLogin});
});
router.get("/register", (req, res) => {
    res.render("templates/register", {atomList:input.formRegister});
});

//ruta listado coches usados
router.get('/usedCarCatalog',(req,res)=>{
    res.render("templates/usedCars/allUsedCarsTemplate");
})



module.exports = router;