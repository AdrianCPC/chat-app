//Import JWT
const jwt = require('jsonwebtoken');

//Create JWT 
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload, process.env.JWT, {expiresIn: '24h'}, (err, token) => {
            if (err) {
                console.log(err);
                reject('JWT no generado');
            } else {
                resolve(token);
            }
        });
    });
}

const checkJWT = (token = '') => {
    try {
        const {uid} = jwt.verify(token, process.env.JWT);
        return [true, uid]
    } catch(error) {
        return [false, null];
    }
}

module.exports = {generateJWT, checkJWT};