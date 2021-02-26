// TESTING DE CONEXIÓN BDD

// requerimos la bdd y el modelo
const mongoose = require('mongoose');
const UsedCars = require('../../models/usedCars')

// creamos datos según el modelo para testear
const carData = { carBrand: 'Toyota', carModel: 'Yaris', nextItvDate: new Date(), sellingPrice: 'Number', carImage: 'URL image' , carColor: 'red' , seatsNumber: 5 , doorNumber: 4 , transmissionType: "automática", motorType: "diesel"};



describe('Model Test', () => {

    describe('Second Used Cars Model Test', () => {

        it('Create and save cars successfully', async () => {
            const validCar = new UsedCars(carData);         // creamos el objeto
            const savedUsedCar = await validCar.save();     // lo guardamos en la bdd

            expect(savedUsedCar._id).toBeDefined();

        })

    });


});
