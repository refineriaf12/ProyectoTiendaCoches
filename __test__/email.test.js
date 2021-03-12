const request = require('supertest');
const emailController = require('../src/controllers_4_Quality/emailController');
const app = require('../src/server');

/* describe('GET/from to render form to send email', () => {
    it('should response a template', done => {
        request(app)
            .get('/form')
            .set('Accept')
            .expect(done)
    })
}); */

describe('POST/send-email', () => {
    it('should response email created', done => {
        const data = {
            name: 'abcde',
            email: 'abc@abc',
            phone: 12345,
            message: 'Message'
        }

        request(app)
            .post('/send-email')
            .send(data)
            .set('Accept', 'application/json')
            /* .expect('Content-Type', /json/) */
            .expect(200)
            .end((err) => {
                if (err) return done(err)
                done()
            })
    })

    it('should response email created', done => {
        const data = {}

        request(app)
            .post('/send-email')
            .send(data)
            .set('Accept', 'application/json')
            /* .expect('Content-Type', /json/) */
            .expect(200)
            .expect('email no enviado')
            .end((err) => {
                if (err) return done(err)
                done(err)
            })
    })
});

