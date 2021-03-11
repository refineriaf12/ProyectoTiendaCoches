const { createCar, getSingleCar, getAllCars, carUpdate, carDelete, carSearch } = require('../controllers/carControllerFunct');

describe('test function file carController', () => {
    it('function createCar works correctly', async() => {
        const newCar = ({ 
            motorType: 'gasoil', 
            transmissionType: '4x4', 
            doorNumber: 3, 
            seatsNumber: 3,
            carModel: 'model',
            carBrand: 'brand'
        });

        await expect(createCar(newCar)).toBeTruthy();
    });

    it('function getSingleCar works correctly', async() => {
        
        const idCar = 'id';

        await expect(getSingleCar(idCar)).toBeTruthy();
    });

    it('function getAllcars works correctly', async() => {
        
        await expect(getAllCars()).toBeTruthy();
    });

    it('function carUpdate works correctly', async() => {
        
        const carId = 'id';
        const info = "text to test";

        await expect(carUpdate(carId, info)).toBeTruthy();
    });

    it('function carDelete works correctly', async() => {
        
        const carIdToDelete = 'id';

        await expect(carDelete(carIdToDelete)).toBeTruthy();
    });

    it('function carDelete works correctly', async() => {
        
        const carIdToDelete = 'id';

        await expect(carDelete(carIdToDelete)).toBeTruthy();
    });

    it('function carSearch works correctly', async() => {
        
        const text = 'text to testing'

        await expect(carSearch(text)).toBeTruthy();
    });
});