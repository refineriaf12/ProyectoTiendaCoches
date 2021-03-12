const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://new-user_01:user01@cluster0.eml2i.mongodb.net/sample_mflix?retryWrites=true&w=majority';

const { MONGODB_URI, MONGO_URI_TEST, NODE_ENV } = process.env;
const connectionString = NODE_ENV === 'test' ? MONGO_URI_TEST : MONGODB_URI;

mongoose.connect(connectionString,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
})
.then((db)=> console.log("Conectado"))
.catch((err)=> console.error(err));