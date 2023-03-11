require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Profile = require('./models/sitters.js')
const profilesController = require('./controllers/sitters.js')
const PORT = process.env.PORT || 3000
const mongoURI = 'mongodb://localhost:27017/sitters'
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/home', profilesController)

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.log(error.message + 'is Mongo not running'))
db.on('connected', () => console.log('MONGO is connected and running'))
db.on('disconnected', () => console.log('MONGO is disconnected'))

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})