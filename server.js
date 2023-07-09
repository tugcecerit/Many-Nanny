require("dotenv").config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const Profile = require('./models/sitters.js')
const profilesController = require('./controllers/sitters.js')
const session = require('express-session')
const usersController = require('./controllers/users.js')

const SESSION_SECRET = process.env.SESSION_SECRET
console.log('Here is the session secret')
console.log(SESSION_SECRET)
app.use(session({
    secret: SESSION_SECRET, 
    resave: false,
    saveUninitialized: false
}))

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs');
app.use('/', profilesController)
app.use('/users', usersController)

const MONGODB_URI = process.env.MONGODB_URI
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: false,
});


const db = mongoose.connection
db.on('error', (error) => console.log(error.message + 'is Mongo not running'))
db.on('connected', () => console.log('MONGO is connected and running'))
db.on('disconnected', () => console.log('MONGO is disconnected'))

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})