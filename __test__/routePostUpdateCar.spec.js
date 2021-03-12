const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Car = require('../models/Car');

const MONGO_URI_TEST = 'mongodb://localhost:27017/Alquiler_vehiculos_test';

beforeAll(() => {
    mongoose.connect(MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex:true
    })
});

describe('PUT/rentalCars/add', () => {
    it("It should response the PUT method", async() => {

        const _id = '603f96fb0c1edf4664a02128';

        const info = ({ 
            motorType: 'oil', 
            transmissionType: '4x4', 
            doorNumber: 3, 
            seatsNumber: 3,
            carModel: 'model',
            carBrand: 'brand'
        });
        
        const response = await request(app).post(`/rentalCars/updateCar/${_id}`);
        await Car.findByIdAndUpdate(_id, info);
       
        expect(response.error).toBe(false);
        expect(response.status).toBe(302);
    });
});

afterAll( async () => {
    await mongoose.connection.close()
});