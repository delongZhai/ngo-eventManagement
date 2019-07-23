const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    category: String,
<<<<<<< HEAD
    startDate: String,
    endDate: String,
=======
    startdate: String,
    enddate: String,
    starttime: String,
    endtime: String,
>>>>>>> f22c5592552dabaa87d9ffa111b06a090231363a
    location: String,
    allowRegister: Boolean,
    imageUrl: String,
    adultPrice: Number,
    childPrice: Number
});

module.exports = new mongoose.model('Event', eventSchema);
