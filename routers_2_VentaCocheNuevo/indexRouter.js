const express = require("express");
const router = express.Router();

router.get("/controlPanel", function (req,res){
    res.render("templates/controlPanel")
});





module.exports = router;