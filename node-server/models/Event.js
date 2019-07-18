const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    category: String,
    startDate: Date,
    endDate: Date,
    startTime: Date,
    endTime: Date,
    location: String,
    allowRegistration: Boolean,
    imagePath: String,
    adultPrice: Number,
    childPrice: Number
});

module.exports = new mongoose.model('Event', eventSchema);
