'use strict';
const database = require('./database')

describe('Testeo conexión/desconexión BBDD', () =>{
    beforeAll(()=>{
        database.connect();
    });

    afterAll((done)=>{
        database.disconnect(done);
    })
});