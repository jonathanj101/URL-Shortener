const { Schema, default: mongoose } = require("mongoose");

const shortUrlSchema = new Schema(
    {
        shortUrl: {
            type: Schema.Types.String,
            required: true,
        },
        host: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "users",
        },
    },
    {
        timestamps: true,
        getters: true,
        versionKey: false,
    }
);
