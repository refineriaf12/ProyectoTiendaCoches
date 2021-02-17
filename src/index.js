'use strict'

const app = require('./server');

require('./database');

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port')) 
});

//Almacenamos la conexión a la bbdd en una const, para poder exportarla y usarla en el testing
module.exports = server;
