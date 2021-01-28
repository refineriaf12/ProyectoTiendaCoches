'use strict';
const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    carBrand: {type: String},
    carModel: {type: String},
    modelYear: {type: String},
    nextItvDate: {type:String},
    sellingPrice: {type:number},
    costPrice: {type:number},
    leasingPrice: {type:number},
    leaseDate: {type:date},
    leaseReturnDate: {type:date}, 
    carImage: {type: String},
    carColor: {type: String},
    numberOfSeats: {type:number},
    trunkSize: {type:number},
    transmissionType: {type: String},
    motorType: {type: String},
   
});



module.exports = model('Car', carSchema, 'cars');