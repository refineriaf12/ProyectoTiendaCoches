'use strict';

const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {type: String},
    surname: {type: String},
    dniNumber: {type:number},
    userName: {type: String},
    password: {type: String},
    email: {type: String},
    avatar: {type: String},
    membership: {type: String},
    membershipExpirationDate: {type: date},
    leasedCars: {type: String},
});

module.exports = model('User', userSchema, 'users');