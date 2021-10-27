const {checkJWT} = require('../helpers/jwt');
const {userConnect, userDisconnect} = require('../controllers/sockets')

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async ( socket ) => {

            const [valid, uid] = checkJWT(socket.handshake.query['h-token'] );

            if (!valid) {
                console.log('socket no identificado')
                return socket.disconnect();
            }
            await userConnect(uid);
            //Check JWT
            //Token no valid, desconnect
            //User active by UID
            //Display all user connects
            //Socket join for room specially
            //Listen client message to personal
            //Disconnect user to BD
            // Escuchar evento: mensaje-to-server

            socket.on('disconnect', async() => {
                await userDisconnect(uid);
                // console.log( data );
                
                // this.io.emit('mensaje-from-server', data );
            });
            
        
        });
    }


}


module.exports = Sockets;