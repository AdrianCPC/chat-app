//Import jsonwebtoken
const jwt = require('jsonwebtoken');


const validJWT = (req, res, next) => {
    try {
        const token = req.header('h-token');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No hay token en la peticion'
            });
        }

        //Check token
        const payload = jwt.verify(token, process.env.JWT);
         req.uid = payload;
         next();


    } catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }
}



module.exports = {validJWT};