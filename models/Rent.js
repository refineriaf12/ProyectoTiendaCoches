const { Schema, model } = require("mongoose");

const rentSchema = new Schema({
  carBrand: { type: String, required: true },

  carModel: { type: String, required: true },

  leasingPrice: Number,

  leaseDate: Date,

  leaseReturnDate: Date,

  carId: String,
});

module.exports = model("Rent", rentSchema, "rents");