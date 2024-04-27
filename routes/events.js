const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// GET all events
router.get('/', eventsController.getAllEvents);

// GET single event by ID
router.get('/:id', eventsController.getEventById);

// POST create a new event
router.post('/', eventsController.createEvent);

// PUT update an event
router.put('/:id', eventsController.updateEvent);

// DELETE delete an event
router.delete('/:id', eventsController.deleteEvent);

module.exports = router;
