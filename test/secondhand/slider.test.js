const mongoose = require('mongoose');
const { findAllCars ,carsLength } = require('../../public/js/UsedCars/slide_used_cars');


describe('Slider functions test', () =>{
    beforeAll(async (done) => {
        await mongoose.connect(global.__MONGO__URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
        done();
    })

    it('findAllCars must return a cars objects array', async () =>{
       const allCars = await findAllCars();
       expect(allCars).toStrictEqual([...{}]) //https://jestjs.io/docs/en/expect#tostrictequalvalue
    })

    afterAll(done => {
        // Cerramos la base de datos para permitir que jest finalice.
        mongoose.connection.close()
        done();
    })
});




    
    
