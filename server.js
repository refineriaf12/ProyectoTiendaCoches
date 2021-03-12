require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 4000);

require('./helpers/helpersHandlebars');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(methodOverride('_method'));

app.use(require('./routes/leasing/carRouter'));
app.use(require('./routes/leasing/rentRouter'));

app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));

module.exports = app;