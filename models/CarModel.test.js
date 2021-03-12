const mongoose = require('mongoose');
const {createCar, deleteCar, getSingleCar, getCars, updateCar} = require('../controllers/carSale/carFunctions')
const path = require('../globalConfig.json')

const carData = {carBrand:'ford', carModel:'mondeo', modelYear:'1999', nextItvDate:new Date("2021-02-21T00:00:00.000+00:00"),
    sellingPrice:2000, costPrice:500, leasingPrice:300, leaseDate:new Date("2021-02-21T00:00:00.000+00:00"),
    leaseReturnDate:new Date("2021-02-21T00:00:00.000+00:00"), carImage:'adsdas', carColor:'plateado',
    seatsNumber:5, doorNumber:5, trunkSize:50, co2Emissions:'asdassd', carType:'asdas', airConditioner:'NO',
    transmissionType:'auto', motorType:'gasolina', stock:2, availability:'SI', transactionType:'asssd' }



describe ('Car Model', ()=>{

    beforeAll(async () => {
        await mongoose.connect(path.mongoUri,
            { useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    })

    describe ('Car Model Read', ()=>{

        it('should return the correct number of cars succesfully', async () => {

            await createCar(carData) ;
            const carList = await getCars();

            expect(carList).toHaveLength(1);

        })

        it('should return the car you are looking for', async () => {

            const validCar = await createCar(carData) ;
            const singleCar = await getSingleCar({_id:validCar._id});

            expect(singleCar._id).toBeDefined();
            expect(singleCar.carBrand).toBe(carData.carBrand);
            expect(singleCar.carModel).toBe(carData.carModel);
            expect(singleCar.modelYear).toBe(carData.modelYear);
            expect(singleCar.nextItvDate).toStrictEqual(carData.nextItvDate);
            expect(singleCar.sellingPrice).toBe(carData.sellingPrice);
            expect(singleCar.costPrice).toBe(carData.costPrice);
            expect(singleCar.leasingPrice).toBe(carData.leasingPrice);
            expect(singleCar.leaseDate).toStrictEqual(carData.leaseDate);
            expect(singleCar.leaseReturnDate).toStrictEqual(carData.leaseReturnDate);
            expect(singleCar.carImage).toBe(carData.carImage);
            expect(singleCar.carColor).toBe(carData.carColor);
            expect(singleCar.seatsNumber).toBe(carData.seatsNumber);
            expect(singleCar.doorNumber).toBe(carData.doorNumber);
            expect(singleCar.trunkSize).toBe(carData.trunkSize);
            expect(singleCar.co2Emissions).toBe(carData.co2Emissions);
            expect(singleCar.carType).toBe(carData.carType);
            expect(singleCar.airConditioner).toBe(carData.airConditioner);
            expect(singleCar.transmissionType).toBe(carData.transmissionType);
            expect(singleCar.motorType).toBe(carData.motorType);
            expect(singleCar.stock).toBe(carData.stock);
            expect(singleCar.availability).toBe(carData.availability);
            expect(singleCar.transactionType).toBe(carData.transactionType);

        })

    })

    describe ('Car Model Create', () =>{


        it('should create a Car succesfully', async () => {

            const validCar = await createCar(carData) ;

            expect(validCar._id).toBeDefined();
            expect(validCar.carBrand).toBe(carData.carBrand);
            expect(validCar.carModel).toBe(carData.carModel);
            expect(validCar.modelYear).toBe(carData.modelYear);
            expect(validCar.nextItvDate).toBe(carData.nextItvDate);
            expect(validCar.sellingPrice).toBe(carData.sellingPrice);
            expect(validCar.costPrice).toBe(carData.costPrice);
            expect(validCar.leasingPrice).toBe(carData.leasingPrice);
            expect(validCar.leaseDate).toBe(carData.leaseDate);
            expect(validCar.leaseReturnDate).toBe(carData.leaseReturnDate);
            expect(validCar.carImage).toBe(carData.carImage);
            expect(validCar.carColor).toBe(carData.carColor);
            expect(validCar.seatsNumber).toBe(carData.seatsNumber);
            expect(validCar.doorNumber).toBe(carData.doorNumber);
            expect(validCar.trunkSize).toBe(carData.trunkSize);
            expect(validCar.co2Emissions).toBe(carData.co2Emissions);
            expect(validCar.carType).toBe(carData.carType);
            expect(validCar.airConditioner).toBe(carData.airConditioner);
            expect(validCar.transmissionType).toBe(carData.transmissionType);
            expect(validCar.motorType).toBe(carData.motorType);
            expect(validCar.stock).toBe(carData.stock);
            expect(validCar.availability).toBe(carData.availability);
            expect(validCar.transactionType).toBe(carData.transactionType);

        })

    })


    describe ('Car Model Update', ()=>{

        it('should update a car succesfully', async () =>{

            const validCar = await createCar(carData) ;
            const update = {carBrand:'seat', carModel:'leon'}
            await updateCar({_id:validCar._id}, update);
            const carResult = await getSingleCar({_id:validCar._id})

            expect(carResult._id).toStrictEqual(validCar._id);
            expect(carResult.carBrand).toStrictEqual(update.carBrand);
            expect(carResult.carModel).toStrictEqual(update.carModel);

        })

    })

    describe ('Car Model Delete', ()=>{

        it('should delete a car succesfully', async () => {

            const validCar = await createCar(carData) ;
            await deleteCar({_id:validCar._id});
            const result = await getSingleCar({_id:validCar._id});
           
            expect(result).toBeNull();
        
        })
        
    })

    afterAll(done => {
        mongoose.connection.close()
        done();
    })


})