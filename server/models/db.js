require("dotenv").config();
const mongoose = require("mongoose");

// mongo db connectionstring
let connectionString = "mongodb://";

if (process.env.DBUSER) {
    connectionString += `${process.env.DBUSER}:${process.env.DBPASSWORD}@`;
}
connectionString += `${process.env.DBHOST}:27017/${process.env.DATABASE}`;

mongoose.set("strictQuery", true);
const db = async () => {
    try {
        console.log("DB connected Succesfully");
        await mongoose.connect(connectionString);
    } catch (error) {
        console.log("Error at db connection", error.message);
    }
};

module.exports = db;
