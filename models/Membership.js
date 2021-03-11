const { Schema, model} = require('mongoose');

const membershipSchema = new Schema({
    idUser:{type: String, required: true},
    creationDate: {type: Date, default: Date.now()},
    membershipType: { type: String, required: true}
});

module.exports = model( 'membership', membershipSchema, 'memberships');

