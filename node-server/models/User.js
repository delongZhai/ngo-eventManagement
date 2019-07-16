const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contactNum: String,
    address: String,
    adminRole: Boolean
    // true if admin, false if regular
});

module.exports = mongoose.model('User', userSchema);