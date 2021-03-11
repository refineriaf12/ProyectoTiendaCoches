'use strict';

const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    surname: {
        type: String,
        required:true
    },
    dniNumber: {
        type:Number,
        required:true
    },
    userName: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    avatar: String,
    membership: String,
    membershipExpirationDate: Date,
    leasedCars:{
        type:[Schema.Types.ObjectId]
    },
    administrator: Boolean
});

module.exports = model('User', userSchema, 'users');