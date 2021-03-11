const{getCars,getSingleCar,createCar,deleteCar,updateCar,findCarByBrand}=require("./carFunctions");
const inputs = require("../../data/input.json");
const carController = {};

    carController.showCarList = async (req,res) => res.render("templates/carSale/car_list",{carListArray:await getCars()});

    carController.renderFormCreation = (req,res) => res.render("templates/carSale/car_new",{arrayInputList:inputs.updateForm});

    carController.showCarDetail = async (req,res) => res.render("templates/carSale/car_detail", await getSingleCar({_id:req.params.id}));

    carController.renderUpdateForm = async (req, res) => {

        const singleCar = await getSingleCar({_id:req.params.id});
        res.render("templates/carSale/car_edit", {arrayInputList:inputs.updateForm});

    };

    carController.newCarCreation = (req,res) => {

        createCar(req.body).save()
        res.redirect("/newCars")


    };

    carController.carDelete = (req,res) =>{

        deleteCar({_id:req.params.id})
        res.redirect("/newCars")
            
    };

    carController.formUpdate = (req,res) => {

        const filter = {_id:req.params.id};
        const update = req.body;
        updateCar(filter,update)
        res.redirect("/newCars")

    };

    carController.searchCar = async (req,res) => {

        const searchResult = await findCarByBrand({$text:{$search:req.body.carBrand,$caseSensitive:false}});
        res.render("templates/carSale/car_list",{carListArray:searchResult});
        
    };


module.exports = carController;