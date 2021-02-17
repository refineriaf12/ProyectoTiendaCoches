'use strict'

const request = require('supertest');
const app = require('../src/server');
const  { EmailSchema } = require('../src/models/emailModel');
/* //Este packete serviria para generar un ID, en el caso que estemos haciendo pruebas sin BBDD
const { nanoid } = require('nanoid'); */

let testServer
//El before all, es para que antes de que todo el proceso de pruebas se inicie, arranque el servidor//TAMBIEN SE PUEDE USAR EL beforeEach()
beforeAll(() => {
    testServer = app.listen(3000)
})

//Aquí decimos que despues de que todas las pruebas se realicen, cierra el servidor
afterAll((done) => {
    testServer.close(done)
})

test('should send message and email', async () => {
    await request(app).post('/send-email')
    .send({
        name: 'name',
        email: 'email@email',
        phone: '12345',
        message: 'message'
    })

    expect(201)
})

/* test('should contain a name') */
/* test('should does not send message and email', async () => {
    await request(app).post('/send-email')
    .send({
        /* name: 'name', */
        email: 'email@email',
        phone: '12345',
        message: 'message'
    })

    expect(417)
}) */

