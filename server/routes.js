const routes = require("express").Router();
const userController = require("./controllers/userController");
// express validators
const { validationResult } = require("express-validator");

// user routes

const userRigesterMiddleware = [
    (req, res, next) => {
        console.log(validationResult(req));
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json({
                error: error.array()[0],
            });
        }
        return next();
    },
    userController.register,
];

routes.post("/user/register", userRigesterMiddleware);

const userLoginMiddleware = [
    (req, res, next) => {
        console.log(validationResult(req));
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json({
                error: error.array()[0],
            });
        }
        return next();
    },
    userController.login,
];

routes.post("/user/login", userLoginMiddleware);

module.exports = routes;
