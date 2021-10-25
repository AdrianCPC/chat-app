//Connection config
const mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database is online");
    } catch (error) {
        console.log(error);
        throw new Error("Error en base de datos");
    }
};

module.exports = {
    dbConnection,
};
