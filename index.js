'use strict';

const app = require('./server');

require('./conexion');

const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});

module.exports = server;





