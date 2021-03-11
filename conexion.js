const mongoose = require('mongoose');

const { MONGO_URI, MONGO_URI_TEST, NODE_ENV } = process.env;

const connectionString = NODE_ENV === 'test' ? MONGO_URI_TEST : MONGO_URI;

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex:true
})
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));






    
 
