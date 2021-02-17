'use strict';

const User = require("../models/User");

let usersController = [];

usersController.newUserform = (req, res) => {
    res.render("templates/formNewUser")
};

usersController.newUser = (req, res) => {
    const newUserData = req.body;
    const newUser = new User(newUserData);
    console.log(req.body)
    newUser.save(error => {
            if (error) {
                console.error(`Error en usersController.newUser.save: ${error}`);
                res.redirect("/newUser",{error:"error"})
                return
            };
            res.redirect("/listadoUsers");
            return
    });
};


usersController.usersList = (req, res) => {
    User.find().lean()
        .then(allUsers => res.render('templates/usersList',{usersList: allUsers}) )
        .catch(error => console.error(`Error en CRUD usersList: ${error}`));
};

usersController.findUserById = (req, res) => {
    const idBusqueda = req.params.id;
    if (req.params.id) {
        User.findById({ _id: idBusqueda }).lean().
            then(user => res.render('templates/detailsUser', {userDetails: user})).
            catch(error => console.error(`Error en CRUD findUserrById.findbyId: ${error}`));
        return
    };
    res.send("Búsqueda por id");
};


usersController.deleteUserById = (req, res) => {
    const idBusqueda = req.params.id;
        User.findByIdAndDelete({ _id: idBusqueda }).
            then(user => res.redirect('/listadoUsers')).
            catch(error => console.log(`Error en CRUD deleteUserById: ${error}`));
};


usersController.updateUserById = (req, res) => {
    const { name, surname, userName, password, email, avatar } = req.body;
    User.findOneAndUpdate({ _id: req.params.id }, { name, surname, userName, password, email, avatar }, { new: true }).lean()
        .then(user => res.redirect(`/listadoUsers`))
        .catch(error => console.log(`Error en CRUD updateUserById: ${error}`));

};




module.exports = usersController;