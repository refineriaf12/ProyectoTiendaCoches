  'use strict'
  const express= require('express');
  const app = express();
  const handlebars = require('express-handlebars');
  const morgan = require('morgan')
  const port = 8000;

  //llamada a rutas usedCars
  const usedCarRouter = require('./routes/usedCars/car.routes')

  
  require('./database');
  
  app.engine(
      "hbs",
      handlebars({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs"
      })
    );
  
  app.set('view engine', 'hbs');
  


  
  app.use(express.static("public"));
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());
  app.use(require("./routes/index"))
  //rutas used cars
  app.use('/usedCars', usedCarRouter);
  //qa
  app.use(require('./routes/quality/questionRoute'));
  app.use(require('./routes/quality/emailRoute'));




  
  app.listen(port, () => console.log(`Leyendo el puerto ${port}`));


