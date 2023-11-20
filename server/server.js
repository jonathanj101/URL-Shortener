require("dotenv").config();

const express = require("express");

const server = express();

server.use("/", (req, res) => {
    console.log("server works!");
    return res.status(200).json({
        msg: "Hello world",
    });
});

server.listen(8001, () => {
    console.log("Express server working!");
});
