const express = require('express');

const authRoutes = require('./auth_routes');
const eventRoutes = require('./event_routes');
const bookingRoutes = require('./booking_routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/events', eventRoutes);
router.use('/bookings', bookingRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = router;