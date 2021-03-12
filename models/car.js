const { Schema, model } = require ('mongoose');

const carSchema = new Schema({
    carBrand: {
        type: String,
        required:true    
    },
    carModel: {
        type: String,
        required:true
    },
    modelYear: {
        type: String,
        required:true
    },
    nextItvDate: Date,
    sellingPrice: Number,
    costPrice: Number,
    leasingPrice: Number,
    
    carImage: {
            type: String},
            // required:true},
            
    seatsNumber: {type: Number,
            required:true},
    
    doorNumber: {type: Number,
            required:true},
    
    trunkSize: Number,
    
    co2Emissions: String,
    
    carType: String,
     
    
    airConditioner: String,
    transmissionType: {
        type: String,
        required:true
    },
    motorType: {
        type: String,
        required:true
    },
    stock: Number,
    availability: String,
    transactionType: String
});

carSchema.index({carBrand:"text"});
    place: String

carSchema.index({"carType":"text", "place":"text"});
module.exports = model('Car', carSchema, 'cars');