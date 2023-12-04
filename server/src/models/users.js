const mongoose = require("mongoose")

const Schema = mongoose.Schema

const users = new Schema
({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: false
    },
    profile_picture: {
        type: String,
        required: false
    },
    config: {
        type: Object,
        required: true
    },
    classes_id: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Users', users)