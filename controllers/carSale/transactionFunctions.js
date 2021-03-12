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

    for(transaction of transactions){
        benefits+=transaction.benefit;
    }

    return benefits;

}

async function transactionMonth(){

    const transactions = await getTransactions();

    return transactions.filter(transaction =>{
        if(transaction.transactionDate.getMonth() === new Date().getMonth()){
            return transaction;
        }
    });
}

async function benefitsMonth(){

    let transactions = await transactionMonth();
    let benefitsMonth = 0;

    for (transaction of transactions) {
        benefitsMonth += transaction.benefit;
    }

    return benefitsMonth;

}

async function benefitsYear(){

    let transactions = await transactionYear();
    let benefitsYear = 0;

    for (transaction of transactions) {
        benefitsYear += transaction.benefit;
    }

    return benefitsYear;

}

async function transactionYear(){

    const transactions = await getTransactions();
    
    return transactions.filter(transaction =>{
        if(transaction.transactionDate.getFullYear() === new Date().getFullYear()){
            return transaction;
        }
    });
}


module.exports = {getTransactions,getSingleTransaction,createTransaction,benefitsMonth,benefitsYear, transactionMonth, transactionYear,calculateBenefits};