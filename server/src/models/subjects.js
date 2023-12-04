const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const subjects = new Schema
({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Subjects', subjects)