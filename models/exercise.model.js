const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
    username: { type: String },
    description: String,
    duration: Number,
    date: String
})

module.exports = mongoose.model('User', exerciseSchema)

