const mongoose = require("mongoose")
const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
})

module.exports = mongoose.model("Album", albumSchema)