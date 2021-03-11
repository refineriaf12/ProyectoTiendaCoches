'use strict'
// require('../../../database')
const Cars = require("../../../models/usedCars");

const imprimir = async (func) => {
      const msg = await func;
    console.log(msg);
};

//Lo primero que haremos será traer los objetos de la bd y meterlos en un array.
const findAllCars = async () => {
     const allCars = await Cars.find().lean();
     return allCars
};

// imprimir(findAllCars());

//Después necesitaremos generar 3 números aleatorios entre 0 y la longitud del array -1
const carsLength = async () => {
    const allCars = await findAllCars();
    const carsLength = Object.keys(allCars).length;
    return carsLength
};

// imprimir(carsLength());

const generarRamdon = async () => {
    const limit = await carsLength();
    const num = Math.floor(Math.random()*limit);
    return num;
};

// imprimir(generarRamdon());

const generoArray3Ramdon = async () =>{
    let arrayNum = [];
    let num;
    for(let i=0; i<3; i++){
        do{
            num = await generarRamdon();
        }while(arrayNum.includes(num));
        arrayNum.push(num);
    };
    return arrayNum;
}

// imprimir(generoArray3Ramdon());

//Una vez que tenemos los 3 números, creamos un nuevo array compuesto por los elementos de la bd cuyo índice sean los números
//Por último haremos un return de esos elementos.

const arrayAd = async () =>{
    const allCars = await findAllCars(); // [{car1},{car2},{car3},{car4},...]
    const arrayNum = await generoArray3Ramdon();//[6, 3, 2]
    let arrayAd = [];
    for (let num of arrayNum) {
        arrayAd.push(allCars[num]);
    };
    return arrayAd
};

//  imprimir(arrayAd());
module.exports = {findAllCars, carsLength, arrayAd, generarRamdon, generoArray3Ramdon};
