const express = require('express')
const router = express.Router()
const input = require('../data/input.json')


router.get("/", (req, res) => {
    res.render("templates/home/home");
});

router.get("/login", (req, res) => {
    res.render("templates/home/login", {atomList:input.formLogin});
});
router.get("/register", (req, res) => {
    res.render("templates/home/register", {atomList:input.formRegister});
});





module.exports = router;