require("dotenv").config();
const http = require("http");
const app = require("./config/app");

const db = require("./models/db.js");

db();

const port = +process.env.PORT || 8000;

app.get("/", (req, res) => {
    console.log("server works!");
    return res.status(200).json({
        msg: "Hello world",
    });
});

const server = http.createServer(app);
server.listen(8001, () => {
    console.log("Express server working!");
});
