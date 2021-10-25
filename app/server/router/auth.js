//Defining auth api/login
const {Router} = require('express');
//Controllers import
const {addUser, loginUser, renewToken} = require('../controllers/auth');


const router = Router();

//Creating endpoints new users
router.post('/new', addUser);

//Creating Login
router.post('/', loginUser);

//Renew token
router.get('/renew', renewToken);







module.exports = router;