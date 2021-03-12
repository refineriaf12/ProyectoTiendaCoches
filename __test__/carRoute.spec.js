const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

const MONGO_URI_TEST = 'mongodb://localhost:27017/Alquiler_vehiculos_test';

beforeAll(() => {
    mongoose.connect(MONGO_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex:true
    })
});

describe('GET/rentalCars/add', () => {
    it("It should response the GET method", async() => {
     
        const response = await request(app).get('/rentalCars/add');
        
        expect(response.error).toBeFalsy();
        expect(response.status).toBe(200);
    });

    it("It should response the GET method", async() => {

        const _id = '603f96fb0c1edf4664a02128';
        
        const response = await request(app).get(`/rentalCars/detail/${_id}`);

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
    });

    it("It should response the GET method", async() => {
        
        const response = await request(app).get('/rentalCars/all');

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
    });

    it("It should response the GET method", async() => {

        const _id = '603f96fb0c1edf4664a02128';
        
        const response = await request(app).get(`/rentalCars/updateCar/${_id}`);

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
    });
});

afterAll( async () => {
    await mongoose.connection.close()
});



