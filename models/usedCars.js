const { Schema, model } = require('mongoose');

const carSchema = new Schema({

    carBrand: {type: String,
        required:true},

    carModel: {type: String,
            required:true},

    modelYear: {type: String,
            required:false},

    nextItvDate: String,

    sellingPrice: Number,

    carImage: {
            type: String,
            required:false
    },
    carColor: {type: String,
            required:false},

    seatsNumber: {type: String,
            required:false},

    doorNumber: {type: String,
            required:false},

    transmissionType: {type: String,
            required:false},

    motorType: {type: String,
            required:false}

});

module.exports = model("UsedCar", carSchema, "usedCars");
