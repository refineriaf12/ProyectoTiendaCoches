const express = require("express");
const router = express.Router();

router.get("/controlPanel", function (req,res){
    res.render("templates/carSale/controlPanel")
});

module.exports = router;