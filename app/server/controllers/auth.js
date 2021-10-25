//Making controllers for Login
const { response} = require('express');
const { validationResult } = require('express-validator');


//Add user
const addUser = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'new'
    });
};

//Login User
const loginUser = async(req, res) => {
    //Errors validation
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

    const {email, password} = req.body;
    res.json({
        ok:true,
        msg: 'login',
        email,
        password
    });
};


//Renew token
const renewToken = async(req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
};


module.exports = {addUser, loginUser, renewToken};