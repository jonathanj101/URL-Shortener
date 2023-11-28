const shortUrlModel = require("../models/shortUrls");

const shortUrlService = {};

shortUrlService.createShortUrl = (data) => {
    return shortUrlModel.create(data);
};

shortUrlService.deleteUrls = (ids) => {
    return shortUrlModel.deleteMany({ _id: { $in: ids } });
};

shortUrlService.getShortUrlById = (id) => {
    return shortUrlModel.findOne({
        _id: id,
    });
};

module.exports = shortUrlService;
