const userModel = require("../models/user");

const userService = {};

userService.register = (data) => {
    console.log("userService.register()");
    return userModel.create(data);
};

userService.getUser = (where) => {
    return userModel.findOne(where);
};

module.exports = userService;
