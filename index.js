  'use strict'
  require('dotenv').config();
  const express= require('express');
  const app = express();
  const handlebars = require('express-handlebars');
  const morgan = require('morgan')
  const passport = require('passport')
  const methodOverride = require('method-override');
  const port = 8000;

// Acceso jaime
  
  require('./database');
  require('./config/passport');

  
  app.engine(
      "hbs",
      handlebars({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs"
      })
    );
  
  app.set('view engine', 'hbs');
  


  
  app.use(morgan('dev'));
  app.use(express.static("public"));
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(methodOverride('_method'));

  app.use(require("./routes/index"));
  app.use(require('./routes/user/userRouter'));
  //rutas used cars
  app.use('/usedCars', require('./routes/usedCars/carRouter'));
  app.use('/membership', require('./routes/usedCars/membershipRouter'))
  //qa
  app.use(require('./routes/quality/questionRouter'));
  app.use(require('./routes/quality/emailRouter'));
  //leasing
  app.use(require('./routes/leasing/carRouter'));
  app.use(require('./routes/leasing/rentRouter'));
  //ventas
  app.use("/newCars",require ("./routes/carSale/indexRouter"));
  app.use("/newCars",require ("./routes/carSale/carRouter"));
  app.use("/newCars",require("./routes/carSale/transactionRouter"))


  
  app.listen(port, () => console.log(`Leyendo el puerto ${port}`));


