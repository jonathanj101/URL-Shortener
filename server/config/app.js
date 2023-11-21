// app configurations goes here
require("dotenv").config();

// modules

const express = require("express");

const bodyParser = require("body-parser"); // parsing incoming requests

// initialize express server
const app = express();

// setting up headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    next();
});

// telling express to use bodyParser module to parse incoming requests
app.use(bodyParser.json());

// pointing express to routes, where endpoint would be set up to point to appropiate API
app.use(require("../routes"));

app.all("/*", (req, res) => {
    console.log("INVALID_REQUEST");
    return res.status(404).json({
        error: { msg: "INVALID_REQUEST" },
        status: false,
    });
});

module.exports = app;
