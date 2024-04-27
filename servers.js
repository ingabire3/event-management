const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Import connectDB function from db.js
const connectDB = require('./config/db');

// Call connectDB function to establish database connection
connectDB();


// Routes
const eventsRoutes = require('./routes/events');
const bookingsRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');

app.use('/api/events', eventsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
