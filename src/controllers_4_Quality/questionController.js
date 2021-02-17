'use strict'

const { response } = require('express');
const question = require('../data/faqs.json');

const questionController = {
    
    showAllQuestions: (req, res) => {
        /* const question = await Question.find().lean(); */
        res.render('templates/faqsTemplate', { question })
        /* res.render('templates/faqsTemplate'); */
    }
};

module.exports = questionController;