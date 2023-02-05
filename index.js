const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
require('dotenv').config()



app.use(multer().none())
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post("/api/users", (req, res) => {
  console.log(req.body.name);
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
