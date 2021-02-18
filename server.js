const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(require('./routes/user.route'));
app.use(require('./routes/Car.routes'));

app.set('view engine', 'hbs');


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));



module.exports = app;