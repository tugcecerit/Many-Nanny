const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    location: {type: String, required: true},
    education: {type: String, required: true},
    experience: {type: Number, required: true},
    desiredSalary: {type: Number, required: true},
    haveCar: {type: Boolean, default: false},
    aboutYourself: String,
    phoneNumber: {type: Number, required: true, unique: true},
    email: {type: String, required: true, lowercase: true, unique: true}
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile