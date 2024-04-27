// Import the Event model
const Event = require('../models/event');

// Controller functions
module.exports = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find();
            res.json(events);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getEventById: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id);
            res.json(event);
        } catch (error) {
            res.status(404).json({ message: 'Event not found' });
        }
    },

    createEvent: async (req, res) => {
        const event = new Event(req.body);
        try {
            const newEvent = await event.save();
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedEvent);
        } catch (error) {
            res.status(404).json({ message: 'Event not found' });
        }
    },

    deleteEvent: async (req, res) => {
        try {
            await Event.findByIdAndDelete(req.params.id);
            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: 'Event not found' });
        }
    }
};
