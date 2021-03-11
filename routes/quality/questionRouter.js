'use strict'

const { Router } = require('express');
const router = Router();

const questionController = require('../../controllers/quality/questionController');

//GET obtener todas las preguntas
router.get('/faqs', questionController.showAllQuestions);

module.exports = router;