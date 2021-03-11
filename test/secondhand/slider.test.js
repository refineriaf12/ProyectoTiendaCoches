'use strict';

const mongoose = require('mongoose');
const {
    findAllCars,
    carsLength,
    generarRamdon,
    generoArray3Ramdon,
    arrayAd
} = require('../../public/js/UsedCars/slide_used_cars');
const UsedCarModel = require('../../models/usedCars');
const pathDb = require('../../globalConfig.json');

const carData = {carBrand: 'Toyota', carModel: 'Yaris', modelYear: 122};
const regexRandom = /[0-2]/;

beforeAll(async () => {

    await mongoose.connect(pathDb.mongoUri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
});
let savedUsedCar;

describe('Test de funciones necesarias para el slider', () => {

    it('Recuperamos elementos de la base de datos', async () => {

        // Creamos 3 coches en la base de datos simulada en memoria, para testear funcionalidad
        for (let i = 0; i < 3; i++) {
            let validCar = new UsedCarModel(carData);
            savedUsedCar = await validCar.save();
        }
        const allCars = await findAllCars();
        expect(allCars).toBeDefined();
        expect(allCars).toHaveLength(3);
    });

    it('La función carLength debe devolver 3', async () => {
        expect(await carsLength()).toBe(3);
    });

    it('la función generar random debe devolver un número entre 0 y 2', async () => {
        expect((await generarRamdon()).toString()).toMatch(regexRandom);
    });

    it('la función generoArray3Random debe devolver un array con tres números entre 0 y 3', async () => {

        expect((await generoArray3Ramdon())[0]).not.toBeNaN();
        expect((await generoArray3Ramdon())[1]).not.toBeNaN();
        expect((await generoArray3Ramdon())[2]).not.toBeNaN();

        expect((await generoArray3Ramdon()).length).toBe(3);

        expect(((await generoArray3Ramdon())[0]).toString()).toMatch(regexRandom);
        expect(((await generoArray3Ramdon())[1]).toString()).toMatch(regexRandom);
        expect(((await generoArray3Ramdon())[2]).toString()).toMatch(regexRandom);

    });

    describe('Test funcionalidad Slider', () => {

        it('la función arrayAd debe devolver un array con tres objetos coche', async () => {
            const arrayAdTest = await arrayAd()
            expect(arrayAdTest).toHaveLength(3);
            expect(arrayAdTest[0]._id).toBeDefined();
            expect(arrayAdTest[1]._id).toBeDefined();
            expect(arrayAdTest[2]._id).toBeDefined();

        })
    })


});

afterAll(async done => {

    await mongoose.connection.close();
    done();
})






