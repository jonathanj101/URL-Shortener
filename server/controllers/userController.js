const userService = require("../services/userService");
const utils = require("../helpers/utils");

const userController = {};

userController.register = async (req, res) => {
    console.log("userController.register()");
    try {
        let { data } = req.body;

        // encrypt password
        data.password = utils.encryptPassowrd(data.password);
        const user = await userService.register(data);
        delete user.password;
        return res.status(201).json({
            data: { user },
            msg: "Successfully registered user",
            status: true,
        });
    } catch (error) {
        console.log("userController.register()", error.message);
        return res.status(422).json({
            error: "Something went worng on our end! Try agaun later",
            status: false,
        });
    }
};

userController.login = async (req, res) => {
    console.log("userController.login()");
    try {
        const { data } = req.body;
        const user = await userService.getUser({ username: data.username });
        if (user) {
            const authenticate = utils.checkPassword(data.password, user.password);
            if (authenticate) {
                delete user.password;
                return res.status(201).json({
                    data: { user },
                    msg: "Successful login",
                    status: true,
                });
            }
        } else {
            return res.status(402).json({
                msg: "username and/or password not valid!",
                status: false,
            });
        }
    } catch (error) {
        console.log("userController.login()", error.message);
        return res.status(422).json({
            error: "Something went worng on our end! Try again later",
            status: false,
        });
    }
};

module.exports = userController;
