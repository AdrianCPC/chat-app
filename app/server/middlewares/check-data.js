//Validate data
const { validationResult } = require('express-validator');

const checkData = (req, res, next) => {
    //Errors validation
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }
    next();
}


module.exports = { checkData};