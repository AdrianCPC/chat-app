//Path: api/messages
const {Router} = require('express');
const {obtainChat} = require('../controllers/messages');
const {validJWT} = require('../middlewares/valid-jwt');

const router = Router();


//Get
router.get('/:de', validJWT, obtainChat);


module.exports = router;