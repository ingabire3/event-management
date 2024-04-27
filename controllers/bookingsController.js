// Import the Booking model
const Booking = require('../models/booking');

// Controller functions
module.exports = {
    getAllBookings: async (req, res) => {
        try {
            const bookings = await Booking.find();
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getBookingsByUserId: async (req, res) => {
        try {
            const bookings = await Booking.find({ user_id: req.params.userId });
            res.json(bookings);
        } catch (error) {
            res.status(404).json({ message: 'Bookings not found' });
        }
    },

    createBooking: async (req, res) => {
        const booking = new Booking(req.body);
        try {
            const newBooking = await booking.save();
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateBooking: async (req, res) => {
        try {
            const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedBooking);
        } catch (error) {
            res.status(404).json({ message: 'Booking not found' });
        }
    },

    deleteBooking: async (req, res) => {
        try {
            await Booking.findByIdAndDelete(req.params.id);
            res.json({ message: 'Booking deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: 'Booking not found' });
        }
    }
};
