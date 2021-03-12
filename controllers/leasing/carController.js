'use strict'

const {createCar, getSingleCar, getAllCars, carUpdate, carDelete, carSearch} = require('./carControllerFunct');
const Car = require('../../models/car');
const input = require('../../data/input.json');

const CarController = {};

CarController.formCreateCar = (req,res) => {
    res.render('templates/leasing/car_new', {atomList:input.newCarForm});
}

CarController.createNewCar = async (req, res) => {
    await createCar(req.body);
    res.redirect('/rentalCars/all');
};

CarController.showOneCar = async (req, res) => {
    res.render('templates/leasing/car_detail', await getSingleCar(req.params.id));
};

CarController.showAllCars = async (req, res) => {
   res.render('templates/leasing/car_list', {cars: await getAllCars()});
};

CarController.formEditCar = async (req,res) => {
    res.render('templates/leasing/car_edit', await getSingleCar(req.params.id));
}
CarController.updateCar = async (req, res) => {
    const id = req.params.id;
    const info = req.body;
    await carUpdate(id, info);
    res.redirect('/rentalCars/all');
}

CarController.deleteCar =  (req,res) => {
     carDelete(req.params.id)
     .then(res.redirect('/rentalCars/all'))
     .catch(err => {res.send(`Error al eliminar: ${err}`)});
};

CarController.searchCar = async(req,res) =>{
    const searchResult = await carSearch({$text: {$search: req.body.searchCars, $caseSensitive: false}});
    res.render('templates/leasing/car_list', {cars:searchResult});
}

CarController.renderDateForm = async (req, res) => {
    res.render('templates/leasing/rent_new', await getSingleCar(req.params.id))
};

module.exports = CarController;