const mongoose = require('mongoose')
const url = process.env.Mongo_URI


mongoose.set('strictQuery', false)
mongoose
    .connect(url)
    .then(() => console.log('Connected succefully'))
    .catch(err => console.log(err))


