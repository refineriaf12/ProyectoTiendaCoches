'use strict'

const user = require('../models/user');

function createUsers(param){
    return new user(param);
}

function showUsers(){
    
}


module.exports = {createUsers};