'use strict'

const {Schema, model} = require("mongoose");

const transactionSchema = new Schema ({
    userId: {
        type: String,
        required: true
    },
    carId: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    benefit: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("Transaction", transactionSchema, "transactions");