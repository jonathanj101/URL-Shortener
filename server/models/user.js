const { Schema, Types, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    lastName: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    urls: {
        required: false,
        type: [
            {
                shortUrlId: {
                    type: Schema.Types.ObjectId,
                    ref: "short_urls",
                },
            },
        ],
    },
});

module.exports = mongoose.model("users", userSchema);
