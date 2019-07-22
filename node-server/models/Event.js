const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    category: String,
    startdate: String,
    enddate: String,
    location: String,
    allowRegistration: Boolean,
    imagePath: String,
    adultprice: Number,
    childprice: Number
});

module.exports = new mongoose.model('Event', eventSchema);
