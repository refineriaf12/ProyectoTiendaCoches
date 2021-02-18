const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Alquiler_vehiculos',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex:true})
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));






    
 
