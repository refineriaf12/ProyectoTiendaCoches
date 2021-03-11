const mongoose = require('mongoose');
const {createTransaction,getTransactions, getSingleTransaction}=require('../controllers/carSale/transactionFunctions');
const path = require('../globalConfig.json')

const transactionData = {userId: '1', carId: 'asrgkñbjasd', total: 234, benefit: 123}

describe('Transaction model',()=>{
    
    beforeAll(async () => {
        await mongoose.connect(path.mongoUri,
            { useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false },
            (err) => {if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });


    describe ('Transaction Model Read', () => {

        it('should return the correct number of transactions succesfully', async () => {

            const validTransaction = createTransaction(transactionData);
            await validTransaction.save();
            const transactionList = await getTransactions();
        
            expect(transactionList).toHaveLength(1);

        })

        it('should return the transaction you are looking for', async () => {

            let validTransaction = createTransaction(transactionData);
            validTransaction = await validTransaction.save();
            const singleTransaction = await getSingleTransaction({_id:validTransaction._id});
                
            expect(singleTransaction._id).toStrictEqual(validTransaction._id);
            expect(singleTransaction.userId).toBe(validTransaction.userId);
            expect(singleTransaction.carId).toBe(validTransaction.carId);
            expect(singleTransaction.total).toBe(validTransaction.total);
            expect(singleTransaction.benefit).toBe(validTransaction.benefit);
            expect(singleTransaction.transactionDate).toStrictEqual(validTransaction.transactionDate);

        })
        
    })

    describe('Transaction model creation', ()=>{

        it('should create a Transaction succesfully', async ()=> {

            let validTransaction = createTransaction(transactionData);
            validTransaction = await validTransaction.save();

            expect(validTransaction._id).toBeDefined();
            expect(validTransaction.userId).toBe(transactionData.userId);
            expect(validTransaction.carId).toBe(transactionData.carId);
            expect(validTransaction.total).toBe(transactionData.total);
            expect(validTransaction.benefit).toBe(transactionData.benefit);
        })

    })



    afterAll(done => {
        mongoose.connection.close()
        done();
    })

    

})


