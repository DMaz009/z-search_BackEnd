const express = require('express')
const app = express()
require('dotenv').config()
const mongoose =require('mongoose')
const cors = require('cors')
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
// const request = require('request')
// const Study = require('.models/studiesModel')

// Setup CORS Middleware
const allowedList = ['http://localhost:3000', 'http://localhost:3003']
const corsOptions = {
  origin: (origin, callback) => {
    if(allowedList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials:true
}

app.use(cors(corsOptions))

app.set('trust proxy', 1)

//Setup DB connection
const db = mongoose.connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('DB is connected');
})

//Listeners to monitor datbase
db.on('error', (error) => { console.log('ERROR: ', error)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

//Telling server to parse the JSON data and create the req.body object
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('HomePage')
})

app.use('/studies', require('./controllers/studiesController'))

app.listen(PORT, () => {
  console.log('Zurch backend on port: ', PORT);
})
//
