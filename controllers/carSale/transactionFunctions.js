const Transaction = require("../../models/Transaction");

function getTransactions(){

    return Transaction.find().lean();

}

function getSingleTransaction(id){

    return Transaction.findById(id).lean();

}

function createTransaction(data){

    return new Transaction(data);

}

async function calculateBenefits(){

    const transactions = await getTransactions();

    let benefits = 0;
    for (let i = 0; i < transactions.length; i++) {
        benefits+=transactions[i].benefit;
    }
    return benefits;

}

module.exports = {getTransactions,getSingleTransaction,createTransaction,calculateBenefits};