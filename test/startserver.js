/**
 * Created by Rick on 2021-11-14.
 */
'use strict';
const HttpServer = require('./nodehttpserver');
const path = require('path');

const httpServer = new HttpServer('127.0.0.1',8181);
//const httpServer = new HttpServer();
// set a static directory for hosting .js, .css, .jpeg, .png and etc.
httpServer.static(path.join(__dirname, 'public'));

// start the server listening from the local host at port 8080
httpServer.listen('Test');