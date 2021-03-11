'use strict'

const {Schema, model} = require("mongoose");

const transactionSchema = new Schema ({
    userId: String,
    carId: String,
    total: Number,
    benefit: Number,
    transactionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("Transaction", transactionSchema, "transactions");