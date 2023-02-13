const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    description: String,
    duration: Number,
    date: String,
    count: Number,
    log: [{
        description: String,
        duration: Number,
        date: String
    }]
})

module.exports = mongoose.model('User', userSchema)

