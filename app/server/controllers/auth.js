//Making controllers for Login
const { response} = require('express');


//Add user
const addUser = async(req, res = response) => {
    res.json({
        ok: true,
        msg: 'new'
    });
};

//Login User
const loginUser = async(req, res) => {
    res.json({
        ok:true,
        msg: 'login'
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