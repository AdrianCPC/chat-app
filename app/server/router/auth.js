//Defining auth api/login
const {Router} = require('express');
//Validator 
const {check} = require('express-validator');
//Controllers import
const {addUser, loginUser, renewToken} = require('../controllers/auth');


const router = Router();

//Creating endpoints new users
router.post('/new', addUser);

//Creating Login
router.post('/',[check('email', 'El email es obligatorio').isEmail(),
 check('password', 'El password es obligatorio').not().isEmpty()] ,loginUser);

//Renew token
router.get('/renew', renewToken);







module.exports = router;