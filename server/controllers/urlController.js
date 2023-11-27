const {
    Types: { ObjectId },
} = require("mongoose");

const urlService = require("../services/urlService");
const shortUrlService = require("../services/shortUrlService");

const urlController = {};

urlController.addURL = async (req, res) => {
    console.log("urlController.addURL()");
    try {
        const { userId, url } = req.body;
        // url.shortUrl;
        const mongoose_id = ObjectId(userId);
        const obj = {
            host: mongoose_id,
            url: url,
        };
        const urlCreated = await urlService.createUrl(obj);
        return res.status(201).json({
            data: { urlCreated },
            status: true,
        });
    } catch (error) {
        console.log("urlController.addURL()", error.message);
        return res.status(422).json({
            error: error.message,
            status: false,
        });
    }
};

urlController.deleteUrls = async (req, res) => {
    console.log("urlController.deleteUrls()");
    try {
        const { data } = req.body;
        let selectedUrlIds = [];
        let shortUrlsIds = [];

        data.forEach((el) => {
            ObjectId(el._id);
            selectedUrlIds.push(el);
        });
        data.forEach((el) => {
            el.shortUrls.forEach((shortUrl) => {
                ObjectId(shortUrl._id);
                shortUrlsIds.push(shortUrl._id);
            });
        });
        if (shortUrlsIds.length > 0) {
            const deletedUrls = await urlService.deleteUrls(selectedUrlIds);
            const deletedShortUrls = await shortUrlService.deleteShortUrls();
            if (deletedUrls && deletedShortUrls) {
                return res.status(201).json({
                    msg: "Successfully deleted urls!",
                    status: false,
                });
            }
        }
    } catch (error) {
        console.log("urlController.deleteUrls()", error.message);
        return res.status(422).json({
            error: "Something went wrong on our end! Please try again later!",
            status: false,
        });
    }
};

module.exports = urlController;
