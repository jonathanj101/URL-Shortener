require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./config/app");

const port = +process.env.PORT || 8000;

// app.get("/", (req, res) => {
//     console.log("server works!");
//     return res.status(200).json({
//         msg: "Hello world",
//     });
// });

// if db connection fails, don't listen to upcoming requests. Don't start server
mongoose.connection.once("open", () => {
    const server = http.createServer(app);
    server.listen(8001, () => {
        console.log(`Server Listening on port ${port}`);
    });
});
