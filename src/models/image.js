const { Schema, model } = require("mongoose");

const Image = Schema(
    {
        id: Number,
        img: {
            data: Buffer,
            contentType: String,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = model("Image", Image);
