'use strict'

const passport = require('passport');

const User = require('../models/userModel');

const usersController = {

    showLoginSignup: (request,response) => {
        response.send('nos devolvería un formulario de registro');
    },

    createNewUser: async (request,response) => {
        const {name,lastname,dni,email,password} = req.body;
        const newUser = new User ({name,lastname,dni,email,password});
        await newUser.save();
        response.send ('formulario enviado-hay que crear el parcial');
    },

    userLogin:(request, rersponse) =>{
        response.send('formulario login usuario existente');
    },

    loginSignUp: async (request, response) => {
        const {email, password} = req.body;
        const emailUser = await User.find({email});
        const passwordUser = await User.find({password});

        if(email != emailUser ){
            response.redirect ('formulario login usuario existente', {emailInvalid: true});
        }
        if( password != passwordUser){
            response.redirect('formulario login usuario existente', {passwordInvalid: true});
        }

        response.send('usuario logeado');
    },

    signin: passport.authenticate('local', {
            failureRedirect: '/users/signin',
            successRedirect: '/faqs',
            failureFlash: true
    }),
    
    logout: (request, response) => {
        request.logout();
        response.redirect('formulario de acceso')
    }
};

module.exports = usersController;










