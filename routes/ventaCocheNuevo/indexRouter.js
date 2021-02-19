const express = require("express");
const router = express.Router();

router.get("/controlPanel", function (req,res){
    res.render("templates/ventaCocheNuevo/controlPanel")
});

module.exports = router;