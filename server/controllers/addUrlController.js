const {
    Types: { ObjectId },
} = require("mongoose");

const addURLController = {};

addURLController.addURL = async (req, res) => {
    console.log("addURLController.addURL()");
    try {
        const { userId, data } = req.body;
        const mongoose_id = ObjectId(userId);
        const addUrl = await addURlService.saveURL(mongoose_id, data);
        return res.status(201).json({
            data: { addUrl },
            status: true,
        });
    } catch (error) {
        console.log("addURLController.addURL()", error.message);
        return res.status(422).json({
            msg: error.message,
            status: false,
        });
    }
};

module.exports = addURLController;
