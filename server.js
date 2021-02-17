'use strict'

const morgan = require("morgan");
const express = require ("express");
const exphbs = require ("express-handlebars");
const userRouter = require("./routes/users.routes");
const indexRouter = require('./routes/index.routes')
const carRouter = require('./routes/cars.routes')

const app = express();

const port = 3000;
app.listen(port, console.log("Conectado a: http://localhost:3000/"));

app.engine('hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs'
    }));

app.set('view engine', 'hbs');

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(userRouter);
app.use(indexRouter);
app.use('/usedCars', carRouter);

module.export = app;