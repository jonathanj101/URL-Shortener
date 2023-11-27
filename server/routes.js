const routes = require("express").Router();
const userController = require("./controllers/userController");
const urlController = require("./controllers/urlController");
// express validators
const { validationResult } = require("express-validator");

// // url routes

const addURLMiddleware = [
    (req, res, next) => {
        console.log(validationResult(req));
        const error = validationResult(req);
        console.log(error, error.array());
        if (!error.isEmpty()) {
            return res.status(422).json({
                error: error.array()[0],
            });
        }
        return next();
    },
    urlController.addURL,
];

routes.post("/url/add-url", addURLMiddleware);

const deleteUrlsMiddleware = [
    (req, res, next) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json({
                error: error.array()[0],
            });
        }
        return next;
    },
    urlController.deleteUrls,
];

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
