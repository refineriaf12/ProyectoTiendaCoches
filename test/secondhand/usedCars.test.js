// TESTING DE CONEXIÓN BDD

// requerimos la bdd y el modelo
const mongoose = require('mongoose'); //Explicar
const UsedCarModel = require('../../models/usedCars')

// creamos datos según el modelo para testear
const carData = { carBrand: 'Toyota', carModel: 'Yaris', modelYear: '2007', nextItvDate: 'Fecha', sellingPrice: 5000, carImage: 'URLimage' , carColor: 'red' , seatsNumber: '5' , doorNumber: '4' , transmissionType: "automática", motorType: "diesel"};



describe('Model Test', () => {

    describe('Second Used Cars Model Test', () => {

        //Conexión a base de datos en memoria para test
        //Daba fallo de respuesta de callback, era porque habia que añadir este beforeAll de manera que se conecta a la base de datos y genera el mongodbmemoryserver y ya recibe respuesta
        beforeAll(async (done) => {
            await mongoose.connect("mongodb://localhost/webcoches", {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
            });
            done();
        });
        //Este test comprueba que coincidan los campos del coche que quiere guardar con el guardado en la base de datos.
        it('Crear y guardar coche correctamente', async (done) => {
            const validCar = new UsedCarModel(carData);         // creamos el objeto
            const savedUsedCar = await validCar.save();     // lo guardamos en la bdd

            expect(savedUsedCar._id).toBeDefined();
            expect(savedUsedCar.carBrand).toBe(carData.carBrand);
            expect(savedUsedCar.carModel).toBe(carData.carModel);
            expect(savedUsedCar.modelYear).toBe(carData.modelYear);
            expect(savedUsedCar.nextItvDate).toBe(carData.nextItvDate);
            expect(savedUsedCar.sellingPrice).toBe(carData.sellingPrice);
            expect(savedUsedCar.carImage).toBe(carData.carImage);
            expect(savedUsedCar.carColor).toBe(carData.carColor);
            expect(savedUsedCar.seatsNumber).toBe(carData.seatsNumber);
            expect(savedUsedCar.doorNumber).toBe(carData.doorNumber);
            expect(savedUsedCar.transmissionType).toBe(carData.transmissionType);
            expect(savedUsedCar.motorType).toBe(carData.motorType);
            done();

        });

        //Test Schema esta funcionando, se pasa
        it('Insertar UsedCar correctamente, pero el campo no definido en el esquema debe dar undefined', async (done)=>{
            const carWithInvalidField = new UsedCarModel({ carBrand: 'Renault', carModel:'Megane', modelYear:2007 });
            const savedCarWithInvalidField = await carWithInvalidField.save();

            expect(savedCarWithInvalidField._id).toBeDefined();
            expect(savedCarWithInvalidField.carBBrand).toBeUndefined();
            //Escribo el campo carBBrand mal a proposito para comprobar que da fallo.
            done();

        })
        //No se pasan todos los campos required para comprobar da error.
        it('Crear un coche sin un campo requerido tiene que fallar', async (done) => {
            const carWithoutRequiredField = new UsedCarModel({ carBrand: 'Renault' });
            let err;
            try {
                const savedCarWithoutRequiredField = await carWithoutRequiredField.save();
                error = savedCarWithoutRequiredField;
            } catch (error) {
                err = error
            }
            expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
            expect(err.errors.carModel).toBeDefined();
            expect(err.errors.modelYear).toBeDefined();
            done();

        });

        afterAll(done => {
            // Cerramos la base de datos para permitir que jest finalice.
            mongoose.connection.close()
            done();
        })
    });


});
