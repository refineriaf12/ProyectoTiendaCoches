'use strict'

const passport = require('passport');

const User = require('../../models/user');

const usersController = {

    showLoginSignup: (request,response) => {
        response.send('nos devolvería un formulario de registro');
    },

    createNewUser: async (request,response) => {
        const {name,surname,dniNumber,userName,email,password} = req.body;
        const newUser = new User ({name,surname,dniNumber,userName,email,password});
        await newUser.save();
        response.send ('formulario enviado-hay que crear el parcial');
    },

    userLogin:(request, rersponse) =>{
        response.send('formulario login usuario existente');
    },

    loginSignUp: async (request, response) => {
        const {userName, password} = req.body;
        const userNameUser = await User.find({userName});
        const passwordUser = await User.find({password});

        if(userName != userNameUser ){
            response.redirect ('formulario login usuario existente', {userNameinvalid: true});
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










