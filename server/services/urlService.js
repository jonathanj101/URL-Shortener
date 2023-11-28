const urlModel = require("../models/urls");
const shortUrlModel = require("../models/shortUrls");

const urlService = {};

urlService.createUrl = (data) => {
    return urlModel.create(data);
};

urlService.deleteUrls = (ids) => {
    return urlModel.deleteMany({ _id: { $in: ids } });
};

urlService.getUrlById = (id) => {
    return urlModel.findOne({
        _id: id,
    });
};

module.exports = urlService;
