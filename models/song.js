const mongoose = require("mongoose")
const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    album: {
        type: String,
    },
})

module.exports = mongoose.model("Song", songSchema)