const routes = require("express").Router();
// express validators
const { validationResult } = require("express-validator");

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
        return next;
    },
];

routes.get("/add-url", addURLMiddleware);

module.exports = routes;
