const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide name'],
        match: [/^[a-zA-Z0-9]*$/, 'Username field accepts only alpha-numeric values only'],
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Please provide emial'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'The password must be at least 8 characters long and contain at least 1 number, 1 uppercase and 1 lowercase character'],
        minlength: 8,
        maxlength: 20
    }
})

module.exports = mongoose.model('User', UserSchema)