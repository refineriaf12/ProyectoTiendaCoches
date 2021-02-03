  'use strict'
  const express= require('express');
  const app = express();
  const handlebars = require('express-handlebars');
  const morgan = require('morgan')
  const port = 8000;
  
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
  
  app.get("/", (req, res) => {
    res.render("templates/home", {layout: "main"});
  });
  
  
  app.use(express.static("public"));
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());
    
  
  
  app.listen(port, () => console.log(`Leyendo el puerto ${port}`));


