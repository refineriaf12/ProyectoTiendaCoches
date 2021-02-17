'use strict'

const { Router } = require('express');
const router = Router();

const emailController = require('../../controllers/quality/emailController');

//Metodo GET, muestre el formulario
router.get('/form', emailController.showFormToSendEmail);
//Metodo POST, enviar email
router.post('/send-email', emailController.postEmail);

module.exports = router;


