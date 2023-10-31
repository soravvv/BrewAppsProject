const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        active: {
            type: Number,
            default: 1
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);