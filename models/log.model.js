const mongoose = require('mongoose')


const logSchema = new mongoose.Schema({
    username: { type: String },
    count: Number,
    log: [{
        description: String,
        duration: Number,
        date: String
    }]
})

module.exports = mongoose.model('Log', logSchema)

