'use strict'

const Car = require('../../models/leasedCars');

function createCar(param){
    return new Car(param);
}

function getSingleCar(id){
   return Car.findById(id).lean();    
}

function getAllCars(){
    return Car.find().lean();
}

function carUpdate(id,info){
    return Car.findByIdAndUpdate(id, info);
}

function carDelete(id){
    return Car.findByIdAndDelete(id);
}

module.exports = {createCar, getSingleCar, getAllCars, carUpdate, carDelete};