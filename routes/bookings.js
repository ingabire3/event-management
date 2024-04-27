const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

// GET all bookings
router.get('/', bookingsController.getAllBookings);

// GET bookings by user ID
router.get('/user/:userId', bookingsController.getBookingsByUserId);

// POST create a new booking
router.post('/', bookingsController.createBooking);

// PUT update a booking
router.put('/:id', bookingsController.updateBooking);

// DELETE delete a booking
router.delete('/:id', bookingsController.deleteBooking);

module.exports = router;
