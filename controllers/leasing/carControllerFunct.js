'use strict'

const Car = require('../../models/car');

function createCar(param){
    return new Car(param).save();
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

function carSearch(text){
    return Car.find(text).lean();
}

module.exports = {createCar, getSingleCar, getAllCars, carUpdate, carDelete, carSearch};