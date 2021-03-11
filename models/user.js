const { Schema, model } = require ('mongoose');

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
    
    avatar: {
        type: String
    },
    
    membership: {
        type: String
    },
    
    membershipExpirationDate: {
        type: Date
    },
    
    leasedCars:{
        type:[Schema.Types.ObjectId]
    }
});

module.exports = model ('User', userSchema, 'users');