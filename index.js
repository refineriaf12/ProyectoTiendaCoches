'use strict'
const port = 8000;
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const express= require('express');
const app = express();

require('./database');

app.engine(
    "hbs",
    handlebars({
      layoutsDir: __dirname + "/views/layouts",
      extname: "hbs",
      partialsDir: __dirname + "/views/partials",
    })
  );

  app.use(express.static("public"));

  app.listen(port, () => console.log(`Leyendo el puerto ${port}`));





