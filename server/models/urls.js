const { Schema, default: mongoose } = require("mongoose");

const urlSchema = new Schema(
    {
        url: {
            type: Schema.Types.String,
            required: true,
        },
        host: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        shortUrl: {
            type: Schema.Types.ObjectId,
            ref: "short_urls",
            required: true,
        },
    },
    {
        timestamps: true,
        getters: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("urls", urlSchema);
