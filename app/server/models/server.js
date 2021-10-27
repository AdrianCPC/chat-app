// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors = require('cors');

const Sockets  = require('./sockets');
const {dbConnection}= require('../database/config');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        //Connection to database
        dbConnection();

        // Http server
        this.server = http.createServer( this.app );

        // Config sockets
        this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Deploy public directory
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

        //Cors connection
        this.app.use( cors());

        //Reading body with parsing
        this.app.use(express.json());

        //Endpoints from routes(API)
        this.app.use('/api/login', require('../router/auth') );
        this.app.use('/api/messages', require('../router/messages') );
    }

    //Config sockets new
    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        // Init Middlewares
        this.middlewares();

        // Init sockets
        this.configurarSockets();

        // Init Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


module.exports = Server;