//Defining auth
const {Router} = require('express');


const router = Router();

//Creating endpoints
router.post('/new', (req, res) => {
    res.json({
        ok: true,
        usuario: 'ABC'
    });
});







module.exports = router;