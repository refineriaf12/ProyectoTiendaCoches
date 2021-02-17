'use strict'

const { Schema, model } = require('mongoose');

const EmailSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'necesitas intriducir un nombre']
    },
    email: {
        type: String,
        required: [true, 'necesitas introducir un email']
    },
    phone: {
        type: String,
        required: [true, 'necesitas introducir un numero de telefono']
    },
    message: {
        type: String,
        required: [true, 'necesitas introducir un texto']
    }
});

module.exports = model('Email', EmailSchema);
