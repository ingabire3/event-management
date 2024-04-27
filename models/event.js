const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    tickets_available: {
        type: Number,
        required: true
    }
    // Add other event attributes as needed
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
