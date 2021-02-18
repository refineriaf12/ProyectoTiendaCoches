const {createCar, getSingleCar, getAllCars, carUpdate, carDelete} = require('./carControllerFunct');

describe('Car controller operations', function(){
    
    test('createCar is called', function(){

        // const spy = jest.spyOn(createCar, 'play', 'get');

        expect(createCar()).toBeTruthy();
        // expect(spy).toHaveBeenCalled();

    });
    
    test('getSingleCar is called', function(){

        expect(getSingleCar()).toBeTruthy();

    });

    test('getAllCars is called', function(){

        expect(getAllCars()).toBeTruthy();

    });
    test('carUpdate is called', function(){

        expect(carUpdate()).toBeTruthy();

    });
    test('carDelete is called', function(){

        expect(carDelete()).toBeTruthy();

    });

});