const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    songID: {
        type: String,
        required: [true, "Song is required."],
    },
    category: {
        type: String,
        required: [true, "Categorty is required."],
    }
}, {timestamps: true})

module.exports.Song = mongoose.model('Song', SongSchema)
