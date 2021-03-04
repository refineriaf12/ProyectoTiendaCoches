'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use( new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
}, async (userName, password, done) => {
    //confirmamos que el username existe en la base de datos
    const user = await User.findOne({userName});
    const pass = await User.findOne({password});
    if (!user) {
        // redirect ('/login', {userNameInvalid: true});
        return done(null, false, {userNameInvalid: true});
    } else {
        //Comprobamos si la contraseña es correcta
        if (pass) {
            return done(null, user)

        } else {
            // redirect('/login',{passwordInvalid: true});
            return done(null, false, {passwordInvalid: true});
        }
    }
}));

passport.serializeUser((user, done) =>{
    done(null, user.id)
});

passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user) => {
        done(err, user);
    })
});