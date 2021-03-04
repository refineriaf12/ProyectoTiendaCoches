'use strict';

const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose');
const { findAllCars ,carsLength, generarRamdon, generoArray3Ramdon, arrayAd } = require('../../public/js/UsedCars/slide_used_cars');
const UsedCarModel = require('../../models/usedCars');

const carData ={ carBrand: 'Toyota', carModel: 'Yaris', modelYear: 122};
const regexRandom = /^[0-2]?/;

let  mongo;

beforeAll( async () =>{
     mongo = new MongoMemoryServer();
    const mongoURI = await mongo.getUri();

    await mongoose.connect(mongoURI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
});
let savedUsedCar;

describe('Slider functions test', () =>{

    it('Creamos 3 coches en la base de datos simulada en memoria, para testear funcionalidad', async () => {
        for(let i=0; i<3; i++){
            let validCar = new UsedCarModel(carData);
            savedUsedCar = await validCar.save();
        }
    });

    it('Recuperamos elementos de la base de datos', async () =>{
        const allCars = await findAllCars();
        expect(allCars).toBeDefined();
        expect(allCars.length).toBe(3);
    });

    it('La función carLength debe devolver 3', async () =>{
        expect(await carsLength()).toBe(3);
    });

    it('la función generar random debe devolver un número entre 0 y 2', async () =>{
        expect((await generarRamdon()).toString()).toMatch(/[0-2]/);
    });

    it('la función generoArray3Ramdon debe devolver un array con tres números entre 0 y 3', async  () =>{
        expect((await generoArray3Ramdon())[0]).not.toBeNaN();
        expect((await generoArray3Ramdon())[1]).not.toBeNaN();
        expect((await generoArray3Ramdon())[2]).not.toBeNaN();

        expect((await generoArray3Ramdon()).length).toBe(3);
        expect(((await generoArray3Ramdon())[0]).toString()).toMatch(/[0-2]/);
        expect(((await generoArray3Ramdon())[1]).toString()).toMatch(/[0-2]/);
        expect(((await generoArray3Ramdon())[2]).toString()).toMatch(/[0-2]/);


    });

    it.skip('la función arrayAd debe devolver un array con tres objetos coche', async () =>{
        expect(await  arrayAd()).toBe([/^[0-2]?/]);
    })
})

afterAll(async () => {

    await mongo.stop();
    await mongoose.connection.close()

})






