//Defining auth
const {Router} = require('express');


const router = Router();

//Creating endpoints new users
router.post('/new', (req, res) => {
    res.json({
        ok: true,
        msg: 'new'
    });
});

//Creating Login
router.post('/', (req, res) => {
    res.json({
        ok:true,
        msg: 'login'
    });
});

//Revalidate token
router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
});







module.exports = router;