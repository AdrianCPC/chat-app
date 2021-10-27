//Import message
const Message = require('../models/message');

//Adding new endpoint for catch messages
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
        messages: last30
    })
}


module.exports = {obtainChat};