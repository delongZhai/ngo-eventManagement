const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    category: String,
    startdate: String,
    enddate: String,
    starttime: String,
    endtime: String,
    location: String,
    allowRegister: Boolean,
    imageUrl: String,
    adultPrice: Number,
    childPrice: Number
});

module.exports = new mongoose.model('Event', eventSchema);
