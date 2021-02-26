const { Test } = require('mocha');
const {carouselU} = require('../public/js/index');


    test('Que el carrusel no venga vacio',()=>{
        expect(carouselU()).not.toBeNull()
    })