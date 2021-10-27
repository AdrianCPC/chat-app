

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            //Check JWT
            //Token no valid, desconnect
            //User active by UID
            //Display all user connects
            //Socket join for room specially
            //Listen client message to personal
            //Disconnect user to BD
            // Escuchar evento: mensaje-to-server

            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            });
            
        
        });
    }


}


module.exports = Sockets;