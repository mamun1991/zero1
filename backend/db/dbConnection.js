const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log("connected to db");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = dbConnection;
