const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videos = new Schema
({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: Object,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    comments: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Videos', videos)