const express = require ("express"); 
const exphbs = require ("express-handlebars"); 
const app = express(); 
const morgan = require ("morgan");

require("./connection");

app.engine("hbs",exphbs({
    partialsDir:__dirname+"/views/partials", 
    layoutsDir: __dirname+"/views/layouts",
    extname: "hbs" 
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");
app.use(morgan("dev")); 
app.use("/newCars",require ("./routers_2_VentaCocheNuevo/indexRouter"));
app.use("/newCars",require ("./routers_2_VentaCocheNuevo/carRouter"));
app.use("/newCars",require("./routers_2_VentaCocheNuevo/transactionRouter"))
app.use(express.static("public"));
app.listen(3000);


