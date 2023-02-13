const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const userRoutes = require('./Routes/user.route')
require('dotenv').config()
require('./db/connect')


const upload = multer()
app.use(upload.none())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
