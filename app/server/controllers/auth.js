//Making controllers for Login
const { response} = require('express');


//Add user
const addUser = async(req, res = response) => {

    const {nombre, password, email} = req.body;
    res.json({
        ok: true,
        msg: 'new',
        nombre,
        password,
        email
    });
};

//Login User
const loginUser = async(req, res) => {


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