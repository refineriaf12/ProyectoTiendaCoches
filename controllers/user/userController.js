'use strict'


const passport = require('passport');

const User = require('../../models/user');



const input = require('../../data/input.json')

const userController = {

    showLoginSignup: (request,response) => {
        response.render("templates/home/register", {atomList:input.formRegister});
    },

    createNewUser: async (request,response) => {
        const {name,surname,dniNumber,userName,email,password} = request.body;
        const newUser = new User ({name,surname,dniNumber,userName,email,password});
        await newUser.save();
        response.redirect("/login");
    },

    userLogin:(request, response) =>{
        response.render("templates/home/login", {atomList:input.formLogin});
    },

    // loginSignUp: async (request, response) => {
    //     const {userName, password} = request.body;
    //     const userNameUser = await User.find({userName});
    //     const passwordUser = await User.find({password});

    //     if(userName != userNameUser ){
    //         response.redirect ('/login');
    //         // , {userNameinvalid: true}
    //     }
    //     if( password != passwordUser){
    //         response.redirect('/login');
    //         // , {passwordInvalid: true}
    //     }

    //     response.redirect('/');
    // },

    signin: passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/home',
        // failureFlash: true
    }),
    
    
    logout: (request, response) => {
        request.logout();
        response.redirect('/login')
    }
};

module.exports = userController;



