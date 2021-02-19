'use strict'

const {createCar, getSingleCar, getAllCars, carUpdate, carDelete} = require('./carControllerFunct');
const input = require('../../data/input.json');

const CarController = {};

CarController.formCreateCar = (req,res) => {
    res.render('templates/leasing/car_new', {atomList:input.newCarForm});
}

CarController.createNewCar = async (req, res) => {
    await createCar(req.body).save();
    console.log (createCar())
    res.redirect('/rentalCars/all');
};

CarController.showOneCar = async (req, res) => {
    res.render('templates/Leasing/car_detail', await getSingleCar(req.params.id));
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


module.exports = CarController;