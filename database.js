const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://new-user_01:user01@cluster0.eml2i.mongodb.net/sample_mflix?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
})
.then((db)=> console.log("Conectado"))
.catch((err)=> console.error(err));