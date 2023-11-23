const { genSaltSync, hashSync, compareSync } = require("bcrypt");

const utils = {};

utils.encryptPassowrd = (password) => {
    const salt = genSaltSync(+process.env.SALT_ROUNDS);
    const hash = hashSync(password, salt);
    return hash;
};

utils.checkPassword = (password, hashedPassword) => {
    return compareSync(password, hashedPassword);
};

module.exports = utils;
