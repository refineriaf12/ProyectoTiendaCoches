'use strict';
const input = require("../data/input.json");
const Car = require('../models/Car');

const carController = {};

carController.formCreateUsedCar = (req, res) => { 
    res.render('templates/usedCars/formUsedCar',{formNewUsedCars:input.formNewUsedCars})  
};
carController.createUsedCar = async (req, res) =>{ 
    let {carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType} = req.body; 
    console.log(carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType);
    let newCar = new Car({carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType}); 
    console.log(req.body);
    await newCar.save();     
    res.redirect('/usedCarCatalog'); 
    
};

carController.list = async (req,res)=>{

    const cars = await Car.find({}).lean();
    res.render('templates/usedCars/allUsedCarsTemplate',{carList:cars});
};

carController.deleteCar = async (req,res) => { 
    await Car.findByIdAndDelete(req.params.id) 
    res.redirect('/usedCars/usedCarCatalog') 
};

carController.details = async (req, res) =>{
    const car = await Car.findById(req.params.id);
    res.render('templates/usedCars/usedCarDetails',{car})
};

carController.renderUpdate = async (req,res) => {
    const car = await Car.findById(req.params.id)
    res.render('templates/usedCars/editCar', car)
}

carController.editCar = async (req, res) => {
    const id = req.params.id;
    const { carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType} = req.body;
    await Car.findOneAndUpdate({ _id: id }, { carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType}, { new: true });
    res.redirect('/usedCars/usedCarCatalog')
    
    /*  .then(nCar => res.redirect('/usedCarCatalog')) */
        // .then(car => res.json(car))
       /*  .catch(error => console.log(`Error en CRUD editCar: ${error}`)); */

};

module.exports = carController;