const{getSingleCar,updateCar}=require("./carFunctions");
const{getTransactions,getSingleTransaction,createTransaction,calculateBenefits}=require("./transactionFunctions");

const transactionController ={};

transactionController.showTransactionList = async(req,res)=>res.render("templates/ventaCocheNuevo/transactionList",{transactionListArray:await getTransactions()});

transactionController.showTransactionDetail = async (req,res)=> res.render("templates/ventaCocheNuevo/transactionDetailTemplate", await getSingleTransaction({_id:req.params.id}));

transactionController.calculateBenefits =async  (req,res)=> res.render("templates/ventaCocheNuevo/benefitsTemplate",{benefits:await calculateBenefits()});

transactionController.buyCar = async (req,res) => {

    const singleCar = await getSingleCar({_id:req.params.id});

    const benefit = (singleCar.sellingPrice-singleCar.costPrice);

    const newTransaction = createTransaction({userId:"1", carId:req.params.id, total:singleCar.sellingPrice, benefit:benefit});

    const newStock = singleCar.stock-1;

    if(singleCar.stock>0){
        await newTransaction.save();
        await updateCar({_id:req.params.id},{stock:newStock});

    }
    if(newStock==0){
        await updateCar({_id:req.params.id},{availability:"no disponible"});

    }

    res.redirect("/newCars");

};

module.exports = transactionController;