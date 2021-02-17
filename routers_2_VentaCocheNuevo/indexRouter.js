const express = require("express");
const router = express.Router();

router.get("/controlPanel", function (req,res){
    res.render("templates/templates_2_VentaCocheNuevo/controlPanel")
});

module.exports = router;