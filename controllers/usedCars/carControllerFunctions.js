const Car = require('../../models/usedCars');

function listAllCars(){
    return Car.find().lean();
}

module.exports = {listAllCars};