//Making controllers for Login
const { response} = require('express');
//Imports models user
const User = require('../models/user');



//Add user
const addUser = async(req, res = response) => {

    try {
        const {email, password} = req.body;
        //Check email doesn't exist
        const presentEmail = await User.findOne({email});
        if (presentEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }

        // Encrypt password

        //Save user in BD
        const user = new User(req.body);
        await user.save();

        res.json({
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        });
    }
    // const {nombre, password, email} = req.body;
    // res.json({
    //     ok: true,
    //     msg: 'new',
    //     nombre,
    //     password,
    //     email
    // });
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