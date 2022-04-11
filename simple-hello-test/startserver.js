/**
 * Created by Rick on 2021-11-14.
 */
const server = require('nodehttpserver');
const path = require('path');

//const httpServer = new server.HttpServer('127.0.0.1',8181);
const httpServer = new server.HttpServer();
// set a static directory for hosting .js, .css, .jpeg, .png and etc.
httpServer.static(path.join(__dirname, 'public'));

// start the server listening from the local host at port 8080
// Client should enter: localhost:8080/HelloWorld.html
httpServer.listen('Test');