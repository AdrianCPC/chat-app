//Import message
const Message = require('../models/message');

const obtainChat = async(req, res) =>{
    const myID = req.uid;
    const messagesDe = req.params.de;

    const last30 = await Message.find({
        $or:[
            {de: myID, para: messagesDe},
            {de: messagesDe, para: myID},
        ]
    })
    .sort({ createdAt: 'desc'})
    .limit(30);

    res.json({
        ok:true,
        myID,
        msg: last30
    })
}


module.exports = {obtainChat};