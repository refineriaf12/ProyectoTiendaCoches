'use strict';

const {getSingleCar, carUpdate} = require('./carControllerFunct');
const {rentUpdate} = require('./rentControllerFunct');
const Rent = require('../models/Rent');

const RentController = {};

RentController.leaseCar = async (req, res) => {
    const singleCar = await getSingleCar(req.params.id);
    const Ndays = (new Date((req.body.leaseReturnDate)).getTime() - new Date((req.body.leaseDate)).getTime())/(24*60*60*1000);
    console.log(Ndays);
    const finalPrice = (singleCar.leasingPrice*Ndays);
    const newRent = new Rent ({
        carBrand: singleCar.carBrand,
        carModel: singleCar.carModel,
        leasingPrice: finalPrice,
        leaseDate: req.body.leaseDate,
        leaseReturnDate: req.body.leaseReturnDate,
        carId: singleCar._id
    });

    const car = await newRent.save();
    const convertArray = [];
    convertArray.push(car)

    res.render("rent/rentDetailTemplate", { convertArray });
};

RentController.showAllRents = async (req,res) => {
    const rentsList = await Rent.find().lean();
    rentUpdate(rentsList);
    res.render("rent/allRents", {rents: rentsList} );
};

module.exports = RentController;