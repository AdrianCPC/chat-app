//Defining auth api/login
const {Router} = require('express');
//Validator 
const {check} = require('express-validator');
//Controllers import
const {addUser, loginUser, renewToken} = require('../controllers/auth');
const { checkData } = require('../middlewares/check-data');
const { validJWT } = require('../middlewares/valid-jwt');


const router = Router();

//Creating endpoints new users
router.post('/new', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail() ,checkData],addUser);

//Creating Login
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(), checkData] ,loginUser);

//Renew token
router.get('/renew',validJWT,renewToken);



module.exports = router;