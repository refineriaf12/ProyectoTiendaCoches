'use strict'

const nodemailer = require('nodemailer');
const emailController = require('../src/controllers_4_Quality/emailController');
const request = require('supertest');
const app = require('../src/server');
const sinon = require('sinon');
const sandbox = sinon.sandbox.create();


describe('should be succesfuly conection to nodemailer',() => {
    it('have correct conection', () => {
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: '587',
            secure: false,
            auth: {
                user: 'ottis.braun@ethereal.email',
                pass: 'DeXYXeHkpEzrFzwtUa'
            }
        })

        /* request(app) */
        expect(emailController).toBe(transporter);
        sandbox.stub(nodemailer, 'createTransport').returns(transport);
    })
});