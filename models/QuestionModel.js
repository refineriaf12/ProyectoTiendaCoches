'use strict'

const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema ({
    question: {
        type: String
    },
    answer: {
        type: String
    }
});

module.exports = model('Question', QuestionSchema, 'faqs');
