const Car = require("../../models/car");

function getCars(){

    return Car.find().lean();

}

function getSingleCar(id){

    return Car.findById(id).lean();

}

async function createCar(data){

    const car = new Car(data)
    return await car.save();

}

function deleteCar(id){

    return Car.deleteOne(id);

}

function updateCar(filter,update){

    return Car.findByIdAndUpdate(filter, update);

}

function findCarByBrand(brand){

    return Car.find(brand).lean();

}

module.exports = {getCars,getSingleCar,createCar,deleteCar,updateCar,findCarByBrand};