const mongoose = require('mongoose');

const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    state: {
        type: String,
        required: [true, 'Please enter a name']
    },
    city: {
        type: String,
        required: [true, 'Please enter a name']
    }
})


const User = mongoose.model('knockone-assign', userSchema);
module.exports = User;