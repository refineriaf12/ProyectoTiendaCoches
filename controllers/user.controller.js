'use strict'

const {createUsers} = require('./userControllerFunct');
const user = require ('../models/user');

const userController = {};

userController.formCreateUser = (req, res) =>{
    res.render('users/newUserForm');
}

userController.createNewUser = async(req, res) =>{
    // console.log(req.body);
    // const {name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars} = req.body;
    // const newUser = new user ({name, surname, dniNumber, userName, password, email, avatar, membership, membershipExpirationDate, leasedCars});
    
    console.log(req.body);
    await createUsers(req.body).save();
    res.redirect('/rentalUsers/all');
};

userController.showOneUser = async (req, res) => {
    const userDetail = await user.findById(req.params.id).lean();
    res.render('users/userDetailTemplate', {userDetail});
};

userController.showAllUsers = async(req, res) => {
    const listOfUsers = await user.find({}).lean();
    res.render('users/allUsers', {listOfUsers}); 
};

userController.formEditUser = async (req,res) => {
    const userDetail = await user.findById(req.params.id).lean();
    res.render('users/editUserForm', {userDetail});
};

userController.updateUser = async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/rentalUsers/all');
};

userController.deleteUser = async (req, res) => {

    await user.findByIdAndDelete(req.params.id);
    res.redirect('/rentalUsers/all');
};

module.exports = userController;